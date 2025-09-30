import React from 'react';
import ChatInterface from '../components/ChatInterface';
import { useLanguage } from '../contexts/LanguageContext';

const ReportsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <ChatInterface
      pageTitle={t.reportsPage.title}
      pageDescription={t.reportsPage.description}
      systemInstruction={t.reportsPage.systemInstruction}
      placeholder={t.reportsPage.placeholder}
    />
  );
};

export default ReportsPage;