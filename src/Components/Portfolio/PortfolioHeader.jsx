import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

export default function PortfolioHeader() {
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { amount: 0.8 });
  return (
    <motion.h2
      ref={headerRef}
      className='p-5 text-[2.5rem] bg-gradient-to-r from-[var(--accent)] to-[var(--contrary-accent-more)] bg-clip-text text-transparent z-10'
      animate={{
        backgroundPosition: isInView
          ? ['0% 50%', '100% 50%', '0% 50%']
          : '0% 50%',
      }}
      transition={{
        duration: 5,
        repeat: isInView ? Infinity : 0,
        ease: 'easeInOut',
      }}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {t('Portfolio.header')}
    </motion.h2>
  );
}
