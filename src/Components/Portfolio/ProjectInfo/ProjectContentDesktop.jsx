import MyScroll from '../../ui/MyScroll';
import ProjectImageDesktop from './ProjectImageDesktop';

export default function ProjectContentDesktop({ theme, activeProject, lang }) {
  return (
    <div className='hidden md:flex flex-grow h-0'>
      <MyScroll theme={theme}>
        <div className='md:landscape:flex-1 mb-[1rem]'>
          {activeProject?.description[lang]}
        </div>
        <ProjectImageDesktop project={activeProject} />
      </MyScroll>
    </div>
  );
}
