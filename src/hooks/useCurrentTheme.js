import { useEffect, useState } from 'react';

export const useCurrentTheme = () => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute('data-theme')
  );

  useEffect(() => {
    const target = document.documentElement;
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'data-theme') {
          setTheme(target.getAttribute('data-theme'));
        }
      }
    });

    setTheme(target.getAttribute('data-theme'));

    observer.observe(target, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return theme;
};
