import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  "BMW M",
  "Porsche",
  "Audi RS",
  "Mercedes AMG",
  "Lamborghini",
  "Ferrari",
  "McLaren",
  "Nissan GT-R",
];

const ModelsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-3">Compatibility</p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            Для кого мы работаем
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="group px-8 py-5 glass-card rounded-sm cursor-default hover:border-primary/60 hover:bg-primary/5 transition-all duration-500"
            >
              <span className="font-heading font-bold text-sm md:text-base text-muted-foreground group-hover:text-primary transition-colors duration-300 tracking-wider uppercase">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModelsSection;
