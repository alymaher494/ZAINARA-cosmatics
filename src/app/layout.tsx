import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/zainara/header";
import { Footer } from "@/components/zainara/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://zainara-cosmetics.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zainara Cosmetics | Laser, Facials & Permanent Make-up in Roßdorf",
    template: "%s | Zainara Cosmetics",
  },
  description:
    "Zainara Cosmetics in Roßdorf bei Darmstadt – Premium Laser-Haarentfernung, AquaFacial, Microneedling, Permanent Make-up & Green Peel. Buchen Sie Ihren Termin online.",
  keywords: [
    "Laser Haarentfernung Roßdorf",
    "Laser Haarentfernung Darmstadt",
    "Permanent Make up Roßdorf",
    "Microblading Darmstadt",
    "AquaFacial Roßdorf",
    "Microneedling Darmstadt",
    "Cosmetics Roßdorf",
    "Beauty Studio Roßdorf",
    "Green Peel Roßdorf",
    "Zahnbleaching Darmstadt",
    "Lash Lift Roßdorf",
    "Kosmetikstudio Roßdorf",
    "zainara cosmetics",
    "laser and beauty hair removal",
  ],
  authors: [{ name: "Zainara Cosmetics" }],
  creator: "Zainara Cosmetics",
  publisher: "Zainara Cosmetics",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Zainara Cosmetics | Laser, Facials & Permanent Make-up in Roßdorf",
    description:
      "Premium Kosmetikstudio in Roßdorf bei Darmstadt. Laser-Haarentfernung, AquaFacial, Microneedling, Permanent Make-up & mehr. Jetzt online buchen.",
    url: SITE_URL,
    siteName: "Zainara Cosmetics",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1440,
        height: 720,
        alt: "Zainara Cosmetics – Premium Beauty Studio in Roßdorf",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zainara Cosmetics | Laser, Facials & Permanent Make-up",
    description:
      "Premium Kosmetikstudio in Roßdorf bei Darmstadt. Laser-Haarentfernung, AquaFacial, Microneedling & Permanent Make-up.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Beauty & Cosmetics",
  other: {
    "geo.region": "DE-HE",
    "geo.placename": "Roßdorf",
    "geo.position": "49.8297;8.7361",
    ICBM: "49.8297, 8.7361",
    "theme-color": "#c5a059",
  },
};

export const viewport: Viewport = {
  themeColor: "#c5a059",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HealthAndBeautyBusiness", "BeautySalon"],
      "@id": `${SITE_URL}/#business`,
      name: "Zainara Cosmetics",
      alternateName: "Zainara Cosmetics – Laser & Beauty-Hair Removal",
      description:
        "Premium Kosmetikstudio in Roßdorf bei Darmstadt. Laser-Haarentfernung, AquaFacial, Microneedling, Permanent Make-up, Green Peel und weitere Gesichts- und Körperbehandlungen.",
      image: `${SITE_URL}/images/og-cover.jpg`,
      logo: `${SITE_URL}/favicon.svg`,
      url: SITE_URL,
      telephone: "+4915773435692",
      priceRange: "€€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Darmstädter Str. 50",
        addressLocality: "Roßdorf",
        postalCode: "64380",
        addressRegion: "Hessen",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.8297,
        longitude: 8.7361,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "16:00",
        },
      ],
      sameAs: [
        "https://www.instagram.com/zainara-cosmetic",
      ],
      areaServed: [
        { "@type": "City", name: "Roßdorf" },
        { "@type": "City", name: "Darmstadt" },
        { "@type": "City", name: "Dieburg" },
        { "@type": "City", name: "Ober-Ramstadt" },
        { "@type": "AdministrativeArea", name: "Hessen" },
      ],
      knowsAbout: [
        "Laser Hair Removal",
        "AquaFacial",
        "Microneedling",
        "Radiofrequency Microneedling",
        "Permanent Make-up",
        "Microblading",
        "Powder Brows",
        "Lash Lift",
        "Brow Lamination",
        "BioRePeel",
        "BB Glow",
        "Green Peel",
        "Teeth Whitening",
        "Thread Hair Removal",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Zainara Cosmetics",
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Brand",
      "@id": `${SITE_URL}/#brand`,
      name: "Zainara Cosmetics",
      slogan: "Laser & Beauty-Hair Removal",
      logo: `${SITE_URL}/favicon.svg`,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Wie lange hält die Laser-Haarentfernung?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Für ein dauerhaftes Ergebnis sind in der Regel 6–10 Sitzungen im Abstand von 4–8 Wochen nötig. Die genaue Anzahl hängt von Haut- und Haartyp ab.",
          },
        },
        {
          "@type": "Question",
          name: "Ist eine Beratung vor der Behandlung möglich?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, jede Behandlung beginnt mit einer persönlichen und kostenlosen Beratung, um die passende Methode für Ihren Hauttyp zu finden.",
          },
        },
        {
          "@type": "Question",
          name: "Wie lange hält Permanent Make-up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Microblading und Powder Brows halten bis zu 2 Jahre. Augenbrauen- und Wimpernlifting halten bis zu 4 Wochen.",
          },
        },
        {
          "@type": "Question",
          name: "Bieten Sie Beratung auf Arabisch an?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, wir bieten persönliche Beratung sowohl auf Deutsch als auch auf Arabisch an.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Behandlungen", item: `${SITE_URL}/#services` },
        { "@type": "ListItem", position: 3, name: "Standort", item: `${SITE_URL}/#location` },
        { "@type": "ListItem", position: 4, name: "Termin", item: `${SITE_URL}/#booking` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
