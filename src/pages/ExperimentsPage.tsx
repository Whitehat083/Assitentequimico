import React from 'react';
import ChatInterface from '../components/ChatInterface';
import { useLanguage } from '../contexts/LanguageContext';

const ExperimentsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <ChatInterface
      pageTitle={t.experimentsPage.title}
      pageDescription={t.experimentsPage.description}
      systemInstruction={t.experimentsPage.systemInstruction}
      placeholder={t.experimentsPage.placeholder}
    />
  );
};

export default ExperimentsPage;