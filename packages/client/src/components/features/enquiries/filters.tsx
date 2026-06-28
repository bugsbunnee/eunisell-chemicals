import React from 'react';
import useEnquiriesStore from '../../../store/enquiries';

import { SearchIcon, DownloadIcon } from 'lucide-react';
import { EnquiryPriority, EnquiryStatus } from '../../../hooks/use-enquiries';

const EnquiriesFilters: React.FC = () => {
  const store = useEnquiriesStore();

  return (
    <div className="border-b border-border p-6 flex items-center justify-between gap-4">
      <div className="flex flex-1 items-center gap-4 max-w-4xl min-w-0">
        <div className="relative flex-1 min-w-0">
          <SearchIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]" />

          <input
            type="text"
            value={store.query.search}
            onChange={(e) => store.onChangeQuery({ search: e.currentTarget.value })}
            placeholder="Search by name, email or subject..."
            className="w-full pl-12 pr-4 py-3 text-[16px] border border-border rounded-[6px] bg-[#f9fafb] text-[#333] placeholder:text-[#9ca3af] outline-none focus:border-secondary/60 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="relative">
            <select
              value={store.query.priority}
              onChange={(e) => store.onChangeQuery({ priority: e.currentTarget.value })}
              className="appearance-none pl-5 pr-8 py-[10.5px] text-[14px] border border-border rounded-[6px] text-[#777] bg-[#f9fafb] outline-none focus:border-secondary/60 transition-colors cursor-pointer"
            >
              <option value="">Select Priority</option>

              {Object.values(EnquiryPriority).map((priority) => (
                <option value={priority}>{priority}</option>
              ))}
            </select>

            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#777]" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="relative">
            <select
              value={store.query.status}
              onChange={(e) => store.onChangeQuery({ status: e.currentTarget.value })}
              className="appearance-none pl-5 pr-8 py-[10.5px] text-[14px] border border-border rounded-[6px] text-[#777] bg-[#f9fafb] outline-none focus:border-secondary/60 transition-colors cursor-pointer"
            >
              <option value="">Select Status</option>

              {Object.values(EnquiryStatus).map((status) => (
                <option value={status}>{status}</option>
              ))}
            </select>

            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#777]" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <button className="flex items-center gap-2 bg-accent text-white text-[14px] px-5 py-2.5 rounded-[6px] hover:bg-accent/90 transition-colors shrink-0">
        <DownloadIcon size={14} /> Export Data
      </button>
    </div>
  );
};

export default EnquiriesFilters;
