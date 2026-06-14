'use client';

import React from 'react';
import { Landmark, HardHat, Home, Factory } from 'lucide-react';

export const Audience = () => {
  return (
    <section
      id="atuacao"
      className="relative py-24 border-b border-gray-200 overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/fundo.jpeg')",
        }}
      />

      {/* Camada branca para suavizar a imagem */}
      <div className="absolute inset-0 bg-white/65" />

      {/* Conteúdo */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-4">
            Para quem fabricamos
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Logística e estrutura robustas para atender obras de qualquer porte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white/95 backdrop-blur-sm p-6 border border-gray-100 border-t-4 border-t-[#008446] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
            <div className="bg-[#008446]/10 p-4 rounded-full text-[#008446] group-hover:scale-110 transition-transform mb-4">
              <Landmark size={28} />
            </div>

            <h3 className="text-lg font-black text-black uppercase mb-3">
              Setor Público
            </h3>

            <p className="text-gray-600 text-sm">
              Obras de infraestrutura municipal, praças, calçadões e vias urbanas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/95 backdrop-blur-sm p-6 border border-gray-100 border-t-4 border-t-[#008446] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
            <div className="bg-[#008446]/10 p-4 rounded-full text-[#008446] group-hover:scale-110 transition-transform mb-4">
              <HardHat size={28} />
            </div>

            <h3 className="text-lg font-black text-black uppercase mb-3">
              Construtoras
            </h3>

            <p className="text-gray-600 text-sm">
              Fornecimento ininterrupto para loteamentos e empreendimentos viários.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/95 backdrop-blur-sm p-6 border border-gray-100 border-t-4 border-t-[#008446] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
            <div className="bg-[#008446]/10 p-4 rounded-full text-[#008446] group-hover:scale-110 transition-transform mb-4">
              <Factory size={28} />
            </div>

            <h3 className="text-lg font-black text-black uppercase mb-3">
              Indústrias
            </h3>

            <p className="text-gray-600 text-sm">
              Pisos de altíssima resistência para pátios logísticos e tráfego pesado.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/95 backdrop-blur-sm p-6 border border-gray-100 border-t-4 border-t-[#008446] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
            <div className="bg-[#008446]/10 p-4 rounded-full text-[#008446] group-hover:scale-110 transition-transform mb-4">
              <Home size={28} />
            </div>

            <h3 className="text-lg font-black text-black uppercase mb-3">
              Condomínios
            </h3>

            <p className="text-gray-600 text-sm">
              Soluções estéticas e permeáveis para vias internas e áreas de lazer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};