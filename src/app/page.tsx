import { Hero } from "../sections/hero";
import { Products } from "../sections/products";
import { Differentials } from "../sections/differentials";
import { Industry } from "../sections/industry";
import { ESG } from "../sections/esg";
import { Audience } from "../sections/audience";
import { CalculatorSection } from "../sections/calculator";
import { Knowledge } from "../sections/knowledge";
import { Contact } from "../sections/contact";
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
      <Differentials />
      <ESG />
      <Audience />
      <Knowledge />
      <Contact />
      <FloatingWhatsApp />
      <ArticleModal />
      <WhatsAppModal />
    </>
  );
}

