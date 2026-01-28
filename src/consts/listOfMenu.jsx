import {
  ChatBubbleOvalLeftEllipsisIcon,
  ListBulletIcon,
  FolderIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

export const listOfMenu = [
  {
    title: 'about',
    icon: <ChatBubbleOvalLeftEllipsisIcon />,
    href: '#about',
  },
  {
    title: 'skills',
    icon: <ListBulletIcon />,
    href: '#skills',
  },
  {
    title: 'portfolio',
    icon: <FolderIcon />,
    href: '#portfolio',
  },
  {
    title: 'contact',
    icon: <PaperAirplaneIcon />,
    href: '#contact',
    onClick: (e) => {
      e.preventDefault();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    },
  },
];
