import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ContextActiveProject } from '../../../context/ContextActiveProject';

export default function OverlayBtn({ project }) {
  const { t } = useTranslation();
  const { handleOpenClick } = useContext(ContextActiveProject);
  return (
    <button
      onClick={() => handleOpenClick(project)}
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 opacity-0 group-hover:opacity-100 rounded-full border-2 text-white'
    >
      {t('Portfolio.btn_more')}
    </button>
  );
}
