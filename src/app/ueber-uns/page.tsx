import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { About } from "@/components/zainara/about";
import { CTABand } from "@/components/zainara/cta-band";
import { SectionLabel, GoldDivider } from "@/components/zainara/decorations";

export const metadata = {
  title: "Über uns – Gründerin Zainara",
  description:
    "Lernen Sie Zainara kennen, Gründerin von Zainara Cosmetics in Roßdorf. Zertifizierte Laser- & Permanent Make-up-Spezialistin. Leidenschaft, Fachwissen und modernste Technologie für Ihre natürliche Schönheit.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-cream-texture pt-28 pb-6 sm:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Über die Gründerin</SectionLabel>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
            Natürliche Schönheit, mit Hingabe kultiviert.
          </h1>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>
      </section>
      <About />
      <CTABand />
      <div className="bg-cream-texture py-12 text-center">
        <Link
          href="/leistungen"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold"
        >
          Behandlungen entdecken
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
