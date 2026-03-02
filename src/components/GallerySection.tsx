import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import galleryTrack from "@/assets/gallery-track.jpg";
import galleryBrakes from "@/assets/gallery-brakes.jpg";
import galleryManufacturing from "@/assets/gallery-manufacturing.jpg";
import downpipeImg from "@/assets/downpipe.jpg";
import brakeDiscImg from "@/assets/brake-disc.jpg";
import bigBrakeKitImg from "@/assets/big-brake-kit.jpg";

const images = [
  { src: galleryTrack, alt: "Трек-тест" },
  { src: brakeDiscImg, alt: "Тормозной диск" },
  { src: galleryManufacturing, alt: "Производство" },
  { src: galleryBrakes, alt: "Тормоза в работе" },
  { src: downpipeImg, alt: "Даунпайп" },
  { src: bigBrakeKitImg, alt: "Big Brake Kit" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-xs font-body tracking-[0.3em] uppercase mb-3">Gallery</p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            В работе
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm aspect-square glass-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary text-xs font-heading font-bold tracking-widest uppercase">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
