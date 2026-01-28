import { useRef } from 'react';

export const useSwipe = (handleSwipeLeft, handleSwipeRight) => {
  const touchStartX = useRef(null);

  const THRESHOLD = 50;

  const handleTouchStartClick = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEndClick = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;

    if (diff > THRESHOLD && handleSwipeLeft) {
      handleSwipeLeft();
    } else if (diff < -THRESHOLD && handleSwipeRight) {
      handleSwipeRight();
    }

    touchStartX.current = null;
  };

  return { handleTouchStartClick, handleTouchEndClick };
};
