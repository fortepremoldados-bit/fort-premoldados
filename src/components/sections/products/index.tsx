'use client';

import React from 'react';
import { CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BrandConfig } from '../../../constants/data';

export const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div>
            <h3 className="text-[#008446] font-bold tracking-widest uppercase mb-2">Engenharia de Produto</h3>
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase">O que fabricamos</h2>
          </div>
          <p className="text-gray-600 max-w-lg mt-4 md:mt-0 text-lg">
            Concreto de alto desempenho (35 a 50 MPa) projetado para otimizar o tempo de assentamento no canteiro de obras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow group overflow-hidden rounded-[10px]"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/imgpiso.jpeg" 
                alt="Pisos Intertravados" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                Linha de Pavimentação
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-black text-black uppercase mb-4">Pisos Intertravados</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Alta resistência à compressão para áreas de tráfego intenso, aliando durabilidade extrema e permeabilidade do solo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#008446] shrink-0 mt-0.5" size={20} />
                  Liberação imediata para tráfego pós-obra.
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#008446] shrink-0 mt-0.5" size={20} />
                  Manutenção facilitada (sem quebra-quebra).
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#008446] shrink-0 mt-0.5" size={20} />
                  Disponível nos formatos Retangular, Onda, Sextavado e Tátil.
                </li>
              </ul>
              <a href={BrandConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="text-black font-bold uppercase tracking-wide flex items-center gap-2 hover:text-[#008446] transition-colors">
                <MessageCircle size={18} className="text-[#008446]" /> Cotar volume <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow group overflow-hidden rounded-[10px]"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/meiofio.jpeg" 
                alt="Meio Fio de Concreto" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[30%]"
              />
              <div className="absolute top-4 left-4 bg-[#788785] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                Linha de Contenção e Drenagem
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-black text-black uppercase mb-4">Meio-Fio (Guias)</h3>
              <p className="text-gray-600 mb-6 text-lg">
                O travamento essencial para o seu pavimento. Guias projetadas para resistir a impactos e delinear vias com perfeição geométrica.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#788785] shrink-0 mt-0.5" size={20} />
                  Contenção lateral rígida (previne abertura de juntas).
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#788785] shrink-0 mt-0.5" size={20} />
                  Drenagem eficiente (Opções com boca de lobo/chapéu).
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#788785] shrink-0 mt-0.5" size={20} />
                  Modelos PMSP (Reto), Curvos e de Transição (Acessibilidade).
                </li>
              </ul>
              <a href={BrandConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="text-black font-bold uppercase tracking-wide flex items-center gap-2 hover:text-[#008446] transition-colors">
                <MessageCircle size={18} className="text-[#008446]" /> Cotar volume <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


