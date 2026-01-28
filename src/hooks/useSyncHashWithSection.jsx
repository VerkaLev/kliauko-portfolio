import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useSyncHashWithSection = (section) => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetElement = document.getElementById(section);

    if (!targetElement) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (section === 'contact') return;

        if (hash === `#${section}`) return;

        if (hash.startsWith(`#${section}/`)) return;

        navigate({ hash: section });
      },
      { threshold: 0.6 }
    );
    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, [section, hash, navigate]);
};
