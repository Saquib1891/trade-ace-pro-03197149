import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustMarquee } from "@/components/landing/TrustMarquee";
import { Features } from "@/components/landing/Features";
import { Results } from "@/components/landing/Results";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Omni Gladiator Pro V7 — Pass Any Prop Firm Challenge with Automated Trading" },
      { name: "description", content: "MT5 Expert Advisor with built-in equity protection, news filter, and ultra-low drawdown. Engineered to pass FTMO, FundingPips & all major prop firms." },
      { property: "og:title", content: "Omni Gladiator Pro V7 — Automated Prop Firm Passing System" },
      { property: "og:description", content: "The professional MT5 EA built to pass prop firm challenges. 92% win rate, 4.5% max drawdown, lifetime license." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <Features />
        <Results />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
