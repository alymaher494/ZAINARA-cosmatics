"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { t } from "@/lib/content";
import { Monogram } from "./decorations";

const links = [
  { href: "/leistungen", key: "services" as const },
  { href: "/ueber-uns", key: "about" as const },
  { href: "/galerie", key: "gallery" as const },
  { href: "/kontakt", key: "location" as const },
  { href: "/faq", key: "faq" as const },
];

export function Header() {
  const nav = t.nav;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

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
        <Link href="/" className="flex items-center gap-3" aria-label="Zainara Cosmetics Startseite">
          <Monogram className="h-10 w-10" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold tracking-[0.18em] text-gold-gradient">
              ZAINARA
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.45em] text-charcoal/70">
              Cosmetics
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition hover:text-gold ${
                isActive(l.href) ? "text-gold" : "text-charcoal/80"
              }`}
            >
              {nav[l.key]}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+4915773435692"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-cream sm:inline-flex"
            aria-label="Anrufen"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link
            href="/buchung"
            className="hidden items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition hover:opacity-90 sm:inline-flex"
          >
            <Calendar className="h-4 w-4" />
            {nav.book}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-charcoal lg:hidden"
            aria-label="Menü"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-gold/15 bg-cream/98 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[460px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          <Link
            href="/"
            onClick={closeMenu}
            className={`rounded-lg px-4 py-3 text-base font-medium transition hover:bg-gold/10 hover:text-gold ${
              isActive("/") ? "text-gold" : "text-charcoal"
            }`}
          >
            {nav.home}
          </Link>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-base font-medium transition hover:bg-gold/10 hover:text-gold ${
                isActive(l.href) ? "text-gold" : "text-charcoal"
              }`}
            >
              {nav[l.key]}
            </Link>
          ))}
          <Link
            href="/buchung"
            onClick={closeMenu}
            className="mt-2 rounded-lg bg-gold-gradient px-4 py-3 text-center text-sm font-semibold text-cream"
          >
            {nav.book}
          </Link>
        </nav>
      </div>
    </header>
  );
}
