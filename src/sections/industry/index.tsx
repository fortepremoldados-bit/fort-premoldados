'use client';

import React from 'react';
import { Factory, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Industry = () => {
  return (
    <section id="sobre" className="py-24 bg-[#F3F4F6] relative border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#008446] font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
              <Factory size={20} /> A Indústria Forte
            </h3>
            <h2 className="text-3xl md:text-5xl font-black text-[#1C201E] uppercase mb-8 leading-tight">
              Forte para <br /> grandes obras
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Fundada com o propósito de elevar o padrão da infraestrutura viária, a <strong>Forte Pré-Moldados</strong> é uma indústria especializada em soluções de concreto de alto desempenho.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Não somos apenas fornecedores; somos parceiros estratégicos de construtoras e entes públicos. Nosso parque fabril é equipado com maquinário de vibrocompactação de última geração, garantindo que cada peça entregue no seu canteiro de obras tenha precisão milimétrica e resistência superior às exigências da ABNT.
            </p>
            
            <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
              <div className="flex flex-col">
                <ShieldCheck size={32} className="text-[#008446] mb-3" strokeWidth={1.5} />
                <h4 className="text-2xl font-black text-black">100%</h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Rigor Normativo (ABNT)</p>
              </div>
              <div className="flex flex-col">
                <Truck size={32} className="text-[#008446] mb-3" strokeWidth={1.5} />
                <h4 className="text-2xl font-black text-black">Logística</h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Entrega Programada</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full bg-gray-200 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="/qualidade.jpeg" 
              alt="Maquinário e produção industrial de pré-moldados" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 z-20 bg-white p-4 shadow-lg border-l-4 border-[#008446]">
              <p className="text-black font-black uppercase tracking-tight text-lg leading-none">Controle de</p>
              <p className="text-[#008446] font-black uppercase tracking-tight text-lg leading-none">Qualidade Ativo</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

