import MyScroll from '../../ui/MyScroll';
import ProjectImageMobile from './ProjectImageMobile';

export default function ProjectContentMobile({ theme, activeProject, lang }) {
  return (
    <div className='md:hidden flex flex-grow h-0'>
      <MyScroll theme={theme}>
        <div className='mb-[1rem]'>{activeProject?.description[lang]}</div>
        <ProjectImageMobile project={activeProject} />
      </MyScroll>
    </div>
  );
}
