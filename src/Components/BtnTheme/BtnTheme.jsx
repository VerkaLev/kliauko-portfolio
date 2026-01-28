import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BtnTheme() {
  const theme = document.documentElement.getAttribute('data-theme');
  const [isDark, setIsDark] = useState(theme === 'dark');

  const handleClick = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);

    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div
      onClick={handleClick}
      className='flex items-center w-[3rem] h-[1.5rem] p-[0.2rem] rounded-full border-2 border-[var(--contrary-accent)] bg-[var(--bg-contrary-color)]'
    >
      <motion.button
        aria-label='Change theme'
        className='h-[0.9rem] w-[0.9rem] rounded-full bg-[var(--contrary-accent)]'
        initial={{ x: isDark ? 0 : 24 }}
        animate={{ x: isDark ? 0 : 24 }}
        transition={{
          type: 'tween',
          duration: 0.3,
        }}
      ></motion.button>
    </div>
  );
}
