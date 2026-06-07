export interface BrandColors {
  primary: string;
  secondary: string;
  product: string;
  dark: string;
  darkGray: string;
  lightGray: string;
}

export interface WhatsappConfig {
  number: string;
  message: string;
  url: string;
}

export interface BrandConfigType {
  colors: BrandColors;
  whatsapp: WhatsappConfig;
}

export interface PisoData {
  nome: string;
  dimensoes: string;
  pecasPorUnidade: number;
  unidade?: 'm2' | 'm';
  aplicacao: string;
  imagem: string;
}

export interface Article {
  image: string;
  category: string;
  categoryBg: string;
  title: string;
  description: string;
  content: string[];
}
