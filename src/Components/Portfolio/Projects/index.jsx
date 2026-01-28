import { projects } from '../../../consts/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section
      className='flex flex-col items-center content-center gap-10
    lg:landscape:flex-row lg:justify-center lg:flex-wrap lg:flex-1 lg:landscape:self-stretch w-full py-[2rem] rounded-lg 
    lg:landscape:shadow-lg lg:landscape:shadow-[var(--box-shadow)]
  '
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
