import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neon to-neon/60 flex items-center justify-center">
                <Activity className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg">MT5 EA Pro</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              The professional Expert Advisor for traders serious about getting funded.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#results" className="hover:text-foreground">Live Results</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
              <li><a href="#" className="hover:text-foreground">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-border/50 bg-background/40 p-5 mb-8">
          <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Risk Disclaimer</h5>
          <p className="text-xs text-muted-foreground/80 leading-relaxed">
            Trading foreign exchange and CFDs on margin carries a high level of risk and may not be suitable for all investors.
            Past performance shown by this Expert Advisor is not indicative of future results. The high degree of leverage can work
            against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives,
            level of experience, and risk appetite. There is a possibility you could sustain a loss of some or all of your initial
            investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the
            risks associated with trading and seek advice from an independent financial advisor if you have any doubts. MT5 EA Pro
            is a software tool — results vary based on market conditions, broker execution, and configuration.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MT5 EA Pro. All rights reserved.</p>
          <p>Built for serious traders.</p>
        </div>
      </div>
    </footer>
  );
}
