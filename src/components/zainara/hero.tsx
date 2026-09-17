"use client";
import { Calendar, Sparkles, ChevronRight, MapPin, Star } from "lucide-react";
import { useT } from "./use-t";
import { Branch, GoldDivider, SectionLabel } from "./decorations";

export function Hero() {
  const { t, lang } = useT();
  const h = t.hero;

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream-texture pt-24 pb-16 sm:pt-28 lg:pt-32"
    >
      {/* Decorative botanical */}
      <Branch
        className="pointer-events-none absolute -top-6 right-0 h-56 w-56 opacity-40 -z-0"
        flip
      />
      <Branch className="pointer-events-none absolute bottom-0 -left-10 h-44 w-44 opacity-30 -z-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Text column */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/70 px-4 py-1.5 text-xs font-semibold tracking-wider text-charcoal/80">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {h.badge}
          </span>

          <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            <span className="text-gold-gradient">{h.title1}</span>
            <br />
            <span className="text-charcoal">{h.title2}</span>
          </h1>

          <p className="mt-3 font-serif text-xl italic text-gold-dark sm:text-2xl">
            {h.tagline}
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-charcoal/75 lg:mx-0">
            {h.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center">
            <button
              onClick={() => go("booking")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-gold/20 transition hover:shadow-xl hover:shadow-gold/30 sm:w-auto"
            >
              <Calendar className="h-4 w-4" />
              {h.cta1}
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() => go("services")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/50 bg-cream/60 px-7 py-3.5 text-sm font-semibold text-charcoal transition hover:border-gold hover:bg-cream sm:w-auto"
            >
              <Sparkles className="h-4 w-4 text-gold" />
              {h.cta2}
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gold/20 pt-6">
            {h.stats.map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="font-serif text-2xl font-bold text-gold-gradient sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-charcoal/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait column */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            {/* Gold frame */}
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gold-gradient opacity-20 blur-2xl" />
            <div className="absolute -inset-2 -z-10 rounded-[2rem] border border-gold/30" />
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-gold/40 shadow-2xl shadow-charcoal/20">
              {/* Use next/image via plain img fallback for simplicity in this scaffold */}
              <img
                src="/images/founder.jpg"
                alt={
                  lang === "ar"
                    ? "زينارة، مؤسِّسة صالون زينارة للتجميل في روسدورف"
                    : "Zainara, Gründerin von Zainara Cosmetics in Roßdorf"
                }
                width={1024}
                height={1280}
                className="aspect-[4/5] h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:rtl:translate-x-0 lg:left-auto lg:right-6 rounded-full bg-cream/95 px-5 py-2.5 shadow-lg ring-1 ring-gold/30 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                <span className="text-gold">★★★★★</span>
                <span className="hidden sm:inline">{lang === "ar" ? "تقييمات 5 نجوم" : "5-Sterne Bewertungen"}</span>
              </div>
            </div>

            {/* Botanical accent */}
            <Branch className="absolute -top-8 -left-8 h-28 w-28 opacity-80 -z-10" />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <GoldDivider />
      </div>
    </section>
  );
}
