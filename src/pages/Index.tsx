import { useEffect } from "react";
import { AssistantSection } from "@/components/landing/assistant-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { PoliciesSection } from "@/components/landing/policies-section";
import { RequirementsSection } from "@/components/landing/requirements-section";
import { RoutesSection } from "@/components/landing/routes-section";
import { SeasonsSection } from "@/components/landing/seasons-section";

const Index = () => {
  // La landing es un sitio íntegramente en español: fijamos el idioma del
  // documento después de que i18n (en/zh-CN del template) se haya inicializado.
  useEffect(() => {
    document.documentElement.lang = "es";
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RoutesSection />
        <RequirementsSection />
        <SeasonsSection />
        <PoliciesSection />
        <FaqSection />
        <AssistantSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
