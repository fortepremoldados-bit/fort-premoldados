'use client';

import React from 'react';
import { Calculator, Copy, RotateCcw, Check, Info, Save, Trash2, Send, X, Mail, MessageCircle, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { PISOS_DATA, BrandConfig } from '../../../constants/data';
import { useCalculator } from '../../../hooks/useCalculator';
import { useUIStore } from '../../../store/uiStore';

export const CalculatorSection = () => {
  const { 
    calcData, setCalcData, 
    calcResult, calcError, setCalcError, isCopied, 
    savedItems, handleSaveItem, handleRemoveItem, formatQuoteList,
    handleCalcSubmit, handleCalcReset, handleCalcCopy 
  } = useCalculator();
  const { setQuoteDetails } = useUIStore();
  const [showSendOptions, setShowSendOptions] = React.useState(false);
  const hasScrolledRef = React.useRef(false);

  React.useEffect(() => {
    if (savedItems.length > 0 && !hasScrolledRef.current) {
      setTimeout(() => {
        window.scrollBy({ top: 350, behavior: 'smooth' });
        hasScrolledRef.current = true;
      }, 300);
    }
    if (savedItems.length === 0) {
      setShowSendOptions(false);
    }
  }, [savedItems.length]);

  const handleSendEmail = () => {
    setQuoteDetails(formatQuoteList());
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendWhatsapp = () => {
    const text = encodeURIComponent(formatQuoteList());
    window.open(`https://wa.me/${BrandConfig.whatsapp.number}?text=${text}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-24 bg-white relative border-b border-gray-200 overflow-hidden">
      {/* Background Image matching Contact/Differentials section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/fundo.jpeg" 
          alt="Fundo Calculadora" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <h3 className="text-[#008446] font-bold tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
            <Calculator size={20} /> Ferramenta do Construtor
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase">Calculadora de Quantitativo</h2>
          <p className="text-black max-w-2xl mx-auto mt-4 text-lg font-medium">
            Calcule rapidamente a quantidade exata de pisos para a sua obra, já incluindo a margem de recortes.
          </p>
        </div>

        <div className="bg-white shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-200 w-full rounded-[8px]">
          <div className="lg:w-7/12 p-6 md:p-10 bg-white">
            <h3 className="text-xl font-bold text-black uppercase mb-5 border-b-2 border-[#008446] pb-2 inline-block">Dados do Projeto</h3>
            
            <form onSubmit={handleCalcSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-3">Qual produto será utilizado?</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(PISOS_DATA).map(([key, piso]) => (
                    <div 
                      key={key}
                      onClick={() => {
                        setCalcData({...calcData, tipo: key});
                        if (calcError) setCalcError(null);
                      }}
                      className={`cursor-pointer border-2 overflow-hidden transition-all duration-200 relative group rounded-[8px] ${calcData.tipo === key ? 'border-[#008446] shadow-md' : 'border-gray-200 hover:border-[#008446]/50'}`}
                    >
                      <div className="h-20 w-full relative overflow-hidden">
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
                      <div className={`p-2 text-center transition-colors ${calcData.tipo === key ? 'bg-[#008446] text-white' : 'bg-white text-gray-800 group-hover:bg-gray-50'}`}>
                        <span className="text-xs font-bold block truncate uppercase tracking-tight" title={piso.nome}>
                          {piso.nome.split(' (')[0]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {calcData.tipo && (
                <div className="bg-gray-50 border border-[#008446]/30 p-3 animate-in fade-in duration-300 flex items-start gap-3 rounded-[8px]">
                  <Info className="text-[#008446] shrink-0 mt-0.5" size={18} />
                  <div className="text-sm">
                    <span className="font-bold text-black mr-2">
                      {PISOS_DATA[calcData.tipo].nome}:
                    </span>
                    <span className="text-gray-700 font-medium">
                      Rendimento: {PISOS_DATA[calcData.tipo].pecasPorUnidade} un/{PISOS_DATA[calcData.tipo].unidade === 'm' ? 'm' : 'm²'}
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Método de Medição</label>
                  <div className="flex gap-2">
                    <label className="flex items-center justify-center gap-1.5 cursor-pointer p-2.5 border border-gray-200 flex-1 hover:bg-gray-50 transition-colors rounded-[8px]">
                      <input 
                        type="radio" name="modoCalc" value="area" 
                        checked={calcData.modo === 'area'} 
                        onChange={() => setCalcData({...calcData, modo: 'area'})}
                        className="w-3.5 h-3.5 text-[#008446] focus:ring-[#008446]" 
                      />
                      <span className="text-xs font-semibold text-gray-800">{calcData.tipo && PISOS_DATA[calcData.tipo].unidade === 'm' ? 'Linear (m)' : 'Área Total (m²)'}</span>
                    </label>
                    <label className="flex items-center justify-center gap-1.5 cursor-pointer p-2.5 border border-gray-200 flex-1 hover:bg-gray-50 transition-colors rounded-[8px]">
                      <input 
                        type="radio" name="modoCalc" value="medidas" 
                        checked={calcData.modo === 'medidas'} 
                        onChange={() => setCalcData({...calcData, modo: 'medidas'})}
                        className="w-3.5 h-3.5 text-[#008446] focus:ring-[#008446]" 
                      />
                      <span className="text-xs font-semibold text-gray-800">Larg x Comp</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Margem de recortes</label>
                  <select 
                    value={calcData.margem} 
                    onChange={(e) => setCalcData({...calcData, margem: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-300 p-2.5 text-sm focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446] transition-all rounded-[8px]"
                  >
                    <option value="0.05">5% (Baixa perda - áreas retas)</option>
                    <option value="0.10">10% (Padrão recomendado)</option>
                    <option value="0.15">15% (Alta perda - curvas/ralos)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
                <div className="md:col-span-2">
                  {calcData.modo === 'area' ? (
                    <div className="animate-in fade-in">
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Medida total (Sem quebras)</label>
                      <div className="flex relative">
                        <input 
                          type="number" step="0.01" min="0.1" required
                          value={calcData.area}
                          onChange={(e) => setCalcData({...calcData, area: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-300 p-2.5 pl-3 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446] rounded-[8px]" 
                          placeholder="Ex: 150" 
                        />
                        <span className="absolute right-4 top-2.5 text-gray-400 font-bold">{calcData.tipo && PISOS_DATA[calcData.tipo].unidade === 'm' ? 'm' : 'm²'}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 animate-in fade-in">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Largura</label>
                        <div className="flex relative">
                          <input 
                            type="number" step="0.01" min="0.1" required
                            value={calcData.largura}
                            onChange={(e) => setCalcData({...calcData, largura: e.target.value})}
                            className="w-full bg-gray-50 border border-gray-300 p-2.5 pl-3 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446] rounded-[8px]" 
                            placeholder="Ex: 5" 
                          />
                          <span className="absolute right-3 top-2.5 text-gray-400 text-sm font-bold">m</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Compr.</label>
                        <div className="flex relative">
                          <input 
                            type="number" step="0.01" min="0.1" required
                            value={calcData.comprimento}
                            onChange={(e) => setCalcData({...calcData, comprimento: e.target.value})}
                            className="w-full bg-gray-50 border border-gray-300 p-2.5 pl-3 focus:outline-none focus:border-[#008446] focus:ring-1 focus:ring-[#008446] rounded-[8px]" 
                            placeholder="Ex: 30" 
                          />
                          <span className="absolute right-3 top-2.5 text-gray-400 text-sm font-bold">m</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="md:col-span-1">
                  <button type="submit" className="w-full bg-[#008446] hover:bg-[#1C9C69] text-white font-bold text-sm px-2 py-2.5 transition-colors uppercase tracking-wide flex justify-center items-center gap-2 rounded-[8px] h-[46px]">
                    <Calculator size={18} /> Calcular
                  </button>
                </div>
              </div>

              {calcError && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-[8px] text-sm font-bold flex items-center justify-center gap-2 animate-in fade-in">
                  <Info size={20} className="shrink-0" />
                  <p>{calcError}</p>
                </div>
              )}
            </form>
          </div>

          <div className="lg:w-5/12 p-6 md:p-10 bg-black text-white relative flex flex-col justify-center">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20.5V18H0v-2h20v-2.5L22.5 16 25 13.5V0h2v13.5L29.5 16l2.5-2.5V0h2v13.5L36.5 16l2.5-2.5V0h2v13.5L44 16v2h-3v2h3v2h-3v2.5L38.5 22 36 24.5V40h-2V24.5L31.5 22l-2.5 2.5V40h-2V24.5L24.5 22 22 24.5V40h-2V24.5L17.5 22 15 24.5V40h-2V24.5L10.5 22 8 24.5V40H6V24.5L3.5 22 1 24.5V40H-1V24.5L-3.5 22l-2.5 2.5V40h-2V24.5L-10.5 22l-2.5 2.5V40h-2V24.5L-17.5 22l-2.5 2.5V40h-2V24.5L-24.5 22l-2.5 2.5V40h-2V24.5L-31.5 22l-2.5 2.5V40h-2V24.5L-38.5 22l-2.5 2.5V40h-2V24.5L-45.5 22l-2.5 2.5V40h-2V24.5z\' fill=\'%23FFFFFF\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
            }}></div>

            <div className="relative z-10">
              <div className="text-center w-full">
                <h3 className="text-xl font-bold text-white uppercase mb-8 border-b-2 border-[#4E524F] pb-2 inline-block">Resumo Estrutural</h3>
              </div>
              
              {!calcResult ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-12 px-4 text-gray-400"
                >
                  <Calculator size={48} className="mx-auto mb-4 opacity-30" />
                  <p className="text-sm md:text-base">Preencha os dados do projeto ao lado e clique em calcular.</p>
                </motion.div>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="bg-[#4E524F]/40 p-5 border-l-4 border-[#008446] rounded-r-[10px]">
                    <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wide mb-1">Volume Recomendado</p>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-4xl md:text-5xl font-black text-white">{calcResult.medidaCompra}</span>
                      <span className="text-lg md:text-xl font-bold text-gray-300 mb-1">{calcResult.unidade}</span>
                    </div>
                    <p className="text-[#1C9C69] font-semibold text-xs">
                      *Já inclui a margem de recortes definida ({(parseFloat(calcData.margem)*100).toFixed(0)}%).
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/50 border border-[#4E524F] p-3 rounded-[8px]">
                      <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase mb-1">Cobertura Exata</p>
                      <p className="font-bold text-white text-lg">{calcResult.medidaExata} {calcResult.unidade}</p>
                    </div>
                    <div className="bg-black/50 border border-[#4E524F] p-3 rounded-[8px]">
                      <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase mb-1">Nº de Peças</p>
                      <p className="font-bold text-white text-lg">{calcResult.pecas} un.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#4E524F]">
                    <button 
                      type="button" 
                      onClick={handleSaveItem}
                      className="flex-1 bg-[#008446] hover:bg-[#1C9C69] text-white font-bold uppercase text-xs py-3 px-2 transition-colors flex justify-center items-center gap-2 rounded-[8px]"
                    >
                      <Save size={16} /> Salvar Item
                    </button>
                    <button 
                      type="button" 
                      onClick={handleCalcCopy}
                      className="flex-1 bg-white hover:bg-gray-200 text-black font-bold uppercase text-xs py-3 px-2 transition-colors flex justify-center items-center gap-2 rounded-[8px]"
                    >
                      {isCopied ? <Check size={16} className="text-[#008446]"/> : <Copy size={16} />}
                      {isCopied ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {savedItems.length > 0 && (
          <div id="itens-orcamento" className="mt-6 bg-white shadow-2xl border border-gray-200 w-full rounded-[8px] p-6 md:p-10 animate-in fade-in slide-in-from-top-8 duration-700 relative z-10">
            <h3 className="text-2xl font-black text-black uppercase mb-6 flex items-center gap-3">
              <ShoppingCart className="text-[#008446]" size={28} /> Itens do Orçamento
            </h3>
            
            <div className="space-y-4 mb-8">
              {savedItems.map((item, index) => (
                <div key={item.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-50 border border-gray-200 rounded-[8px] gap-4">
                  <div>
                    <h4 className="font-bold text-black text-lg">{index + 1}. {item.produto}</h4>
                    <p className="text-sm text-gray-600">{item.detalhesMedida}</p>
                  </div>
                  <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                    <div className="text-right">
                      <p className="text-xs text-gray-500 font-bold uppercase">Volume Recomendado</p>
                      <p className="font-black text-[#008446] text-xl">{item.medidaCompra} <span className="text-sm">{item.unidade}</span></p>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors rounded-[5px]"
                      title="Excluir item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end border-t border-gray-200 pt-6">
              {!showSendOptions ? (
                <button 
                  onClick={() => setShowSendOptions(true)}
                  className="bg-black hover:bg-gray-800 text-white font-bold text-sm px-8 py-4 transition-colors uppercase tracking-wide flex justify-center items-center gap-2 rounded-[8px] w-full md:w-auto animate-in fade-in"
                >
                  <Send size={18} /> Solicitar Orçamento ({savedItems.length})
                </button>
              ) : (
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto animate-in slide-in-from-right-8 fade-in duration-300">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wide mr-2 hidden lg:block">Como deseja enviar?</span>
                  <button 
                    onClick={handleSendWhatsapp}
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white font-bold text-sm px-8 py-4 transition-colors uppercase tracking-wide flex justify-center items-center gap-2 rounded-[8px]"
                  >
                    <MessageCircle size={18} /> Por WhatsApp
                  </button>
                  <button 
                    onClick={handleSendEmail}
                    className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-bold text-sm px-8 py-4 transition-colors uppercase tracking-wide flex justify-center items-center gap-2 rounded-[8px]"
                  >
                    <Mail size={18} /> Por E-mail
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


