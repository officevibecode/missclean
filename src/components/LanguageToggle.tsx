import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'pt'
            ? 'bg-gold text-white shadow-md'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        aria-label="Português"
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-gold text-white shadow-md'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

