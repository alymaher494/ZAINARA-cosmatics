import { MapPin, Phone, Instagram, Clock, Navigation } from "lucide-react";
import { t } from "@/lib/content";
import { Branch, GoldDivider, SectionLabel } from "./decorations";

export function Location() {
  const l = t.location;

  const mapSrc =
    "https://www.google.com/maps?q=Darmst%C3%A4dter+Str.+50,+64380+Ro%C3%9Fdorf&output=embed";
  const directionsHref =
    "https://www.google.com/maps/dir/?api=1&destination=Darmst%C3%A4dter+Str.+50,+64380+Ro%C3%9Fdorf";

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-gradient-to-b from-[#f7f2e6] to-cream py-20 sm:py-28"
    >
      <Branch className="pointer-events-none absolute top-8 right-0 h-40 w-40 opacity-20" flip />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>{l.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {l.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
            {l.subtitle}
          </p>
          <div className="mt-6">
            <GoldDivider />
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Map */}
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-[2rem] border border-gold/25" />
            <div className="overflow-hidden rounded-[2rem] border-2 border-gold/30 shadow-xl shadow-charcoal/10">
              <iframe
                title="Standort Zainara Cosmetics Roßdorf"
                src={mapSrc}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, minHeight: "22rem", filter: "saturate(0.95)" }}
                className="aspect-auto w-full"
                allowFullScreen
              />
            </div>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            <InfoCard icon={<MapPin className="h-5 w-5" />} title={l.addressLabel}>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-charcoal transition hover:text-gold"
              >
                {l.address}
              </a>
            </InfoCard>

            <InfoCard icon={<Phone className="h-5 w-5" />} title={l.phoneLabel}>
              <a href="tel:+4915773435692" className="text-base font-medium text-charcoal transition hover:text-gold" dir="ltr">
                {l.phone}
              </a>
            </InfoCard>

            <InfoCard icon={<Instagram className="h-5 w-5" />} title={l.instagramLabel}>
              <a
                href="https://www.instagram.com/zainara-cosmetic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-charcoal transition hover:text-gold"
              >
                {l.instagram}
              </a>
            </InfoCard>

            <InfoCard icon={<Clock className="h-5 w-5" />} title={l.hoursLabel}>
              <ul className="space-y-1.5">
                {l.hours.map((h, i) => (
                  <li key={i} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-charcoal/70">{h.day}</span>
                    <span className="font-medium text-charcoal" dir="ltr">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <div className="rounded-2xl border border-gold/25 bg-cream/70 p-5">
              <p className="text-sm leading-relaxed text-charcoal/75">{l.areas}</p>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold"
              >
                <Navigation className="h-4 w-4" />
                {l.directions}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gold/25 bg-cream/60 p-5 transition hover:border-gold/40 hover:bg-cream">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">
          {title}
        </div>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
