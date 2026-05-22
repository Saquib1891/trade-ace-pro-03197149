import { useState, useEffect } from "react";
import { Activity, Menu, X, Send, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Features", href: "#features" },
  { label: "Live Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Send, label: "Telegram", href: "https://t.me/GladIndicator" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/gladiatorsoft123/?hl=en" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@Gladiator189" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-6xl px-4 ${scrolled ? "glass rounded-2xl" : ""}`}>
        <nav className="flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-neon blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-neon to-neon/60 flex items-center justify-center">
                <Activity className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
              </div>
            </div>
            <span className="font-bold text-lg tracking-tight">Omni Gladiator Pro V7</span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-8 w-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-neon transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-neon/40 bg-neon/5 text-xs font-semibold text-neon hover:bg-neon/10 transition-colors"
            >
              MQL5 <ExternalLink className="h-3 w-3" />
            </a>
            <Button variant="neon" size="sm" asChild className="ml-2">
              <a href="#pricing">Get Started</a>
            </Button>
          </div>

          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden glass rounded-xl mt-2 p-4 flex flex-col gap-3 animate-fade-in">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border/40">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="h-9 w-9 rounded-md border border-border/60 flex items-center justify-center text-muted-foreground hover:text-neon">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a href="#" className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md border border-neon/40 bg-neon/5 text-xs font-semibold text-neon">
                MQL5 <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <Button variant="neon" size="sm" asChild>
              <a href="#pricing">Get Started</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
