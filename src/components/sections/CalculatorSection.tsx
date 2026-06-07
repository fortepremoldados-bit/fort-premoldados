'use client';

import React from 'react';
import { Calculator, Copy, RotateCcw, Check, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { PISOS_DATA, BrandConfig } from '../../constants/data';
import { useCalculator } from '../../hooks/useCalculator';

export const CalculatorSection = () => {
  const { calcData, setCalcData, calcResult, isCopied, handleCalcSubmit, handleCalcReset, handleCalcCopy } = useCalculator();

  return (
    <section id="calculadora" className="py-24 bg-[#F3F4F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="text-[#008446] font-bold tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
            <Calculator size={20} /> Ferramenta do Construtor
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase">Calculadora de Quantitativo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Calcule rapidamente a quantidade exata de pisos para a sua obra, já incluindo a margem de recortes.
          </p>
        </div>

        <div className="bg-white shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-200 max-w-5xl mx-auto">
          <div className="lg:w-1/2 p-8 md:p-10 bg-white">
            <h3 className="text-xl font-bold text-black uppercase mb-6 border-b-2 border-[#008446] pb-2 inline-block">Dados do Projeto</h3>
            
            <form onSubmit={handleCalcSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-3">Qual produto será utilizado?</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(PISOS_DATA).map(([key, piso]) => (
                    <div 
                      key={key}
                      onClick={() => setCalcData({...calcData, tipo: key})}
                      className={`cursor-pointer border-2 overflow-hidden transition-all duration-200 relative group rounded-[10px] ${calcData.tipo === key ? 'border-[#008446] shadow-md' : 'border-gray-200 hover:border-[#008446]/50'}`}
                    >
                      <div className="h-24 w-full relative overflow-hidden">
                        <img 
                          src={piso.imagem} 
                          alt={piso.nome} 
                          className={`w-full h-full object-cover transition-transform duration-500 ${calcData.tipo === key ? 'scale-105' : 'group-hover:scale-105'}`} 
                        />
                        <div className={`absolute inset-0 transition-opacity duration-200 ${calcData.tipo === key ? 'bg-[#008446]/20' : 'bg-black/10 group-hover:bg-transparent'}`}></div>
                        
                        {calcData.tipo === key && (
                          <div className="absolute top-2 right-2 bg-[#008446] text-white rounded-full p-1 shadow-sm animate-in zoom-in duration-200">
                            <Check size={14} strokeWidth={3} />
                          </div>
                        )}
                      </div>
                      <div className={`p-2.5 text-center transition-colors ${calcData.tipo === key ? 'bg-[#008446] text-white' : 'bg-white text-gray-800 group-hover:bg-gray-50'}`}>
                        <span className="text-xs font-bold block truncate uppercase tracking-tight" title={piso.nome}>
                          {piso.nome.split(' (')[0]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {calcData.tipo && (
                <div className="bg-gray-50 border border-[#008446]/30 p-4 animate-in fade-in duration-300 flex items-start gap-3 rounded-[10px]">
                  <Info className="text-[#008446] shrink-0 mt-0.5" size={20} />
                  <div className="text-sm">
                    <p className="font-bold text-black mb-1">
                      Modelo: <span className="font-normal text-gray-700">{PISOS_DATA[calcData.tipo].nome}</span>
                    </p>
                    <p className="font-bold text-black mb-1">
                      Dimensão: <span className="font-normal text-gray-700">{PISOS_DATA[calcData.tipo].dimensoes} ({PISOS_DATA[calcData.tipo].pecasPorUnidade} un/{PISOS_DATA[calcData.tipo].unidade === 'm' ? 'm' : 'm²'})</span>
                    </p>
                    <p className="font-bold text-black">
                      Aplicação: <span className="font-normal text-gray-700">{PISOS_DATA[calcData.tipo].aplicacao}</span>
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <label className="block text-sm font-bold text-gray-700 uppercase mb-3">Método de Medição</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center gap-2 cursor-pointer p-3 border border-gray-200 flex-1 hover:bg-gray-50 transition-colors">
                    <input 
                      type="radio" name="modoCalc" value="area" 
                      checked={calcData.modo === 'area'} 
                      onChange={() => setCalcData({...calcData, modo: 'area'})}
                      className="w-4 h-4 text-[#008446] focus:ring-[#008446]" 
                    />
                    <span className="text-sm font-semibold text-gray-800">{calcData.tipo && PISOS_DATA[calcData.tipo].unidade === 'm' ? 'Metros lineares já conhecidos (m)' : 'Área total já conhecida (m²)'}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-3 border border-gray-200 flex-1 hover:bg-gray-50 transition-colors">
                    <input 
                      type="radio" name="modoCalc" value="medidas" 
                      checked={calcData.modo === 'medidas'} 
                      onChange={() => setCalcData({...calcData, modo: 'medidas'})}
                      className="w-4 h-4 text-[#008446] focus:ring-[#008446]" 
                    />
                    <span className="text-sm font-semibold text-gray-800">Largura x Comprimento</span>
                  </label>
                </div>
              </div>

              {calcData.modo === 'area' ? (
                <div className="animate-in fade-in">
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Medida total exata (sem quebras) em {calcData.tipo && PISOS_DATA[calcData.tipo].unidade === 'm' ? 'm' : 'm²'}</label>
                  <input 
                    type="number" step="0.01" min="0.1" required
                    value={calcData.area}
                    onChange={(e) => setCalcData({...calcData, area: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-300 p-3.5 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446]" 
                    placeholder="Ex: 150" 
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Largura (m)</label>
                    <input 
                      type="number" step="0.01" min="0.1" required
                      value={calcData.largura}
                      onChange={(e) => setCalcData({...calcData, largura: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-300 p-3.5 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446]" 
                      placeholder="Ex: 5" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Comp. (m)</label>
                    <input 
                      type="number" step="0.01" min="0.1" required
                      value={calcData.comprimento}
                      onChange={(e) => setCalcData({...calcData, comprimento: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-300 p-3.5 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446]" 
                      placeholder="Ex: 30" 
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Margem de segurança para recortes e quebras</label>
                <select 
                  value={calcData.margem} 
                  onChange={(e) => setCalcData({...calcData, margem: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-300 p-3.5 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446] transition-all"
                >
                  <option value="0.05">5% (Áreas 100% retas, perda mínima na paginação)</option>
                  <option value="0.10">10% (Padrão recomendado pela engenharia)</option>
                  <option value="0.15">15% (Áreas irregulares, curvas, canteiros ou ralos)</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-[#008446] hover:bg-[#1C9C69] text-white font-bold text-lg px-8 py-4 transition-colors uppercase tracking-wide flex justify-center items-center gap-2 rounded-[10px]">
                <Calculator size={20} /> Calcular Quantidade Ideal
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 p-8 md:p-10 bg-black text-white relative flex flex-col justify-center">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20.5V18H0v-2h20v-2.5L22.5 16 25 13.5V0h2v13.5L29.5 16l2.5-2.5V0h2v13.5L36.5 16l2.5-2.5V0h2v13.5L44 16v2h-3v2h3v2h-3v2.5L38.5 22 36 24.5V40h-2V24.5L31.5 22l-2.5 2.5V40h-2V24.5L24.5 22 22 24.5V40h-2V24.5L17.5 22 15 24.5V40h-2V24.5L10.5 22 8 24.5V40H6V24.5L3.5 22 1 24.5V40H-1V24.5L-3.5 22l-2.5 2.5V40h-2V24.5L-10.5 22l-2.5 2.5V40h-2V24.5L-17.5 22l-2.5 2.5V40h-2V24.5L-24.5 22l-2.5 2.5V40h-2V24.5L-31.5 22l-2.5 2.5V40h-2V24.5L-38.5 22l-2.5 2.5V40h-2V24.5L-45.5 22l-2.5 2.5V40h-2V24.5z\' fill=\'%23FFFFFF\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
            }}></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white uppercase mb-8 border-b-2 border-[#4E524F] pb-2 inline-block">Resumo Estrutural</h3>
              
              {!calcResult ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-12 px-4 text-gray-400"
                >
                  <Calculator size={48} className="mx-auto mb-4 opacity-30" />
                  <p className="text-lg">Preencha os dados do projeto ao lado e clique em calcular para visualizar a necessidade de materiais.</p>
                </motion.div>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="bg-[#4E524F]/40 p-6 border-l-4 border-[#008446]">
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-wide mb-1">Volume de Compra Recomendado</p>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-5xl md:text-6xl font-black text-white">{calcResult.medidaCompra}</span>
                      <span className="text-xl font-bold text-gray-300 mb-2">{calcResult.unidade}</span>
                    </div>
                    <p className="text-[#1C9C69] font-semibold text-sm">
                      *Já inclui a margem de recortes definida ({(parseFloat(calcData.margem)*100).toFixed(0)}%). Esta é a medida que você deve solicitar no orçamento.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/50 border border-[#4E524F] p-4">
                      <p className="text-gray-400 text-xs font-bold uppercase mb-1">Medida Exata de Cobertura</p>
                      <p className="font-bold text-white text-xl">{calcResult.medidaExata} {calcResult.unidade}</p>
                    </div>
                    <div className="bg-black/50 border border-[#4E524F] p-4">
                      <p className="text-gray-400 text-xs font-bold uppercase mb-1">Nº Estimado de Peças</p>
                      <p className="font-bold text-white text-xl">{calcResult.pecas} un.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#4E524F]">
                    <button 
                      type="button" 
                      onClick={handleCalcCopy}
                      className="flex-1 bg-white hover:bg-gray-200 text-black font-bold uppercase text-sm py-3 px-4 transition-colors flex justify-center items-center gap-2 rounded-[10px]"
                    >
                      {isCopied ? <Check size={18} className="text-[#008446]"/> : <Copy size={18} />}
                      {isCopied ? 'Resumo Copiado!' : 'Copiar Resumo'}
                    </button>
                    <button 
                      type="button" 
                      onClick={handleCalcReset}
                      className="bg-transparent border border-gray-500 hover:border-white text-white font-bold uppercase text-sm py-3 px-6 transition-colors flex justify-center items-center gap-2 rounded-[10px]"
                    >
                      <RotateCcw size={18} /> Novo Cálculo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


