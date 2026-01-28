import { useState } from 'react';
import Loading from '../../ui/Loading';

export default function ProjectPreview({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loading />}
      <img
        onLoad={() => setIsLoaded(true)}
        src={src}
        alt={alt}
        className={`object-cover inset-0 absolute h-full w-full rounded-lg ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}
