import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#promotions", label: "Craft" },
  { href: "#redwine", label: "Our collections" },
  { href: "#license", label: "Notice" }

];

export function Nav() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si une section entre dans la zone de lecture (vers le haut de l'écran)
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        // Active la section quand son sommet passe à 30% du haut de l'écran
        rootMargin: "-20% 0px -75% 0px",
      }
    );

    LINKS.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center m-0">
      <nav
        aria-label="Navigation principale"
        className="pointer-events-auto flex items-center gap-1 border border-black/10 bg-wine-950/70 
        px-2 py-1.5 shadow-[0_18px_48px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md sm:gap-2 sm:px-3 sm:py-2"
      >
        {/* liens desktop */}
        <ul className="hidden items-center gap-1 sm:flex">
          {LINKS.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-wine-soft text-cream-900"
                      : "text-cream/85 hover:bg-white/8"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* mobile : label actif + bouton */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          className="flex items-center gap-3 rounded-full bg-wine-soft/95 px-4 py-2 text-[13px] font-medium text-wine-900 sm:hidden"
        >
          {LINKS.find((l) => l.href === active)?.label ?? "Menu"}
          <svg
            viewBox="0 0 24 24"
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </nav>

      {/* menu déroulant mobile */}
      {open && (
        <div className="pointer-events-auto absolute top-20 w-[min(320px,90vw)] overflow-hidden rounded-2xl border border-white/10 bg-wine-950/95 shadow-2xl backdrop-blur-md sm:hidden">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 px-5 py-4 text-sm text-cream/85 last:border-b-0 hover:bg-white/5 hover:text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}