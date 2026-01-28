import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Loading() {
  const loadingRef = useRef(null);
  const isInView = useInView(loadingRef, { amount: 0.8 });
  return (
    <div
      ref={loadingRef}
      className='absolute inset-0 flex
    justify-center items-center rounded-lg'
    >
      Loading{' '}
      {' . . . '.split('').map((letter, i) => (
        <motion.span
          className='mx-[1px]'
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{
            delay: i * 0.2,
            duration: 0.8,
            repeat: isInView ? Infinity : 0,
            repeatDelay: 0.8,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}
