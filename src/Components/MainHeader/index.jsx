import { useTranslation } from 'react-i18next';
import Menu from './Menu';

export default function MainHeader() {
  const { t } = useTranslation();
  return (
    <header className='fixed top-0 left-0 w-full bg-[var(--contrary-accent-transp)] border-b-4 border-double border-[var(--contrary-accent-more)] text-white z-40'>
      <div className='flex justify-between items-center lg:max-w-[1024px] min-h-[5rem] md:px-[3rem] px-[1.5rem] xl:px-0 mx-auto'>
        <h1 className='hidden xs:block text-[1.5rem]'>
          {t('MainHeader.name')}
        </h1>
        <h1 className='flex justify-center items-center xs:hidden p-1 w-12 h-12 text-[1.5rem] border-2 rounded-full'>
          {t('MainHeader.short_name')}
        </h1>
        <Menu />
      </div>
    </header>
  );
}
