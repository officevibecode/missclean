import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
  image?: string;
}

export function TestimonialCard({ name, role, content, rating = 5, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-light">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        "{content}"
      </p>
      
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold">
            {name.charAt(0)}
          </div>
        )}
        
        <div>
          <p className="font-semibold text-gray-dark">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

