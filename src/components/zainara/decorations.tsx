import * as React from "react";

/** Decorative botanical branch (eucalyptus-like) in soft greens/gold. */
export function Branch({
  className = "",
  flip = false,
  color = "#2f4f3f",
  gold = "#c5a059",
}: {
  className?: string;
  flip?: boolean;
  color?: string;
  gold?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 180 C 60 140, 110 100, 180 20" />
      </g>
      {[36, 52, 68, 84, 100, 116, 132, 148].map((y, i) => {
        const x = 30 + i * 18;
        return (
          <g key={i} fill={color} opacity={0.85 - i * 0.05}>
            <ellipse cx={x - 6} cy={y} rx="14" ry="7" transform={`rotate(-35 ${x - 6} ${y})`} />
            <ellipse cx={x + 6} cy={y + 4} rx="14" ry="7" transform={`rotate(35 ${x + 6} ${y + 4})`} />
          </g>
        );
      })}
      <g fill={gold} opacity={0.7}>
        <circle cx="180" cy="20" r="3" />
        <circle cx="172" cy="32" r="2.2" />
      </g>
    </svg>
  );
}

/** A simple elegant gold divider with a center diamond. */
export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <span className="rotate-45 bg-gold-shimmer h-2 w-2" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

/** Small ZC monogram in gold (used in header/footer). */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mono-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8843c" />
          <stop offset="45%" stopColor="#d9bd7e" />
          <stop offset="100%" stopColor="#a8843c" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="none" stroke="#c5a059" strokeWidth="1.4" />
      <text
        x="30"
        y="46"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="40"
        fontWeight="700"
        textAnchor="middle"
        fill="url(#mono-g)"
        letterSpacing="-2"
      >
        Z
      </text>
      <text
        x="44"
        y="52"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="22"
        fontWeight="600"
        textAnchor="middle"
        fill="#2f4f3f"
      >
        c
      </text>
    </svg>
  );
}

/** Soft corner ornament used in section headers. */
export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true" fill="none" stroke="#c5a059" strokeWidth="1.4" strokeLinecap="round">
      <path d="M4 40 Q 4 4, 40 4" opacity="0.7" />
      <path d="M12 40 Q 12 12, 40 12" opacity="0.4" />
      <circle cx="40" cy="4" r="2.4" fill="#c5a059" stroke="none" />
    </svg>
  );
}

/** Section label badge (e.g. "Über uns"). */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
      <span className="h-px w-6 bg-gold/60" />
      {children}
      <span className="h-px w-6 bg-gold/60" />
    </span>
  );
}
