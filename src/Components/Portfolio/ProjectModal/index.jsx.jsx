import { motion } from 'framer-motion';
import { useContext, useEffect, useRef } from 'react';
import { useSyncActiveImageWithHash } from '../hooks/useSyncActiveImageWithHash';
import { getDisableScroll } from '../../../helpers/getDisableScroll';
import ProjectInfo from '../ProjectInfo';
import ProjectImageFullscreen from './ProjectImageFullscreen';
import { ContextActiveProject } from '../../../context/ContextActiveProject';

export default function ProjectModal() {
  useSyncActiveImageWithHash();

  const modalRef = useRef(null);
  const { activeProject, activeImage } = useContext(ContextActiveProject);

  useEffect(() => {
    if (activeProject) {
      return getDisableScroll(modalRef.current);
    }
  }, [activeProject]);

  return (
    <>
      <motion.section
        ref={modalRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        aria-modal='true'
        role='dialog'
        aria-labelledby='modalHeader'
        className='fixed inset-0 flex justify-between gap-4 px-4 bg-[var(--contrary-color)] overflow-hidden z-30'
      >
        <div className='relative flex-1 flex justify-center items-center h-[calc(100vh-5rem)] mt-[5rem]'>
          <ProjectInfo />
        </div>
      </motion.section>
      {activeImage && <ProjectImageFullscreen {...activeImage} />}
    </>
  );
}
