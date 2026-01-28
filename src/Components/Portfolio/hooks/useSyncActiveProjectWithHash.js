import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects } from '../../../consts/projects';
import { ContextActiveProject } from '../../../context/ContextActiveProject';

export const useSyncActiveProjectWithHash = () => {
  const { hash } = useLocation();
  const { activeProject, setActiveProject } = useContext(ContextActiveProject);

  useEffect(() => {
    if (hash.startsWith('#portfolio/')) {
      const title = decodeURIComponent(
        hash.replace('#portfolio/', '').split('?')[0]
      );

      const project = projects.find((p) => p.title === title) ?? null;

      if (project?.id !== activeProject?.id) {
        setActiveProject(project);
      }

      return;
    }

    if (hash === '#portfolio') {
      if (activeProject !== null) {
        setActiveProject(null);
      }
    }
  }, [hash]);
};
