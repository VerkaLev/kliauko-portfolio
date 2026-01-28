import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { useSyncHashWithSection } from '../../hooks/useSyncHashWithSection.jsx';
import { useSyncActiveProjectWithHash } from './hooks/useSyncActiveProjectWithHash.js';
import PortfolioHeader from './PortfolioHeader';
import Projects from './Projects';
import ProjectModal from './ProjectModal/index.jsx';
import { ContextActiveProject } from '../../context/ContextActiveProject.js';

export default function Portfolio() {
  useSyncHashWithSection('portfolio');
  useSyncActiveProjectWithHash();

  const { activeProject } = useContext(ContextActiveProject);

  return (
    <section
      id='portfolio'
      className='flex flex-col md:flex-row md:justify-around items-center gap-10 pt-[5rem] lg:pt-[8rem] lg:pb-[3rem] md:px-[3rem] px-[1.5rem] min-h-screen lg:h-screen text-[var(--contrary-color)] bg-[var(--text-color)] '
    >
      <PortfolioHeader />
      <Projects />

      <AnimatePresence mode='wait'>
        {activeProject && <ProjectModal key='project-modal' />}
      </AnimatePresence>
    </section>
  );
}
