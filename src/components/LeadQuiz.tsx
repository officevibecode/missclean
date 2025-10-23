import { useState } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Check, Phone, Mail, User } from 'lucide-react';

interface QuizData {
  spaceType: string;
  area: string;
  frequency: string;
  interests: string[];
  budget: string;
  urgency: string;
  name: string;
  email: string;
  phone: string;
}

const WHATSAPP_NUMBER = '351913034241';

export function LeadQuiz({ onClose }: { onClose?: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<QuizData>({
    spaceType: '',
    area: '',
    frequency: '',
    interests: [],
    budget: '',
    urgency: '',
    name: '',
    email: '',
    phone: ''
  });
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 'spaceType',
      question: 'Que tipo de espaço pretende limpar?',
      options: [
        { value: 'residencia', label: 'Residência / Casa', icon: '🏠' },
        { value: 'empresa', label: 'Empresa / Escritório', icon: '🏢' },
        { value: 'ambos', label: 'Ambos', icon: '🏘️' }
      ]
    },
    {
      id: 'area',
      question: 'Qual é a área aproximada?',
      options: [
        { value: 'pequena', label: 'Até 100m²', icon: '📐' },
        { value: 'media', label: '100m² - 200m²', icon: '📏' },
        { value: 'grande', label: '200m² - 500m²', icon: '📊' },
        { value: 'muito-grande', label: 'Mais de 500m²', icon: '🏗️' }
      ]
    },
    {
      id: 'frequency',
      question: 'Com que frequência necessita do serviço?',
      options: [
        { value: 'pontual', label: 'Pontual / Uma vez', icon: '📅' },
        { value: 'semanal', label: 'Semanal', icon: '🗓️' },
        { value: 'quinzenal', label: 'Quinzenal', icon: '📆' },
        { value: 'mensal', label: 'Mensal', icon: '📋' }
      ]
    },
    {
      id: 'interests',
      question: 'Quais os serviços que mais lhe interessam?',
      multiple: true,
      options: [
        { value: 'ecologica', label: 'Limpeza Ecológica', icon: '🌿' },
        { value: 'terapeutica', label: 'Limpeza Terapêutica', icon: '✨' },
        { value: 'aromaterapia', label: 'Aromaterapia', icon: '🌸' },
        { value: 'rainbow', label: 'Sistema Rainbow', icon: '🌈' },
        { value: 'consultoria', label: 'Consultoria', icon: '💼' }
      ]
    },
    {
      id: 'budget',
      question: 'Qual o seu orçamento aproximado mensal?',
      options: [
        { value: 'basico', label: 'Até 200€', icon: '💰' },
        { value: 'medio', label: '200€ - 500€', icon: '💎' },
        { value: 'premium', label: '500€ - 1000€', icon: '👑' },
        { value: 'vip', label: 'Mais de 1000€', icon: '⭐' }
      ]
    },
    {
      id: 'urgency',
      question: 'Quando pretende iniciar o serviço?',
      options: [
        { value: 'urgente', label: 'O mais rápido possível', icon: '🚀' },
        { value: 'semana', label: 'Esta semana', icon: '📅' },
        { value: 'mes', label: 'Este mês', icon: '🗓️' },
        { value: 'avaliar', label: 'Estou a avaliar opções', icon: '🤔' }
      ]
    }
  ];

  const handleOptionSelect = (questionId: string, value: string, isMultiple?: boolean) => {
    if (isMultiple) {
      const currentInterests = formData.interests;
      const newInterests = currentInterests.includes(value)
        ? currentInterests.filter(i => i !== value)
        : [...currentInterests, value];
      setFormData({ ...formData, interests: newInterests });
    } else {
      setFormData({ ...formData, [questionId]: value });
      setTimeout(() => {
        if (currentStep < questions.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setCurrentStep(currentStep + 1);
        }
      }, 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleWhatsApp = () => {
    const message = `Olá! Completei o questionário da Miss Clean.
    
Detalhes:
- Tipo de espaço: ${formData.spaceType}
- Área: ${formData.area}
- Frequência: ${formData.frequency}
- Interesses: ${formData.interests.join(', ')}
- Orçamento: ${formData.budget}
- Urgência: ${formData.urgency}

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

Gostaria de receber uma proposta personalizada.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  if (showResult) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl mx-auto p-8 md:p-12">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-teal/20 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-teal" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-dark">
            Obrigado, {formData.name}!
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Com base nas suas respostas, identificámos os serviços perfeitos para si.
            Entre em contacto connosco via WhatsApp para receber uma proposta personalizada!
          </p>
          
          <div className="bg-gold/10 border-2 border-gold/20 rounded-2xl p-6 space-y-3">
            <h3 className="font-semibold text-gold text-lg">Serviços Recomendados:</h3>
            <ul className="text-left space-y-2 text-gray-700">
              {formData.interests.map((interest) => (
                <li key={interest} className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="capitalize">{interest}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button
            onClick={handleWhatsApp}
            className="w-full bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Contactar via WhatsApp
          </button>
          
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 font-medium"
            >
              Fechar
            </button>
          )}
        </div>
      </div>
    );
  }

  if (currentStep === questions.length) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl mx-auto p-8 md:p-12">
        <div className="mb-8">
          <div className="w-full bg-gray-light rounded-full h-2 mb-6">
            <div
              className="bg-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-dark mb-2">
            Últimos detalhes
          </h2>
          <p className="text-gray-600">
            Para receber a sua proposta personalizada, precisamos dos seus contactos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Nome completo
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="O seu nome"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Telefone
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="+351 900 000 000"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              Voltar
            </button>
            
            <button
              type="submit"
              className="flex-1 bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Ver Proposta
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="bg-white rounded-3xl shadow-2xl max-w-2xl mx-auto p-8 md:p-12">
      <div className="mb-8">
        <div className="w-full bg-gray-light rounded-full h-2 mb-6">
          <div
            className="bg-gold h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Pergunta {currentStep + 1} de {questions.length}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-dark">
          {currentQuestion.question}
        </h2>
      </div>

      <div className="space-y-3">
        {currentQuestion.options.map((option) => {
          const isSelected = currentQuestion.multiple
            ? formData.interests.includes(option.value)
            : formData[currentQuestion.id as keyof QuizData] === option.value;

          return (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(currentQuestion.id, option.value, currentQuestion.multiple)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all hover:scale-102 ${
                isSelected
                  ? 'border-gold bg-gold/10'
                  : 'border-gray-200 hover:border-gold/50'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{option.icon}</span>
                <span className="font-medium text-gray-dark">{option.label}</span>
                {isSelected && (
                  <Check className="w-5 h-5 text-gold ml-auto" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex gap-4 mt-8">
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Voltar
          </button>
        )}
        
        {currentQuestion.multiple && (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={formData.interests.length === 0}
            className="flex-1 bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

