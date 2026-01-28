import { motion } from 'framer-motion';

export default function AnimatedText({ text, isInView }) {
  return (
    <>
      {text.split('').map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{
            delay: i * 0.1,
            duration: 0.5,
            repeat: isInView ? Infinity : 0,
            repeatDelay: 10,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}
