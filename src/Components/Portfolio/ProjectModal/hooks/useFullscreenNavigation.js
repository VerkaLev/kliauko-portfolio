import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextActiveProject } from '../../../../context/ContextActiveProject';

export const useFullscreenNavigation = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [, searchHash] = hash.split('?');
  const { isLeft, setIsLeft, activeProject } = useContext(ContextActiveProject);

  const currentImageIndex = searchHash
    ? Number(searchHash.split('img=')[1]) - 1
    : null;

  const currentLength = activeProject?.preview?.length ?? 0;

  const isDisabled = (direction) => {
    return (
      (direction === 'left' && currentImageIndex === 0) ||
      (direction === 'right' && currentImageIndex === currentLength - 1)
    );
  };
  const goToImageByIndex = (index) => {
    if (!activeProject?.preview?.[index]) return;
    navigate({ hash: `portfolio/${activeProject.title}?img=${index + 1}` });
  };

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setIsLeft(true);
      goToImageByIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex < currentLength - 1) {
      setIsLeft(false);
      goToImageByIndex(currentImageIndex + 1);
    }
  };

  return { isDisabled, goToPreviousImage, goToNextImage, isLeft, setIsLeft };
};
