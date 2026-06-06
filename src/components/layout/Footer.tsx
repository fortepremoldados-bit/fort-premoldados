import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BrandConfig } from '../../constants/data';

export const Footer = () => (
  <footer className="bg-black pt-20 pb-10 border-t border-[#4E524F]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <svg viewBox="0 0 100 100" className="h-8 w-auto">
              <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#008446" />
              <polygon points="25,20 75,20 85,35 40,35 40,45 65,45 75,60 40,60 40,85 25,85" fill="#FFFFFF" />
            </svg>
            <span className="font-black text-xl text-white uppercase tracking-tight" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Forte
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Indústria especializada em artefatos de concreto de alto desempenho para infraestrutura e pavimentação.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#4E524F] flex items-center justify-center text-white hover:bg-[#008446] transition-colors font-bold text-xs">
              IG
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wide">Fábrica / Matriz</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#008446] shrink-0 mt-0.5" />
              <span>Rodovia RJ-116, Km X<br/>Polo Industrial<br/>Rio de Janeiro - RJ</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#008446] shrink-0" />
              <span>(22) 99999-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#008446] shrink-0" />
              <span>contato@fortepremoldados.com.br</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wide">Produtos</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#produtos" className="hover:text-[#008446] transition-colors">Piso Intertravado Retangular</a></li>
            <li><a href="#produtos" className="hover:text-[#008446] transition-colors">Piso Intertravado Onda</a></li>
            <li><a href="#produtos" className="hover:text-[#008446] transition-colors">Piso Intertravado Sextavado</a></li>
            <li><a href="#produtos" className="hover:text-[#008446] transition-colors">Meio-Fio Padrão PMSP</a></li>
            <li><a href="#produtos" className="hover:text-[#008446] transition-colors">Guias Curvas e Chapéu</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wide">Área do Cliente</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#calculadora" className="hover:text-[#008446] transition-colors">Calculadora de Materiais</a></li>
            <li><a href="#conhecimento" className="hover:text-[#008446] transition-colors">Base de Conhecimento</a></li>
            <li><a href="#sustentabilidade" className="hover:text-[#008446] transition-colors">Relatório ESG</a></li>
            <li><a href={BrandConfig.whatsapp.url} className="text-[#008446] font-bold hover:text-[#1C9C69] transition-colors">Portal do Loteador</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-[#4E524F] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Forte Pré-Moldados. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);
