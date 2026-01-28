import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { useSwipe } from '../../../hooks/useSwipe';
import { useFullscreenNavigation } from './hooks/useFullscreenNavigation';
import CloseButton from '../../ui/CloseButton';
import NavigatorButton from '../../ui/NavigatorButton';

export default function ProjectImageFullscreen({ src, alt, count }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [projectHash] = hash.split('?');

  const { goToPreviousImage, goToNextImage, isDisabled } =
    useFullscreenNavigation();
  const { handleTouchStartClick, handleTouchEndClick } = useSwipe(
    goToPreviousImage,
    goToNextImage,
  );

  const handleCloseClick = () => navigate({ hash: projectHash });

  return createPortal(
    <div
      onTouchStart={handleTouchStartClick}
      onTouchEnd={handleTouchEndClick}
      className='fixed inset-0 flex items-center justify-center pt-[4rem] pb-[2rem] bg-[var(--bg-image-transp)] z-50'
    >
      <div className='absolute top-0 flex justify-between items-center p-[1rem] w-full'>
        <CloseButton
          handleCloseClick={handleCloseClick}
          ariaLabel={t('Portfolio.aria_close_image')}
          classes='w-[2rem] h-[2rem] border-2 border-[var(--contrary-accent-more)] bg-[var(--contrary-accent-transp)] hover:bg-[var(--contrary-accent-more)] text-white rounded-full'
        />
        <p className='text-white'>{count}</p>
      </div>
      <NavigatorButton
        direction='left'
        label={t('Portfolio.aria_prev_image')}
        isDisabled={isDisabled('left')}
        handleClick={goToPreviousImage}
        designClass='hidden md:block absolute left-0 top-1/2 ml-2 w-8 h-8 text-[var(--contrary-accent-more)]'
      />

      <img src={src} alt={alt} className={`w-full h-full object-contain`} />
      <NavigatorButton
        direction='right'
        label={t('Portfolio.aria_next_image')}
        handleClick={goToNextImage}
        isDisabled={isDisabled('right')}
        designClass='hidden md:block absolute right-0 top-1/2 mr-2 w-8 h-8 text-[var(--contrary-accent-more)]'
      />
    </div>,
    document.body,
  );
}
