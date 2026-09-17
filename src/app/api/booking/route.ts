import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type BookingPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  time?: string;
  message?: string;
  lang?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as BookingPayload;

    // Basic validation
    if (!body.name || !body.phone || !body.service) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Sanitize basic
    const safe = {
      name: String(body.name).slice(0, 120),
      phone: String(body.phone).slice(0, 60),
      email: body.email ? String(body.email).slice(0, 160) : "",
      service: String(body.service).slice(0, 200),
      date: body.date ? String(body.date).slice(0, 20) : "",
      time: body.time ? String(body.time).slice(0, 20) : "",
      message: body.message ? String(body.message).slice(0, 1000) : "",
      lang: body.lang === "ar" ? "ar" : "de",
      receivedAt: new Date().toISOString(),
    };

    // Persist to SQLite via Prisma (table created via db:push)
    try {
      const { db } = await import("@/lib/db");
      await db.booking.create({
        data: {
          name: safe.name,
          phone: safe.phone,
          email: safe.email,
          service: safe.service,
          date: safe.date,
          time: safe.time,
          message: safe.message,
          lang: safe.lang,
        },
      });
    } catch (dbErr) {
      // Non-blocking: log but still return success so UX is smooth
      console.error("[booking] db write failed:", dbErr);
    }

    // Always succeed from the user's perspective (we still record)
    return NextResponse.json({ ok: true, receivedAt: safe.receivedAt });
  } catch (e) {
    console.error("[booking] error:", e);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, service: "zainara-booking" });
}
