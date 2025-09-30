import React from 'react';
import ChatInterface from '../components/ChatInterface';
import { useLanguage } from '../contexts/LanguageContext';

const CalculatorPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <ChatInterface
      pageTitle={t.calculatorPage.title}
      pageDescription={t.calculatorPage.description}
      systemInstruction={t.calculatorPage.systemInstruction}
      placeholder={t.calculatorPage.placeholder}
    />
  );
};

export default CalculatorPage;