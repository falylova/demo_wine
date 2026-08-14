import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../utils/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "p" | "h2" | "h3" | "li" | "figure" | "span";
}

/** Enveloppe qui révèle son contenu à l'entrée dans le viewport. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      data-reveal
      className={cn(inView && "in-view", className)}
      style={{ "--rd": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
