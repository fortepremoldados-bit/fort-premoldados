// 'use client';

// import React from 'react';
// import { useUIStore } from '@/store/uiStore';

// export const menuItems = [
//   { id: 'produtos', label: 'Produtos' },
//   // { id: 'diferenciais', label: 'Diferenciais' },
//   { id: 'sobre', label: 'Empresa' },
//   { id: 'atuacao', label: 'Atuação' },
//   { id: 'sustentabilidade', label: 'ESG' },
//   { id: 'conhecimento', label: 'Blog' },
// ];

// export const useHeaderController = () => {
//   const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();

//   const [isScrolled, setIsScrolled] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollTo = (id: string) => {
//     const element = document.getElementById(id);

//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//       });

//       setIsMobileMenuOpen(false);
//     }
//   };

//   return {
//     isScrolled,
//     isMobileMenuOpen,
//     setIsMobileMenuOpen,
//     scrollTo,
//     menuItems,
//   };
// };


'use client';

import React from 'react';
import { useUIStore } from '@/store/uiStore';

export const menuItems = [
  { id: 'produtos', label: 'Produtos' },
  { id: 'sobre', label: 'Empresa' },
  { id: 'atuacao', label: 'Atuação' },
  { id: 'sustentabilidade', label: 'ESG' },
  { id: 'conhecimento', label: 'Blog' },
];

export const useHeaderController = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Só muda o header depois de 500px de scroll
      setIsScrolled(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });

      setIsMobileMenuOpen(false);
    }
  };

  return {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    scrollTo,
    menuItems,
  };
};