import React, { useMemo } from 'react';

import { BarChart2Icon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import { useCareerActivity } from '../../../../hooks/use-career-openings';

const CareerActivity: React.FC = () => {
  const { data } = useCareerActivity();

  const { trendColor, trendPct, TrendIcon } = useMemo(() => {
    const trendPct = data?.applicationsTrendPct ?? 0;
    const trendColor = trendPct < 0 ? 'text-[#d00416]' : 'text-[#1fc16b]';
    const TrendIcon = trendPct < 0 ? TrendingDownIcon : TrendingUpIcon;

    return { trendPct, trendColor, TrendIcon };
  }, [data]);

  return (
    <div className="bg-white border border-[#e5e8ec] shadow-[0px_4px_2px_0px_rgba(0,0,0,0.02)] rounded-[10px] p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] text-accent">Career Activity</h3>
        <BarChart2Icon size={16} className="text-[#777]" />
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="text-[12px] text-[#777] uppercase tracking-[0.6px]">New apps this week</p>
        <div className="flex items-end gap-2">
          <span className="text-[24px] text-accent leading-8">{data?.newApplicationsThisWeek ?? 0}</span>
          <div className="flex items-center gap-0.5 pb-1">
            <TrendIcon size={11} className={trendColor} />
            <span className={`text-[11px] ${trendColor}`}>{Math.abs(trendPct)}%</span>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#e8e8e8]" />

      <div className="flex flex-col gap-0.5">
        <p className="text-[12px] text-[#777] uppercase tracking-[0.6px]">Most applied role</p>
        <p className="text-[14px] text-accent leading-5">{data?.mostAppliedRole?.title ?? 'No applications yet'}</p>
        {data?.mostAppliedRole && <p className="text-[11px] text-[#777]">{data.mostAppliedRole.count} application(s)</p>}
      </div>

      <div className="h-px bg-[#e8e8e8]" />

      <div className="flex items-center justify-between">
        <p className="text-[12px] text-[#777]">Roles closing soon</p>
        <span className="text-[11px] text-[#d00416] px-2 py-0.5 rounded-[4px]" style={{ backgroundColor: 'rgba(208,4,22,0.1)' }}>
          {data?.rolesClosingSoon ?? 0}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[12px] text-[#777]">Drafts awaiting publish</p>
        <span className="text-[11px] text-[#a4a4a4] px-2 py-0.5 rounded-[4px]" style={{ backgroundColor: 'rgba(164,164,164,0.1)' }}>
          {data?.draftsAwaitingPublish ?? 0}
        </span>
      </div>
    </div>
  );
};

export default CareerActivity;
