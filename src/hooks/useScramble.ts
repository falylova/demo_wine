import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

const CHARS = "◆·—ÉCARLTDOMNVX0123456789";

/** Effet « décodage » : les caractères se brouillent puis se fixent. */
export function useScramble(text: string, play: boolean): string {
  const reduced = useReducedMotion();
  const [out, setOut] = useState(() => (reduced ? text : "\u00A0"));

  useEffect(() => {
    if (!play) return;
    if (reduced) {
      setOut(text);
      return;
    }
    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 1;
      const settled = Math.floor(frame / 2.4);
      const next = text
        .split("")
        .map((ch, i) => {
          if (ch === " " || ch === "—" || i < settled) return ch;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setOut(next);
      if (settled <= text.length) {
        raf = requestAnimationFrame(tick);
      } else {
        setOut(text);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, text, reduced]);

  return out;
}
