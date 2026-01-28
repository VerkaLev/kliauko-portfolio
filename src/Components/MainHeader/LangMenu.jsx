import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function LangMenu({ setIsActive, isActive }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const { i18n } = useTranslation();

  const langArr = [
    { short: 'en', long: 'english' },
    { short: 'es', long: 'spanish' },
    { short: 'ru', long: 'russian' },
  ];

  const handleChangeLangClick = (lang) => {
    navigate(`/${lang}${hash}`);
    setIsActive((prev) => !prev);
    i18n.changeLanguage(lang);
  };
  const { lang: currentLang } = useParams();

  return (
    <motion.div
      role='menu'
      aria-label={t('MainHeader.aria_languages')}
      key={isActive}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='absolute top-[5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 p-1 h-fit w-fit bg-[var(--text-color)] rounded-full border-4 border-double border-[var(--contrary-accent-more)]'
    >
      {langArr.map((lang, i) => {
        const isCurrent = currentLang === lang.short;
        return (
          <button
            aria-label={`${t('MainHeader.aria_change_lang')} ${lang.long}`}
            onClick={() => handleChangeLangClick(lang.short)}
            className={`${
              isCurrent
                ? 'text-[var(--contrary-accent-more)] font-bold'
                : 'text-[var(--contrary-color)] hover:text-[var(--contrary-accent-more)]'
            }`}
            key={i}
          >
            {lang.short}
          </button>
        );
      })}
    </motion.div>
  );
}
