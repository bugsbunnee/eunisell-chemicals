import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useLocationChange = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const scrollToHash = () => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (!scrollToHash()) {
        const timeout = setTimeout(scrollToHash, 100);
        return () => clearTimeout(timeout);
      }

      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return location;
};

export default useLocationChange;
