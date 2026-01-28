import { useContext, useState } from 'react';
import { ContextActiveProject } from '../../../../context/ContextActiveProject';

export const useGalleryNavigation = () => {
  const { isLeft, setIsLeft, activeProject } = useContext(ContextActiveProject);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleReturnClick = () => {
    setCurrentImageIndex((prev) => prev - 1);
  };
  const handleNextClick = () => {
    setCurrentImageIndex((prev) => prev + 1);
  };

  const currentLength = activeProject?.preview?.length ?? 0;

  const isDisabled = (direction) => {
    return (
      (direction === 'left' && currentImageIndex === 0) ||
      (direction === 'right' && currentImageIndex === currentLength - 1)
    );
  };

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setIsLeft(true);
      handleReturnClick();
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex < currentLength - 1) {
      setIsLeft(false);
      handleNextClick();
    }
  };

  return {
    isDisabled,
    goToPreviousImage,
    goToNextImage,
    isLeft,
    setIsLeft,
    currentImageIndex,
  };
};
