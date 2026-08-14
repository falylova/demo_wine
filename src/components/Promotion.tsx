import { useState } from "react";
import { Reveal } from "./Reveal";
import type { CSSProperties } from "react";

const LEFT_FEATURES = [
  {
    n: "01",
    title: "Hand-Harvested",
    text: "Every row picked by hand, one cluster at a time, at the vine's own pace.",
  },
  {
    n: "02",
    title: "Aged With Patience",
    text: "Eighteen months in oak before a single bottle leaves the cellar.",
  },
  {
    n: "03",
    title: "Small-Batch Craft",
    text: "Limited, numbered bottles — never rushed, never mass-produced.",
  },
];

const RIGHT_FEATURES = [
  {
    n: "04",
    title: "Natural Process",
    text: "No shortcuts, no additives. Just fruit, oak, and time.",
  },
  {
    n: "05",
    title: "Aged, Not Rushed",
    text: "Structure built slowly in the barrel, never forced.",
  },
  {
    n: "06",
    title: "Limited Release",
    text: "Once the numbered bottles are gone, the vintage is gone for good.",
  },
];

function FeatureBlock({
  n,
  title,
  text,
  align = "left",
}: {
  n: string;
  title: string;
  text: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`flex gap-4 ${align === "right" ? "sm:flex-row-reverse sm:text-right" : ""}`}>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] border border-[#c9a458]/50 
        font-display text-xs tracking-widest text-[#e3c179]"
      >
        {n}
      </span>
      <div>
        <h3 className="font-display text-sm font-medium uppercase tracking-[0.14em] text-[#f1e2c2]">
          {title}
        </h3>
        <p className="mt-1.5 max-w-[220px] text-[13px] leading-relaxed text-[#cbb9b0]/70">
          {text}
        </p>
      </div>
    </div>
  );
}

export function Promotion() {

  return (
    <section id="promotions" className="relative overflow-hidden bg-wine py-20 sm:py-28">
      {/* deep radial glow */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,wine,transparent_70%)]"
        aria-hidden="true"
      />

      {/* gold frame */}
      <div className="pointer-events-none absolute inset-4 rounded-sm border border-[#c9a458]/30 sm:inset-8" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-5 rounded-sm border border-[#c9a458]/10 sm:inset-9" aria-hidden="true" />

      {/* large emblem watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 800 500"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
      >
        <g fill="none" stroke="#e3c179" strokeWidth="1.5">
          <path d="M400 250c-60-10-140-20-220-70-60-38-110-90-140-150 40 100 30 190 10 250 60 30 130 30 190 10-30 50-90 80-150 90 90 30 200 10 260-60" />
          <path d="M400 250c60-10 140-20 220-70 60-38 110-90 140-150-40 100-30 190-10 250-60 30-130 30-190 10 30 50 90 80 150 90-90 30-200 10-260-60" />
          <circle cx="400" cy="250" r="6" fill="#e3c179" stroke="none" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-[1300px] px-6 sm:px-10">
        {/* eyebrow */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="h-px w-10 bg-[#c9a458]/50" aria-hidden="true" />
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.4em] text-[#e3c179]">
              FAL — Finest Wine
            </p>
            <h2 className="mt-4 font-display text-2xl font-normal text-[#f1e2c2] sm:text-3xl lg:text-4xl">
              More than wine. <em className="text-[#e3c179]">A story in every barrel.</em>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#cbb9b0]/70">
              Behind every bottle in our collection lies a single grape, a single hand,
              a single decision made in the cellar — repeated until it becomes a vintage.
            </p>
          </div>
        </Reveal>

        {/* main grid: features / bottle / features */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[280px_minmax(0,1fr)_280px] lg:gap-8">
          {/* left features */}
          <div className="order-2 space-y-10 lg:order-1">
            {LEFT_FEATURES.map((f, i) => (
              <Reveal key={f.n} delay={i * 100}>
                <FeatureBlock {...f} />
              </Reveal>
            ))}
          </div>

          {/* center: bottle + offer */}
          <div className="order-1 flex flex-col items-center lg:order-2">
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="halo pointer-events-none absolute inset-0 m-auto h-[380px] w-[380px] 
                rounded-full bg-[#c9a458]/10 blur-[90px]"
              />
              <img
                src="/images/bottle.png"
                alt="FAL Wine, Signature Edition bottle"
                className="bottle-float relative z-10 h-[420px] w-auto object-contain drop-shadow-[0_50px_45px_rgba(0,0,0,0.75)] sm:h-[480px] lg:h-[540px]"
                style={{ "--rot": "0deg" } as CSSProperties}
              />
            </div>


          </div>

          {/* right features */}
          <div className="order-3 space-y-10">
            {RIGHT_FEATURES.map((f, i) => (
              <Reveal key={f.n} delay={i * 100}>
                <FeatureBlock {...f} align="right" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}