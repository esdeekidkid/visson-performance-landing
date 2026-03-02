import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Суперкар с неоновой подсветкой"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4"
        >
          <span className="text-foreground">VISSON </span>
          <span className="text-primary neon-text-glow animate-pulse-neon">PERFORMANCE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading font-semibold text-base md:text-lg text-muted-foreground tracking-[0.3em] uppercase mb-3"
        >
          Даунпайпы • Тормозные системы • Big Brake Kits
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-primary font-body text-sm md:text-base tracking-[0.2em] italic mb-10"
        >
          Engineered for Precision. Built for Dominance.
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(168 100% 48% / 0.6), 0 0 60px hsl(168 100% 48% / 0.3)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm md:text-base px-10 py-4 tracking-widest uppercase rounded-sm neon-glow transition-all duration-300"
        >
          Перейти в каталог
        </motion.a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
