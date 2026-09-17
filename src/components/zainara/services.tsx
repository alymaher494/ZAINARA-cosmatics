"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Droplet,
  Flower2,
  Waves,
  Brush,
  Leaf,
  ChevronRight,
  X,
  Calendar,
} from "lucide-react";
import { t, services } from "@/lib/content";
import { Branch, GoldDivider, SectionLabel } from "./decorations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Droplet,
  Flower2,
  Waves,
  Brush,
  Leaf,
};

/** Parse the first numeric price from a price string like "170 €" or "ab 75 €". */
function priceNum(p: string): number {
  const m = p.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

/** Build a compact price range string for a category card. */
function priceRange(cat: (typeof services)[number]): string {
  const nums = cat.items.map((it) => priceNum(it.price)).filter((n) => n > 0);
  if (nums.length === 0) return "";
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  if (min === max) return `${min} €`;
  return `${min}–${max} €`;
}

export function Services() {
  const s = t.services;
  const [active, setActive] = useState<(typeof services)[number] | null>(null);
  const [open, setOpen] = useState(false);

  const openCategory = (cat: (typeof services)[number]) => {
    setActive(cat);
    setOpen(true);
  };

  const goBooking = () => {
    setOpen(false);
    window.location.href = `/buchung?service=${encodeURIComponent(active!.title)}`;
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-cream to-[#f7f2e6] py-20 sm:py-28"
    >
      <Branch className="pointer-events-none absolute top-10 right-0 h-44 w-44 opacity-20" flip />
      <Branch className="pointer-events-none absolute bottom-0 -left-10 h-40 w-40 opacity-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>{s.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {s.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
            {s.subtitle}
          </p>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>

        {/* Grid of all categories (Bootstrap-style responsive grid) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Sparkles;
            const range = priceRange(cat);
            return (
              <button
                key={cat.id}
                onClick={() => openCategory(cat)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/25 bg-cream/60 text-left shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                aria-label={`${s.viewPrices}: ${cat.title}`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={`${cat.title} – Zainara Cosmetics`}
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/65 via-charcoal/10 to-transparent" />
                  <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-gold-dark shadow-sm backdrop-blur">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-gold-gradient px-3 py-1 text-xs font-semibold text-cream shadow-sm">
                    {cat.items.length} Leistungen
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-bold text-charcoal">{cat.title}</h3>
                  <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-charcoal/65">
                    {cat.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-gold/15 pt-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-charcoal/50">
                        {s.from}
                      </span>
                      <span className="font-serif text-base font-bold text-gold-dark">{range}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-dark transition group-hover:gap-2">
                      {s.viewPrices}
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-gold/20 bg-cream/60 p-4 text-center">
          <p className="text-xs text-charcoal/60">
            Preise inkl. MwSt. Erste Beratung kostenlos. Klicken Sie auf eine
            Behandlungskarte, um die vollständige Preisliste zu sehen.
          </p>
        </div>
      </div>

      {/* Price list popup */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl gap-0 overflow-hidden bg-cream p-0 sm:rounded-[1.5rem]">
          {active && (
            <>
              {/* Header image strip */}
              <div className="relative h-40 w-full overflow-hidden sm:h-48">
                <img
                  src={active.image}
                  alt={`${active.title} – Zainara Cosmetics`}
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
                <DialogHeader className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <DialogTitle className="font-serif text-2xl font-bold text-cream sm:text-3xl">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="mt-1 max-w-md text-sm text-cream/85">
                    {active.desc}
                  </DialogDescription>
                </DialogHeader>
              </div>

              {/* Price list */}
              <div className="max-h-[22rem] overflow-y-auto p-5 sm:p-6">
                <div className="divider-gold mb-4" />
                <ul className="space-y-1">
                  {active.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-between gap-3 rounded-lg px-2 py-2.5 transition hover:bg-gold/5"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-charcoal">
                          {item.name}
                        </div>
                        {item.note && (
                          <div className="mt-0.5 text-[11px] font-medium text-gold-dark/80">
                            {item.note}
                          </div>
                        )}
                      </div>
                      <span className="font-serif text-base font-bold text-gold-dark">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer actions */}
              <div className="flex flex-col gap-3 border-t border-gold/15 bg-cream/80 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <p className="text-xs text-charcoal/55">
                  {active.items.length} Behandlungen · Preise inkl. MwSt.
                </p>
                <button
                  onClick={goBooking}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-cream shadow-md shadow-gold/20 transition hover:shadow-lg hover:shadow-gold/30"
                >
                  <Calendar className="h-4 w-4" />
                  {s.book}
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        /* Make the shadcn dialog close button gold-themed */
        [data-slot="dialog-content"] [data-slot="dialog-close"] {
          color: #c5a059;
          background: rgba(253, 251, 247, 0.9);
          border: 1px solid rgba(197, 160, 89, 0.4);
        }
        [data-slot="dialog-overlay"] {
          background-color: rgba(44, 42, 38, 0.55);
          backdrop-filter: blur(2px);
        }
      `}</style>
    </section>
  );
}
