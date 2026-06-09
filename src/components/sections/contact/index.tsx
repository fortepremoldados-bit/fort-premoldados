'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import { BrandConfig } from '../../../constants/data';
import { useUIStore } from '../../../store/uiStore';

export const Contact = () => {
  const { quoteDetails, setQuoteDetails } = useUIStore();
  const [detalhes, setDetalhes] = useState('');
  const [produto, setProduto] = useState('Piso Intertravado');

  useEffect(() => {
    if (quoteDetails) {
      setDetalhes(quoteDetails);
      setProduto('Múltiplos Produtos');
    }
  }, [quoteDetails]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get('nome');
    const empresa = formData.get('empresa');
    const telefone = formData.get('telefone');

    const subject = encodeURIComponent(`Cotação Formal - ${empresa || nome}`);
    const body = encodeURIComponent(`Olá, equipe Forte Pré-Moldados.\n\nGostaria de solicitar uma cotação formal com as seguintes informações:\n\nDados do Contato:\n- Nome: ${nome}\n- Empresa/Prefeitura: ${empresa}\n- Telefone: ${telefone}\n- Produto de Interesse: ${produto}\n\nDetalhes do Projeto / Volume Estimado:\n${detalhes}\n\nAguardo retorno e me coloco à disposição. Caso haja projetos ou editais, eles seguem em anexo neste e-mail.`);

    window.location.href = `mailto:carlos@fortepremoldados.com.br?subject=${subject}&body=${body}`;
    setQuoteDetails(''); // Limpa após usar
  };

  return (
    <section id="contato" className="py-24 bg-white relative border-t border-gray-200 overflow-hidden">
      {/* Background Image matching Differentials section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/fundo.jpeg" 
          alt="Fundo Contato" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="lg:w-5/12 pt-4 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-black leading-tight">Orçamento Comercial</h2>
              <p className="text-lg text-black font-medium mb-12 max-w-md">
                Envie as necessidades do seu projeto. Nossa equipe enviará rapidamente uma proposta estruturada e com as melhores condições para o volume da sua obra.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#008446]/10 p-3 rounded-[8px] shrink-0">
                    <MapPin className="text-[#008446]" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-sm mb-1 text-black">Unidade Fabril</h5>
                    <p className="text-black font-medium text-lg">Av. das Indústrias<br/>Saquarema, RJ.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#008446]/10 p-3 rounded-[8px] shrink-0">
                    <Phone className="text-[#008446]" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-sm mb-1 text-black">Telefone / WhatsApp</h5>
                    <a href={BrandConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="text-black text-lg hover:text-[#008446] font-bold transition-colors">
                      (22) 9 9999-0000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#008446]/10 p-3 rounded-[8px] shrink-0">
                    <Mail className="text-[#008446]" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-sm mb-1 text-black">E-mail Comercial</h5>
                    <a href="mailto:carlos@fortepremoldados.com.br" className="text-black text-lg hover:text-[#008446] font-bold transition-colors">
                      carlos@fortepremoldados.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 p-8 md:p-12 bg-white shadow-2xl border border-gray-200 rounded-[8px] w-full">
            <h3 className="text-2xl font-black text-black uppercase mb-8 flex items-center gap-3">
              <FileText className="text-[#008446]" size={28} /> Solicitar Cotação Formal
            </h3>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Nome / Responsável Técnico</label>
                  <input type="text" name="nome" className="w-full bg-gray-50 border border-gray-200 p-3.5 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446] transition-all rounded-[8px]" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Empresa / Prefeitura</label>
                  <input type="text" name="empresa" className="w-full bg-gray-50 border border-gray-200 p-3.5 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446] transition-all rounded-[8px]" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Telefone com DDD</label>
                  <input type="tel" name="telefone" className="w-full bg-gray-50 border border-gray-200 p-3.5 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446] transition-all rounded-[8px]" placeholder="Ex: (22) 99999-0000" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Produto Principal</label>
                  <select 
                    name="produto" 
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 p-3.5 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446] transition-all rounded-[8px]"
                  >
                    <option value="Piso Intertravado">Piso Intertravado</option>
                    <option value="Meio-Fio / Guia de Contenção">Meio-Fio / Guia de Contenção</option>
                    <option value="Múltiplos Produtos">Múltiplos Produtos</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Volume Estimado em m² / Detalhes do Projeto</label>
                <textarea 
                  name="detalhes" 
                  rows={6} 
                  value={detalhes}
                  onChange={(e) => setDetalhes(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 p-3.5 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446] resize-none transition-all rounded-[8px]" 
                  placeholder="Ex: Necessito de 1.500m² de piso para pavimentação."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-black hover:bg-[#008446] text-white font-bold text-lg px-8 py-4 transition-colors uppercase tracking-wide mt-4 flex items-center justify-center gap-2 rounded-[8px]">
                <Mail size={20} /> Enviar Pedido por E-mail
              </button>
              <p className="text-xs text-gray-400 text-center mt-3 font-medium">
                * Seu cliente de e-mail padrão será aberto com os dados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


