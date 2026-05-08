const logos = ["FTMO", "Funding Pips", "Alpha Capital", "MetaTrader 5", "MyFxBook", "The5ers", "FundedNext", "E8 Markets"];

export function TrustMarquee() {
  return (
    <section className="py-12 border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Compatible & verified with
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="marquee flex gap-16 w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors whitespace-nowrap">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
