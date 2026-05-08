import { motion } from "framer-motion";
import { Sparkles, Swords, Zap, ShieldCheck, Scale, TrendingUp, LineChart, Cpu, Crown } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Multi-Asset Intelligence",
    desc: "Custom-tuned algorithms for Gold (XAUUSD), Bitcoin (BTC), and major Forex pairs. Switch modes instantly in settings.",
  },
  {
    icon: Swords,
    title: "Gladiator Mode",
    desc: "Our signature double-lock entry: 89 EMA macro trend confirmation + Chandelier volatility shift. Built for maximum win-rate.",
    pro: true,
  },
  {
    icon: Zap,
    title: "Aggressive Mode",
    desc: "Rapid entries tuned for fast-moving, high-volatility markets when you want to push the throttle.",
  },
  {
    icon: ShieldCheck,
    title: "Conservative Mode",
    desc: "Extra filtering for steady, low-drawdown growth — ideal for funded accounts and slow compounding.",
  },
  {
    icon: Scale,
    title: "Professional Risk Scaling",
    desc: "Built-in Auto-Lot calculates position size from a % of equity. Stay inside strict prop firm drawdown limits.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Chandelier Trailing",
    desc: "ATR-based Chandelier exits trail your stop loss in real time, locking in profit as the trend extends.",
  },
  {
    icon: LineChart,
    title: "Macro Trend Filtering",
    desc: "An 89-period EMA ensures the EA only trades with the dominant trend, slashing fake-out losses.",
  },
  {
    icon: Cpu,
    title: "Smart Execution",
    desc: "100% automated entries, exits, and modifications with a unique Magic Number system to isolate trades.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-neon mb-3">Core Features</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Engineered to <span className="text-gradient">dominate the chart</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every module of Omni Gladiator Pro V7 is built around one goal — protect your capital while compounding consistent gains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-2xl p-6 glass transition-all hover:-translate-y-1 ${
                f.pro ? "border border-neon/40 glow-border" : "hover:border-neon/40"
              }`}
            >
              {f.pro && (
                <div className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-neon px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-[0_0_20px_var(--neon-glow)]">
                  <Crown className="h-3 w-3" />
                  Pro Feature
                </div>
              )}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(circle at top, oklch(0.88 0.22 145 / 0.08), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center mb-5">
                  <f.icon className="h-5 w-5 text-neon" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
