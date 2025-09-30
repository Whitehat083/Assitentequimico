import React, { createContext, useState, useContext, useMemo } from 'react';
import { translations, Translation } from '../translations';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: Translation;
  availableLanguages: { [key: string]: string };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('pt'); // Default to Portuguese

  const t = useMemo(() => translations[language] || translations.en, [language]);
  
  const availableLanguages = {
      pt: "Português",
      en: "English",
      es: "Español",
      de: "Deutsch",
      fr: "Français"
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
