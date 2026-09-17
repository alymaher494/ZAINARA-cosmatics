import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { t } from "@/lib/content";
import { Branch, GoldDivider, SectionLabel } from "./decorations";

export function About() {
  const a = t.about;

  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <Branch className="pointer-events-none absolute -top-4 left-0 h-48 w-48 opacity-25" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 -z-10 rounded-[2rem] border border-gold/25" />
              <div className="overflow-hidden rounded-[2rem] border border-gold/30 shadow-xl shadow-charcoal/10">
                <img
                  src="/images/hero.jpg"
                  alt="Innenraum des Premium Kosmetikstudios Zainara Cosmetics in Roßdorf"
                  width={1344}
                  height={768}
                  className="aspect-[16/10] h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Signature card */}
              <div className="absolute -bottom-6 right-4 sm:right-8 max-w-[16rem] rounded-2xl bg-cream/95 px-5 py-4 shadow-lg ring-1 ring-gold/30 backdrop-blur">
                <div className="font-serif text-2xl italic text-gold-dark">{a.founderName}</div>
                <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-charcoal/60">
                  {a.founderRole}
                </div>
              </div>
              <Branch className="absolute -top-6 -right-6 h-24 w-24 opacity-70" flip />
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col items-center lg:items-start">
              <SectionLabel>{a.label}</SectionLabel>
              <h2 className="mt-4 max-w-xl text-center font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-left">
                {a.title}
              </h2>
              <div className="mt-5 hidden lg:block">
                <GoldDivider />
              </div>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80">
              {a.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="mt-7 space-y-3">
              {a.points.map((pt, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-charcoal">{pt}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/leistungen"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold"
            >
              Behandlungen entdecken
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
