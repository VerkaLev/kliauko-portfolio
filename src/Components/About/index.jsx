import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSyncHashWithSection } from '../../hooks/useSyncHashWithSection';
import MyFoto from './MyFoto';
import AnimatedText from './AnimatedText';
import ArrowBtn from '../ui/ArrowBtn';

export default function About() {
  const { t } = useTranslation();
  useSyncHashWithSection('about');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { amount: 0.8 });
  return (
    <section
      id='about'
      className='flex flex-col justify-center min-h-screen pt-[5rem] bg-[var(--bg-contrary-color)] text-[var(--contrary-color)]'
    >
      <div className='flex flex-col md:flex-row md:justify-between items-center gap-[3rem] lg:max-w-[1024px] px-[1.5rem] md:px-[3rem] xl:px-0 mx-auto'>
        <div className='flex flex-col items-center md:items-start md:gap-y-[0.5rem] w-full'>
          <p className='mt-[1.5rem] md:mt-0 text-[var(--contrary-accent)]'>
            {t('About.greeting')}
          </p>
          <h2
            ref={headerRef}
            className='text-[2rem] md:text-[3rem] text-[var(--contrary-accent-more)]'
          >
            <AnimatedText text={t('About.name')} isInView={isHeaderInView} />
          </h2>

          <p className='block md:hidden'> {t('About.text_1')}</p>
          <h3 className='md:text-[2.5rem] text-[2rem] text-[var(--contrary-accent)] text-center md:text-start'>
            <span className='hidden md:inline text-[var(--contrary-color)]'>
              {' '}
              {t('About.text_1')}
            </span>{' '}
            {t('About.text_2')}
          </h3>
          <p className='hidden md:block'>{t('About.text_3')}</p>
        </div>
        <MyFoto />
        <p className='block md:hidden pb-[1.5rem]'>{t('About.text_3')}</p>
      </div>
      <ArrowBtn
        section='skills'
        classes='hidden md:block mt-[5rem] border-[var(--contrary-accent)] text-[var(--contrary-accent)]'
      />
    </section>
  );
}
