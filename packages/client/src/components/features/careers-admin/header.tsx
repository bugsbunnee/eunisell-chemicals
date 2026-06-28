import { BellIcon, PlusIcon, SearchIcon } from 'lucide-react';

interface Props {
  search: string;
  onSearch: (v: string) => void;
}

export default function CareerHeader({ search, onSearch }: Props) {
  return (
    <div className="bg-white border-b border-[#e8e8e8] px-8 h-20 flex items-center justify-between shrink-0">
      <div>
        <h1 className="text-[20px] text-accent leading-7">Careers Management</h1>
        <p className="text-[12px] text-[#777] leading-4">Create, manage, publish, close, and archive career openings...</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <SearchIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
          <input
            type="text"
            placeholder="Search roles..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="bg-card border border-[#e8e8e8] rounded-[4px] pl-10 pr-4 py-[9px] w-[288px] text-[14px] placeholder:text-[#9ca3af] outline-none"
          />
        </div>
        <div className="relative bg-card rounded-full size-10 flex items-center justify-center">
          <BellIcon size={16} className="text-accent" />
          <span className="absolute top-2 right-2 size-2 bg-[#ef4444] rounded-full border-2 border-white" />
        </div>
        <button className="bg-secondary text-white flex items-center gap-2 px-5 py-[10px] rounded-[6px] text-[14px]">
          <PlusIcon size={14} />
          Add Career Opening
        </button>
      </div>
    </div>
  );
}
