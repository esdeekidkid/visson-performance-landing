import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScanLine, Gem, FlaskConical, Globe } from "lucide-react";

const techItems = [
  {
    icon: ScanLine,
    title: "3D-сканирование",
    subtitle: "Precision Engineering",
    description: "Каждая деталь проектируется с помощью 3D-сканирования и CAD-моделирования для идеальной посадки.",
  },
  {
    icon: Gem,
    title: "Премиум-материалы",
    subtitle: "Advanced Materials",
    description: "Титан, карбон-керамика, высокотемпературные компаунды — только лучшие сплавы и составы.",
  },
  {
    icon: FlaskConical,
    title: "Трековые тесты",
    subtitle: "Track Proven",
    description: "Каждый продукт проходит жёсткие испытания на треке и лабораторный контроль качества.",
  },
  {
    icon: Globe,
    title: "Мировая доставка",
    subtitle: "Global Shipping",
    description: "Доставляем в любую точку мира. Надёжная упаковка и быстрая логистика.",
  },
];

const TechSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="section-padding relative bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-3">Technologies</p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            Технологии
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group text-center p-8 glass-card rounded-sm hover:border-primary/40 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="text-primary" size={28} />
                </div>
                <p className="text-primary text-[10px] font-body tracking-[0.3em] uppercase mb-1">
                  {item.subtitle}
                </p>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
