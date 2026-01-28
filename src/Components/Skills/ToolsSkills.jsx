export default function ToolsSkills() {
  return (
    <article className='flex flex-col items-center gap-4'>
      <h3 className='text-[1.5rem] text-[var(--accent)]'>
        APIs, Tools & Environment:
      </h3>
      <ul className='flex flex-wrap justify-center gap-x-6 gap-y-2 p-2 border-[var(--accent)] border-2 border-dashed rounded-lg'>
        <li>
          <span>•</span> REST API / JSON
        </li>
        <li>
          <span>•</span> Axios
        </li>
        <li>
          <span>•</span> Fetch
        </li>
        <li>
          <span>•</span> GraphQL
        </li>
        <li>
          <span>•</span> Git
        </li>
        <li>
          <span>•</span> NPM
        </li>
        <li>
          <span>•</span> Webpack
        </li>
        <li>
          <span>•</span> Node.js (basic)
        </li>
        <li>
          <span>•</span> CI/CD (basic)
        </li>
      </ul>
    </article>
  );
}
