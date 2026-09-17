import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zainara Cosmetics",
    short_name: "Zainara",
    description:
      "Premium Kosmetikstudio in Roßdorf bei Darmstadt – Laser, Facials, Microneedling, Permanent Make-up.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfbf7",
    theme_color: "#c5a059",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    lang: "de-DE",
    categories: ["beauty", "health", "lifestyle"],
  };
}
