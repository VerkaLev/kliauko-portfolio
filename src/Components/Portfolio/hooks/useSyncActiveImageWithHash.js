import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ContextActiveProject } from '../../../context/ContextActiveProject';

export const useSyncActiveImageWithHash = () => {
  const { activeProject, setActiveImageIndex } =
    useContext(ContextActiveProject);

  const { hash } = useLocation();
  const [, search] = hash.split('?');

  useEffect(() => {
    if (!activeProject) return;

    const params = new URLSearchParams(search);
    const img = params.get('img');

    if (!img) {
      setActiveImageIndex(null);
      return;
    }

    const index = Number(img) - 1;

    if (index < 0 || index >= activeProject.preview.length) {
      setActiveImageIndex(null);
      return;
    }

    setActiveImageIndex(index);
  }, [search, activeProject]);
};
