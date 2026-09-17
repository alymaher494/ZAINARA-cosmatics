import Link from "next/link";
import { Calendar, ChevronRight, Phone } from "lucide-react";
import { Branch, GoldDivider } from "./decorations";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-teal py-20 text-cream sm:py-24">
      <Branch className="pointer-events-none absolute -top-6 right-0 h-44 w-44 opacity-10" flip />
      <Branch className="pointer-events-none absolute -bottom-6 left-0 h-44 w-44 opacity-10" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-5">
          <GoldDivider />
        </div>
        <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Bereit für Ihre natürliche Schönheit?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream/80">
          Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin in Roßdorf.
          Wir freuen uns auf Sie.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/buchung"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-charcoal/30 transition hover:shadow-xl sm:w-auto"
          >
            <Calendar className="h-4 w-4" />
            Termin buchen
            <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+4915773435692"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition hover:border-gold-light hover:bg-cream/10 sm:w-auto"
            dir="ltr"
          >
            <Phone className="h-4 w-4" />
            01577 3435692
          </a>
        </div>
        <p className="mt-5 text-xs text-cream/55">
          Darmstädter Str. 50 · 64380 Roßdorf · Mo–Fr 09–19 Uhr · Sa 10–16 Uhr
        </p>
      </div>
    </section>
  );
}
