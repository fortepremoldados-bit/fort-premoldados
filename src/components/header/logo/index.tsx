import React from 'react';
import { BrandConfig } from '@/constants/data';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo = ({
  className = 'h-10',
  isLight = false,
}: LogoProps) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg viewBox="0 0 100 100" className="h-full w-auto drop-shadow-md">
      <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#000000" />
      <polygon points="32,8 68,8 92,32 92,68 68,92 32,92 8,68 8,32" fill="#FFFFFF" />
      <polygon points="34,10 66,10 90,34 90,66 66,90 34,90 10,66 10,34" fill="#000000" />
      <polygon
        points="25,20 75,20 85,35 40,35 40,45 65,45 75,60 40,60 40,85 25,85"
        fill={BrandConfig.colors.primary}
      />
      <polygon
        points="40,35 85,35 75,20 40,20"
        fill={BrandConfig.colors.secondary}
        opacity="0.6"
      />
      <polygon
        points="40,60 75,60 65,45 40,45"
        fill={BrandConfig.colors.secondary}
        opacity="0.6"
      />
      <polygon
        points="40,60 75,60 75,85 40,85"
        fill={BrandConfig.colors.product}
      />
    </svg>

    <div className="flex flex-col justify-center">
      <span
        className={`font-black text-xl leading-none tracking-tight uppercase transition-colors duration-300 ${
          isLight ? 'text-white' : 'text-black'
        }`}
        style={{ fontFamily: 'Barlow, sans-serif' }}
      >
        Forte
      </span>

      <span
        className={`font-bold text-xs leading-none tracking-widest uppercase transition-colors duration-300 ${
          isLight ? 'text-white/80' : 'text-black'
        }`}
        style={{ fontFamily: 'Barlow, sans-serif' }}
      >
        Pré-Moldados
      </span>
    </div>
  </div>
);