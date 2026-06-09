'use client';

import React from 'react';
import { X, Calendar } from 'lucide-react';
import { useUIStore } from '../../../store/uiStore';

export const ArticleModal = () => {
  const { selectedArticle, setSelectedArticle } = useUIStore();

  if (!selectedArticle) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedArticle(null)}></div>
        <div className="relative bg-white w-full max-w-4xl shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300 my-8 rounded-[8px]">
        <button 
          onClick={() => setSelectedArticle(null)}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black p-2 rounded-full z-10 transition-colors shadow-sm"
        >
          <X size={24} />
        </button>
        
        <div className="h-64 sm:h-80 relative shrink-0">
          <img 
            src={selectedArticle.image} 
            alt={selectedArticle.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-10 text-white">
            <div className={`inline-block ${selectedArticle.categoryBg} text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4`}>
              {selectedArticle.category}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight">{selectedArticle.title}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-10 bg-white text-gray-800 flex-1">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase tracking-wide mb-8 pb-8 border-b border-gray-100">
            <Calendar size={16} /> Publicado em {new Date().toLocaleDateString('pt-BR')}
          </div>
          
          <div className="prose prose-lg prose-green max-w-none">
            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8">
              {selectedArticle.description}
            </p>
            {selectedArticle.content.map((paragraph, idx) => {
              const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return (
                <p 
                  key={idx} 
                  className="mb-6 leading-relaxed text-gray-700" 
                  dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


