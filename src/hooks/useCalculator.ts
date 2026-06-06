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

interface CalcResult {
  areaExata: string;
  areaCompra: string;
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
  const [isCopied, setIsCopied] = useState(false);

  const handleCalcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calcData.tipo) {
      alert("Por favor, selecione um tipo de produto.");
      return;
    }

    const areaExata = calcData.modo === 'area' 
      ? parseFloat(calcData.area) || 0 
      : (parseFloat(calcData.largura) || 0) * (parseFloat(calcData.comprimento) || 0);

    if (areaExata <= 0) return;

    const piso = PISOS_DATA[calcData.tipo];
    const margem = parseFloat(calcData.margem);
    const areaCompra = areaExata * (1 + margem);
    const totalPecas = Math.ceil(areaCompra * piso.pecasPorM2);

    setCalcResult({
      areaExata: areaExata.toFixed(2),
      areaCompra: areaCompra.toFixed(2),
      pecas: totalPecas
    });
  };

  const handleCalcReset = () => {
    setCalcData({ ...calcData, tipo: '', area: '', largura: '', comprimento: '' });
    setCalcResult(null);
    setIsCopied(false);
  };

  const handleCalcCopy = () => {
    if (!calcResult) return;
    const pisoNome = PISOS_DATA[calcData.tipo].nome;
    const detalhesMedida = calcData.modo === 'medidas' 
      ? `Medidas: ${calcData.largura}m larg. x ${calcData.comprimento}m comp. (${calcResult.areaExata}m²)`
      : `Área exata: ${calcResult.areaExata}m²`;

    const textoResumo = `🏗️ Resumo de Material - FORTE Pré-Moldados\n` +
                        `Produto: ${pisoNome}\n` +
                        `${detalhesMedida}\n` +
                        `Área p/ compra (c/ margem de ${(parseFloat(calcData.margem)*100).toFixed(0)}%): ${calcResult.areaCompra} m²\n` +
                        `Quantidade estimada: ${calcResult.pecas} unidades.\n\n` +
                        `Solicite seu orçamento em: ${BrandConfig.whatsapp.url}`;

    navigator.clipboard.writeText(textoResumo).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  return { calcData, setCalcData, calcResult, isCopied, handleCalcSubmit, handleCalcReset, handleCalcCopy };
}
