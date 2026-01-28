import Foto from './../../assets/myphoto.webp';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MyFoto() {
  const bgRef = useRef(null);
  const isBgInView = useInView(bgRef, { amount: 0.8 });
  const variants = {
    visible: ({ delay }) => ({
      scale: [1, 1.5],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
    }),
    hidden: {
      scale: 1,
      opacity: 0,
    },
  };

  return (
    <motion.div
      ref={bgRef}
      className='relative flex-shrink-0 p-[5px] m-[1.5rem] md:m-0 w-[15rem] h-[15rem] bg-gradient-to-r from-[var(--contrary-accent)] to-[var(--contrary-accent-more)] rounded-full'
      animate={{
        backgroundPosition: isBgInView
          ? ['0% 50%', '100% 50%', '0% 50%']
          : '0% 50%',
      }}
      transition={{
        duration: 5,
        repeat: isBgInView ? Infinity : 0,
        ease: 'linear',
      }}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      <div className='relative h-full w-full rounded-full bg-cover bg-center z-20'>
        <img
          src={Foto}
          alt='Veranika Kliauko'
          loading='eager'
          decoding='sync'
          className='object-cover h-full w-full rounded-full'
        />
      </div>

      {[
        { delay: 0, borderColor: 'border-[var(--contrary-accent-more)]' },
        { delay: 1.5, borderColor: 'border-[var(--contrary-accent)]' },
      ].map((params, i) => (
        <motion.div
          className={`absolute top-0 left-0 h-full w-full ${params.borderColor} border-dashed border-2 rounded-full z-0`}
          key={i}
          variants={variants}
          custom={params}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ amount: 0.8 }}
        ></motion.div>
      ))}
    </motion.div>
  );
}
