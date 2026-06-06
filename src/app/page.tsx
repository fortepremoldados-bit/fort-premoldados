import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Differentials } from "@/components/sections/Differentials";
import { Industry } from "@/components/sections/Industry";
import { ESG } from "@/components/sections/ESG";
import { Audience } from "@/components/sections/Audience";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { Knowledge } from "@/components/sections/Knowledge";
import { Contact } from "@/components/sections/Contact";
import { ArticleModal } from "@/components/ui/ArticleModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { WhatsAppModal } from "@/components/ui/WhatsAppModal";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Differentials />
      <Industry />
      <ESG />
      <Audience />
      <CalculatorSection />
      <Knowledge />
      <Contact />
      <FloatingWhatsApp />
      <ArticleModal />
      <WhatsAppModal />
    </>
  );
}
