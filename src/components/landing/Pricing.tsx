import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const baseFeatures = [
  "1 Real Account License",
  "Unlimited Demo Accounts",
  "Optimized Set Files Included",
  "Free Lifetime Updates",
  "Prop Firm Compatible (FTMO, FundingPips +)",
  "1-on-1 Setup Assistance",
  "Private Community Access",
];

const plans = [
  {
    name: "1 Month Access",
    price: "$200",
    period: "Monthly subscription",
    badge: null,
    href: "https://whop.com/checkout/plan_unwdvLZWYlnSp",
  },
  {
    name: "2 Month Access",
    price: "$300",
    period: "2-month subscription",
    badge: "Popular",
    href: "https://whop.com/checkout/plan_pdMEANS0s37d5",
  },
  {
    name: "Lifetime Access",
    price: "$600",
    period: "One-time payment · Lifetime License",
    badge: "Best Value",
    href: "https://whop.com/checkout/plan_gLqYxFwVJNOJB",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-neon mb-3">Pricing</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Choose your <span className="text-gradient">access plan.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Flexible subscriptions or lifetime ownership. Pick what fits your trading journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className={`absolute -inset-2 blur-2xl rounded-3xl ${plan.badge ? "bg-neon/20" : "bg-neon/10"}`} />
              <div className="relative glass rounded-3xl p-7 glow-border h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  {plan.badge ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-neon text-xs font-medium">
                      <Sparkles className="h-3 w-3" />
                      {plan.badge}
                    </div>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-muted-foreground">{plan.period}</span>
                </div>

                <h3 className="text-lg font-semibold">Omni Gladiator Pro V7</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.name}</p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>

                <Button variant="neon" size="xl" className="w-full mt-6" asChild>
                  <a href={plan.href} target="_blank" rel="noopener noreferrer">
                    Purchase Now
                  </a>
                </Button>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {baseFeatures.map((f) => (
                    <li key={f + plan.name} className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-neon/15 border border-neon/30 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-neon" strokeWidth={3} />
                      </div>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
