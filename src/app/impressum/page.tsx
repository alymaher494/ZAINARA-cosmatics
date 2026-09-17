import { SectionLabel, GoldDivider } from "@/components/zainara/decorations";

export const metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Zainara Cosmetics, Roßdorf.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <section className="bg-cream-texture pt-28 pb-20 sm:pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Rechtliches</SectionLabel>
          <h1 className="mt-4 font-serif text-4xl font-bold text-charcoal sm:text-5xl">
            Impressum
          </h1>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-charcoal/80">
          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">Anbieter</h2>
            <p className="mt-2">
              Zainara Cosmetics<br />
              Darmstädter Str. 50<br />
              64380 Roßdorf<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">Kontakt</h2>
            <p className="mt-2">
              Telefon: <a href="tel:+4915773435692" className="text-gold-dark hover:text-gold" dir="ltr">01577 3435692</a><br />
              Instagram: <a href="https://www.instagram.com/zainara-cosmetic" target="_blank" rel="noopener noreferrer" className="text-gold-dark hover:text-gold">@zainara-cosmetic</a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">Umsatzsteuer</h2>
            <p className="mt-2">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              wird auf Anfrage mitgeteilt.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">Berufshaftpflichtversicherung</h2>
            <p className="mt-2">
              Angaben zur Berufshaftpflichtversicherung werden auf Anfrage zur Verfügung gestellt.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">Verantwortlich für den Inhalt</h2>
            <p className="mt-2">Zainara Cosmetics, Darmstädter Str. 50, 64380 Roßdorf.</p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">Haftung für Inhalte</h2>
            <p className="mt-2">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">Haftung für Links</h2>
            <p className="mt-2">
              Unser Angebot enthält ggf. Links zu externen Webseiten Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
              Inhalte auch keine Gewähr übernehmen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">Urheberrecht</h2>
            <p className="mt-2">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Alle Markenrechtliche,
              Bild- und Textinhalte sind Eigentum von Zainara Cosmetics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
