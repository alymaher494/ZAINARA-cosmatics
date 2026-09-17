// German-only content for Zainara Cosmetics, Roßdorf (DE local market)
// Brand: Zainara Cosmetics — Laser & Beauty-Hair Removal

export type ServiceItem = {
  name: string;
  price: string;
  note?: string;
};

export type ServiceCategory = {
  id: string;
  icon: string; // lucide icon name handled in component
  image: string;
  title: string;
  desc: string;
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    id: "laser",
    icon: "Sparkles",
    image: "/images/service-laser.jpg",
    title: "Laser-Haarentfernung",
    desc: "Dauerhafte, sanfte Haarentfernung mit modernster Lasertechnologie für Gesicht und Körper.",
    items: [
      { name: "Ganzkörper", price: "170 €" },
      { name: "Intimbereich + Bikinizone + Pofalte", price: "50 €" },
      { name: "Bauch", price: "35 €" },
      { name: "Brust", price: "25 €" },
      { name: "Po", price: "25 €" },
      { name: "Rücken", price: "50 €" },
      { name: "Intimbereich", price: "35 €" },
      { name: "Bikinizone", price: "30 €" },
      { name: "Beine komplett", price: "70 €" },
      { name: "Oberschenkel", price: "40 €" },
      { name: "Unterschenkel", price: "40 €" },
      { name: "Arme komplett", price: "60 €" },
      { name: "Oberarme", price: "30 €" },
      { name: "Unterarme", price: "30 €" },
      { name: "Achseln", price: "35 €" },
      { name: "Gesicht", price: "40 €" },
      { name: "Koteletten", price: "20 €" },
      { name: "Kinn", price: "20 €" },
      { name: "Oberlippe", price: "20 €" },
    ],
  },
  {
    id: "facial",
    icon: "Droplet",
    image: "/images/service-facial.jpg",
    title: "Gesichtsbehandlungen",
    desc: "Tiefenreinigung, Feuchtigkeit und Strahlkraft mit der exklusiven AquaFacial-Methode.",
    items: [
      { name: "AquaFacial Basic (40 Min.)", price: "89 €" },
      { name: "AquaFacial Classic (60 Min.)", price: "99 €" },
      { name: "AquaFacial Deluxe (90 Min.)", price: "130 €" },
      { name: "AquaFacial + Microneedling", price: "150 €" },
      { name: "AquaFacial für den Rücken", price: "150 €" },
    ],
  },
  {
    id: "microneedling",
    icon: "Flower2",
    image: "/images/service-microneedling.jpg",
    title: "Microneedling",
    desc: "Kollagen-Aufbau und Hautverjüngung für ein strafferes, ebenmäßigeres Hautbild.",
    items: [
      { name: "Gesicht", price: "80 €" },
      { name: "Gesicht + Hals", price: "99 €" },
      { name: "Gesicht + Hals + Dekolleté", price: "150 €" },
      { name: "Rücken", price: "140 €" },
    ],
  },
  {
    id: "rf-microneedling",
    icon: "Waves",
    image: "/images/service-microneedling.jpg",
    title: "Radiofrequenz-Microneedling",
    desc: "Hochfrequenz-Wärme für intensiven Kollagenaufbau und sichtbare Hautstraffung.",
    items: [
      { name: "Gesicht", price: "120 €" },
      { name: "Gesicht + Hals", price: "135 €" },
      { name: "Gesicht + Hals + Dekolleté", price: "150 €" },
      { name: "Narbenbehandlung am Körper", price: "ab 75 €" },
      { name: "Dehnungsstreifen", price: "ab 100 €" },
    ],
  },
  {
    id: "permanent",
    icon: "Brush",
    image: "/images/service-permanent.jpg",
    title: "Permanent Make-up",
    desc: "Wachen Sie jeden Tag perfekt gestylt auf – mikrofeine Haarstriche für Ihre Brauen und volle lashes.",
    items: [
      { name: "Microblading inkl. Nachbehandlung", price: "250 €", note: "Haltbarkeit: bis zu 2 Jahre" },
      { name: "Powder Brows inkl. Nachbehandlung", price: "250 €", note: "Haltbarkeit: bis zu 2 Jahre" },
      { name: "Augenbrauenlifting inkl. Färben", price: "45 €", note: "Haltbarkeit: bis zu 4 Wochen" },
      { name: "Wimpernlifting inkl. Färben", price: "45 €", note: "Haltbarkeit: bis zu 4 Wochen" },
      { name: "Augenbrauen zupfen", price: "15 €" },
      { name: "Augenbrauen zupfen und färben", price: "28 €" },
      { name: "Gesichtshaarentfernung mit Fadentechnik", price: "40 €" },
    ],
  },
  {
    id: "weitere",
    icon: "Leaf",
    image: "/images/service-peeling.jpg",
    title: "Weitere Behandlungen",
    desc: "BioRePeel, BB Glow, Green Peel, Kristallpeeling und Zahnbleaching für Ihr vollständiges Beauty-Erlebnis.",
    items: [
      { name: "BioRePeel", price: "80 €" },
      { name: "BB Glow", price: "70 €" },
      { name: "Green Peel Classic inkl. Nachbehandlung", price: "299 €" },
      { name: "Green Peel Energy", price: "130 €" },
      { name: "Kristallpeeling", price: "60 €" },
      { name: "Zahnbleaching 30 Min.", price: "60 €" },
      { name: "Zahnbleaching 60 Min.", price: "99 €" },
    ],
  },
];

