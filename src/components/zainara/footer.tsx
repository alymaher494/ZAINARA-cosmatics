"use client";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";
import { useT } from "./use-t";
import { Monogram, Branch } from "./decorations";

export function Footer() {
  const { t, lang } = useT();
  const f = t.footer;

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-teal text-cream">
      <Branch className="pointer-events-none absolute -top-6 right-0 h-40 w-40 opacity-10" flip />
      <Branch className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 opacity-10" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <Monogram className="h-12 w-12" />
              <div className="leading-none">
                <div className="font-serif text-xl font-bold tracking-[0.18em] text-gold-light">
                  ZAINARA
                </div>
                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.45em] text-cream/60">
                  {lang === "ar" ? "زينارة للتجميل" : "Cosmetics"}
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-cream/70">
              {f.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
              {f.quick}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {(["about", "services", "gallery", "location", "booking", "faq"] as const).map((id) => (
                <li key={id}>
                  <button
                    onClick={() => go(id)}
                    className="text-cream/75 transition hover:text-gold-light"
                  >
                    {t.nav[id as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
              {f.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <span className="text-cream/75">{f.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold-light" />
                <a href="tel:+4915773435692" className="text-cream/75 transition hover:text-gold-light" dir="ltr">
                  {f.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="h-4 w-4 shrink-0 text-gold-light" />
                <a
                  href="https://www.instagram.com/zainara-cosmetic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/75 transition hover:text-gold-light"
                >
                  {lang === "ar" ? "زينارة للتجميل" : "@zainara-cosmetic"}
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
                {f.follow}
              </h4>
              <a
                href="https://www.instagram.com/zainara-cosmetic"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-gold-light/40 px-4 py-2 text-xs font-medium text-cream/85 transition hover:border-gold-light hover:bg-gold-light/10"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-center sm:flex-row sm:text-left rtl:text-right">
          <p className="text-xs text-cream/55">
            © {year} Zainara Cosmetics. {f.rights}
          </p>
          <div className="flex items-center gap-4 text-xs text-cream/55">
            <span className="hover:text-gold-light cursor-pointer transition">{f.imprint}</span>
            <span className="text-cream/30">·</span>
            <span className="hover:text-gold-light cursor-pointer transition">{f.privacy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
