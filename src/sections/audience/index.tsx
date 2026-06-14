'use client';

import React from 'react';
import { Landmark, HardHat, Warehouse, Home, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export const Audience = () => {
  return (
    <section id="atuacao" className="py-24 bg-[#F3F4F6] border-b border-gray-200">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 border border-gray-100 border-t-4 border-t-[#008446] shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center"
          >
            <div className="bg-[#008446]/10 p-4 rounded-full text-[#008446] group-hover:scale-110 transition-transform mb-4">
              <Landmark size={28} />
            </div>
            <h3 className="text-lg font-black text-black uppercase mb-3">Setor Público</h3>
            <p className="text-gray-600 text-sm">
              Obras de infraestrutura municipal, praças, calçadões e vias urbanas.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 border border-gray-100 border-t-4 border-t-[#008446] shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center"
          >
            <div className="bg-[#008446]/10 p-4 rounded-full text-[#008446] group-hover:scale-110 transition-transform mb-4">
              <HardHat size={28} />
            </div>
            <h3 className="text-lg font-black text-black uppercase mb-3">Construtoras</h3>
            <p className="text-gray-600 text-sm">
              Fornecimento ininterrupto para loteamentos e empreendimentos viários.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 border border-gray-100 border-t-4 border-t-[#008446] shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center"
          >
            <div className="bg-[#008446]/10 p-4 rounded-full text-[#008446] group-hover:scale-110 transition-transform mb-4">
              <Factory size={28} />
            </div>
            <h3 className="text-lg font-black text-black uppercase mb-3">Indústrias</h3>
            <p className="text-gray-600 text-sm">
              Pisos de altíssima resistência para pátios logísticos e tráfego pesado.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 border border-gray-100 border-t-4 border-t-[#008446] shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center"
          >
            <div className="bg-[#008446]/10 p-4 rounded-full text-[#008446] group-hover:scale-110 transition-transform mb-4">
              <Home size={28} />
            </div>
            <h3 className="text-lg font-black text-black uppercase mb-3">Condomínios</h3>
            <p className="text-gray-600 text-sm">
              Soluções estéticas e permeáveis para vias internas e áreas de lazer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

