export default function MyScroll({ children, theme }) {
  return (
    <div
      className={`flex-1 md:flex flex-row-reverse md:portrait:flex-col md:gap-10 p-2 overflow-y-auto overflow-x-hidden scrollbar-thin ${
        theme === 'light'
          ? 'scrollbar-thumb-[#fff] scrollbar-track-[#0f172a]'
          : 'scrollbar-thumb-[#0f172a] scrollbar-track-[#fff]'
      }  `}
    >
      {children}
    </div>
  );
}
