import { Location } from "@/components/zainara/location";
import { SectionLabel, GoldDivider } from "@/components/zainara/decorations";

export const metadata = {
  title: "Kontakt & Standort in Roßdorf",
  description:
    "Zainara Cosmetics, Darmstädter Str. 50, 64380 Roßdorf. Telefon 01577 3435692. Mo–Fr 09–19 Uhr, Sa 10–16 Uhr. Zentral gelegen zwischen Darmstadt und Dieburg. Jetzt Route planen.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-cream-texture pt-28 pb-6 sm:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Standort & Erreichbarkeit</SectionLabel>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
            Zentral in Roßdorf, nah bei Darmstadt
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
            Sie finden uns in der Darmstädter Straße 50 in Roßdorf –
            verkehrsgünstig gelegen zwischen Darmstadt und Dieburg.
          </p>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>
      </section>
      <Location />
    </>
  );
}
