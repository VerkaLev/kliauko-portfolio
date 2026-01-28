import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function SkillsHeader() {
  const { t } = useTranslation();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { amount: 0.8 });
  return (
    <motion.h2
      ref={headerRef}
      className='mb-[1.5rem] portrait:mb-[3rem] xl:mb-[3rem] md:w-[70%] mx-auto mt-[1.5rem] md:mt-[3rem] text-center bg-gradient-to-r from-[var(--contrary-accent-more)] to-[var(--accent)] bg-clip-text text-transparent text-[2.5rem]'
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
      {t('Skills.header')}
    </motion.h2>
  );
}
