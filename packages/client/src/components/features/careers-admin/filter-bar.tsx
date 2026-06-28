import { CalendarIcon, RotateCcwIcon } from 'lucide-react';

export interface CareerFilters {
  dept: string;
  jobType: string;
  level: string;
  status: string;
  featured: string;
}

interface Props {
  filters: CareerFilters;
  onChange: (key: keyof CareerFilters, value: string) => void;
  onReset: () => void;
}

const sel = 'bg-[#f6f9fc] border border-[#e8e8e8] rounded-[4px] h-[36px] pl-4 pr-7 text-[12px] text-[#333] outline-none appearance-none cursor-pointer';

export default function CareerFilterBar({ filters, onChange, onReset }: Props) {
  return (
    <div className="bg-white border border-[#e5e8ec] rounded-[6px] px-5 py-[19px] flex flex-wrap gap-3 items-end">
      <div className="flex flex-col gap-1.5 min-w-[140px]">
        <label className="text-[10px] text-[#777] uppercase tracking-[0.5px]">Department</label>
        <select value={filters.dept} onChange={(e) => onChange('dept', e.target.value)} className={sel}>
          <option value="">All Departments</option>
          <option>Technical Services</option>
          <option>Laboratory Services</option>
          <option>QHSE</option>
          <option>Graduate Trainee</option>
          <option>Supply Chain &amp; Logistics</option>
          <option>Commercial</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5 min-w-[130px]">
        <label className="text-[10px] text-[#777] uppercase tracking-[0.5px]">Job Type</label>
        <select value={filters.jobType} onChange={(e) => onChange('jobType', e.target.value)} className={sel}>
          <option value="">All Types</option>
          <option>Full-time</option>
          <option>Trainee</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5 min-w-[130px]">
        <label className="text-[10px] text-[#777] uppercase tracking-[0.5px]">Level</label>
        <select value={filters.level} onChange={(e) => onChange('level', e.target.value)} className={sel}>
          <option value="">All Levels</option>
          <option>Entry Level</option>
          <option>Mid Level</option>
          <option>Senior Level</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5 min-w-[120px]">
        <label className="text-[10px] text-[#777] uppercase tracking-[0.5px]">Status</label>
        <select value={filters.status} onChange={(e) => onChange('status', e.target.value)} className={sel}>
          <option value="">All Status</option>
          <option value="OPEN">Open</option>
          <option value="DRAFT">Draft</option>
          <option value="CLOSED">Closed</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5 min-w-[110px]">
        <label className="text-[10px] text-[#777] uppercase tracking-[0.5px]">Featured</label>
        <select value={filters.featured} onChange={(e) => onChange('featured', e.target.value)} className={sel}>
          <option value="">Any</option>
          <option value="yes">Featured</option>
          <option value="no">Not Featured</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5 min-w-[140px]">
        <label className="text-[10px] text-[#777] uppercase tracking-[0.5px]">Date Posted</label>
        <div className="relative">
          <CalendarIcon size={10} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#777]" />
          <select className={`${sel} pl-8`}>
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>All Time</option>
          </select>
        </div>
      </div>
      <button onClick={onReset} className="flex items-center gap-1.5 text-[12px] text-[#777] h-[36px] px-2 whitespace-nowrap hover:text-accent transition-colors">
        <RotateCcwIcon size={10} />
        Reset Filters
      </button>
    </div>
  );
}
