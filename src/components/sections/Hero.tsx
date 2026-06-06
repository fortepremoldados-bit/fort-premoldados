'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BrandConfig } from '../../constants/data';
import { useUIStore } from '../../store/uiStore';

export const Hero = () => {
  const { setIsMobileMenuOpen } = useUIStore();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-black overflow-hidden flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&q=80&w=2000" 
            alt="Obras de infraestrutura com pisos intertravados" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4E524F]/50 border border-[#788785] text-white text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#008446] rounded-full"></span>
              Padrão Técnico Superior
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 uppercase">
              Pré-moldados para <span className="text-[#008446]">Infraestrutura</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-normal mb-10 leading-relaxed max-w-2xl">
              Pisos intertravados e meios-fios de alta resistência para loteamentos, rodovias e obras públicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={BrandConfig.whatsapp.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#008446] hover:bg-[#1C9C69] text-white font-bold text-lg px-8 py-4 flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95"
              >
                Solicitar Orçamento <ArrowRight size={20} />
              </a>
              <button 
                onClick={() => scrollTo('produtos')}
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold text-lg px-8 py-4 transition-all uppercase tracking-wide"
              >
                Conhecer Produtos
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="bg-[#008446] py-8 md:py-12 border-b-4 border-[#005e32]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            A base sólida da sua obra.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
            Qualidade, resistência estrutural e compromisso inegociável com o seu prazo.
          </p>
        </motion.div>
      </section>
    </>
  );
};
