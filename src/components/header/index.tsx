// 'use client';

// import React from 'react';
// import { Menu, X, Calculator } from 'lucide-react';
// import { useUIStore } from '@/store/uiStore';
// import { BrandConfig } from '@/constants/data';

// const Logo = ({ className = "h-10", isLight = false }: { className?: string, isLight?: boolean }) => (
//   <div className={`flex items-center gap-3 ${className}`}>
//     <svg viewBox="0 0 100 100" className="h-full w-auto drop-shadow-md">
//       <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#000000" />
//       <polygon points="32,8 68,8 92,32 92,68 68,92 32,92 8,68 8,32" fill="#FFFFFF" />
//       <polygon points="34,10 66,10 90,34 90,66 66,90 34,90 10,66 10,34" fill="#000000" />
//       <polygon points="25,20 75,20 85,35 40,35 40,45 65,45 75,60 40,60 40,85 25,85" fill={BrandConfig.colors.primary} />
//       <polygon points="40,35 85,35 75,20 40,20" fill={BrandConfig.colors.secondary} opacity="0.6"/>
//       <polygon points="40,60 75,60 65,45 40,45" fill={BrandConfig.colors.secondary} opacity="0.6"/>
//       <polygon points="40,60 75,60 75,85 40,85" fill={BrandConfig.colors.product} />
//     </svg>
//     <div className="flex flex-col justify-center">
//       <span className={`font-black text-xl leading-none tracking-tight uppercase transition-colors duration-300 ${isLight ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Barlow, sans-serif' }}>
//         Forte
//       </span>
//       <span className={`font-bold text-xs leading-none tracking-widest uppercase transition-colors duration-300 ${isLight ? 'text-white/80' : 'text-black'}`} style={{ fontFamily: 'Barlow, sans-serif' }}>
//         Pré-Moldados
//       </span>
//     </div>
//   </div>
// );

// export const Header = () => {
//   const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();
//   const [isScrolled, setIsScrolled] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollTo = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         <button onClick={() => scrollTo('home')} className="hover:opacity-80 transition-opacity">
//           <Logo className="h-10 md:h-12" isLight={!isScrolled} />
//         </button>
        
//         <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-semibold text-sm tracking-wide uppercase">
//           {[
//             { id: 'produtos', label: 'Produtos' },
//             { id: 'diferenciais', label: 'Diferenciais' },
//             { id: 'sobre', label: 'A Indústria' },
//             { id: 'atuacao', label: 'Atuação' },
//             { id: 'sustentabilidade', label: 'ESG' },
//             { id: 'conhecimento', label: 'Expertise' },
//           ].map((item) => (
//             <button 
//               key={item.id} 
//               onClick={() => scrollTo(item.id)} 
//               className={`relative group transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-[#008446]' : 'text-white/90 hover:text-white'}`}
//             >
//               <span>{item.label}</span>
//               <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#008446] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
//             </button>
//           ))}
//           <div className="flex items-center gap-3 ml-2">
//             <button 
//               onClick={() => scrollTo('calculadora')}
//               className={`px-4 py-2 flex items-center gap-2 transition-all transform hover:scale-105 font-bold rounded-[8px] border ${
//                 isScrolled 
//                   ? 'border-[#008446] text-[#008446] hover:bg-[#008446] hover:text-white' 
//                   : 'border-white/50 text-white hover:bg-white hover:text-black'
//               }`}
//             >
//               <Calculator size={18} />
//               Calculadora
//             </button>
//             <a 
//               href={BrandConfig.whatsapp.url} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="bg-[#008446] hover:bg-[#1C9C69] text-white px-5 lg:px-6 py-2.5 flex items-center gap-2 transition-all transform hover:scale-105 font-bold rounded-[8px] shadow-md"
//             >
//               Fale Conosco
//             </a>
//           </div>
//         </nav>

//         <button className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 gap-4 font-semibold text-lg uppercase">
//           <button onClick={() => scrollTo('produtos')} className="text-left py-2 border-b border-gray-100">Produtos</button>
//           <button onClick={() => scrollTo('diferenciais')} className="text-left py-2 border-b border-gray-100">Diferenciais</button>
//           <button onClick={() => scrollTo('sobre')} className="text-left py-2 border-b border-gray-100">A Indústria</button>
//           <button onClick={() => scrollTo('atuacao')} className="text-left py-2 border-b border-gray-100">Atuação</button>
//           <button onClick={() => scrollTo('calculadora')} className="text-left py-2 border-b border-gray-100">Calculadora</button>
//           <button onClick={() => scrollTo('sustentabilidade')} className="text-left py-2 border-b border-gray-100">Sustentabilidade ESG</button>
//           <button onClick={() => scrollTo('conhecimento')} className="text-left py-2 border-b border-gray-100">Expertise</button>
//           <button onClick={() => scrollTo('contato')} className="text-left py-2 border-b border-gray-100">Contato</button>
//           <a 
//             href={BrandConfig.whatsapp.url} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="bg-[#008446] text-white text-center py-3 mt-2 font-bold rounded-[8px]"
//           >
//             Fale com um Consultor
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

import { Header } from "@/components/header/view";

export default Header