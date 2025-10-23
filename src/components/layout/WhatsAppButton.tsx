import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '351913034241';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os serviços da Miss Clean.';

export function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-teal hover:bg-teal/90 text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green/50 group"
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span className="font-medium hidden md:inline-block">WhatsApp</span>
    </button>
  );
}

