import { useEffect } from 'react';

export const useCloseOnScroll = (func) => {
  useEffect(() => {
    const close = () => func();

    window.addEventListener('scroll', close, { passive: true });

    return () => {
      window.removeEventListener('scroll', close);
    };
  }, [func]);
};
