import { useState } from "react";
import { Reveal } from "./Reveal";

export function RedWine() {
  const [added, setAdded] = useState(false);
  const [addedRed, setAddedRed] = useState(false);

  return (
    <section id="redwine" className="relative min-h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#EBE5DB]" />
        <div className="bg-[#1C0507]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-center lg:flex">
        <div className="relative h-[650px] w-[720px]">

          <img
            src="/images/white.png"
            alt="White Wine bottle"
            className="bottle-float absolute top-0 left-45 h-[580px] w-auto -rotate-200 object-contain 
            drop-shadow-[-20px_30px_30px_rgba(0,0,0,0.5)]"
          />

          <img
            src="/images/bottle.png"
            alt="Red Wine bottle"
            className="bottle-float absolute top-12 right-4 h-[580px] w-auto rotate-[-20deg] object-contain 
            drop-shadow-[20px_30px_30px_rgba(0,0,0,0.5)]"
          />

        </div>
      </div>


      <div className="relative z-30 mx-auto grid min-h-[85vh] max-w-[1400px] grid-cols-1 items-center px-6 py-16 lg:grid-cols-2 lg:px-16 xl:px-24">

        {/* WHITE WINE */}
        <div className="max-w-sm space-y-6 justify-self-start text-left text-[#1C0507] lg:pr-16 xl:pr-24">

          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              WHITE WINE
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-[#1C0507]/80 sm:text-lg">
              Crafted from carefully selected white grapes grown in Madagascar,
              this elegant cuvée reveals a delicate character — pale gold in the glass,
              with bright citrus aromas, floral notes, and a refined mineral finish.
            </p>
          </Reveal>


          <Reveal delay={200}>
            <div className="mt-8 flex flex-col items-center">

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-wine/80">
                Limited Offer
              </span>

              <div className="mt-3 flex items-baseline gap-3">

                <span className="font-display text-4xl italic text-wine-soft">
                  30,000 Ar
                </span>

                <span className="text-sm text-wine/50 line-through">
                  45,000 Ar
                </span>

              </div>

              <p className="mt-2 text-xs text-wine/60">
                Code{" "}
                <span className="rounded border border-wine/40 px-2 py-0.5 font-mono text-wine">
                  WINE10
                </span>{" "}
                · valid until October 31, 2026
              </p>

            </div>
          </Reveal>


          <Reveal delay={300}>
            <button
            onClick={() => {
              setAdded(true);

              document.getElementById("accessories")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });

              window.setTimeout(() => setAdded(false), 1800);
            }}
              className={`mt-6 bg-wine-soft flex items-center gap-3 rounded-full border 
                px-10 py-4 text-xs
              font-semibold uppercase tracking-[0.24em] transition-all duration-300 ${
                added
                  ? "border-[#c9a458] bg-wine/50 text-cream"
                  : "border-[#c9a458]/60 text-cream hover:bg-cream hover:text-wine-soft"
              }`}
            >
            Buy Now
            </button>
          </Reveal>

        </div>


        {/* RED WINE */}
        <div className="mt-12 max-w-sm justify-self-end text-right text-cream lg:mt-0 lg:pl-16 xl:pl-24">

          <Reveal delay={150}>
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              RED WINE
            </h2>
          </Reveal>


          <Reveal delay={250}>
            <p className="mt-6 text-base leading-relaxed text-cream/80 sm:text-lg">
              Created from carefully selected red grapes and aged for 18 months
              in oak barrels, this signature cuvée delivers depth and structure —
              a rich garnet color, silky tannins, and a long finish of dark fruits,
              spice, and vanilla.
            </p>
          </Reveal>


          <Reveal delay={350}>
            <div className="mt-8 flex flex-col items-center justify-end gap-6">

              <div className="text-right">

                <span className="block text-xs uppercase tracking-widest text-cream/60">
                  Bottle Price
                </span>

                <span className="font-display text-3xl italic">
                  40,000 Ar
                </span>

              </div>


              <button
                onClick={() => {
                  setAddedRed(true);
                  window.setTimeout(() => setAddedRed(false), 1800);
                }}
                className="rounded-full bg-[#3F0A0C] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-cream transition-all duration-300 hover:bg-rose-soft hover:text-wine"
              >
                buy now
              </button>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}