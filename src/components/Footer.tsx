const COLS: Array<{ title: string; links: string[] }> = [
  {
    title: "Wines",
    links: ["Red Wine", "Red Wine Reserve", "White Wine", "Rosé", "Tasting Collections"],
  },
  {
    title: "The Estate",
    links: ["Our Story", "The Vineyard", "The Cellar", "Harvest"],
  },
  {
    title: "Experience",
    links: ["Food Pairings", "Wine Journal", "Wine Details", "FAQ"],
  },
  {
    title: "Company",
    links: ["Contact Us", "Private Tastings", "Press"],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="relative border-t border-wine/40 bg-parchment text-wine">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20">

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))] lg:gap-10">

          {/* logo + description */}
          <div>
            <p className="font-display text-3xl font-medium leading-none tracking-tight text-wine">
              FAL <span className="italic text-wine-600">Wine</span>
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-wine">
              Madagascar
            </p>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-wine/75">
              A boutique wine house from Madagascar, crafting elegant wines with
              passion, patience, and respect for the land.
            </p>

            <p className="mt-6 text-xs text-wine/60">
              Madagascar
              <br />
              Premium Wine Collection
            </p>
          </div>


          {/* navigation columns */}
          {COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-wine">
                {col.title}
              </p>

              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-wine/80 transition-colors hover:text-wine"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

        </div>
      </div>


      <div className="border-t border-wine/20">

        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-4 px-6 py-6 text-xs text-wine-950/70 sm:flex-row sm:items-center sm:px-10">

          <p>
            © 2026 FAL Wine Madagascar — All rights reserved
          </p>


          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-wine">
              Legal Information
            </a>

            <a href="#" className="hover:text-wine">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-wine">
              Privacy Policy
            </a>
          </div>


          <p className="text-[11px] font-medium text-wine-700">
            Alcohol abuse is dangerous to your health. Drink responsibly.
          </p>

        </div>

      </div>
    </footer>
  );
}