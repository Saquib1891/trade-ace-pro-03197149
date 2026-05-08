import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import mt5Chart from "@/assets/mt5-chart.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-neon" />
          New: v3.2 with adaptive risk engine
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Automate Your Trading &<br />
          <span className="text-gradient">Pass Any Prop Firm Challenge</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          The ultimate MT5 Expert Advisor with built-in equity protection,
          news filtering, and ultra-low drawdown — engineered for funded traders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button variant="neon" size="xl" asChild>
            <a href="#pricing">Buy Now — $150 <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <Button variant="neon-outline" size="xl" asChild>
            <a href="#results">See Live Results</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 md:mt-20 relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-4 bg-neon/20 blur-3xl rounded-full" />
          <div className="relative glass rounded-2xl p-4 md:p-6 shadow-[var(--shadow-card)] glow-border">
            <DashboardMockup />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-2 md:-right-10 glass rounded-xl px-4 py-3 hidden sm:flex items-center gap-2"
          >
            <TrendingUp className="h-4 w-4 text-neon" />
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Profit today</div>
              <div className="text-sm font-bold text-neon">+$2,847.30</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -left-2 md:-left-10 glass rounded-xl px-4 py-3 hidden sm:flex items-center gap-2"
          >
            <div className="h-2 w-2 rounded-full bg-neon pulse-glow" />
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Win rate</div>
              <div className="text-sm font-bold">92.4%</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-xl bg-background/60 p-3 md:p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs text-muted-foreground">XAUUSD · M5 · Live</div>
          <div className="text-lg md:text-xl font-bold mt-0.5">Omni_Gladiator_Pro_V7</div>
        </div>
        <span className="px-2 py-1 text-[10px] rounded bg-neon/10 text-neon border border-neon/30">EA ACTIVE</span>
      </div>
      <img
        src={mt5Chart}
        alt="Omni Gladiator Pro V7 live MT5 chart on XAUUSD M5"
        className="w-full h-auto rounded-lg border border-border/40"
      />
    </div>
  );
}
