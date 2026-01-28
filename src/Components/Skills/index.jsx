import { useSyncHashWithSection } from '../../hooks/useSyncHashWithSection';
import FrontendSkills from './FrontendSkills';
import ToolsSkills from './ToolsSkills';
import TestingDesignSkills from './TestingDesignSkills';
import SkillsHeader from './SkillsHeader';
import LogoBlock from './LogoBlock';
import ArrowBtn from '../ui/ArrowBtn';

export default function Skills() {
  useSyncHashWithSection('skills');
  return (
    <section
      id='skills'
      className='flex flex-col md:justify-center lg:portrait:gap-10 xl:gap-10 pt-[5rem] md:pb-[3rem] lg:pb-[6rem] md:px-[3rem] px-[1.5rem] xl:px-0 mx-auto lg:max-w-[1024px] min-h-screen bg-[var(--bg-color)]'
    >
      <SkillsHeader />
      <div className='flex flex-col gap-6 lg:gap-[3rem] lg:hidden lg:portrait:flex mb-[1.5rem] md:mb-[3rem]'>
        <LogoBlock />
        <FrontendSkills />
        <ToolsSkills />
        <TestingDesignSkills />
      </div>
      <ArrowBtn
        section='portfolio'
        classes='border-[var(--contrary-accent-more)] text-[var(--contrary-accent-more)] hidden md:block lg:landscape:hidden'
      />
      <div className='hidden lg:flex gap-6 xl:gap-16 lg:portrait:hidden w-full'>
        <LogoBlock />
        <div className='flex flex-col lg:basis-[80%] justify-between gap-y-4'>
          <FrontendSkills />
          <ToolsSkills />
          <TestingDesignSkills />
        </div>
      </div>
    </section>
  );
}
