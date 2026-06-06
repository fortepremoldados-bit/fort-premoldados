import { create } from 'zustand';
import { Article } from '../types';

interface UIState {
  isMobileMenuOpen: boolean;
  isWhatsAppPopupOpen: boolean;
  selectedArticle: Article | null;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  setIsWhatsAppPopupOpen: (isOpen: boolean) => void;
  setSelectedArticle: (article: Article | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isWhatsAppPopupOpen: false,
  selectedArticle: null,
  setIsMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  setIsWhatsAppPopupOpen: (isOpen) => set({ isWhatsAppPopupOpen: isOpen }),
  setSelectedArticle: (article) => set({ selectedArticle: article }),
}));
