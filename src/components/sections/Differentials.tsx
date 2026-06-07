'use client';

import React from 'react';
import { Ruler, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/fundo.jpeg" 
          alt="Fundo Diferenciais" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase max-w-2xl leading-tight">
            A certeza que sustenta sua obra.
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-xl">
            Não vendemos apenas concreto. Entregamos a engenharia necessária para que seu pavimento dure décadas sem manutenção.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm p-8 border border-gray-200 hover:border-[#008446] transition-colors"
          >
            <Ruler className="text-[#008446] mb-6" size={40} />
            <h4 className="text-2xl font-bold text-black uppercase mb-4">Rigor Técnico (ABNT)</h4>
            <p className="text-gray-600">
              Controle absoluto no traço do concreto, tempo de cura rigoroso e precisão dimensional impecável das peças.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm p-8 border border-gray-200 hover:border-[#008446] transition-colors"
          >
            <Phone className="text-[#008446] mb-6" size={40} />
            <h4 className="text-2xl font-bold text-black uppercase mb-4">Venda Consultiva</h4>
            <p className="text-gray-600">
              Análise técnica da sua necessidade real. Ajudamos a garantir o uso da espessura (6, 8 ou 10cm) e formato corretos para o seu tipo de tráfego.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm p-8 border border-gray-200 hover:border-[#008446] transition-colors"
          >
            <Clock className="text-[#008446] mb-6" size={40} />
            <h4 className="text-2xl font-bold text-black uppercase mb-4">Prazo Cumprido</h4>
            <p className="text-gray-600">
              Capacidade fabril para grandes volumes aliada a uma logística inteligente, garantindo que o cronograma da sua obra nunca pare.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

