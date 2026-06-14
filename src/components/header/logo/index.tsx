import Image from 'next/image';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo = ({
  className = 'h-10',
  isLight = false,
}: LogoProps) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <Image
      src={isLight ? '/LogoCompleta.png' : '/LogoCompletaCinza.png'}
      alt="Forte Pré-Moldados"
      width={500}
      height={500}
      priority
      className="h-full w-auto transition-all duration-500"
    />
  </div>
);