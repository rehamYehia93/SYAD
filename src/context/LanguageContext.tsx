import React, { createContext, useState, useContext, ReactNode, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from './theme'; 

type LanguageType = 'en' | 'ar';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<LanguageType>('en');
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'ar' || savedLanguage === 'en') {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
    const newDirection = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(newDirection);
    document.documentElement.setAttribute('dir', newDirection);
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('language', language);
  }, [language, i18n]);

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
  };

  // Create theme using the function from theme.ts
  const theme = useMemo(() => {
    return getTheme(direction, language);
  }, [direction, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};