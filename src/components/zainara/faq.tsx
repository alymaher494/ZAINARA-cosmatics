"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useT } from "./use-t";
import { Branch, GoldDivider, SectionLabel } from "./decorations";

export function FAQ() {
  const { t, lang } = useT();
  const f = t.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <Branch className="pointer-events-none absolute top-6 right-0 h-40 w-40 opacity-20" flip />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>{f.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {f.title}
          </h2>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>

        <div className="mt-10 space-y-3">
          {f.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-gold/50 bg-cream shadow-md"
                    : "border-gold/20 bg-cream/50 hover:border-gold/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left rtl:text-right"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 font-serif text-base font-bold text-gold-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-charcoal sm:text-base">
                      {item.q}
                    </span>
                  </span>
                  <ChevronRightIcon open={isOpen} />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-12 text-sm leading-relaxed text-charcoal/75 rtl:pr-12 rtl:pl-5">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChevronRightIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition ${
        open ? "rotate-90 bg-gold text-cream" : ""
      } rtl:rotate-0 rtl:[.rotate-90\\]:-rotate-90`}
    >
      <ChevronDown className="h-4 w-4" />
    </span>
  );
}
