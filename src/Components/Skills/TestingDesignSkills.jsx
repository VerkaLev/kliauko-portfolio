import ArrowBtn from '../ui/ArrowBtn';

export default function TestingDesignSkills() {
  return (
    <article className='relative flex flex-col items-center gap-4'>
      <h3 className='text-[1.5rem] text-[var(--accent)]'>
        Testing, Design & UX:
      </h3>
      <ul className='flex flex-wrap justify-center gap-x-6 gap-y-2 p-2 border-[var(--accent)] border-2 border-dashed rounded-lg'>
        <li>
          <span>•</span> Jest
        </li>
        <li>
          <span>•</span> React Testing Library
        </li>
        <li>
          <span>•</span> Vitest
        </li>
        <li>
          <span>•</span> Responsive Design
        </li>
        <li>
          <span>•</span> Cross-Browser Compatibility
        </li>
        <li>
          <span>•</span> Accessibility (WCAG)
        </li>
        <li>
          <span>•</span> Figma (basic)
        </li>
      </ul>
      <ArrowBtn
        section='portfolio'
        classes='border-[var(--contrary-accent-more)] text-[var(--contrary-accent-more)] hidden lg:landscape:block lg:absolute lg:left-[-6rem] xl:left-[calc(100%+3rem)] top-1/2 -translate-y-1/2 lg:portrait:hidden'
      />
    </article>
  );
}
