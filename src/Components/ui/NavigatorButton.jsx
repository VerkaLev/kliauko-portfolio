import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function NavigatorButton({
  direction,
  label,
  handleClick,
  isDisabled,
  designClass,
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      aria-label={label}
      className={`disabled:opacity-20 ${designClass}`}
    >
      {direction === 'left' ? (
        <ChevronLeftIcon className='w-8 h-8' />
      ) : (
        <ChevronRightIcon className='w-8 h-8' />
      )}
    </button>
  );
}
