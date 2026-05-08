import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which platform does this EA support?",
    a: "Omni Gladiator Pro V7 is exclusively built for MetaTrader 5 (MT5) to take advantage of its superior execution speed and multi-threading capabilities.",
  },
  {
    q: "Is this EA prop firm friendly?",
    a: "Absolutely. With the integrated InpRiskPercent feature, you can set a hard risk limit (e.g., 0.5% or 1% per trade). This keeps you within the daily and total drawdown limits required by firms like FTMO, Funding Pips, and E8.",
  },
  {
    q: "What assets work best with this software?",
    a: "While it is universal, the code includes optimized logic for Gold, Bitcoin, and Forex. Select your specific asset mode in the settings to automatically adjust the internal filtering.",
  },
  {
    q: "Do I need to keep my computer on 24/7?",
    a: "For best results — and to ensure the trailing stop works correctly — we recommend running the EA on a VPS (Virtual Private Server). This guarantees 100% uptime regardless of your local internet connection.",
  },
  {
    q: "Can I use it on multiple accounts?",
    a: "Yes. The EA uses a Magic Number system, allowing you to run multiple instances on the same account with different settings, or on different accounts depending on your license.",
  },
  {
    q: "What is the 'Gladiator' Signal Mode?",
    a: "It is our proprietary logic that requires a double-lock confirmation: price must be on the correct side of the 89 EMA (macro trend) AND triggered by a Chandelier volatility shift. This is designed to maximize the win rate.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-neon mb-3">FAQ</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Common <span className="text-gradient">questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-xl px-5 border-0"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
