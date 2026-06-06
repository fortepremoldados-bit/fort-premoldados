'use client';

import React from 'react';
import { Landmark, HardHat, Warehouse, Home, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export const Audience = () => {
  return (
    <section id="atuacao" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-4">Para quem fabricamos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Logística e estrutura robustas para atender obras de qualquer porte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 lg:p-10 border border-gray-100 border-l-4 border-l-[#008446] shadow-sm hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#008446]/10 p-3 rounded text-[#008446] group-hover:scale-110 transition-transform">
                <Landmark size={32} />
              </div>
              <h3 className="text-2xl font-black text-black uppercase">Setor Público</h3>
            </div>
            <p className="text-gray-600 mb-8 min-h-[48px]">
              Atendimento estrito a memoriais descritivos e editais para revitalização urbana, calçadas e infraestrutura municipal.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Praças e Calçadões
              </li>
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Revitalização de Vias Urbanas
              </li>
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Obras de Acessibilidade (Piso Tátil)
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 lg:p-10 border border-gray-100 border-l-4 border-l-[#008446] shadow-sm hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#008446]/10 p-3 rounded text-[#008446] group-hover:scale-110 transition-transform">
                <HardHat size={32} />
              </div>
              <h3 className="text-2xl font-black text-black uppercase">Construtoras</h3>
            </div>
            <p className="text-gray-600 mb-8 min-h-[48px]">
              Fornecimento ininterrupto para loteamentos e grandes obras. Garantimos que a falta de material não paralise seu cronograma.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Loteamentos e Bairros Planejados
              </li>
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Infraestrutura Viária e Saneamento
              </li>
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Parcerias de Longo Prazo (B2B)
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 lg:p-10 border border-gray-100 border-l-4 border-l-[#008446] shadow-sm hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#008446]/10 p-3 rounded text-[#008446] group-hover:scale-110 transition-transform">
                <Factory size={32} />
              </div>
              <h3 className="text-2xl font-black text-black uppercase">Indústrias</h3>
            </div>
            <p className="text-gray-600 mb-8 min-h-[48px]">
              Pisos de altíssima resistência (até 10cm) projetados para suportar tráfego pesado de carretas, empilhadeiras e cargas dinâmicas.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Pátios Logísticos e Portuários
              </li>
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Postos de Combustível
              </li>
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Estacionamentos Comerciais e Shoppings
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 lg:p-10 border border-gray-100 border-l-4 border-l-[#008446] shadow-sm hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#008446]/10 p-3 rounded text-[#008446] group-hover:scale-110 transition-transform">
                <Home size={32} />
              </div>
              <h3 className="text-2xl font-black text-black uppercase">Condomínios</h3>
            </div>
            <p className="text-gray-600 mb-8 min-h-[48px]">
              Soluções estéticas, duráveis e permeáveis que valorizam o empreendimento, reduzem o calor e facilitam a manutenção subterrânea.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Vias de Circulação Interna
              </li>
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Áreas de Lazer e Piscinas
              </li>
              <li className="flex items-center gap-2 font-bold text-sm text-black">
                <span className="w-1.5 h-1.5 bg-[#008446] rounded-full"></span> Calçadas Ecológicas (Pisograma)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
