import { BriefcaseIcon, FileTextIcon, StarIcon, XCircleIcon } from 'lucide-react';

const STATS = [
  { icon: BriefcaseIcon, iconBg: 'rgba(31,193,107,0.1)', iconColor: '#1fc16b', tagBg: 'rgba(31,193,107,0.1)', tagText: '#1fc16b', tag: 'Active', value: 8, label: 'Open Roles' },
  { icon: FileTextIcon, iconBg: 'rgba(164,164,164,0.1)', iconColor: '#a4a4a4', tagBg: 'rgba(164,164,164,0.1)', tagText: '#a4a4a4', tag: 'Pending', value: 3, label: 'Draft Roles' },
  { icon: StarIcon, iconBg: 'rgba(0,131,206,0.1)', iconColor: '#0083ce', tagBg: 'rgba(0,131,206,0.1)', tagText: '#0083ce', tag: 'Highlighted', value: 2, label: 'Featured Roles' },
  { icon: XCircleIcon, iconBg: 'rgba(208,4,22,0.1)', iconColor: '#d00416', tagBg: 'rgba(208,4,22,0.1)', tagText: '#d00416', tag: 'Ended', value: 5, label: 'Closed Roles' },
];

export default function CareerStatSection() {
  return (
    <div className="bg-white border border-[#e5e8ec] shadow-[0px_4px_2px_0px_rgba(0,0,0,0.02)] rounded-[10px] p-8 flex flex-col gap-8">
      <div>
        <h2 className="text-[24px] text-accent leading-8">Manage Career Openings</h2>
        <p className="text-[16px] text-[#777] leading-6">Overview of active recruitment cycles and talent pipeline metrics.</p>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div key={s.label} className="bg-card border border-[#e8e8e8] rounded-[8px] p-6 flex flex-col gap-1">
            <div className="flex items-start justify-between">
              <div className="size-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: s.iconBg }}>
                <s.icon size={18} style={{ color: s.iconColor }} />
              </div>
              <span className="text-[12px] px-2 py-1 rounded-[4px]" style={{ backgroundColor: s.tagBg, color: s.tagText }}>
                {s.tag}
              </span>
            </div>
            <p className="text-[30px] text-accent leading-9 mt-4">{s.value}</p>
            <p className="text-[14px] text-[#777] leading-5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
