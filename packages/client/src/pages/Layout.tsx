import { Outlet } from 'react-router-dom';
import useLocationChange from '../hooks/use-location-change';

const Layout: React.FC = () => {
  useLocationChange();

  return <Outlet />;
};

export default Layout;
