import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/** Compteur animé (ease-out cubique) déclenché quand `play` passe à vrai. */
export function useCountUp(target: number, play: boolean, duration = 1700): number {
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!play) return;
    if (reduced) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, target, duration, reduced]);

  return val;
}
