import { motion } from "framer-motion";
import { Shield, Newspaper, Settings, TrendingDown, Repeat, MessageCircle } from "lucide-react";

const features = [
  { icon: Shield, title: "Equity Protector", desc: "Hard stop loss, daily drawdown limits, and account-level safeguards built-in." },
  { icon: Newspaper, title: "Smart News Filter", desc: "Automatically pauses trading during high-impact news events." },
  { icon: Settings, title: "Plug & Play", desc: "Easy 5-minute setup for MT5. Drag, drop, and let the EA run." },
  { icon: TrendingDown, title: "Low Drawdown", desc: "Optimized for the strict drawdown rules of every major prop firm." },
  { icon: Repeat, title: "Strategy Adaptability", desc: "Works seamlessly on Gold, Indices, and major Forex pairs." },
  { icon: MessageCircle, title: "24/7 Support", desc: "Lifetime updates, set files, and one-on-one setup assistance." },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-neon mb-3">Core Features</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-gradient">stay funded</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Engineered with prop firm rules in mind. Every feature exists to protect your capital and pass evaluations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl p-6 glass hover:border-neon/40 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "radial-gradient(circle at top, oklch(0.88 0.22 145 / 0.08), transparent 70%)" }} />
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
