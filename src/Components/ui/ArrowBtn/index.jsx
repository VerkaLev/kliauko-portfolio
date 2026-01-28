import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ArrowBtn({ section, classes }) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const targetElement = document.getElementById(section);

    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { root: null, threshold: 0.7 },
    );

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, [section]);

  return (
    <motion.a
      href={`#${section}`}
      aria-label={`${t('UI.aria_arrow')} ${section}`}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`mx-auto w-[3rem] h-[3rem] p-2 rounded-full border-2 animate-bounce ${classes}`}
    >
      <ArrowDownIcon />
    </motion.a>
  );
}
