import { useState, useEffect } from "react";
import { Activity, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Features", href: "#features" },
  { label: "Live Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
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

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="neon" size="sm" asChild>
              <a href="#pricing">Get Started</a>
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden glass rounded-xl mt-2 p-4 flex flex-col gap-3 animate-fade-in">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <Button variant="neon" size="sm" asChild>
              <a href="#pricing">Get Started</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
