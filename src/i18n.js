import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    ru: { translation: ru },
  },
  lng: window.location.pathname.split('/')[1] || 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});
