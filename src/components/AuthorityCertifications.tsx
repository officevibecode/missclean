import { GraduationCap, Sparkles, ClipboardCheck } from 'lucide-react';

const WHATSAPP_NUMBER = '351913034241';

export function AuthorityCertifications() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de marcar uma sessão com a Miss Clean.')}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-teal/5 to-gold/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            Autoridade & Certificações
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Formação reconhecida e prática profissional para cuidar de si com segurança.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Primeira Linha - Cards com Imagens (2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Membro IPA (Imagem) */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200/50">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-full h-48 flex items-center justify-center mb-6">
                  <img 
                    src="/membro-aromaterapeuta.png" 
                    alt="Selo Membro IPA - Instituto Português de Aromaterapia"
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  Membro IPA — Aromaterapeuta
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Afiliação e reconhecimento profissional no Instituto Português de Aromaterapia.
                </p>
              </div>
            </div>

            {/* Card 2 - Certificado Aromaterapeuta (Imagem) */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200/50">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-full h-48 flex items-center justify-center mb-6">
                  <img 
                    src="/prof-aromaterapeuta.png" 
                    alt="Certificado Aromaterapeuta Profissional - Sónia Jesus emitido pelo IPA"
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  Aromaterapeuta Profissional
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Certificação profissional emitida pelo IPA — formação estruturada e validada.
                </p>
              </div>
            </div>
          </div>

          {/* Segunda Linha - Cards com Ícones (3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 3 - Formação 200h (Ícone) */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200/50">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center mb-6 ring-2 ring-gold/30">
                  <GraduationCap className="w-10 h-10 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  Formação Profissional (200h)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Base sólida e prática para protocolos seguros e personalizados.
                </p>
              </div>
            </div>

            {/* Card 4 - Escalda-Pés (Ícone) */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200/50">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal/20 to-teal/10 rounded-2xl flex items-center justify-center mb-6 ring-2 ring-teal/30">
                  <Sparkles className="w-10 h-10 text-teal" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  Escalda-Pés Terapêutico
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Aplicação prática com óleos essenciais para relaxamento e bem-estar.
                </p>
              </div>
            </div>

            {/* Card 5 - CCP IEFP (Ícone) */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200/50">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-teal/10 rounded-2xl flex items-center justify-center mb-6 ring-2 ring-gold/30">
                  <ClipboardCheck className="w-10 h-10 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  CCP — Competências Pedagógicas (IEFP)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Capacidade certificada para orientar e explicar com clareza.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-gold/30"
          >
            Quero marcar a minha sessão
          </button>
        </div>
      </div>
    </section>
  );
}

