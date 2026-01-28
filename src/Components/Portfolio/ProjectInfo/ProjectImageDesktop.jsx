import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGalleryNavigation } from '../ProjectModal/hooks/useGalleryNavigation';
import { useSwipe } from '../../../hooks/useSwipe';
import Loading from '../../ui/Loading';
import NavigatorButton from '../../ui/NavigatorButton';

export default function ProjectImageDesktop({ project }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [projectHash] = hash.split('?');

  const [isLoaded, setIsLoaded] = useState(false);

  const { goToPreviousImage, goToNextImage, isDisabled, currentImageIndex } =
    useGalleryNavigation();

  const { handleTouchStartClick, handleTouchEndClick } = useSwipe(
    goToPreviousImage,
    goToNextImage,
  );

  const handleFullscreenClick = (i) => {
    navigate(`${projectHash}?img=${i + 1}`);
  };

  return (
    <div
      onTouchStart={(e) => {
        e.stopPropagation();
        handleTouchStartClick(e);
      }}
      onTouchEnd={(e) => {
        e.stopPropagation();
        handleTouchEndClick(e);
      }}
      className='relative flex-1 flex justify-center items-center p-3 h-[150px] md:h-auto outline-2 outline-dashed outline-[var(--contrary-accent)] bg-[var(--bg-image)] rounded-lg'
    >
      <NavigatorButton
        direction='left'
        label={t('Portfolio.aria_prev_image')}
        isDisabled={isDisabled('left')}
        handleClick={goToPreviousImage}
        designClass='absolute left-0 top-1/2 ml-2 w-8 h-8 text-[var(--contrary-accent-more)]'
      />

      {!isLoaded && <Loading />}

      <AnimatePresence mode='wait'>
        <motion.img
          key={currentImageIndex}
          role='button'
          aria-label={t('Portfolio.aria_img')}
          onLoad={() => setIsLoaded(true)}
          onClick={() => handleFullscreenClick(currentImageIndex)}
          src={project?.preview[currentImageIndex]}
          alt={project?.title}
          className={`max-w-full max-h-full object-contain transition-opacity duration-700 ease-in-out`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <NavigatorButton
        direction='right'
        label={t('Portfolio.aria_next_image')}
        handleClick={goToNextImage}
        isDisabled={isDisabled('right')}
        designClass='absolute right-0 top-1/2 mr-2 w-8 h-8 text-[var(--contrary-accent-more)]'
      />
    </div>
  );
}
