import { Reveal } from "./Reveal";

const PERMITTED = [
  "Consumption at home or in private dining settings",
  "Use in the preparation of dishes and sauces",
  "Online purchase for personal use throughout Madagascar",
  "Resale through an authorized wine merchant or licensed restaurant",
];

const NOT_PERMITTED = [
  "Online resale by a private individual without proper authorization",
  "Sale or service to persons under 18 years old",
  "Consumption before driving a motorized vehicle",
  "Promotion or advertising that violates applicable regulations in Madagascar",
];

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-soft/20 text-rose-soft" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

function Cross() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-cream/80" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </svg>
    </span>
  );
}

export function License() {
  return (
    <section id="license" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      {/* wine pouring image, in the background */}
      <div className="absolute inset-0 lg:right-1/2" aria-hidden="true">
        <img src="/images/pour.png" alt="" className="h-full w-full object-cover opacity-70 lg:opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-ink/50 to-ink lg:from-ink/20 lg:via-ink/40 lg:to-ink" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16">
        <div className="lg:pt-16">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-rose-soft">
              <span className="h-px w-8 bg-rose-soft/60" />
              Legal Information
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display text-4xl font-normal leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
              Terms <em className="text-rose-soft">of Use</em>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/80">
              Wine sales and consumption are subject to regulations in Madagascar. Here is what you can — and cannot — do with our bottles.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {/* PERMITTED */}
          <Reveal>
            <div className="h-full rounded-2xl border border-rose-soft/30 bg-wine-950/70 p-7 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-wine-soft text-wine-900">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="font-display text-2xl font-medium text-cream">Permitted</h3>
              </div>

              <ul className="mt-6 space-y-4">
                {PERMITTED.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm leading-relaxed text-cream/85">
                    <Check />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* NOT PERMITTED */}
          <Reveal delay={150}>
            <div className="h-full rounded-2xl border border-white/10 bg-wine-950/70 p-7 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 text-cream">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </svg>
                </span>

                <h3 className="font-display text-2xl font-medium text-cream">Not Permitted</h3>
              </div>

              <ul className="mt-6 space-y-4">
                {NOT_PERMITTED.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm leading-relaxed text-cream/85">
                    <Cross />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <p className="font-display mt-6 border-t border-white/10 pt-4 text-sm italic text-rose-soft/90">
                Alcohol abuse is dangerous to your health — please drink responsibly.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}