import React, {useEffect, useState} from 'react';

type UseOutsideClickHook = (ref: React.RefObject<HTMLDivElement>) => boolean;

const useOutsideClick: UseOutsideClickHook = (ref) => {
  const [click, set] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        set(true);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ref]);

  return click;
};

export default useOutsideClick;