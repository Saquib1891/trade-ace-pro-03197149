import { createFileRoute, useSearch, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, MessageCircle, Clock, ShoppingBag, Shield, FileText,
  LifeBuoy, AlertTriangle, Check, ArrowLeft, Send
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const tabs = [
  { id: "contact", label: "Contact", icon: Mail },
  { id: "privacy", label: "Privacy", icon: Shield },
  { id: "terms", label: "Terms", icon: FileText },
  { id: "support", label: "Support", icon: LifeBuoy },
] as const;

type TabId = typeof tabs[number]["id"];

export const Route = createFileRoute("/legal")({
  validateSearch: z.object({
    tab: z.enum(["contact", "privacy", "terms", "support"]).optional(),
  }),
  head: () => ({
    meta: [
      { title: "Legal & Support — Gladiator Software" },
      { name: "description", content: "Contact, Privacy Policy, Terms of Service, and Technical Support for Gladiator Software." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  const { tab } = useSearch({ from: "/legal" });
  const [active, setActive] = useState<TabId>(tab ?? "contact");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-28 pb-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar tabs */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {tabs.map((t) => {
                const Icon = t.icon;
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? "border-neon/40 bg-neon/10 text-neon shadow-[0_0_20px_-8px_rgba(88,166,255,0.6)]"
                        : "border-border/60 bg-card/30 text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {t.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <section className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {active === "contact" && <ContactPanel />}
                {active === "privacy" && <PrivacyPanel />}
                {active === "terms" && <TermsPanel />}
                {active === "support" && <SupportPanel />}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PanelHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-neon bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="mt-2 text-muted-foreground">{subtitle}</p>
    </header>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 p-6 hover:border-neon/30 transition-colors">
      {children}
    </div>
  );
}

function ContactPanel() {
  return (
    <>
      <PanelHeader
        title="Contact Gladiator Software"
        subtitle="Have questions about our indicators, automated Expert Advisors, or subscription options? Our technical support team is here to assist you."
      />
      <div className="grid md:grid-cols-2 gap-5">
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="h-5 w-5 text-neon" />
            <h3 className="font-semibold">Get in Touch</h3>
          </div>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <ShoppingBag className="h-4 w-4 text-neon shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Official Marketplace</p>
                <p className="text-muted-foreground">Whop — verified purchases &amp; licensing</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 text-neon shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Email Support</p>
                <a href="mailto:support@gladiatorsoftware.com" className="text-neon hover:underline">
                  support@gladiatorsoftware.com
                </a>
                <p className="text-muted-foreground text-xs mt-1">Response within 24 business hours</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 text-neon shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Operating Hours</p>
                <p className="text-muted-foreground">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
              </div>
            </li>
          </ul>
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="h-5 w-5 text-neon" />
            <h3 className="font-semibold">Discord &amp; Community</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Join our private trader community for direct communication with the developer,
            configuration tips, and market updates.
          </p>
          <p className="text-sm text-muted-foreground mb-5">
            The community link is accessible via your <span className="text-foreground font-medium">Whop Customer Dashboard</span> after purchase.
          </p>
          <a
            href="https://t.me/GladIndicator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neon/40 bg-neon/10 px-4 py-2 text-sm font-medium text-neon hover:bg-neon/20 transition-colors"
          >
            <Send className="h-4 w-4" /> Join Telegram Channel
          </a>
        </Card>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 p-6 mb-4">
      <h3 className="text-lg font-semibold text-neon mb-3">{title}</h3>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function PrivacyPanel() {
  return (
    <>
      <PanelHeader title="Privacy Policy" subtitle="Last Updated: July 2026" />
      <Section title="1. Information We Collect">
        <p>
          <span className="text-foreground font-medium">Account Data</span> is securely received via Whop
          for billing verification purposes only. We do not directly collect or store payment credentials.
        </p>
        <p>
          <span className="text-foreground font-medium">Terminal Security Data</span> (account variables
          and licensing tokens) is verified locally on your MetaTrader terminal, strictly to enforce
          60-day or lifetime licensing structures and to prevent piracy or unauthorized redistribution.
        </p>
      </Section>
      <Section title="2. No Financial Record Storage">
        <p>
          All payment processes are fully encrypted and handled directly through Whop's financial
          architecture. Gladiator Software does not store, process, or retain any cardholder or
          banking information on its servers.
        </p>
      </Section>
      <Section title="3. Data Sharing">
        <p>
          Your data is <span className="text-foreground font-medium">never sold or shared</span> with
          retail third parties, advertisers, or affiliates. Any information processed is used strictly
          internally for critical product updates, licensing validation, and technical support.
        </p>
      </Section>
    </>
  );
}

function TermsPanel() {
  return (
    <>
      <PanelHeader title="Terms of Service" subtitle="Last Updated: July 2026" />
      <Section title="1. License Scope & Expiry">
        <p>
          Subscriptions (monthly or multi-month rentals) contain in-built expiration tokens. Access
          ceases automatically unless a renewal is processed via Whop.
        </p>
        <p>
          Reverse-engineering, decompiling, distributing raw source code (<code className="text-neon">.mq5</code>
          /<code className="text-neon">.pin</code>), or executing unauthorized modifications is strictly prohibited
          and will result in immediate license revocation.
        </p>
      </Section>
      <Section title="2. Financial & Risk Disclaimer">
        <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4 mb-3">
          <div className="flex gap-2 items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
            <p className="font-bold text-foreground">
              Trading financial markets involves high risk and may not be suitable for all investors.
            </p>
          </div>
        </div>
        <p>
          All software parameters, filters (EMA, ADX, Chandelier), and indicators are provided strictly
          for algorithmic or educational purposes. Gladiator Software does not guarantee absolute
          profitability, and the user bears full structural responsibility for any financial capital risked.
        </p>
      </Section>
    </>
  );
}

function SupportPanel() {
  return (
    <>
      <PanelHeader
        title="Technical Support Helpdesk"
        subtitle="Need help setting up your Expert Advisor or configuring chart filters?"
      />
      <Card>
        <h3 className="font-semibold text-neon mb-4 flex items-center gap-2">
          <LifeBuoy className="h-5 w-5" /> Quick Setup Guide
        </h3>
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-medium text-foreground mb-1">MetaTrader 5 Installation</p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-1 pl-2">
              <li>Open MT5 Terminal</li>
              <li>Navigate to <span className="text-neon">File &gt; Open Data Folder</span></li>
              <li>Copy <code className="text-neon">.mq5</code> / <code className="text-neon">.ex5</code> into <span className="text-neon">MQL5/Experts</span> folder</li>
              <li>Restart MT5 and drag the EA onto your chart</li>
            </ol>
          </div>
          <div className="border-t border-border/50 pt-4">
            <p className="font-medium text-foreground mb-1 flex items-center gap-2">
              <Check className="h-4 w-4 text-neon" /> Enable Algo Trading
            </p>
            <p className="text-muted-foreground">
              Ensure the <span className="text-neon font-medium">"Algo Trading"</span> button on the top
              toolbar is turned <span className="text-green-400 font-semibold">ON (Green)</span>.
            </p>
          </div>
        </div>
      </Card>

      <div className="mt-5">
        <Card>
          <h3 className="font-semibold text-neon mb-4">Common Troubleshooting FAQ</h3>
          <div className="space-y-5 text-sm">
            <div>
              <p className="font-medium text-foreground mb-1">Q: Why does my screen show "EXPIRED"?</p>
              <p className="text-muted-foreground">
                A: Your subscription cycle has finished. Ensure your subscription token matches your
                active Whop billing status, then reload the EA on your chart.
              </p>
            </div>
            <div className="border-t border-border/50 pt-4">
              <p className="font-medium text-foreground mb-1">Q: The EA is on the chart but not opening trades?</p>
              <p className="text-muted-foreground">
                A: Check <span className="text-neon">Terminal &gt; Journal</span> logs. Ensure the spread
                filter isn't breaching your <code className="text-neon">InpMaxSpread</code> setting and
                your daily loss buffers are within safe range.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
