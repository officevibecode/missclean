import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from '../Logo';

const WHATSAPP_NUMBER = '351913034241';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Formações', path: '/formacoes' },
  { name: 'Empresas', path: '/empresas' },
  { name: 'Residências', path: '/residencias' },
  { name: 'Único em Portugal', path: '/unico' },
  { name: 'Contactos', path: '/contactos' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Miss Clean.')}`;
    window.open(url, '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <Logo 
              className="h-12 transition-transform group-hover:scale-105" 
              variant={isScrolled ? 'light' : 'dark'}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : isScrolled
                    ? 'text-gray-dark'
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Contactar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-light/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-dark' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-dark' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 bg-white rounded-b-2xl shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-gold/10 text-gold'
                      : 'text-gray-dark hover:bg-gray-light'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleWhatsApp}
                className="mx-4 mt-2 flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-full font-medium transition-all"
              >
                <Phone className="w-4 h-4" />
                Contactar via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

