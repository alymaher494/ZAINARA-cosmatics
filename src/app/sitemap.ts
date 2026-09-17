import type { MetadataRoute } from "next";

const SITE_URL = "https://zainara-cosmetics.de";
const LASTMOD = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/leistungen", priority: 0.9 },
    { path: "/ueber-uns", priority: 0.8 },
    { path: "/galerie", priority: 0.7 },
    { path: "/kontakt", priority: 0.8 },
    { path: "/buchung", priority: 0.9 },
    { path: "/faq", priority: 0.6 },
    { path: "/impressum", priority: 0.3 },
    { path: "/datenschutz", priority: 0.3 },
  ];
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: LASTMOD,
    changeFrequency: "weekly",
    priority: p.priority,
  }));
}
