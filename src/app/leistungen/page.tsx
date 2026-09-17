import { Services } from "@/components/zainara/services";
import { CTABand } from "@/components/zainara/cta-band";
import { Branch, GoldDivider, SectionLabel } from "@/components/zainara/decorations";

export const metadata = {
  title: "Behandlungen & Preise",
  description:
    "Alle Behandlungen von Zainara Cosmetics in Roßdorf: Laser-Haarentfernung, AquaFacial, Microneedling, Radiofrequenz-Microneedling, Permanent Make-up, BioRePeel, Green Peel & Zahnbleaching. Transparente Preisliste.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream-texture pt-28 pb-10 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <SectionLabel>Behandlungen & Preise</SectionLabel>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
              Unser Behandlungsangebot
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
              Von der dauerhaften Haarentfernung bis zum strahlenden Hautbild –
              entdecken Sie unsere Leistungen mit transparenter Preisliste.
            </p>
            <div className="mt-6">
              <GoldDivider />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <CTABand />
      <Branch className="pointer-events-none fixed bottom-2 left-2 h-12 w-12 opacity-10" />
    </>
  );
}
