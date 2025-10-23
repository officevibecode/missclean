import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Logo } from '../Logo';

const WHATSAPP_NUMBER = '351913034241';
const EMAIL = 'info@missclean.pt';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Miss Clean.')}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gray-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Logo className="h-16" variant="dark" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformamos ambientes físicos e emocionais através da limpeza ecológica,
              aromaterapia e bem-estar. O único serviço em Portugal que alia sustentabilidade
              e terapia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-gold transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-gold transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/formacoes" className="text-gray-400 hover:text-gold transition-colors">
                  Formações
                </Link>
              </li>
              <li>
                <Link to="/unico" className="text-gray-400 hover:text-gold transition-colors">
                  Único em Portugal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/residencias" className="text-gray-400 hover:text-gold transition-colors">
                  Residências
                </Link>
              </li>
              <li>
                <Link to="/empresas" className="text-gray-400 hover:text-gold transition-colors">
                  Empresas
                </Link>
              </li>
              <li>
                <Link to="/servicos#terapeutica" className="text-gray-400 hover:text-gold transition-colors">
                  Limpeza Terapêutica
                </Link>
              </li>
              <li>
                <Link to="/servicos#aromaterapia" className="text-gray-400 hover:text-gold transition-colors">
                  Aromaterapia
                </Link>
              </li>
              <li>
                <Link to="/servicos#consultoria" className="text-gray-400 hover:text-gold transition-colors">
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+351 913 034 241</span>
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Portugal</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gold">Siga-nos</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gold flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gold flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gold flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Miss Clean. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacidade" className="text-gray-400 hover:text-gold transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-gray-400 hover:text-gold transition-colors">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

