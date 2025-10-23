# Miss Clean - Website

Website completo de limpeza ecológica e terapêutica construído com React, TypeScript, Vite, Tailwind CSS e Shadcn/ui.

## 🌟 Sobre o Projeto

Miss Clean é um website premium para serviços de limpeza ecológica e terapêutica, único em Portugal. O site foi desenvolvido com foco em:

- **Design Premium** - Paleta dourada e verde natural para público sofisticado
- **Conversão** - Quiz interativo para captação e qualificação de leads
- **Experiência do Utilizador** - Navegação intuitiva e mobile-first
- **SEO Otimizado** - Meta tags e estrutura semântica

## 🚀 Stack Tecnológica

- **React 19** - Biblioteca UI moderna
- **TypeScript** - Type safety e desenvolvimento robusto
- **Vite** - Build tool ultra-rápido com HMR
- **Tailwind CSS** - Styling utility-first
- **Shadcn/ui** - Componentes acessíveis e customizáveis
- **React Router** - Navegação entre páginas
- **Lucide React** - Ícones modernos e consistentes

## 📦 Começar

### Instalar dependências
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Desenvolvimento com acesso na rede (para testar no telemóvel)
```bash
npm run dev -- --host
```
O site estará disponível em:
- Local: http://localhost:5173/
- Rede: http://[seu-ip]:5173/

### Build para produção
```bash
npm run build
```

### Preview do build
```bash
npm preview
```

## 🎨 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── layout/         # Navbar, Footer, WhatsAppButton
│   ├── ui/             # Componentes Shadcn/ui
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── CTASection.tsx
│   ├── FAQAccordion.tsx
│   └── LeadQuiz.tsx    # Quiz interativo para leads
├── pages/              # Páginas da aplicação
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Workshops.tsx
│   ├── Business.tsx
│   ├── Residential.tsx
│   ├── Unique.tsx
│   └── Contact.tsx
├── lib/                # Utilitários
├── assets/             # Imagens e recursos
├── App.tsx             # Router e layout principal
├── main.tsx            # Entry point
└── index.css           # Estilos globais e variáveis CSS

## 🎨 Design System

### Cores
- **Dourado**: `#D4AF37` - Premium, luxo, exclusividade
- **Verde Natural**: `#4A7C59` - Ecológico, natural, harmonia
- **Creme**: `#FAFAFA` - Limpo, puro, sofisticado
- **Cinza Escuro**: `#2C2C2C` - Contraste, elegância

### Tipografia
- **Títulos**: Playfair Display (serif elegante)
- **Corpo**: Inter (sans-serif moderna)

## 📱 Páginas

1. **Home** - Hero com vídeo, serviços, benefícios, testemunhos, FAQ
2. **Sobre** - História, missão, valores, certificações
3. **Serviços** - Lista completa de serviços com detalhes
4. **Formações** - Workshops e formações profissionalizantes
5. **Empresas** - Soluções B2B, casos de sucesso, planos
6. **Residências** - Serviços para lares, pacotes familiares
7. **Único em Portugal** - Página de autoridade e diferenciação
8. **Contactos** - Formulário, WhatsApp, informações

## ✨ Funcionalidades Especiais

### Quiz Interativo
- 7 perguntas de qualificação
- Animações suaves entre steps
- Resultado personalizado
- Integração com WhatsApp
- Lead capture completo

### WhatsApp Integration
- Botão flutuante sempre visível
- Links diretos em CTAs
- Mensagens pré-formatadas
- Número: +351 913 034 241

### Otimizações
- Lazy loading de componentes
- SEO meta tags em todas as páginas
- Scroll to top em navegação
- Responsive design premium
- Performance otimizada

## 🔧 Configuração

- `tailwind.config.js` - Configuração do Tailwind com cores customizadas
- `components.json` - Configuração do Shadcn/ui
- `vite.config.ts` - Configuração do Vite com path aliases
- `tsconfig.json` - Configuração do TypeScript

## 📞 Contacto

- **WhatsApp**: +351 913 034 241
- **Email**: info@missclean.pt
- **Website**: https://missclean.pt

## 🎯 Template Base

Este projeto pode ser usado como template base para criar outros sites premium.
Inclui:
- Sistema de design completo
- Componentes reutilizáveis
- Estrutura de páginas
- Quiz interativo
- Integração WhatsApp
- SEO otimizado

---

Desenvolvido com ❤️ para Miss Clean - Limpeza Ecológica e Terapêutica
```
