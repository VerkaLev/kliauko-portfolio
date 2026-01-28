import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { projects } from '../../../../consts/projects';
import { ContextActiveProject } from '../../../../context/ContextActiveProject';

export const useProjectNavigation = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [projectHash] = hash.split('?');
  const { isLeft, setIsLeft } = useContext(ContextActiveProject);

  const currentProjectTitle = decodeURIComponent(
    projectHash.replace('#portfolio/', '')
  );

  const currentProjectIndex = projects.findIndex(
    (p) => p.title === currentProjectTitle
  );

  const isDisabled = (direction) => {
    return (
      (direction === 'left' && currentProjectIndex === 0) ||
      (direction === 'right' && currentProjectIndex === projects.length - 1)
    );
  };

  const goToProjectByIndex = (index) => {
    const project = projects[index];
    if (!project) return;
    navigate({ hash: `portfolio/${project.title}` });
  };

  const goToPreviousProject = () => {
    if (currentProjectIndex > 0) {
      setIsLeft(true);
      goToProjectByIndex(currentProjectIndex - 1);
    }
  };

  const goToNextProject = () => {
    if (currentProjectIndex < projects.length - 1) {
      setIsLeft(false);
      goToProjectByIndex(currentProjectIndex + 1);
    }
  };

  return {
    isDisabled,
    goToPreviousProject,
    goToNextProject,
    isLeft,
    setIsLeft,
  };
};
