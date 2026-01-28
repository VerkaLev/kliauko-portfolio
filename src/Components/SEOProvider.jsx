import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function SEOProvider() {
  const { t, i18n } = useTranslation();

  const baseURL = import.meta.env.PROD
    ? 'https://kliauko-portfolio.vercel.app'
    : 'http://localhost:5173';

  const hrefs = {
    ru: `${baseURL}/`,
    en: `${baseURL}/en`,
    es: `${baseURL}/es`,
  };

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('meta.title')}</title>
        <meta name='description' content={t('meta.description')} />

        {/* hreflang для всех языков */}
        <link rel='alternate' hreflang='ru' href={hrefs.ru} />
        <link rel='alternate' hreflang='en' href={hrefs.en} />
        <link rel='alternate' hreflang='es' href={hrefs.es} />
      </Helmet>
    </HelmetProvider>
  );
}
