import React, { useMemo } from 'react';
import type { Action } from '../lib/entities';

import { SquarePenIcon, FileUpIcon, UserRoundPlusIcon, MegaphoneIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../lib/data';

import DashboardHeader from '../components/features/dashboard/header';
import StatsBar from '../components/features/dashboard/stats-bar';
import ContentDistribution from '../components/features/dashboard/content-distribution';
import LatestEnquiries from '../components/features/dashboard/enquiries';
import ActivityLog from '../components/features/dashboard/activity-log';
import Notifications from '../components/features/dashboard/notifications';
import QuickActions from '../components/features/dashboard/quick-actions';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const actions = useMemo(() => {
    const actions: Action[] = [
      { label: 'CREATE BLOG', icon: SquarePenIcon, iconColor: 'text-secondary', onPress: () => navigate(paths.blogAdmin) },
      { label: 'UPLOAD BROCHURE', icon: FileUpIcon, iconColor: 'text-secondary', onPress: () => navigate(paths.blogAdmin) },
      { label: 'ADD USER', icon: UserRoundPlusIcon, iconColor: 'text-accent', onPress: () => navigate(paths.blogAdmin) },
      { label: 'POST ALERT', icon: MegaphoneIcon, iconColor: 'text-red-500', onPress: () => navigate(paths.blogAdmin) },
    ];

    return actions;
  }, [navigate]);

  return (
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
          <QuickActions actions={actions} />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
