import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import About from './Components/About';
import MainHeader from './Components/MainHeader';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import { ContextActiveProjectProvider } from './context/ContextActiveProjectProvider';
import SEOProvider from './Components/SEOProvider';

export default function AppContent() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <>
      <SEOProvider />
      <div className='relative overflow-x-hidden'>
        <MainHeader />
        <main>
          <About />
          <Skills />
          <ContextActiveProjectProvider>
            <Portfolio />
          </ContextActiveProjectProvider>
        </main>
        <Contact />
      </div>
    </>
  );
}
