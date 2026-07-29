import { CampaignBanner } from "@/components/landing/CampaignBanner";
import { ExitIntentPopup } from "@/components/landing/ExitIntentPopup";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PropertyFilter } from "@/components/landing/PropertyFilter";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyChooseMe } from "@/components/landing/WhyChooseMe";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <CampaignBanner />
        <PropertyFilter />
        <WhyChooseMe />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
