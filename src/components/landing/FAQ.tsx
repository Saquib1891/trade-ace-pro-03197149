import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Does it work on MT4?", a: "No. MT5 EA Pro is built exclusively for MetaTrader 5 to leverage its advanced order management, hedging modes, and partial-close functionality that MT4 doesn't support." },
  { q: "Which prop firms are allowed?", a: "The EA is compatible with all major prop firms including FTMO, FundingPips, Alpha Capital, The5ers, FundedNext, and E8 Markets. It respects daily drawdown rules, news restrictions, and minimum trading days." },
  { q: "Do I need a VPS?", a: "We strongly recommend running the EA on a low-latency VPS (under 10ms to your broker). This ensures 24/5 uptime and that no signals are missed when your computer is off." },
  { q: "What's the recommended account size?", a: "The EA is optimized for accounts ranging from $10,000 to $200,000. Smaller accounts work too — risk is calculated as a percentage of equity." },
  { q: "How fast is setup?", a: "Most users have it running in under 5 minutes. We provide step-by-step videos and 1-on-1 assistance if needed." },
  { q: "Is there a refund policy?", a: "Yes. We offer a 30-day money-back guarantee, no questions asked." },
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
