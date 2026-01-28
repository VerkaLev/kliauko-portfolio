export const getDisableScroll = (ref) => {
  const handler = (e) => {
    if (ref && ref.contains(e.target)) {
      return;
    }
    e.preventDefault();
  };

  document.addEventListener('wheel', handler, { passive: false });
  document.addEventListener('touchmove', handler, { passive: false });

  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  return () => {
    document.removeEventListener('wheel', handler);
    document.removeEventListener('touchmove', handler);
    document.body.style.overflow = prevOverflow;
  };
};
