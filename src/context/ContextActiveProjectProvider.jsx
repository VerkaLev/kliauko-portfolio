import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextActiveProject } from './ContextActiveProject';

export const ContextActiveProjectProvider = ({ children }) => {
  const navigate = useNavigate();

  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [isLeft, setIsLeft] = useState(false);

  const activeImage =
    activeProject && activeImageIndex !== null
      ? {
          src: activeProject.preview[activeImageIndex],
          alt: activeProject.title,
          count: `${activeImageIndex + 1} / ${activeProject.preview.length}`,
        }
      : null;

  const handleOpenClick = (project) =>
    navigate({ hash: `portfolio/${project.title}` });

  const handleCloseClick = () => navigate({ hash: 'portfolio' });

  return (
    <ContextActiveProject.Provider
      value={{
        activeProject,
        setActiveProject,
        handleOpenClick,
        handleCloseClick,
        setActiveImageIndex,
        activeImage,
        isLeft,
        setIsLeft,
      }}
    >
      {children}
    </ContextActiveProject.Provider>
  );
};
