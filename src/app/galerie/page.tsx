import { Gallery } from "@/components/zainara/gallery";
import { CTABand } from "@/components/zainara/cta-band";
import { SectionLabel, GoldDivider } from "@/components/zainara/decorations";

export const metadata = {
  title: "Galerie – Ergebnisse",
  description:
    "Ein Einblick in die Ergebnisse von Zainara Cosmetics in Roßdorf: Microblading, Lash & Brow Lift, AquaFacial Glow und weitere Beauty-Behandlungen. Echte Resultate, echte Ausstrahlung.",
  alternates: { canonical: "/galerie" },
};

export default function GaleriePage() {
  return (
    <>
      <section className="bg-cream-texture pt-28 pb-6 sm:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Ergebnisse</SectionLabel>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
            Echte Ergebnisse, echte Ausstrahlung
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
            Ein Einblick in die Resultate unserer Kundinnen – von perfekten Brauen
            bis zu strahlender Haut.
          </p>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>
      </section>
      <Gallery />
      <CTABand />
    </>
  );
}
