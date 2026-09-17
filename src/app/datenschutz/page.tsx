import { SectionLabel, GoldDivider } from "@/components/zainara/decorations";

export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Zainara Cosmetics, Roßdorf.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-cream-texture pt-28 pb-20 sm:pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Rechtliches</SectionLabel>
          <h1 className="mt-4 font-serif text-4xl font-bold text-charcoal sm:text-5xl">
            Datenschutz
          </h1>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-charcoal/80">
          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">1. Datenschutz auf einen Blick</h2>
            <p className="mt-2">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
              der gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">2. Verantwortliche Stelle</h2>
            <p className="mt-2">
              Zainara Cosmetics<br />
              Darmstädter Str. 50<br />
              64380 Roßdorf<br />
              Telefon: 01577 3435692
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mt-2">
              Wenn Sie unser Terminanfrage-Formular nutzen, erheben wir die dort
              angegebenen Daten (Name, Telefonnummer, ggf. E-Mail-Adresse, gewünschte
              Behandlung, Wunschtermin und Nachricht). Diese Daten werden ausschließlich
              zur Bearbeitung Ihrer Anfrage und zur Terminvereinbarung verwendet.
              Die Daten werden nicht an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">4. Speicherdauer</h2>
            <p className="mt-2">
              Ihre Daten werden nur so lange gespeichert, wie es für die Bearbeitung
              der Anfrage erforderlich ist oder wie es gesetzliche Aufbewahrungsfristen
              vorsehen. Nach Ablauf dieser Frist werden die Daten gelöscht.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">5. Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit.
              Wenden Sie sich dafür bitte an die oben genannte Kontaktadresse.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">6. Cookies</h2>
            <p className="mt-2">
              Diese Website verwendet keine Tracking-Cookies. Eingebettete Karten
              (Google Maps) können eigene Cookies setzen; für Details siehe die
              Datenschutzerklärung von Google.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-charcoal">7. Kontakt über WhatsApp / Instagram</h2>
            <p className="mt-2">
              Wenn Sie uns über WhatsApp oder Instagram kontaktieren, gelten die
              jeweiligen Datenschutzbestimmungen der Anbieter Meta bzw. WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
