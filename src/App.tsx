import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Promotion } from "./components/Promotion";
import { RedWine } from "./components/RedWine";
import { License } from "./components/License";
import { Checkout } from "./components/Checkout";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-ink text-cream">
      {/* grain argentique subtil sur tout le site */}
      <div
        className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-overlay"
        aria-hidden="true"
      />

      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Promotion />
        <RedWine />
        <License />
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}
