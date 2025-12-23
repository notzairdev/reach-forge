import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import SecuritySection from "@/components/SecuritySection";
import LauncherSection from "@/components/LauncherSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import TechPartnersSection from "@/components/TechPartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MarqueeSection />
      <SecuritySection />
      <LauncherSection />
      <BenefitsSection />
      <PricingSection />
      <TechPartnersSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
