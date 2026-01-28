import { useState } from 'react';

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);

    setTimeout(() => setCopiedText(null), 2000);
  };

  return { copy, copiedText };
};
