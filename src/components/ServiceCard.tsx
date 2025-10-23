import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  premium?: boolean;
}

export function ServiceCard({ icon: Icon, title, description, link, premium = false }: ServiceCardProps) {
  const CardContent = (
    <div
      className={`group relative h-full p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
        premium
          ? 'bg-gradient-to-br from-gold/10 to-teal/10 border-2 border-gold/20 hover:border-gold'
          : 'bg-white border border-gray-light hover:border-gold/50'
      }`}
    >
      {premium && (
        <div className="absolute -top-3 -right-3 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
          Premium
        </div>
      )}
      
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`p-4 rounded-full transition-all duration-300 ${
          premium
            ? 'bg-gold/20 text-gold group-hover:bg-gold group-hover:text-white'
            : 'bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white'
        }`}>
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-dark">{title}</h3>
        
        <p className="text-gray-600 leading-relaxed">{description}</p>
        
        {link && (
          <span className="text-gold font-medium group-hover:underline inline-flex items-center gap-2">
            Saber mais
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}

