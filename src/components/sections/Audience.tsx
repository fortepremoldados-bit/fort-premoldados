'use client';

import React from 'react';
import { Landmark, HardHat, Warehouse, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export const Audience = () => {
  return (
    <section id="atuacao" className="py-24 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-4">Para quem fabricamos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estrutura e logística robustas para atender desde condomínios de alto padrão até grandes volumes de obras industriais e governamentais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-[#F3F4F6] p-8 lg:p-10 border-l-4 border-[#008446] hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <Landmark size={48} strokeWidth={1.5} className="text-[#008446] shrink-0" />
              <h3 className="text-2xl lg:text-3xl font-black uppercase text-black leading-tight">Setor Público</h3>
            </div>
            <p className="text-gray-700 text-lg mb-6">
              Atendimento estrito a memoriais descritivos e editais para revitalização urbana, calçadas e infraestrutura municipal.
            </p>
            <ul className="space-y-2 text-black font-semibold">
              <li>• Praças e Calçadões</li>
              <li>• Revitalização de Vias Urbanas</li>
              <li>• Obras de Acessibilidade (Piso Tátil)</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#4E524F] p-8 lg:p-10 border-l-4 border-[#788785] text-white hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <HardHat size={48} strokeWidth={1.5} className="text-[#788785] shrink-0" />
              <h3 className="text-2xl lg:text-3xl font-black uppercase leading-tight">Construtoras e Empreiteiras</h3>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              Fornecimento ininterrupto para loteamentos e grandes obras. Garantimos que a falta de material não paralise seu cronograma.
            </p>
            <ul className="space-y-2 text-white font-semibold">
              <li>• Loteamentos e Bairros Planejados</li>
              <li>• Infraestrutura Viária e Saneamento</li>
              <li>• Parcerias de Longo Prazo (B2B)</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black p-8 lg:p-10 border-l-4 border-[#1C9C69] text-white hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <Warehouse size={48} strokeWidth={1.5} className="text-[#1C9C69] shrink-0" />
              <h3 className="text-2xl lg:text-3xl font-black uppercase leading-tight">Indústrias e Comércios</h3>
            </div>
            <p className="text-gray-400 text-lg mb-6">
              Pisos de altíssima resistência (até 10cm) projetados para suportar tráfego pesado de carretas, empilhadeiras e cargas dinâmicas.
            </p>
            <ul className="space-y-2 text-white font-semibold">
              <li>• Pátios Logísticos e Portuários</li>
              <li>• Postos de Combustível</li>
              <li>• Estacionamentos Comerciais e Shoppings</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 lg:p-10 border border-gray-200 border-l-4 border-gray-800 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <Home size={48} strokeWidth={1.5} className="text-gray-800 shrink-0" />
              <h3 className="text-2xl lg:text-3xl font-black uppercase text-black leading-tight">Condomínios e Residências</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Soluções estéticas, duráveis e permeáveis que valorizam o empreendimento, reduzem o calor e facilitam a manutenção subterrânea.
            </p>
            <ul className="space-y-2 text-black font-semibold">
              <li>• Vias de Circulação Interna</li>
              <li>• Áreas de Lazer e Piscinas</li>
              <li>• Calçadas Ecológicas (Pisograma)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
