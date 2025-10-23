# Guia de Personalização - Miss Clean

## 🎨 Como Personalizar o Website

### 1. Alterar Cores

**Arquivo**: `src/index.css`

```css
:root {
  /* Altere estas variáveis para mudar as cores */
  --gold: 45 100% 51%;           /* Dourado principal */
  --green: 150 35% 35%;          /* Verde principal */
  --cream: 40 25% 98%;           /* Fundo */
  --gray-dark: 0 0% 17%;         /* Textos escuros */
}
```

### 2. Trocar Imagens

**Imagens atuais são placeholders do Unsplash.**

Para trocar:
1. Coloque suas imagens em `public/images/`
2. Substitua as URLs nos componentes:

```tsx
// Antes
<img src="https://images.unsplash.com/photo-..." />

// Depois
<img src="/images/sua-imagem.jpg" />
```

**Páginas com imagens:**
- `Home.tsx` - Hero background
- `About.tsx` - História
- `Services.tsx` - Cada serviço
- `Workshops.tsx` - Cada workshop

### 3. Adicionar Logo

**Arquivo**: `public/logo.svg` ou `public/logo.png`

Depois, em `components/layout/Navbar.tsx`:

```tsx
// Substitua o ícone Sparkles por:
<img src="/logo.png" alt="Miss Clean" className="w-10 h-10" />
```

E em `components/layout/Footer.tsx` também.

### 4. Mudar Textos

Todos os textos estão hardcoded nos componentes para facilitar edição.

**Principais arquivos:**
- `pages/Home.tsx` - Página inicial
- `pages/About.tsx` - Sobre
- `pages/Services.tsx` - Serviços
- etc.

### 5. Alterar WhatsApp

**Número atual**: +351 913 034 241

**Arquivos para mudar:**
- `components/layout/WhatsAppButton.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/CTASection.tsx`
- `components/LeadQuiz.tsx`
- `pages/Contact.tsx`

**Buscar e substituir**: `351913034241`

### 6. Mudar Email

**Email atual**: info@missclean.pt

**Arquivos:**
- `components/layout/Footer.tsx`
- `pages/Contact.tsx`

**Buscar e substituir**: `info@missclean.pt`

### 7. Adicionar/Remover Páginas

#### Adicionar Nova Página

1. Crie o arquivo em `src/pages/NovaPagina.tsx`
2. Adicione a rota em `src/App.tsx`:

```tsx
import { NovaPagina } from './pages/NovaPagina';

// Dentro de <Routes>
<Route path="/nova-pagina" element={<NovaPagina />} />
```

3. Adicione o link no Navbar em `components/layout/Navbar.tsx`:

```tsx
const navLinks = [
  // ... links existentes
  { name: 'Nova Página', path: '/nova-pagina' },
];
```

#### Remover Página

1. Apague o arquivo em `src/pages/`
2. Remova a rota de `src/App.tsx`
3. Remova o link do `Navbar.tsx`

### 8. Modificar FAQ

**Arquivo**: `pages/Home.tsx`

Procure por `faqItems` e edite:

```tsx
const faqItems = [
  {
    question: 'Sua pergunta aqui?',
    answer: 'Sua resposta aqui.'
  },
  // Adicione mais...
];
```

### 9. Atualizar Testemunhos

**Arquivo**: `pages/Home.tsx`

Procure por `testimonials`:

```tsx
const testimonials = [
  {
    name: 'Nome do Cliente',
    role: 'Função/Descrição',
    content: 'Depoimento aqui...',
    rating: 5,
    image: '/images/cliente.jpg' // opcional
  },
];
```

### 10. Modificar Serviços

**Arquivo**: `pages/Services.tsx`

Procure por `services` array e edite:

```tsx
{
  id: 'nome-servico',
  icon: IconeDoLucide,
  title: 'Nome do Serviço',
  subtitle: 'Subtítulo',
  description: 'Descrição completa',
  benefits: [
    'Benefício 1',
    'Benefício 2',
  ],
  pricing: 'A partir de X€',
  premium: true, // opcional
  image: '/images/servico.jpg'
}
```

### 11. Alterar Planos/Pricing

**Empresas**: `pages/Business.tsx`
**Residências**: `pages/Residential.tsx`

Procure por `packages` e edite valores, features, etc.

### 12. Modificar Quiz

**Arquivo**: `components/LeadQuiz.tsx`

Para adicionar/remover perguntas, edite o array `questions`:

```tsx
{
  id: 'identificador',
  question: 'Sua pergunta?',
  multiple: false, // ou true para múltipla escolha
  options: [
    { value: 'opcao1', label: 'Label', icon: '🔥' },
  ]
}
```

### 13. Redes Sociais

**Arquivo**: `components/layout/Footer.tsx` e `pages/Contact.tsx`

Substitua `href="#"` pelos links reais:

```tsx
<a href="https://instagram.com/missclean" ...>
  <Instagram />
</a>
```

### 14. Meta Tags e SEO

**Cada página pode ter suas próprias meta tags.**

Instale `react-helmet-async`:

```bash
npm install react-helmet-async
```

Depois use em cada página:

```tsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Miss Clean - Título da Página</title>
  <meta name="description" content="Descrição específica" />
</Helmet>
```

### 15. Google Analytics

Adicione no `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 16. Favicon

Substitua `/public/vite.svg` por seu favicon:

1. Adicione `favicon.ico` em `/public/`
2. Edite `index.html`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

### 17. Animações

Para adicionar animações scroll, instale:

```bash
npm install framer-motion
```

Exemplo:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo
</motion.div>
```

### 18. Formulário Backend

Para integrar o formulário com backend:

Em `pages/Contact.tsx`, na função `handleSubmit`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://sua-api.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error('Erro ao enviar:', error);
  }
};
```

### 19. Alterar Fontes

**Arquivo**: `index.html`

Troque as fontes do Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet">
```

Depois em `index.css`:

```css
body {
  font-family: 'SuaFonte', sans-serif;
}
```

### 20. Deploy

#### Netlify
```bash
npm run build
# Faça upload da pasta 'dist'
```

#### Vercel
```bash
npm install -g vercel
vercel
```

#### GitHub Pages
```bash
npm install gh-pages --save-dev
```

Adicione em `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

## 🔥 Dicas Avançadas

### Cache Busting
Vite faz isso automaticamente com hashes nos arquivos.

### Lazy Loading de Imagens
```tsx
<img loading="lazy" src="..." />
```

### Otimizar Imagens
Use WebP quando possível e comprima antes de adicionar.

### Variáveis de Ambiente
Crie `.env`:
```
VITE_WHATSAPP_NUMBER=351913034241
VITE_EMAIL=info@missclean.pt
```

Use no código:
```tsx
const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;
```

---

## 📞 Precisa de Ajuda?

Este guia cobre as personalizações mais comuns. Para dúvidas específicas, consulte:
- Documentação do React: https://react.dev
- Documentação do Tailwind: https://tailwindcss.com
- Documentação do Vite: https://vitejs.dev

