import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top smoothly
export const ScrollToToPage = () => {
  const { pathname } = useLocation();

  useEffect(
    function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    [pathname]
  );
  return null;
};
