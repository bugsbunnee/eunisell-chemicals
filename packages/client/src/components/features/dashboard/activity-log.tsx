import React from 'react';
import ActivityFeed from '../../common/activity-feed';
import { useActivity } from '../../../hooks/use-activity';

const ActivityLog: React.FC = () => {
  const { data, isLoading } = useActivity({ limit: 10 });

  return (
    <div className="bg-white border border-border rounded-[4px]">
      <div className="px-5 py-4 border-b border-border">
        <h2 className="text-[15px] font-semibold text-accent">Recent Activity Log</h2>
      </div>

      <ActivityFeed items={data ?? []} isLoading={isLoading} emptyText="No recent activity" />
    </div>
  );
};

export default ActivityLog;
