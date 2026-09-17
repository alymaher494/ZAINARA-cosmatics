import { t } from "@/lib/content";
import { Branch, GoldDivider, SectionLabel } from "./decorations";

export function Gallery() {
  const g = t.gallery;

  const imgs = ["/images/gallery-1.jpg", "/images/gallery-2.jpg", "/images/gallery-3.jpg"];

  return (
    <section id="gallery" className="relative overflow-hidden py-20 sm:py-28">
      <Branch className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 opacity-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>{g.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {g.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
            {g.subtitle}
          </p>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {g.items.map((item, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-[1.5rem] border border-gold/25 shadow-md shadow-charcoal/5"
            >
              <img
                src={imgs[i]}
                alt={`${item.title} – ${item.desc}`}
                width={1024}
                height={1024}
                className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-xl font-bold text-cream">{item.title}</h3>
                <p className="mt-1 text-sm text-cream/85">{item.desc}</p>
              </figcaption>
              <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-dark">
                Resultat
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
