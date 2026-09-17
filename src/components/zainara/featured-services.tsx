import Link from "next/link";
import { Sparkles, Droplet, Flower2, Brush, ChevronRight } from "lucide-react";
import { services } from "@/lib/content";
import { Branch, GoldDivider, SectionLabel } from "./decorations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Droplet,
  Flower2,
  Waves: Flower2,
  Brush,
  Leaf: Flower2,
};

// Pick 4 representative categories for the home preview
const previewIds = ["laser", "facial", "permanent", "microneedling"];

export function FeaturedServices() {
  const cats = services.filter((s) => previewIds.includes(s.id));
  const fromPrice = (id: string) => {
    const cat = services.find((s) => s.id === id);
    if (!cat) return "";
    return cat.items[0]?.price ?? "";
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Branch className="pointer-events-none absolute top-8 right-0 h-40 w-40 opacity-20" flip />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Behandlungen</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Premium Beauty-Behandlungen
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
            Von der dauerhaften Laser-Haarentfernung bis zum strahlenden Hautbild –
            entdecken Sie unsere wichtigsten Behandlungen.
          </p>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => {
            const Icon = iconMap[c.icon] ?? Sparkles;
            return (
              <Link
                key={c.id}
                href="/leistungen"
                className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-cream/60 shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.title} – Zainara Cosmetics`}
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-gold-dark backdrop-blur">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-charcoal">{c.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-charcoal/65">
                    {c.desc}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-charcoal/50">ab</span>
                    <span className="font-serif text-base font-bold text-gold-dark">
                      {fromPrice(c.id)}
                    </span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold-dark transition group-hover:gap-2">
                    Mehr erfahren
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-cream/60 px-7 py-3 text-sm font-semibold text-charcoal transition hover:border-gold hover:bg-cream"
          >
            Alle Behandlungen ansehen
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
