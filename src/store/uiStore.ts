import { create } from 'zustand';
import { Article } from '../types';

interface UIState {
  isMobileMenuOpen: boolean;
  isWhatsAppPopupOpen: boolean;
  selectedArticle: Article | null;
  quoteDetails: string;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  setIsWhatsAppPopupOpen: (isOpen: boolean) => void;
  setSelectedArticle: (article: Article | null) => void;
  setQuoteDetails: (details: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isWhatsAppPopupOpen: false,
  selectedArticle: null,
  quoteDetails: '',
  setIsMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  setIsWhatsAppPopupOpen: (isOpen) => set({ isWhatsAppPopupOpen: isOpen }),
  setSelectedArticle: (article) => set({ selectedArticle: article }),
  setQuoteDetails: (details) => set({ quoteDetails: details }),
}));
