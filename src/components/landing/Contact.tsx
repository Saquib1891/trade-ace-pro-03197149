import { motion } from "framer-motion";
import { Mail, MessageCircle, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAIL = "memorialcollection11@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Questions about Omni Gladiator Pro V7? Reach out directly — we respond personally to every trader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 glow-border relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-neon/20 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-neon/10 border border-neon/30 mb-4">
                <Mail className="h-6 w-6 text-neon" />
              </div>
              <h3 className="text-xl font-bold mb-2">Direct Email</h3>
              <p className="text-sm text-muted-foreground mb-5">
                The fastest way to reach the founder. Pre-sales, licensing, and technical questions welcome.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="block text-base md:text-lg font-medium text-neon hover:underline break-all mb-6"
              >
                {EMAIL}
              </a>
              <Button variant="neon" size="lg" asChild>
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="h-4 w-4" /> Send Email
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-neon/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-neon/10 border border-neon/30 mb-4">
                <LifeBuoy className="h-6 w-6 text-neon" />
              </div>
              <h3 className="text-xl font-bold mb-2">Priority Support</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Licensed users get priority setup help, VPS guidance, and prop firm configuration assistance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> 24-hour response window</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> Setup &amp; installation guidance</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> Lifetime updates included</li>
              </ul>
              <Button variant="neon-outline" size="lg" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> Join Telegram
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
