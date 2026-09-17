import { Suspense } from "react";
import { Booking } from "@/components/zainara/booking";
import { SectionLabel, GoldDivider } from "@/components/zainara/decorations";

export const metadata = {
  title: "Termin buchen",
  description:
    "Vereinbaren Sie Ihren Termin bei Zainara Cosmetics in Roßdorf. Laser-Haarentfernung, AquaFacial, Microneedling, Permanent Make-up und mehr. Online-Anfrage oder WhatsApp – wir melden uns innerhalb von 24 Stunden.",
  alternates: { canonical: "/buchung" },
};

export default function BuchungPage() {
  return (
    <>
      <section className="bg-cream-texture pt-28 pb-6 sm:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Termin anfragen</SectionLabel>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
            Vereinbaren Sie Ihren Termin
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/70">
            Senden Sie uns Ihre Anfrage – wir melden uns innerhalb von 24 Stunden
            zur Bestätigung bei Ihnen.
          </p>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>
      </section>
      <Suspense fallback={<div className="py-20 text-center text-charcoal/50">Lade Formular…</div>}>
        <Booking />
      </Suspense>
    </>
  );
}
