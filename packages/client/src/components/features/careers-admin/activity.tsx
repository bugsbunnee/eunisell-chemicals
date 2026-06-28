import { BarChart2Icon, TrendingUpIcon } from 'lucide-react';

export default function CareerActivity() {
  return (
    <div className="bg-white border border-[#e5e8ec] shadow-[0px_4px_2px_0px_rgba(0,0,0,0.02)] rounded-[10px] p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] text-accent">Career Activity</h3>
        <BarChart2Icon size={16} className="text-[#777]" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-[12px] text-[#777] uppercase tracking-[0.6px]">New apps this week</p>
        <div className="flex items-end gap-2">
          <span className="text-[24px] text-accent leading-8">37</span>
          <div className="flex items-center gap-0.5 pb-1">
            <TrendingUpIcon size={11} className="text-[#1fc16b]" />
            <span className="text-[11px] text-[#1fc16b]">12%</span>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#e8e8e8]" />
      <div className="flex flex-col gap-0.5">
        <p className="text-[12px] text-[#777] uppercase tracking-[0.6px]">Most viewed role</p>
        <p className="text-[14px] text-accent leading-5">Graduate Trainee</p>
        <p className="text-[11px] text-[#777]">1,402 unique views</p>
      </div>
      <div className="h-px bg-[#e8e8e8]" />
      <div className="flex items-center justify-between">
        <p className="text-[12px] text-[#777]">Roles closing soon</p>
        <span className="text-[11px] text-[#d00416] px-2 py-0.5 rounded-[4px]" style={{ backgroundColor: 'rgba(208,4,22,0.1)' }}>
          2
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[12px] text-[#777]">Drafts awaiting publish</p>
        <span className="text-[11px] text-[#a4a4a4] px-2 py-0.5 rounded-[4px]" style={{ backgroundColor: 'rgba(164,164,164,0.1)' }}>
          3
        </span>
      </div>
    </div>
  );
}
