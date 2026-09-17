import { Hero } from "@/components/zainara/hero";
import { FeaturedServices } from "@/components/zainara/featured-services";
import { About } from "@/components/zainara/about";
import { CTABand } from "@/components/zainara/cta-band";

export const metadata = {
  title: "Zainara Cosmetics | Laser, Facials & Permanent Make-up in Roßdorf",
  description:
    "Premium Kosmetikstudio in Roßdorf bei Darmstadt. Laser-Haarentfernung, AquaFacial, Microneedling, Permanent Make-up & Green Peel. Jetzt online Termin buchen.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <About />
      <CTABand />
    </>
  );
}
