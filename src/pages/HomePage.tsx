import React from 'react';
import ChatInterface from '../components/ChatInterface';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <ChatInterface
      pageTitle={t.homePage.title}
      pageDescription={t.homePage.description}
      systemInstruction={t.homePage.systemInstruction}
      placeholder={t.homePage.placeholder}
    />
  );
};

export default HomePage;