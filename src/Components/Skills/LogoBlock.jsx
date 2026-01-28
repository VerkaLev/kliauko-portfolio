import { color, motion } from 'framer-motion';

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
} from 'react-icons/fa';
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoRedux,
} from 'react-icons/bi';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiReactquery, SiReacthookform } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

const icons = [
  { Icon: FaHtml5, color: '#E34F26', delay: 1 },
  { Icon: FaCss3Alt, color: '#1572B6', delay: 2 },
  { Icon: FaSass, color: '#CC6699', delay: 3 },
  { Icon: BiLogoJavascript, color: '#F7DF1E', delay: 4 },
  { Icon: BiLogoTypescript, color: '#3178C6', delay: 5 },
  { Icon: FaReact, color: '#61DAFB', delay: 6 },
  { Icon: BiLogoRedux, color: '#00a7e5', delay: 7 },
  { Icon: SiReactquery, color: '#FF4154', delay: 8 },
  { Icon: SiReacthookform, color: '#EC5990', delay: 9 },
  { Icon: RiNextjsFill, color: '[var(--bg-contrary-color)]', delay: 10 },
  { Icon: RiTailwindCssFill, color: '#06B6D4', delay: 11 },
  { Icon: FaBootstrap, color: '#7952B3', delay: 12 },
  { Icon: TbBrandFramerMotion, color: '#0055FF', delay: 13 },
];

export default function LogoBlock() {
  return (
    <div className='flex flex-wrap justify-center items-center content-center gap-4 lg:portrait:mb-[2rem] lg:basis-[20%]'>
      {icons.map((i) => (
        <motion.div
          key={i.delay}
          initial={{ scale: 1 }}
          whileInView={{ scale: [1, 1.2, 1] }}
          viewport={{ amount: 0.8 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 13,
            ease: 'easeInOut',
            delay: i.delay,
          }}
        >
          <i.Icon size={50} color={i.color} />
        </motion.div>
      ))}
    </div>
  );
}
