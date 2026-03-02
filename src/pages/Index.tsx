import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TechSection from "@/components/TechSection";
import ModelsSection from "@/components/ModelsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <ProductsSection />
      <TechSection />
      <ModelsSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
