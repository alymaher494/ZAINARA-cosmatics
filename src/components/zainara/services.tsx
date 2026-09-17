"use client";
import { useState } from "react";
import {
  Sparkles,
  Droplet,
  Flower2,
  Waves,
  Brush,
  Leaf,
  ChevronRight,
} from "lucide-react";
import { useT } from "./use-t";
import { services } from "@/lib/content";
import { Branch, GoldDivider, SectionLabel } from "./decorations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Droplet,
  Flower2,
  Waves,
  Brush,
  Leaf,
};

export function Services() {
  const { t, lang } = useT();
  const s = t.services;
  const [active, setActive] = useState(0);
  const cat = services[active];
  const Icon = iconMap[cat.icon] ?? Sparkles;

  const goBooking = (item: string) => {
    const el = document.getElementById("booking");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    // prefill via custom event
    window.dispatchEvent(new CustomEvent("zainara:prefill", { detail: item }));
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-cream to-[#f7f2e6] py-20 sm:py-28"
    >
      <Branch className="pointer-events-none absolute top-10 right-0 h-44 w-44 opacity-20" flip />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>{s.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {s.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
            {s.subtitle}
          </p>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {services.map((c, i) => {
            const CIcon = iconMap[c.icon] ?? Sparkles;
            return (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                  active === i
                    ? "border-gold bg-gold-gradient text-cream shadow-md shadow-gold/20"
                    : "border-gold/30 bg-cream/60 text-charcoal hover:border-gold/60 hover:bg-cream"
                }`}
                aria-pressed={active === i}
              >
                <CIcon className="h-4 w-4" />
                <span>{c.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Active category panel */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image + info */}
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-[2rem] border border-gold/25" />
            <div className="overflow-hidden rounded-[2rem] border border-gold/30 shadow-xl shadow-charcoal/10">
              <img
                src={cat.image}
                alt={`${cat.title[lang]} – Zainara Cosmetics`}
                width={1024}
                height={1024}
                className="aspect-square h-full w-full object-cover"
                loading="lazy"
                key={cat.image}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-cream/90 px-3 py-1.5 text-xs font-semibold text-gold-dark backdrop-blur">
                  <Icon className="h-3.5 w-3.5" />
                  {c_titleShort(cat.title[lang])}
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/95">
                  {cat.desc[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* Price list */}
          <div className="flex flex-col">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-2xl font-bold text-charcoal sm:text-3xl">
                {cat.title[lang]}
              </h3>
              <span className="text-xs font-medium uppercase tracking-wider text-gold">
                {cat.items.length} {lang === "ar" ? "خدمة" : "Behandlungen"}
              </span>
            </div>
            <div className="divider-gold mt-3" />

            <ul className="scroll-elegant mt-4 max-h-[28rem] space-y-1 overflow-y-auto pr-1">
              {cat.items.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition hover:bg-gold/5"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium text-charcoal">
                        {item.name[lang]}
                      </span>
                    </div>
                    {item.note && (
                      <div className="mt-0.5 text-[11px] font-medium text-gold-dark/80">
                        {item.note[lang]}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-base font-bold text-gold-dark">
                      {item.price}
                    </span>
                    <button
                      onClick={() => goBooking(`${cat.title[lang]} — ${item.name[lang]}`)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold opacity-0 transition hover:bg-gold hover:text-cream group-hover:opacity-100 rtl:rotate-180"
                      aria-label={s.book}
                      title={s.book}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-2xl border border-gold/20 bg-cream/60 p-4 text-center">
              <p className="text-xs text-charcoal/60">
                {lang === "ar"
                  ? "الأسعار شاملة ضريبة القيمة المضافة. الاستشارة الأولية مجانية."
                  : "Preise inkl. MwSt. Erste Beratung kostenlos."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function c_titleShort(s: string) {
  return s.length > 28 ? s.slice(0, 28) + "…" : s;
}
