import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../ui/Loading';

export default function ProjectImageMobile({ project }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [projectHash] = hash.split('?');

  const [isLoadedMap, setIsLoadedMap] = useState({});

  const handleLoad = (i) =>
    setIsLoadedMap((prev) => ({
      ...prev,
      [i]: true,
    }));

  const handleFullscreenClick = (i) => {
    navigate(`${projectHash}?img=${i + 1}`);
  };

  return (
    <div className='flex flex-col items-center gap-3 '>
      {project &&
        project?.preview.map((image, i) => {
          const isLoaded = isLoadedMap[i];
          return (
            <div
              key={i}
              className='relative p-3 w-full bg-[var(--bg-image)] rounded-lg'
            >
              {!isLoaded && <Loading />}

              <img
                role='button'
                aria-label={t('Portfolio.aria_img')}
                onLoad={() => handleLoad(i)}
                onClick={() => handleFullscreenClick(i)}
                src={image}
                alt={project.title}
                className={`max-w-full max-h-full object-contain transition-opacity duration-700 ease-in-out`}
              />
            </div>
          );
        })}
    </div>
  );
}
