import { Instagram, Send, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-border/30 section-padding py-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="font-heading font-black text-2xl md:text-3xl tracking-wider mb-8">
          <span className="text-foreground">VISSON </span>
          <span className="text-primary neon-text-glow">PERFORMANCE</span>
        </div>

        {/* Contacts */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          <a
            href="mailto:sales@vissonperformance.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body"
          >
            <Mail size={16} />
            sales@vissonperformance.com
          </a>
          <a
            href="https://instagram.com/vissonperformance"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body"
          >
            <Instagram size={16} />
            Instagram
          </a>
          <a
            href="https://t.me/vissonperformance"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body"
          >
            <Send size={16} />
            Telegram
          </a>
        </div>

        <div className="h-px bg-border/30 max-w-xs mx-auto mb-6" />

        <p className="text-muted-foreground text-xs font-body tracking-wider">
          © Visson Performance 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
