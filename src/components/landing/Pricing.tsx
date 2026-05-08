import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "1 Real Account License",
  "Unlimited Demo Accounts",
  "Optimized Set Files Included",
  "Free Lifetime Updates",
  "Prop Firm Compatible (FTMO, FundingPips +)",
  "1-on-1 Setup Assistance",
  "Private Community Access",
  "30-Day Money Back Guarantee",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-neon mb-3">Pricing</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            One price. <span className="text-gradient">Lifetime access.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">No subscriptions. No upsells. Just one tool that pays for itself.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto relative"
        >
          <div className="absolute -inset-2 bg-neon/20 blur-2xl rounded-3xl" />
          <div className="relative glass rounded-3xl p-8 glow-border">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-neon text-xs font-medium">
                <Sparkles className="h-3 w-3" />
                Most Popular
              </div>
              <span className="text-xs text-muted-foreground">Lifetime</span>
            </div>

            <h3 className="text-xl font-semibold">Omni Gladiator Pro V7</h3>
            <p className="text-sm text-muted-foreground mt-1">Everything you need to pass.</p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-bold">$150</span>
              <span className="text-muted-foreground line-through text-sm">$299</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">One-time payment · Lifetime License</p>

            <Button variant="neon" size="xl" className="w-full mt-8" asChild>
              <a href="https://whop.com/checkout/plan_Gm0meTk74VpSY" target="_blank" rel="noopener noreferrer">
                Purchase Now
              </a>
            </Button>

            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-neon/15 border border-neon/30 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-neon" strokeWidth={3} />
                  </div>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
