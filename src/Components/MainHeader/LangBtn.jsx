import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useCloseOnScroll } from '../../hooks/useCloseOnScroll';
import LangMenu from './LangMenu';

export default function LangBtn() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive((prev) => !prev);
  useCloseOnScroll(() => setIsActive(false));

  return (
    <div className='relative flex justify-center items-center'>
      <button
        aria-haspopup='menu'
        aria-label={t('MainHeader.open_lang_menu')}
        onClick={handleClick}
        className='text-[var(--text-color)] hover:text-[var(--contrary-accent)]'
      >
        <GlobeAltIcon className='w-6 h-6' />
      </button>
      <AnimatePresence mode='wait'>
        {isActive && <LangMenu setIsActive={setIsActive} isActive={isActive} />}
      </AnimatePresence>
    </div>
  );
}
