import { FAQ } from "@/components/zainara/faq";
import { CTABand } from "@/components/zainara/cta-band";
import { SectionLabel, GoldDivider } from "@/components/zainara/decorations";

export const metadata = {
  title: "Häufige Fragen (FAQ)",
  description:
    "Antworten auf häufige Fragen zu Zainara Cosmetics in Roßdorf: Haltbarkeit der Laser-Haarentfernung, Beratung, Permanent Make-up, Vorbereitung auf den Termin und Zahlungsmöglichkeiten.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-cream-texture pt-28 pb-6 sm:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Häufige Fragen</SectionLabel>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
            Gut zu wissen
          </h1>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>
      </section>
      <FAQ />
      <CTABand />
    </>
  );
}
