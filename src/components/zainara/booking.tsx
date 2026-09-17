"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Calendar, Loader2, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { t, services } from "@/lib/content";
import { Branch, GoldDivider, SectionLabel } from "./decorations";

const WHATSAPP_NUMBER = "4915773435692";

export function Booking() {
  const b = t.booking;
  const searchParams = useSearchParams();
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  // Prefill service from ?service= query (used by Services page)
  useEffect(() => {
    const q = searchParams.get("service");
    if (q) {
      // try to match the category name to a full service option
      const match = allServices.find((s) => s.toLowerCase().startsWith(q.toLowerCase()));
      setService(match ?? q);
    }
  }, [searchParams]);

  const allServices = services.flatMap((c) =>
    c.items.map((it) => `${c.title} — ${it.name} (${it.price})`)
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone || !service) return;
    setState("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, date, time, message }),
      });
      if (!res.ok) throw new Error("request failed");
      setState("success");
    } catch {
      setState("error");
    }
  }

  const waText = encodeURIComponent(
    `${b.title}\n\n` +
      `${b.name}: ${name || "-"}\n` +
      `${b.phone}: ${phone || "-"}\n` +
      `${b.service}: ${service || "-"}\n` +
      `${b.date}: ${date || "-"}\n` +
      `${b.time}: ${time || "-"}\n` +
      (message ? `${b.message}: ${message}` : "")
  );
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  return (
    <section
      id="booking"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(253,251,247,0.92), rgba(253,251,247,0.92)), url('/images/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Branch className="pointer-events-none absolute -top-4 left-0 h-40 w-40 opacity-30" />
      <Branch className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 opacity-30" flip />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>{b.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {b.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/70">
            {b.subtitle}
          </p>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-gold/30 bg-cream/95 p-6 shadow-2xl shadow-charcoal/10 backdrop-blur sm:p-8">
          {state === "success" ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle2 className="h-16 w-16 text-gold" />
              <p className="mt-4 max-w-md text-lg font-medium text-charcoal">{b.success}</p>
              <button
                onClick={() => {
                  setState("idle");
                  setName("");
                  setPhone("");
                  setEmail("");
                  setService("");
                  setDate("");
                  setTime("");
                  setMessage("");
                }}
                className="mt-6 text-sm font-semibold text-gold-dark hover:text-gold"
              >
                {b.again}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label={b.name} required>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={b.namePh}
                  className="zainara-input"
                />
              </Field>
              <Field label={b.phone} required>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={b.phonePh}
                  className="zainara-input"
                  dir="ltr"
                />
              </Field>
              <Field label={b.email}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={b.emailPh}
                  className="zainara-input"
                  dir="ltr"
                />
              </Field>
              <Field label={b.service} required>
                <select
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="zainara-input"
                >
                  <option value="">{b.servicePh}</option>
                  {allServices.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={b.date}>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="zainara-input"
                  dir="ltr"
                />
              </Field>
              <Field label={b.time}>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="zainara-input"
                  dir="ltr"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label={b.message}>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={b.messagePh}
                    rows={3}
                    className="zainara-input resize-none"
                  />
                </Field>
              </div>

              {state === "error" && (
                <p className="sm:col-span-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  {b.error}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-gold/20 transition hover:shadow-xl hover:shadow-gold/30 disabled:opacity-60"
                >
                  {state === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {b.submit}
                </button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#25D366] bg-[#25D366]/8 px-6 py-3.5 text-sm font-semibold text-[#1a8c3d] transition hover:bg-[#25D366]/16"
                >
                  <MessageCircle className="h-4 w-4" />
                  {b.whatsapp}
                </a>
              </div>

              <p className="sm:col-span-2 flex items-center justify-center gap-1.5 text-center text-xs text-charcoal/50">
                <Calendar className="h-3 w-3" />
                Wir melden uns innerhalb von 24 Stunden zur Bestätigung.
              </p>

              <div className="sm:col-span-2 mt-2 text-center text-xs text-charcoal/50">
                Alternativ telefonisch unter{" "}
                <Link href="tel:+4915773435692" className="font-semibold text-gold-dark hover:text-gold" dir="ltr">
                  01577 3435692
                </Link>{" "}
                oder auf Instagram{" "}
                <Link
                  href="https://www.instagram.com/zainara-cosmetic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gold-dark hover:text-gold"
                >
                  @zainara-cosmetic
                </Link>
                .
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        :global(.zainara-input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--gold, #c5a059);
          background: rgba(253, 251, 247, 0.8);
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: #2c2a26;
          outline: none;
          transition: all 0.2s;
        }
        :global(.zainara-input:focus) {
          border-color: #a8843c;
          box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.2);
          background: #fff;
        }
        :global(.zainara-input::placeholder) {
          color: rgba(44, 42, 38, 0.4);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal/70">
        {label}
        {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
