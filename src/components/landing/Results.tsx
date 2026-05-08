import { motion } from "framer-motion";

const stats = [
  { value: "92%", label: "Win Rate", suffix: "" },
  { value: "4.5%", label: "Max Drawdown", suffix: "" },
  { value: "15%+", label: "Monthly Target", suffix: "" },
  { value: "1,200+", label: "Funded Traders", suffix: "" },
];

export function Results() {
  return (
    <section id="results" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-neon mb-3">Live Results</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Verified performance.<br/><span className="text-gradient">Real accounts.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden glass"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card/60 p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 relative glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-neon pulse-glow" />
                <span className="text-xs text-muted-foreground">MyFxBook Verified · #84729</span>
              </div>
              <div className="mt-1 text-2xl font-bold">+318.4% <span className="text-sm text-muted-foreground font-normal">(12 months)</span></div>
            </div>
            <div className="flex gap-2">
              {["1M", "3M", "6M", "1Y"].map((p, i) => (
                <button key={p} className={`px-3 py-1 text-xs rounded-md ${i === 3 ? "bg-neon text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>

          <EquityCurve />
        </motion.div>
      </div>
    </section>
  );
}

function EquityCurve() {
  const points = [10, 18, 15, 28, 32, 45, 40, 58, 65, 72, 68, 85, 95, 110, 105, 130, 145, 142, 165, 180];
  const max = Math.max(...points);
  const w = 800, h = 220;
  const path = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - (p / max) * (h - 20) - 10;
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  }).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-48 md:h-56">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.88 0.22 145)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.88 0.22 145)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g)" />
      <path d={path} fill="none" stroke="oklch(0.88 0.22 145)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
