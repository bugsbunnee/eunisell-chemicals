import React, { useMemo } from 'react';
import { useApplicationStats } from '../../../../hooks/use-applications';

const ApplicationOverview: React.FC = () => {
  const { data } = useApplicationStats();

  const { total, shortlisted, reviewed, reviewedPct, shortlistedPct } = useMemo(() => {
    const total = data?.total ?? 0;
    const shortlisted = data?.shortlisted ?? 0;
    const reviewed = data?.reviewed ?? 0;
    const shortlistedPct = total > 0 ? Math.round((shortlisted / total) * 100) : 0;
    const reviewedPct = total > 0 ? Math.round((reviewed / total) * 100) : 0;

    return { total, shortlisted, reviewed, reviewedPct, shortlistedPct };
  }, [data]);

  return (
    <div className="bg-white border border-[#e5e8ec] shadow-[0px_4px_2px_0px_rgba(0,0,0,0.02)] rounded-[10px] p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] text-accent">Application Overview</h3>
        <button className="text-[11px] text-secondary transition-all hover:scale-105">View All</button>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-2 rounded-full bg-secondary shrink-0" />
            <span className="text-[12px] text-[#777]">Total Applications</span>
          </div>
          <span className="text-[12px] text-accent">{total}</span>
        </div>
        <div className="h-2 bg-[#f6f9fc] rounded-full overflow-hidden">
          <div className="h-full bg-secondary w-full rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-2 rounded-full shrink-0" style={{ backgroundColor: '#1fc16b' }} />
            <span className="text-[12px] text-[#777]">Shortlisted</span>
          </div>
          <span className="text-[12px] text-accent">{shortlisted}</span>
        </div>
        <div className="h-2 bg-[#f6f9fc] rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${shortlistedPct}%`, backgroundColor: '#1fc16b' }} />
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-2 rounded-full shrink-0" style={{ backgroundColor: '#f59e0b' }} />
            <span className="text-[12px] text-[#777]">Reviewed</span>
          </div>
          <span className="text-[12px] text-accent">{reviewed}</span>
        </div>
        <div className="h-2 bg-[#f6f9fc] rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${reviewedPct}%`, backgroundColor: '#f59e0b' }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2">
        <div className="bg-card rounded-[4px] p-3 flex flex-col items-center">
          <p className="text-[10px] text-[#777] uppercase">New</p>
          <p className="text-[18px] text-accent">{data?.new ?? 0}</p>
        </div>
        <div className="bg-card rounded-[4px] p-3 flex flex-col items-center">
          <p className="text-[10px] text-[#777] uppercase">Pending</p>
          <p className="text-[18px] text-accent">{data?.pending ?? 0}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationOverview;
