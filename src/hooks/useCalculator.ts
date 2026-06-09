import { useState } from 'react';
import { PISOS_DATA, BrandConfig } from '../constants/data';

interface CalcData {
  tipo: string;
  modo: 'area' | 'medidas';
  area: string;
  largura: string;
  comprimento: string;
  margem: string;
}

export interface CalcResult {
  medidaExata: string;
  medidaCompra: string;
  pecas: number;
  unidade: string;
}

export interface SavedItem {
  id: string;
  produto: string;
  detalhesMedida: string;
  medidaCompra: string;
  unidade: string;
  pecas: number;
}

export function useCalculator() {
  const [calcData, setCalcData] = useState<CalcData>({
    tipo: '',
    modo: 'area', 
    area: '',
    largura: '',
    comprimento: '',
    margem: '0.10'
  });
  const [calcResult, setCalcResult] = useState<CalcResult | null>(null);
  const [calcError, setCalcError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);

  const handleCalcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calcData.tipo) {
      setCalcError("Selecione um produto.");
      return;
    }
    setCalcError(null);

    const piso = PISOS_DATA[calcData.tipo];
    const isLinear = piso.unidade === 'm';

    let medidaExata = 0;
    if (calcData.modo === 'area') {
      medidaExata = parseFloat(calcData.area) || 0;
    } else {
      const l = parseFloat(calcData.largura) || 0;
      const c = parseFloat(calcData.comprimento) || 0;
      medidaExata = isLinear ? (l + c) * 2 : (l * c);
    }

    if (medidaExata <= 0) return;

    const margem = parseFloat(calcData.margem);
    const medidaCompra = medidaExata * (1 + margem);
    const totalPecas = Math.ceil(medidaCompra * piso.pecasPorUnidade);

    setCalcResult({
      medidaExata: medidaExata.toFixed(2),
      medidaCompra: medidaCompra.toFixed(2),
      pecas: totalPecas,
      unidade: isLinear ? 'm' : 'm²'
    });
  };

  const handleCalcReset = () => {
    setCalcData({ ...calcData, tipo: '', area: '', largura: '', comprimento: '' });
    setCalcResult(null);
    setCalcError(null);
    setIsCopied(false);
  };

  const handleCalcCopy = () => {
    if (!calcResult) return;
    const pisoNome = PISOS_DATA[calcData.tipo].nome;
    const isLinear = calcResult.unidade === 'm';
    
    const detalhesMedida = calcData.modo === 'medidas' 
      ? `Medidas: ${calcData.largura}m larg. x ${calcData.comprimento}m comp. (${isLinear ? 'Perímetro: ' : 'Área: '}${calcResult.medidaExata}${calcResult.unidade})`
      : `Medida informada: ${calcResult.medidaExata}${calcResult.unidade}`;

    const textoResumo = `🏗️ Resumo de Material - FORTE Pré-Moldados\n` +
                        `Produto: ${pisoNome}\n` +
                        `${detalhesMedida}\n` +
                        `Volume p/ compra (c/ margem de ${(parseFloat(calcData.margem)*100).toFixed(0)}%): ${calcResult.medidaCompra} ${calcResult.unidade}\n` +
                        `Quantidade estimada: ${calcResult.pecas} peças.\n\n` +
                        `Solicite seu orçamento em: ${BrandConfig.whatsapp.url}`;

    navigator.clipboard.writeText(textoResumo).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  const handleSaveItem = () => {
    if (!calcResult || !calcData.tipo) return;
    
    const pisoNome = PISOS_DATA[calcData.tipo].nome;
    const isLinear = calcResult.unidade === 'm';
    const detalhesMedida = calcData.modo === 'medidas' 
      ? `Medidas: ${calcData.largura}m x ${calcData.comprimento}m`
      : `Medida informada: ${calcResult.medidaExata}${calcResult.unidade}`;

    const newItem: SavedItem = {
      id: Math.random().toString(36).substring(2, 9),
      produto: pisoNome,
      detalhesMedida,
      medidaCompra: calcResult.medidaCompra,
      unidade: calcResult.unidade,
      pecas: calcResult.pecas
    };

    setSavedItems([...savedItems, newItem]);
    // Reseta o formulário inteiro para dar feedback de que foi salvo e limpar a tela
    handleCalcReset();
  };

  const handleRemoveItem = (id: string) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };

  const formatQuoteList = () => {
    if (savedItems.length === 0) return '';
    let text = `🏗️ *SOLICITAÇÃO DE ORÇAMENTO* - FORTE Pré-Moldados\n\n*ITENS DO PROJETO:*\n\n`;
    
    savedItems.forEach((item, index) => {
      text += `${index + 1}. *${item.produto}*\n`;
      text += `   - ${item.detalhesMedida}\n`;
      text += `   - Volume: ${item.medidaCompra} ${item.unidade}\n`;
      text += `   - Qtd. Peças: ${item.pecas}\n\n`;
    });
    
    return text;
  };

  return { 
    calcData, setCalcData, 
    calcResult, calcError, setCalcError, isCopied, 
    savedItems, handleSaveItem, handleRemoveItem, formatQuoteList,
    handleCalcSubmit, handleCalcReset, handleCalcCopy 
  };
}
