import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useLocationChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return location;
};

export default useLocationChange;
