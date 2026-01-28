import Overlay from './OverlayProjectCard';
import OverlayBtn from './OverlayBtnProjectCard';
import Preview from './ProjectPreview';

export default function ProjectCard({ project }) {
  return (
    <div className='flex flex-col w-full lg:landscape:w-[35%] items-center'>
      <h3 className='pb-3 text-[1.2rem] text-[var(--contrary-accent)]'>
        {project.title}
      </h3>

      <div
        className='relative group w-full aspect-[2/1]
       border-2 border-dashed border-[var(--contrary-accent)] rounded-lg'
      >
        <Preview src={project.preview[0]} alt={project.title} />

        <Overlay>
          <OverlayBtn project={project} />
        </Overlay>
      </div>
    </div>
  );
}
