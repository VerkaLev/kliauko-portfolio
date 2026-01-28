import { useTranslation } from 'react-i18next';
import { useProjectNavigation } from '../ProjectModal/hooks/useProjectNavigation';
import NavigatorButton from '../../ui/NavigatorButton';

export default function ProjectHeader({ project }) {
  const { t } = useTranslation();
  const { goToPreviousProject, goToNextProject, isDisabled } =
    useProjectNavigation();

  const designBtnClass =
    'hidden md:block text-[var(--contrary-accent-more)] hover:text-white rounded-full';

  return (
    <div className='flex flex-col gap-2'>
      <h2
        className='mt-[1.5rem] md:mt-0 text-[2rem] text-[var(--contrary-accent)] text-center'
        id='modalHeader'
      >
        {project?.title}
      </h2>

      <nav className='flex justify-center items-center gap-3'>
        <NavigatorButton
          direction='left'
          label={t('UI.aria_prev_project')}
          isDisabled={isDisabled('left')}
          handleClick={goToPreviousProject}
          designClass={designBtnClass}
        />

        <div className='flex gap-2 justify-center'>
          <a
            href={project?.demo}
            target='_blank'
            rel='noopener noreferrer'
            className='py-1 px-2 border-2 border-[var(--contrary-accent-more)] rounded-full hover:bg-[var(--contrary-accent-transp)] hover:text-white'
          >
            {t('Portfolio.btn_demo')}
          </a>
          <a
            href={project?.code}
            target='_blank'
            rel='noopener noreferrer'
            className='py-1 px-2 border-2 border-[var(--contrary-accent-more)] rounded-full hover:bg-[var(--contrary-accent-transp)] hover:text-white'
          >
            {t('Portfolio.btn_code')}
          </a>
        </div>

        <NavigatorButton
          direction='right'
          isDisabled={isDisabled('right')}
          label={t('UI.aria_next_project')}
          handleClick={goToNextProject}
          designClass={designBtnClass}
        />
      </nav>
    </div>
  );
}
