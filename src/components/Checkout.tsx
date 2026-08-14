import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

/** Format card number into groups of 4. */
function formatCard(v: string): string {
  const digits = v.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExp(v: string): string {
  const d = v.replace(/\D/g, "").slice(0, 4);
  if (d.length < 3) return d;
  return `${d.slice(0, 2)}/${d.slice(2)}`;
}

const inputBase =
  "w-full rounded-lg border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-cream placeholder:text-cream/40 transition-colors focus:border-rose-soft focus:bg-white/[0.07] focus:outline-none [color-scheme:dark]";

export function Checkout() {
  const [form, setForm] = useState({ email: "", card: "", exp: "", cvc: "", name: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, boolean> = {};

    if (!/.+@.+\..+/.test(form.email)) errs.email = true;
    if (form.card.replace(/\s/g, "").length < 13) errs.card = true;
    if (!/^\d{2}\/\d{2}$/.test(form.exp)) errs.exp = true;
    if (form.cvc.length < 3) errs.cvc = true;
    if (!form.name.trim()) errs.name = true;

    setErrors(errs);
    if (Object.keys(errs).length === 0) setDone(true);
  };

  return (
    <section id="accessories" className="relative overflow-hidden bg-wine-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_30%_50%,rgba(163,24,44,0.25),transparent_70%)]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
        {/* left column: illustration */}
        <Reveal>
          <div className="relative flex overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
            <img
              src="/images/bottles-row.png"
              alt="Red wine bottles arranged with tasting glass"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-linear-to-tr from-wine-950/70 via-transparent to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">


              <h3 className="font-display mt-2 text-3xl w-full font-medium leading-tight 
              text-rose-soft sm:text-4xl">
                Two vintages,
                <br />
                <em className="text-rose-soft">one signature case.</em>
              </h3>

              <ul className="mt-5 flex  gap-10 text-sm text-cream/90">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-rose-soft" /> White Wine 
                </li>

                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-rose-soft" /> Red Wine 
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* right column: checkout form */}
        <div className="lg:pl-8">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-rose-soft">
              <span className="h-px w-8 bg-rose-soft/60" />
              Secure Checkout
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display text-4xl font-normal leading-[1.05] text-cream sm:text-5xl">
              Receive your collection <em className="text-rose-soft">at home</em>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/80">
              Shipping available across Madagascar, secure packaging, and flexible payment options available.
              Pay in full or choose an installment plan.
            </p>
          </Reveal>

          <Reveal delay={300}>
            {!done ? (
              <form
                onSubmit={submit}
                noValidate
                className="mt-8 space-y-5 rounded-2xl border border-white/10 bg-black/25 p-6 sm:p-7"
              >
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-cream/80">Email Address</span>

                  <input
                    type="email"
                    placeholder="nom@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`${inputBase} ${errors.email ? "border-rose-soft" : ""}`}
                    aria-invalid={errors.email || undefined}
                  />
                </label>

                <div>
                  <span className="mb-2 block text-xs font-medium text-cream/80">Card Information</span>

                  <div className="rounded-lg border border-white/12 bg-white/4 transition-colors focus-within:border-rose-soft">
                    <div className="relative">
                      <input
                        inputMode="numeric"
                        placeholder="0000 0000 0000 0000"
                        value={form.card}
                        onChange={(e) => setForm({ ...form, card: formatCard(e.target.value) })}
                        className="w-full bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
                        aria-invalid={errors.card || undefined}
                      />

                      <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5" aria-hidden="true">
                        <span className="rounded-sm bg-linear-to-br from-rose-soft to-wine-500 px-1.5 py-0.5 text-[9px] font-bold text-white">
                          VISA
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 border-t border-white/12">
                      <input
                        inputMode="numeric"
                        placeholder="MM/YY"
                        value={form.exp}
                        onChange={(e) => setForm({ ...form, exp: formatExp(e.target.value) })}
                        className="border-r border-white/12 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
                        aria-invalid={errors.exp || undefined}
                      />

                      <input
                        inputMode="numeric"
                        placeholder="CVC"
                        maxLength={4}
                        value={form.cvc}
                        onChange={(e) =>
                          setForm({ ...form, cvc: e.target.value.replace(/\D/g, "").slice(0, 4) })
                        }
                        className="bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
                        aria-invalid={errors.cvc || undefined}
                      />
                    </div>
                  </div>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-cream/80">Name on Card</span>

                  <input
                    type="text"
                    placeholder="Rakoto"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${inputBase} ${errors.name ? "border-rose-soft" : ""}`}
                    aria-invalid={errors.name || undefined}
                  />
                </label>

                {Object.keys(errors).length > 0 && (
                  <p className="text-xs text-rose-soft">
                    Please complete the highlighted fields.
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-wine-soft py-4 text-sm font-semibold 
                  uppercase tracking-[0.22em] text-cream transition-all hover:tracking-[0.28em]
                   hover:bg-cream hover:text-wine-soft"
                >
                  Pay
                </button>

                <p className="text-center text-[11px] text-cream/50">
                  🔒 Encrypted payment · no charge before shipment
                </p>
              </form>
            ) : (
              <div className="mt-8 rounded-2xl border border-rose-soft/40 bg-wine-900/60 p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-soft text-wine-900">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>

                <h3 className="font-display mt-5 text-2xl italic text-cream">
                  Thank you, {form.name.split(" ")[0]}!
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-cream/85">
                  Your collection will leave our cellar tomorrow morning. A tracking email will be sent shortly to
                  <span className="text-rose-soft"> {form.email}</span>.
                </p>

                <button
                  onClick={() => {
                    setDone(false);
                    setForm({ email: "", card: "", exp: "", cvc: "", name: "" });
                  }}
                  className="mt-6 text-xs uppercase tracking-widest text-rose-soft 
                  underline-offset-4 hover:underline"
                >
                  Place a new order
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}