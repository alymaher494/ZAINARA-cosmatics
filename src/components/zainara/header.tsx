"use client";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useT } from "./use-t";
import { LangToggle, Monogram } from "./decorations";

const sectionIds = ["about", "services", "gallery", "location", "booking"] as const;

export function Header() {
  const { t, lang } = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = t.nav;

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(197,160,89,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
          aria-label="Zainara Cosmetics"
        >
          <Monogram className="h-10 w-10" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold tracking-[0.18em] text-gold-gradient">
              ZAINARA
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.45em] text-charcoal/70">
              {lang === "ar" ? "زينارة للتجميل" : "Cosmetics"}
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {sectionIds.map((id) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="text-sm font-medium text-charcoal/80 transition hover:text-gold"
            >
              {nav[id as keyof typeof nav]}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LangToggle />
          <a
            href="tel:+4915773435692"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-cream sm:inline-flex"
            aria-label="Anrufen"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => go("booking")}
            className="hidden items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition hover:opacity-90 sm:inline-flex"
          >
            <Calendar className="h-4 w-4" />
            {nav.book}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-charcoal lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-gold/15 bg-cream/98 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {sectionIds.map((id) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="rounded-lg px-4 py-3 text-left text-base font-medium text-charcoal transition hover:bg-gold/10 hover:text-gold"
            >
              {nav[id as keyof typeof nav]}
            </button>
          ))}
          <button
            onClick={() => go("booking")}
            className="mt-2 rounded-lg bg-gold-gradient px-4 py-3 text-center text-sm font-semibold text-cream"
          >
            {nav.book}
          </button>
        </nav>
      </div>
    </header>
  );
}
