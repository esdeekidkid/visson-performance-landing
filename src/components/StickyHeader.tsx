import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Продукция", href: "#products" },
  { label: "Технологии", href: "#tech" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#footer" },
];

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-1 font-heading font-black text-xl md:text-2xl tracking-wider">
          <span className="text-foreground">VISSON</span>
          <span className="text-primary neon-text-glow">PERFORMANCE</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <a href="mailto:sales@vissonperformance.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            sales@vissonperformance.com
          </a>
          <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="Поиск">
            <Search size={18} />
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="Корзина">
            <ShoppingCart size={18} />
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 px-6 py-6 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:sales@vissonperformance.com" className="block text-xs text-primary">
            sales@vissonperformance.com
          </a>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
