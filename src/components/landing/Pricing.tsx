import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$200",
    period: "1-month subscription",
    href: "https://whop.com/checkout/plan_unwdvLZWYlnSp",
    features: [
      "1 Real Account License",
      "Unlimited Demo Accounts",
      "Optimized Set Files Included",
      "Prop Firm Compatible (FTMO, FundingPips +)",
      "1-on-1 Setup Assistance",
      "Private Community Access",
    ],
  },
  {
    name: "Accelerator",
    price: "$300",
    period: "2-month subscription",
    href: "https://whop.com/checkout/plan_pdMEANS0s37d5",
    features: [
      "1 Real Account License",
      "Unlimited Demo Accounts",
      "Optimized Set Files Included",
      "Prop Firm Compatible (FTMO, FundingPips +)",
      "1-on-1 Setup Assistance",
      "Private Community Access",
    ],
    popular: true,
  },
  {
    name: "Professional",
    price: "$600",
    period: "One-time payment · Lifetime License",
    href: "https://whop.com/checkout/plan_gLqYxFwVJNOJB",
    features: [
      "1 Real Account License",
      "Unlimited Demo Accounts",
      "Optimized Set Files Included",
      "Free Lifetime Updates",
      "Prop Firm Compatible (FTMO, FundingPips +)",
      "1-on-1 Setup Assistance",
      "Private Community Access",
    ],
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
            Choose your plan. <span className="text-gradient">Start passing.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Flexible subscriptions or lifetime access. Pick what fits your trading journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-neon text-xs font-medium">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}
              <div className={`relative glass rounded-3xl p-8 flex flex-col h-full ${plan.popular ? "glow-border" : "border border-border/50"}`}>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">Omni Gladiator Pro V7</p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{plan.period}</p>

                <Button
                  variant={plan.popular ? "neon" : "neon-outline"}
                  size="xl"
                  className="w-full mt-6"
                  asChild
                >
                  <a href={plan.href} target="_blank" rel="noopener noreferrer">
                    Purchase Now
                  </a>
                </Button>

                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
