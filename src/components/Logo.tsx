interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
}

export function Logo({ className = "h-12", variant = 'auto' }: LogoProps) {
  // Determinar qual logo usar baseado no variant
  const logoSrc = variant === 'auto' 
    ? '/images/logo-light-mode.png' // Por padrão usa light mode
    : variant === 'light'
    ? '/images/logo-light-mode.png'
    : '/images/logo-dark-mode.png';

  return (
    <img
      src={logoSrc}
      alt="Miss Clean - Limpeza Ecológica & Terapêutica"
      className={className}
    />
  );
}