export const t = {
  nav: {
    home: "Start",
    about: "Über uns",
    services: "Behandlungen",
    gallery: "Galerie",
    location: "Kontakt",
    booking: "Termin",
    faq: "FAQ",
    book: "Termin buchen",
  },
  hero: {
    badge: "Roßdorf · Darmstadt",
    title1: "ZAINARA",
    title2: "COSMETICS",
    tagline: "Laser & Beauty-Hair Removal",
    subtitle:
      "Premium Kosmetikstudio in Roßdorf. Laser-Haarentfernung, AquaFacial, Microneedling, Permanent Make-up & mehr – für Ihre natürliche, strahlende Schönheit.",
    cta1: "Termin buchen",
    cta2: "Behandlungen ansehen",
    stats: [
      { value: "30+", label: "Behandlungen" },
      { value: "2 Jahre", label: "Haltbarkeit Microblading" },
      { value: "100%", label: "Individuelle Beratung" },
    ],
  },
  about: {
    label: "Über die Gründerin",
    title: "Natürliche Schönheit, mit Hingabe kultiviert.",
    paragraphs: [
      "Willkommen bei Zainara Cosmetics – Ihrem Ort für ganzheitliche, auf Sie abgestimmte Beauty-Behandlungen in Roßdorf. Mit Leidenschaft, Fachwissen und modernster Technologie vereinen wir medizinische Präzision mit der Wärme eines Wohlfühl-Studios.",
      "Von der dauerhaften Laser-Haarentfernung über hochwertige Gesichtsbehandlungen bis zum Permanent Make-up: Jede Behandlung beginnt mit einer ausführlichen Beratung und endet mit einem Ergebnis, das Sie jeden Tag neu strahlen lässt.",
      "Mein Versprechen an Sie: hochwertige Produkte, sauberste Hygiene und eine individuelle Betreuung, die Ihre natürliche Schönheit perfekt in Szene setzt.",
    ],
    founderName: "Zainara",
    founderRole: "Gründerin & Beauty-Expertin",
    points: [
      "Zertifizierte Laser- & Permanent Make-up-Spezialistin",
      "Modernste Geräte & klinische Hygiene",
      "Persönliche Beratung in einem ruhigen Wohlfühl-Studio",
    ],
  },
  services: {
    label: "Behandlungen & Preise",
    title: "Unser Behandlungsangebot",
    subtitle:
      "Von der dauerhaften Haarentfernung bis zum strahlenden Hautbild – entdecken Sie unsere Leistungen mit transparenter Preisliste.",
    all: "Alle Behandlungen",
    from: "ab",
    viewPrices: "Preisliste ansehen",
    book: "Diese Behandlung buchen",
  },
  gallery: {
    label: "Ergebnisse",
    title: "Echte Ergebnisse, echte Ausstrahlung",
    subtitle:
      "Ein Einblick in die Resultate unserer Kundinnen – von perfekten Brauen bis zu strahlender Haut.",
    items: [
      { title: "Microblading", desc: "Natürliche Haarstriche für definierte Brauen" },
      { title: "Lash & Brow Lift", desc: "Geschwungene Wimpern & definierte Brauen" },
      { title: "AquaFacial Glow", desc: "Tiefengereinigte, strahlende Haut" },
    ],
  },
  location: {
    label: "Standort & Erreichbarkeit",
    title: "Zentral in Roßdorf, nah bei Darmstadt",
    subtitle:
      "Sie finden uns in der Darmstädter Straße 50 in Roßdorf – verkehrsgünstig gelegen zwischen Darmstadt und Dieburg.",
    addressLabel: "Adresse",
    address: "Darmstädter Str. 50, 64380 Roßdorf",
    phoneLabel: "Telefon",
    phone: "01577 3435692",
    instagramLabel: "Instagram",
    instagram: "@zainara-cosmetic",
    hoursLabel: "Öffnungszeiten",
    hours: [
      { day: "Mo – Fr", time: "09:00 – 19:00" },
      { day: "Samstag", time: "10:00 – 16:00" },
      { day: "Sonntag", time: "Geschlossen" },
    ],
    areas: "Wir betreuen Kundinnen aus Roßdorf, Darmstadt, Dieburg, Ober-Ramstadt und der gesamten Region.",
    directions: "Route planen",
  },
  booking: {
    label: "Termin anfragen",
    title: "Vereinbaren Sie Ihren Termin",
    subtitle:
      "Senden Sie uns Ihre Anfrage – wir melden uns innerhalb von 24 Stunden zur Bestätigung bei Ihnen.",
    name: "Name",
    namePh: "Ihr Name",
    phone: "Telefon",
    phonePh: "Ihre Telefonnummer",
    email: "E-Mail (optional)",
    emailPh: "ihre@email.de",
    service: "Behandlung",
    servicePh: "Bitte Behandlung wählen",
    date: "Wunschdatum",
    time: "Wunschzeit",
    message: "Nachricht (optional)",
    messagePh: "Wünsche oder Fragen…",
    submit: "Anfrage senden",
    success: "Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns in Kürze.",
    error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
    whatsapp: "Direkt per WhatsApp",
    again: "Weitere Anfrage senden",
  },
  faq: {
    label: "Häufige Fragen",
    title: "Gut zu wissen",
    items: [
      {
        q: "Wie lange hält die Laser-Haarentfernung?",
        a: "Für ein dauerhaftes Ergebnis sind in der Regel 6–10 Sitzungen im Abstand von 4–8 Wochen nötig. Die genaue Anzahl hängt von Haut- und Haartyp ab.",
      },
      {
        q: "Ist eine Beratung vor der Behandlung möglich?",
        a: "Ja, jede Behandlung beginnt mit einer persönlichen und kostenlosen Beratung, um die passende Methode für Ihren Hauttyp zu finden.",
      },
      {
        q: "Wie lange hält Permanent Make-up?",
        a: "Microblading und Powder Brows halten bis zu 2 Jahre. Augenbrauen- und Wimpernlifting halten bis zu 4 Wochen.",
      },
      {
        q: "Wie bereite ich mich auf den Termin vor?",
        a: "Bitte kommen Sie mit sauberer Haut, ohne Make-up. Vor der Laser-Haarentfernung sollten Sie die Stelle 2 Tage nicht rasieren.",
      },
      {
        q: "Welche Zahlungsmöglichkeiten gibt es?",
        a: "Sie können bar oder per Karte vor Ort bezahlen. Jede Behandlung wird inklusive Beratung und Nachsorge durchgeführt.",
      },
    ],
  },
  footer: {
    tagline: "Laser & Beauty-Hair Removal · Gesichtsbehandlungen · Permanent Make-up · Körperbehandlungen",
    address: "Darmstädter Str. 50, 64380 Roßdorf",
    phone: "01577 3435692",
    quick: "Schnellzugriff",
    contact: "Kontakt",
    follow: "Folgen Sie uns",
    rights: "Alle Rechte vorbehalten.",
    imprint: "Impressum",
    privacy: "Datenschutz",
  },
} as const;

export type Dict = typeof t;
