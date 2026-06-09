import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { Differentials } from "@/components/sections/differentials";
import { Industry } from "@/components/sections/industry";
import { ESG } from "@/components/sections/esg";
import { Audience } from "@/components/sections/audience";
import { CalculatorSection } from "@/components/sections/calculator";
import { Knowledge } from "@/components/sections/knowledge";
import { Contact } from "@/components/sections/contact";
import { ArticleModal } from "@/components/ui/articleModal";
import { FloatingWhatsApp } from "@/components/ui/floatingWpp";
import { WhatsAppModal } from "@/components/ui/whatsappModal";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <CalculatorSection />
      <Industry />
      <ESG />
      <Differentials />
      <Audience />
      <Knowledge />
      <Contact />
      <FloatingWhatsApp />
      <ArticleModal />
      <WhatsAppModal />
    </>
  );
}

