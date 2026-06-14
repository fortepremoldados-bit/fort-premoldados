'use client';

import React from 'react';
import { Menu, X, Calculator } from 'lucide-react';
import { BrandConfig } from '@/constants/data';
import { useHeaderController } from '../controller';
import { Logo } from '../logo';

export const Header = () => {
  const {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    scrollTo,
    menuItems,
  } = useHeaderController();

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button
          onClick={() => scrollTo('home')}
          className="hover:opacity-80 transition-opacity"
        >
          <Logo className="h-10 md:h-12" isLight={!isScrolled} />
        </button>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-semibold text-sm tracking-wide uppercase">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative group transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-800 hover:text-[#008446]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <span>{item.label}</span>

              <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#008446] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          ))}

          <div className="flex items-center gap-3 ml-2">
            <button
              onClick={() => scrollTo('calculadora')}
              className={`px-4 py-2 flex items-center gap-2 transition-all transform hover:scale-105 font-bold rounded-[8px] border ${
                isScrolled
                  ? 'border-[#008446] text-[#008446] hover:bg-[#008446] hover:text-white'
                  : 'border-white/50 text-white hover:bg-white hover:text-black'
              }`}
            >
              <Calculator size={18} />
              Calculadora
            </button>

            <a
              href={BrandConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#008446] hover:bg-[#1C9C69] text-white px-5 lg:px-6 py-2.5 flex items-center gap-2 transition-all transform hover:scale-105 font-bold rounded-[8px] shadow-md"
            >
              Fale Conosco
            </a>
          </div>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? 'text-black' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 gap-4 font-semibold text-lg uppercase">
          <button onClick={() => scrollTo('produtos')} className="text-left py-2 border-b border-gray-100">
            Produtos
          </button>

          {/* <button onClick={() => scrollTo('diferenciais')} className="text-left py-2 border-b border-gray-100">
            Diferenciais
          </button> */}

          <button onClick={() => scrollTo('sobre')} className="text-left py-2 border-b border-gray-100">
            Empresa
          </button>

          <button onClick={() => scrollTo('atuacao')} className="text-left py-2 border-b border-gray-100">
            Atuação
          </button>

          <button onClick={() => scrollTo('sustentabilidade')} className="text-left py-2 border-b border-gray-100">
            ESG
          </button>

          <button onClick={() => scrollTo('conhecimento')} className="text-left py-2 border-b border-gray-100">
            Blog
          </button>

          <button onClick={() => scrollTo('calculadora')} className="text-left py-2 border-b border-gray-100">
            Calculadora
          </button>

          <button onClick={() => scrollTo('contato')} className="text-left py-2 border-b border-gray-100">
            Contato
          </button>

          <a
            href={BrandConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#008446] text-white text-center py-3 mt-2 font-bold rounded-[8px]"
          >
            Fale com um Consultor
          </a>
        </div>
      )}
    </header>
  );
};