import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showWhatsApp?: boolean;
  variant?: 'gold' | 'green' | 'gradient';
}

const WHATSAPP_NUMBER = '351913034241';

export function CTASection({
  title,
  description,
  primaryButtonText = 'Começar Agora',
  primaryButtonLink = '/contactos',
  secondaryButtonText,
  secondaryButtonLink,
  showWhatsApp = true,
  variant = 'gradient'
}: CTASectionProps) {
  
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Miss Clean.')}`;
    window.open(url, '_blank');
  };

  const bgClass = {
    gold: 'bg-gold',
    green: 'bg-teal',
    gradient: 'gradient-gold'
  }[variant];

  return (
    <section className={`${bgClass} py-20`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            {title}
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {showWhatsApp ? (
              <button
                onClick={handleWhatsApp}
                className="group flex items-center gap-2 bg-white text-gold hover:bg-gray-light px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <Link
                to={primaryButtonLink}
                className="group flex items-center gap-2 bg-white text-gold hover:bg-gray-light px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                to={secondaryButtonLink}
                className="flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gold px-8 py-4 rounded-full font-semibold transition-all"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

