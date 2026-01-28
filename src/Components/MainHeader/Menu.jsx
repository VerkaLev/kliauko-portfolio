import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BtnTheme from '../BtnTheme/BtnTheme.jsx';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { listOfMenu } from '../../consts/listOfMenu.jsx';
import LangBtn from './LangBtn.jsx';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className='relative flex gap-x-4 items-center'>
      <ul className='hidden md:flex gap-x-4'>
        {listOfMenu.map((item, i) => (
          <li key={i} className='hover:text-[var(--contrary-accent)]'>
            <a href={item.href} onClick={item.onClick}>
              {' '}
              {t(`MainHeader.${item.title}`)}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        aria-label={
          isOpen ? t('MainHeader.close_menu') : t('MainHeader.open_menu')
        }
        aria-expanded={isOpen}
        className={`block md:hidden ${
          isOpen ? 'rotate-90' : 'rotate-0'
        } transition-transform duration-700 ease-in-out`}
      >
        <Bars3Icon className='w-8 text-[var(--contrary-accent)]' />
      </button>
      <BtnTheme />

      <ul
        className={`fixed top-[5rem] right-0 md:hidden flex flex-col gap-y-4 h-screen w-[300px] p-4 bg-[var(--contrary-accent)] text-[var(--text-color)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-700 ease-in-out`}
      >
        {listOfMenu.map((item, i) => {
          return (
            <li key={i}>
              <a href={item.href} className='flex gap-2' onClick={handleClick}>
                <span className='w-6'>{item.icon}</span>
                <p className='hover:text-[var(--contrary-accent-more)] hover:font-bold'>
                  {t(`MainHeader.${item.title}`)}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
      <LangBtn />
    </nav>
  );
}
