import { Reveal } from "./Reveal";
import type { CSSProperties } from "react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh bg-wine justify-center items-center 
    overflow-hidden pt-10 sm:pt-20 mx-0 lg:pt-4 lg:mx-20">
      <div className="relative mx-auto grid w-full items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-8">
        <div className="relative flex flex-col items-center z-10">
          <Reveal delay={100}>
            <h1 className=" font-display text-center text-[clamp(5rem,6vw,8rem)] font-normal text-cream">
              Finest wine By fal
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className=" text-center mt-2 max-w-md text-base leading-relaxed text-cream/85 text-[clamp(1.25rem,1.5vw,4rem)]">
                Discover the excellence <span className="text-cream/85">of Madagascar wine</span> — 
                a perfect harmony of passion, tradition, and elegance, created to offer a unique tasting experience.            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#redwine"
                className="text-[clamp(1rem,1vw,3rem)] group bg-wine-soft inline-flex items-center gap-3 rounded-md border
                 border-black bg-wine-800/60 px-8 py-4 text-sm font-medium hover:text-wine text-cream backdrop-blur-sm transition-all duration-300 hover:border-rose-soft hover:bg-rose-soft hover:tracking-wide"
              >
                Discover
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#promotions" className="text-[clamp(1rem,1vw,3rem)] text-cream/70 underline-offset-4 transition-colors hover:text-rose-soft hover:underline">
                View history
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative flex items-center m-0 justify-center lg:justify-end">

          <div className="relative flex items-center justify-center">

            <div 
              aria-hidden="true"
              className="pointer-events-none absolute -z-0 h-[450px] w-[450px] sm:h-[550px] sm:w-[550px] lg:h-[650px] lg:w-[650px] 
              opacity-85 mix-blend-screen scale-110"
            >
              <svg 
                viewBox="0 0 500 500" 
                className="h-full w-full drop-shadow-[0_10px_25px_rgba(63,10,12,0.6)]"
              >
                <defs>
                  <radialGradient id="wineSplashGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f0b5be" stopOpacity="0.4" />
                    <stop offset="40%" stopColor="#3F0A0C" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#100100" stopOpacity="0" />
                  </radialGradient>
                </defs>
                
                <g fill="url(#wineSplashGrad)">
                  <path d="M250 110 C290 100, 320 130, 350 140 C390 160, 420 200, 410 250 C400 310, 370 370, 310 400 C260 425, 190 410, 140 370 C90 330, 80 260, 110 200 C140 140, 200 120, 250 110 Z" />
                  
                  <circle cx="120" cy="130" r="14" />
                  <circle cx="90" cy="160" r="8" />
                  <circle cx="380" cy="110" r="18" />
                  <circle cx="420" cy="140" r="10" />
                  <circle cx="430" cy="320" r="12" />
                  <circle cx="400" cy="370" r="7" />
                  <circle cx="160" cy="430" r="16" />
                  <circle cx="120" cy="410" r="9" />
                  <circle cx="70" cy="280" r="15" />
                  
                  <path d="M360 90 Q370 70 375 60 Q380 70 375 85 Z" />
                  <path d="M130 100 Q110 80 100 70 Q115 85 125 95 Z" />
                  <path d="M440 260 Q460 265 470 270 Q455 275 445 270 Z" />
                  <path d="M80 340 Q60 355 50 365 Q65 360 75 350 Z" />
                </g>
              </svg>
            </div>

            <div 
              aria-hidden="true"
              className="pointer-events-none absolute h-64 w-64 rounded-full bg-rose-soft/10 blur-3xl"
            />

            <img
              src="/images/bottle.png"
              alt="Bouteille FAL 3D Red Wine, millésime 2025"
              className="bottle-float relative z-10 mx-auto h-[480px] w-auto object-contain drop-shadow-[0_60px_40px_rgba(0,0,0,0.8)] sm:h-[560px] lg:h-[700px]"
              style={{ "--rot": "-30deg" } as CSSProperties}
            />
            
            {/* réflexion douce au sol */}
            <div className="absolute -bottom-4 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-full bg-black/70 blur-2xl" aria-hidden="true" />
          </div>

        </div>

      </div>

    </section>
  );
}