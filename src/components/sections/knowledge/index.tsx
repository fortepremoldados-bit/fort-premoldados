'use client';

import React, { useRef } from 'react';
import { BookOpen, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARTICLES } from '../../../constants/data';
import { useUIStore } from '../../../store/uiStore';

export const Knowledge = () => {
  const { setSelectedArticle } = useUIStore();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350; 
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="conhecimento" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:flex justify-between items-end gap-8"
        >
          <div className="shrink-0">
            <h3 className="text-[#008446] font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
              <BookOpen size={20} /> Base de Conhecimento
            </h3>
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase">
              Engenharia Viária
            </h2>
          </div>
          <p className="text-gray-600 max-w-md mt-4 md:mt-0 md:text-right text-lg">
            Apoio técnico e guias para auxiliar sua equipe na correta especificação do pavimento.
          </p>
        </motion.div>

        <div className="relative group">
          <button 
            onClick={() => scrollCarousel('left')}
            className="hidden md:flex absolute -left-4 top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-200 shadow-xl rounded-full items-center justify-center text-gray-500 hover:text-[#008446] hover:border-[#008446] transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scrollCarousel('right')}
            className="hidden md:flex absolute -right-4 top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-200 shadow-xl rounded-full items-center justify-center text-gray-500 hover:text-[#008446] hover:border-[#008446] transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x scroll-smooth" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {ARTICLES.map((article, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] bg-white border border-gray-200 hover:shadow-xl transition-shadow group cursor-pointer snap-start flex flex-col rounded-[10px]"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute top-4 left-4 ${article.categoryBg} text-white text-xs font-bold px-3 py-1 uppercase tracking-wider`}>
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-black mb-3 line-clamp-2">{article.title}</h4>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">{article.description}</p>
                <div className="text-[#008446] font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                  Ler Artigo <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};


