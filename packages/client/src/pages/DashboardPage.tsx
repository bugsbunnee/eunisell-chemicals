import React from 'react';

import Sidebar from '../components/features/dashboard/sidebar';
import DashboardHeader from '../components/features/dashboard/header';
import StatsBar from '../components/features/dashboard/stats-bar';
import ContentDistribution from '../components/features/dashboard/content-distribution';
import LatestEnquiries from '../components/features/dashboard/enquiries';
import ActivityLog from '../components/features/dashboard/activity-log';
import Notifications from '../components/features/dashboard/notifications';
import QuickActions from '../components/features/dashboard/quick-actions';

const DashboardPage: React.FC = () => (
  <div className="grid grid-cols-[280px_1fr] h-screen overflow-hidden text-left">
    <Sidebar />

    <main className="h-screen overflow-y-auto bg-card flex flex-col">
      <DashboardHeader />

      <StatsBar />

      <div className="grid grid-cols-[1fr_288px] gap-4 p-6 pb-10">
        <div className="flex flex-col gap-4 min-w-0">
          <ContentDistribution />
          <LatestEnquiries />
          <ActivityLog />
        </div>

        <div className="flex flex-col gap-4">
          <Notifications />
          <QuickActions />
        </div>
      </div>
    </main>
  </div>
);

export default DashboardPage;
