import React from 'react';
import ActivityFeed from '../../common/activity-feed';
import { useActivity } from '../../../hooks/use-activity';

const RecentBlog: React.FC = () => {
  const { data, isLoading } = useActivity({ category: 'blog', limit: 5 });

  return (
    <div className="bg-white border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[6px] pb-2">
      <div className="border-b border-border p-6">
        <h3 className="text-[16px] text-accent leading-6">Recent Blog Activity</h3>
      </div>

      <ActivityFeed items={data ?? []} isLoading={isLoading} emptyText="No blog activity yet" />
    </div>
  );
};

export default RecentBlog;
