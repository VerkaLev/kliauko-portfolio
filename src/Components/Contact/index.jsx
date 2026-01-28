import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

const contactIcons = [
  { Icon: FaPhoneSquareAlt, text: '+34 612 28 60 61', id: 'copy' },
  { Icon: EnvelopeIcon, text: 'v.klevko.fd@gmail.com', id: 'copy' },
  {
    Icon: FaLinkedin,
    text: 'LinkidIn',
    href: 'https://www.linkedin.com/in/veranika-kliauko-47a431236/',
  },
  {
    Icon: FaGithub,
    text: 'GitHub',
    href: 'https://github.com/VerkaLev/',
  },
  { Icon: MdPlace, text: 'Valencia, Spain' },
];

export default function Contact() {
  const { copy, copiedText } = useCopyToClipboard();
  const { t } = useTranslation();

  return (
    <footer>
      <section
        id='contact'
        className='flex justify-center items-center flex-wrap gap-y-2 gap-x-5 p-[1.5rem] border-t-4 border-double border-[var(--contrary-accent-more)]'
      >
        {contactIcons.map((contact, i) => {
          const isCopied = copiedText === contact.text;
          return (
            <div key={i} className='relative flex items-center gap-1'>
              {isCopied && (
                <span className='absolute bottom-[100%] left-1/2 -translate-x-1/2 p-1 bg-[var(--contrary-accent)] text-black rounded-full'>
                  {t('Contact.copied')}
                </span>
              )}
              <contact.Icon className='w-6 h-6 text-[var(--text-color)]' />

              {contact.href ? (
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={contact.href}
                >
                  {contact.text}
                </a>
              ) : contact.id ? (
                <p onClick={() => copy(contact.text)}>{contact.text}</p>
              ) : (
                <p>{contact.text}</p>
              )}
            </div>
          );
        })}
      </section>
    </footer>
  );
}
