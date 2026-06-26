import React from 'react';
import useAuthStore from '../../../store/auth';

const statusItems = [
  { label: 'Website Status', value: 'Live', color: 'bg-green-500' },
  { label: 'Pending Reviews', value: '6', color: 'bg-orange-400' },
  { label: 'New Enquiries', value: '12', color: 'bg-secondary' },
];

const DashboardHeader: React.FC = () => {
  const auth = useAuthStore((s) => s.auth);
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="px-6 py-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-[28px] font-bold text-accent leading-9">Welcome back, {auth?.user.firstName ?? 'Admin'}</h1>
          <p className="text-[13px] text-card-foreground mt-1">Overview of Eunisell Digital Operations as of {today}</p>
        </div>

        <div className="flex items-center gap-5 shrink-0 pt-1">
          {statusItems.map(({ label, value, color }) => (
            <div key={label} className="flex items-center gap-1.5 bg-background rounded-[6px] border border-border h-10 px-3">
              <span className={`size-2 rounded-full ${color} shrink-0`} />
              <span className="text-[13px] text-card-foreground">
                {label}: <span className="font-semibold text-accent">{value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
