export type Language = 'pt' | 'en';

interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    workshops: string;
    business: string;
    residential: string;
    unique: string;
    contact: string;
    contactButton: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    contact: string;
    followUs: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsOfService: string;
    mobileCallNote: string;
  };
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
    whatsappDesc: string;
    whatsappSubtext: string;
    email: string;
    emailDesc: string;
    emailSubtext: string;
    phone: string;
    phoneDesc: string;
    phoneSubtext: string;
    mobileCallNote: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sendWhatsAppButton: string;
    messageSent: string;
    messageSentDesc: string;
  };
  certifications: {
    title: string;
    subtitle: string;
    memberIPA: string;
    memberIPADesc: string;
    professionalAroma: string;
    professionalAromaDesc: string;
    training200h: string;
    training200hDesc: string;
    footSoak: string;
    footSoakDesc: string;
    ccpIEFP: string;
    ccpIEFPDesc: string;
    ctaButton: string;
  };
  common: {
    portugal: string;
    learnMore: string;
    viewAll: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      workshops: 'Formações',
      business: 'Empresas',
      residential: 'Residências',
      unique: 'Único em Portugal',
      contact: 'Contactos',
      contactButton: 'Contactar',
    },
    hero: {
      badge: '✨ Único em Portugal',
      title: 'Limpeza Ecológica e',
      titleHighlight: 'Terapêutica',
      subtitle: 'Transformamos ambientes físicos e emocionais através da sustentabilidade, aromaterapia e bem-estar. Mais do que limpeza — é equilíbrio e harmonia.',
      ctaPrimary: 'Receber Proposta Personalizada',
      ctaSecondary: 'Conhecer a Miss Clean',
    },
    footer: {
      description: 'Transformamos ambientes físicos e emocionais através da limpeza ecológica, aromaterapia e bem-estar. O único serviço em Portugal que alia sustentabilidade e terapia.',
      quickLinks: 'Links Rápidos',
      services: 'Serviços',
      contact: 'Contacto',
      followUs: 'Siga-nos',
      allRightsReserved: 'Todos os direitos reservados.',
      privacyPolicy: 'Política de Privacidade',
      termsOfService: 'Termos de Serviço',
      mobileCallNote: 'Chamada para rede móvel nacional',
    },
    contact: {
      title: 'Entre em Contacto',
      subtitle: 'Estamos prontos para transformar o seu espaço. Entre em contacto e receba uma proposta personalizada.',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Resposta mais rápida',
      whatsappSubtext: 'Clique para conversar agora',
      email: 'Email',
      emailDesc: 'Mensagens detalhadas',
      emailSubtext: 'Resposta em 24h',
      phone: 'Telefone',
      phoneDesc: 'Falar directamente',
      phoneSubtext: 'Seg-Sex: 9h-19h',
      mobileCallNote: 'Chamada para rede móvel nacional',
      formTitle: 'Envie-nos uma Mensagem',
      nameLabel: 'Nome Completo',
      namePlaceholder: 'O seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'seuemail@exemplo.com',
      phoneLabel: 'Telefone',
      phonePlaceholder: '+351 900 000 000',
      serviceLabel: 'Serviço de Interesse',
      servicePlaceholder: 'Selecione um serviço',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-nos sobre as suas necessidades...',
      sendButton: 'Enviar Mensagem',
      sendWhatsAppButton: 'Enviar via WhatsApp',
      messageSent: 'Mensagem Enviada!',
      messageSentDesc: 'Entraremos em contacto em breve.',
    },
    certifications: {
      title: 'Autoridade & Certificações',
      subtitle: 'Formação reconhecida e prática profissional para cuidar de si com segurança.',
      memberIPA: 'Membro IPA — Aromaterapeuta',
      memberIPADesc: 'Afiliação e reconhecimento profissional no Instituto Português de Aromaterapia.',
      professionalAroma: 'Aromaterapeuta Profissional',
      professionalAromaDesc: 'Certificação profissional emitida pelo IPA — formação estruturada e validada.',
      training200h: 'Formação Profissional (200h)',
      training200hDesc: 'Base sólida e prática para protocolos seguros e personalizados.',
      footSoak: 'Escalda-Pés Terapêutico',
      footSoakDesc: 'Aplicação prática com óleos essenciais para relaxamento e bem-estar.',
      ccpIEFP: 'CCP — Competências Pedagógicas (IEFP)',
      ccpIEFPDesc: 'Capacidade certificada para orientar e explicar com clareza.',
      ctaButton: 'Quero marcar a minha sessão',
    },
    common: {
      portugal: 'Portugal',
      learnMore: 'Saber mais',
      viewAll: 'Ver Todos',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      workshops: 'Workshops',
      business: 'Business',
      residential: 'Residential',
      unique: 'Unique in Portugal',
      contact: 'Contact',
      contactButton: 'Contact',
    },
    hero: {
      badge: '✨ Unique in Portugal',
      title: 'Ecological and',
      titleHighlight: 'Therapeutic Cleaning',
      subtitle: 'We transform physical and emotional environments through sustainability, aromatherapy, and well-being. More than cleaning — it\'s balance and harmony.',
      ctaPrimary: 'Get Personalized Quote',
      ctaSecondary: 'Learn About Miss Clean',
    },
    footer: {
      description: 'We transform physical and emotional environments through ecological cleaning, aromatherapy, and well-being. The only service in Portugal that combines sustainability and therapy.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      mobileCallNote: 'Call to national mobile network',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We\'re ready to transform your space. Contact us and receive a personalized proposal.',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Fastest response',
      whatsappSubtext: 'Click to chat now',
      email: 'Email',
      emailDesc: 'Detailed messages',
      emailSubtext: 'Response within 24h',
      phone: 'Phone',
      phoneDesc: 'Talk directly',
      phoneSubtext: 'Mon-Fri: 9am-7pm',
      mobileCallNote: 'Call to national mobile network',
      formTitle: 'Send Us a Message',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'youremail@example.com',
      phoneLabel: 'Phone',
      phonePlaceholder: '+351 900 000 000',
      serviceLabel: 'Service of Interest',
      servicePlaceholder: 'Select a service',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your needs...',
      sendButton: 'Send Message',
      sendWhatsAppButton: 'Send via WhatsApp',
      messageSent: 'Message Sent!',
      messageSentDesc: 'We\'ll be in touch soon.',
    },
    certifications: {
      title: 'Authority & Certifications',
      subtitle: 'Recognized training and professional practice to care for you safely.',
      memberIPA: 'IPA Member — Aromatherapist',
      memberIPADesc: 'Professional affiliation and recognition at the Portuguese Institute of Aromatherapy.',
      professionalAroma: 'Professional Aromatherapist',
      professionalAromaDesc: 'Professional certification issued by IPA — structured and validated training.',
      training200h: 'Professional Training (200h)',
      training200hDesc: 'Solid and practical foundation for safe and personalized protocols.',
      footSoak: 'Therapeutic Foot Soak',
      footSoakDesc: 'Practical application with essential oils for relaxation and well-being.',
      ccpIEFP: 'CCP — Pedagogical Skills (IEFP)',
      ccpIEFPDesc: 'Certified ability to guide and explain with clarity.',
      ctaButton: 'I want to book my session',
    },
    common: {
      portugal: 'Portugal',
      learnMore: 'Learn more',
      viewAll: 'View All',
    },
  },
};

