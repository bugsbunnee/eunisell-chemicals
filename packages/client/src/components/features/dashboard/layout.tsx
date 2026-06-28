import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';

const DashboardLayout: React.FC = () => (
  <div className="grid grid-cols-[280px_1fr] h-screen overflow-hidden text-left">
    <Sidebar />
    <Outlet />
  </div>
);

export default DashboardLayout;
