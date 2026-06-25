import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import useLocationChange from '../hooks/use-location-change';

const Layout: React.FC = () => {
  const location = useLocationChange();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
