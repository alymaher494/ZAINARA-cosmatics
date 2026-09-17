import type { MetadataRoute } from "next";

const SITE_URL = "https://zainara-cosmetics.de";
const LASTMOD = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = ["", "#about", "#services", "#gallery", "#location", "#booking", "#faq"];
  return sections.map((s) => ({
    url: s === "" ? SITE_URL : `${SITE_URL}/${s}`,
    lastModified: LASTMOD,
    changeFrequency: "weekly",
    priority: s === "" ? 1 : s === "#services" || s === "#booking" ? 0.9 : 0.7,
  }));
}
