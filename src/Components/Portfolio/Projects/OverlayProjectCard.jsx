export default function OverlayProjectCard({ children }) {
  return (
    <div className='absolute inset-0 group-hover:bg-[var(--contrary-accent-transp)] rounded-lg'>
      {children}
    </div>
  );
}
