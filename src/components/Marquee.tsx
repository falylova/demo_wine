const ITEMS = [
  "Premium Quality · Crafted with Passion in Madagascar",
  "Carefully Selected Grapes · Exceptional Craftsmanship",
  "Fast & Secure Delivery Across Madagascar",
  "Crafted with Passion · A Celebration of Authentic Winemaking",
  "A Heritage of Craftsmanship Since 1958",
  "A Refined Experience for Every Occasion",
];

function Star() {
  return (
    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 shrink-0 text-rose-soft" aria-hidden="true">
      <path d="M6 0.5L7.4 4.2L11.2 4.5L8.3 7L9.2 10.7L6 8.7L2.8 10.7L3.7 7L0.8 4.5L4.6 4.2Z" fill="currentColor" />
    </svg>
  );
}

export function Marquee() {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <span key={item + (hidden ? "-b" : "-a")} className="flex items-center gap-6 pr-6">
          <span className="font-display text-base italic text-rose-soft/90 sm:text-lg">{item}</span>
          <Star />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee overflow-hidden border-y border-white/8 bg-wine-950 py-4" aria-label="Distinctions et informations pratiques">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
