'use client';

import React from 'react';
import { Leaf, Droplet, Building2, Landmark, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ESG = () => {
  return (
    <section id="sustentabilidade" className="py-24 bg-white relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-[#008446] font-bold tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
            <Leaf size={20} /> Compromisso Forte
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-6">
            Nossos Pilares ESG
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Pavimentamos com responsabilidade ambiental, social e de governança.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#F3F4F6] p-8 md:p-10 border-t-4 border-[#008446] hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <Droplet size={40} className="text-[#008446] shrink-0" />
                <h4 className="text-2xl font-black text-black uppercase">Ambiental</h4>
              </div>
              <span className="text-4xl font-black text-gray-200">E</span>
            </div>
            <ul className="space-y-4 text-gray-600 text-sm md:text-base font-medium">
              <li className="flex gap-3"><CheckCircle2 size={20} className="text-[#008446] shrink-0 mt-0.5"/> <span><strong>Pisos Drenantes:</strong> Absorção de até 100% da água da chuva, recarregando lençóis freáticos e prevenindo enchentes.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={20} className="text-[#008446] shrink-0 mt-0.5"/> <span><strong>Microclima:</strong> Alta refletância térmica (albedo) que reduz as ilhas de calor urbanas em comparação ao asfalto.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={20} className="text-[#008446] shrink-0 mt-0.5"/> <span><strong>Indústria Limpa:</strong> Reuso contínuo de água no processo fabril e zero descarte de resíduos tóxicos no ecossistema.</span></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F3F4F6] p-8 md:p-10 border-t-4 border-[#1C9C69] hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <Building2 size={40} className="text-[#1C9C69] shrink-0" />
                <h4 className="text-2xl font-black text-black uppercase">Social</h4>
              </div>
              <span className="text-4xl font-black text-gray-200">S</span>
            </div>
            <ul className="space-y-4 text-gray-600 text-sm md:text-base font-medium">
              <li className="flex gap-3"><CheckCircle2 size={20} className="text-[#1C9C69] shrink-0 mt-0.5"/> <span><strong>Acessibilidade Universal:</strong> Fabricação rigorosa de Pisos Táteis (NBR 9050) para inclusão segura de pessoas com deficiência visual.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={20} className="text-[#1C9C69] shrink-0 mt-0.5"/> <span><strong>Segurança Viária:</strong> Maior coeficiente de atrito na frenagem e sinalização permanente para travessias e ciclovias.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={20} className="text-[#1C9C69] shrink-0 mt-0.5"/> <span><strong>Desenvolvimento Local:</strong> Geração ativa de empregos diretos e fomento econômico na região produtiva e entorno.</span></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#F3F4F6] p-8 md:p-10 border-t-4 border-[#788785] hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <Landmark size={40} className="text-[#788785] shrink-0" />
                <h4 className="text-2xl font-black text-black uppercase">Governança</h4>
              </div>
              <span className="text-4xl font-black text-gray-200">G</span>
            </div>
            <ul className="space-y-4 text-gray-600 text-sm md:text-base font-medium">
              <li className="flex gap-3"><CheckCircle2 size={20} className="text-[#788785] shrink-0 mt-0.5"/> <span><strong>Compliance:</strong> Transparência total em contratos públicos (licitações) e privados.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={20} className="text-[#788785] shrink-0 mt-0.5"/> <span><strong>Rastreabilidade:</strong> Controle tecnológico de lote de produção, garantindo a rastreabilidade do concreto entregue.</span></li>
              <li className="flex gap-3"><CheckCircle2 size={20} className="text-[#788785] shrink-0 mt-0.5"/> <span><strong>Ética Corporativa:</strong> Relações comerciais pautadas na integridade, sem atalhos que comprometam a qualidade da obra.</span></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
