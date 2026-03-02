import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import downpipeImg from "@/assets/downpipe.jpg";
import brakeDiscImg from "@/assets/brake-disc.jpg";
import brakePadsImg from "@/assets/brake-pads.jpg";
import bigBrakeKitImg from "@/assets/big-brake-kit.jpg";

const products = [
  {
    title: "Даунпайпы",
    subtitle: "Downpipes",
    description: "Титан и нержавеющая сталь. Максимальный поток выхлопных газов.",
    image: downpipeImg,
  },
  {
    title: "Тормозные диски",
    subtitle: "Brake Discs",
    description: "Перфорированные и карбон-керамические. Абсолютный контроль.",
    image: brakeDiscImg,
  },
  {
    title: "Тормозные колодки",
    subtitle: "Brake Pads",
    description: "Агрессивные составы для трека и улицы. Стабильность при любых температурах.",
    image: brakePadsImg,
  },
  {
    title: "Big Brake Kits",
    subtitle: "Complete Systems",
    description: "Полные тормозные комплекты. Суппорты, диски, колодки — одна система.",
    image: bigBrakeKitImg,
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group glass-card rounded-sm overflow-hidden hover:border-primary/40 transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <p className="text-primary text-xs font-body tracking-[0.2em] uppercase mb-1">
          {product.subtitle}
        </p>
        <h3 className="font-heading font-bold text-xl text-foreground mb-2">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed mb-5">
          {product.description}
        </p>
        <button className="border border-primary/50 text-primary text-xs font-heading font-bold tracking-widest uppercase px-6 py-2.5 rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:neon-glow">
          Подробнее
        </button>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-3">Our Products</p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            Наша продукция
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.title} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
