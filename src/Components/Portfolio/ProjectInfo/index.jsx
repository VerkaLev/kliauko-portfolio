import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useSwipe } from '../../../hooks/useSwipe.js';
import { useProjectNavigation } from '../ProjectModal/hooks/useProjectNavigation.js';
import { useCurrentTheme } from '../../../hooks/useCurrentTheme.js';
import CloseButton from '../../ui/CloseButton.jsx';
import ProjectHeader from './ProjectHeader.jsx';
import ProjectContentMobile from './ProjectContentMobile';
import ProjectContentDesktop from './ProjectContentDesktop';
import { ContextActiveProject } from '../../../context/ContextActiveProject.js';

const projectInfoVariants = {
  initial: (isLeft) => ({
    x: isLeft ? '-130%' : '130%',
    opacity: 1,
  }),
  exit: (isLeft) => ({
    x: isLeft ? '130%' : '-130%',
    opacity: 1,
  }),
  animate: { x: '0%', opacity: 1 },
};

export default function ProjectInfo() {
  const { hash } = useLocation();
  const [projectHash] = hash.split('?');

  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  const { handleCloseClick, activeProject } = useContext(ContextActiveProject);

  const { goToPreviousProject, goToNextProject, isLeft } =
    useProjectNavigation();

  const { handleTouchStartClick, handleTouchEndClick } = useSwipe(
    goToPreviousProject,
    goToNextProject,
  );

  const theme = useCurrentTheme();

  return (
    <AnimatePresence>
      <motion.div
        key={projectHash}
        onTouchStart={handleTouchStartClick}
        onTouchEnd={handleTouchEndClick}
        custom={isLeft}
        variants={projectInfoVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        className='absolute inset-0 flex flex-col items-center gap-10 p-[1rem] m-[1rem] bg-[var(--text-color)] border-4 border-double border-[var(--contrary-accent-more)] rounded-lg text-[var(--contrary-color)] z-40'
      >
        <CloseButton
          handleCloseClick={handleCloseClick}
          ariaLabel={t('Portfolio.aria_close_info')}
          classes='absolute top-[1rem] right-[1rem] w-[2rem] h-[2rem] border-2 border-[var(--contrary-accent-more)] hover:bg-[var(--contrary-accent-transp)] hover:text-white rounded-full'
        />
        <ProjectHeader project={activeProject} />
        <ProjectContentMobile
          theme={theme}
          activeProject={activeProject}
          lang={lang}
        />
        <ProjectContentDesktop
          theme={theme}
          activeProject={activeProject}
          lang={lang}
        />
      </motion.div>
    </AnimatePresence>
  );
}
