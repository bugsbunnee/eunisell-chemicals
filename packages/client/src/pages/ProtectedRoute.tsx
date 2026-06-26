import React from 'react';
import useAuthStore from '../store/auth';

import { Navigate, Outlet } from 'react-router-dom';
import { paths } from '../lib/data';

const ProtectedRoute: React.FC = () => {
  const auth = useAuthStore((s) => s.auth);
  return auth ? <Outlet /> : <Navigate to={paths.login} replace />;
};

export default ProtectedRoute;
