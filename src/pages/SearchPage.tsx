import React from 'react';
import ChatInterface from '../components/ChatInterface';
import { useLanguage } from '../contexts/LanguageContext';

const SearchPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <ChatInterface
      pageTitle={t.searchPage.title}
      pageDescription={t.searchPage.description}
      systemInstruction={t.searchPage.systemInstruction}
      placeholder={t.searchPage.placeholder}
    />
  );
};

export default SearchPage;