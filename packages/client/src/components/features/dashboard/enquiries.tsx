import React, { Activity } from 'react';

import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { cn } from '../../../lib/utils';
import { paths } from '../../../lib/data';
import { useEnquiryStats, useLatestEnquiries } from '../../../hooks/use-enquiries';
import EnquirySkeletonRow from './enquiry-skeleton-row';

const TYPE_CARDS = [
  { label: 'Consultation', key: 'consultation' as const, emergency: false },
  { label: 'Product', key: 'product' as const, emergency: false },
  { label: 'Technical', key: 'technical' as const, emergency: false },
  { label: 'Laboratory', key: 'laboratory' as const, emergency: false },
  { label: 'Emergency', key: 'emergency' as const, emergency: true },
];

const PRIORITY_CONFIG = {
  URGENT: { label: 'Urgent', className: 'bg-[#fb3748] text-white' },
  NORMAL: { label: 'Normal', className: 'bg-secondary text-white' },
};

const STATUS_CONFIG = {
  NEW: { label: 'New', className: 'text-secondary' },
  IN_PROGRESS: { label: 'In Progress', className: 'text-secondary' },
  PENDING: { label: 'Pending', className: 'text-[#6366f1]' },
  CLOSED: { label: 'Closed', className: 'text-[#1fc16b]' },
};

const LatestEnquiries: React.FC = () => {
  const navigate = useNavigate();
  const { data: stats } = useEnquiryStats();
  const { data: enquiries, isLoading } = useLatestEnquiries({ limit: 5 });

  return (
    <div className="bg-white border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[6px]">
      <div className="flex items-center justify-between px-6 py-6 border-b border-border">
        <h2 className="text-[16px] text-accent tracking-[-0.047px]">Latest Enquiries</h2>
        <button onClick={() => navigate(paths.dashboard)} className="flex items-center gap-1 text-[12px] text-secondary hover:text-secondary/70 transition-colors">
          All Enquiries <ArrowRightIcon size={12} />
        </button>
      </div>

      <div className="flex items-stretch gap-3 px-6 py-5 overflow-x-auto">
        {TYPE_CARDS.map(({ label, key, emergency }) => (
          <div
            key={label}
            className={cn(
              'flex flex-col items-center min-w-[120px] py-3 px-5 rounded-[4px] border shrink-0',
              emergency ? 'bg-[rgba(251,55,72,0.05)] border-[rgba(251,55,72,0.2)]' : 'bg-[#f6f9fc] border-border'
            )}
          >
            <span className={cn('text-[10px] uppercase tracking-[0.06px]', emergency ? 'text-[#fb3748]' : 'text-card-foreground')}>{label}</span>
            <span className={cn('text-[18px] leading-7 mt-0.5', emergency ? 'text-[#fb3748]' : 'text-accent')}>{String(stats?.[key] ?? 0).padStart(2, '0')}</span>
          </div>
        ))}
      </div>

      <div className="px-6 pb-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-[14px] text-card-foreground font-normal text-left pb-3">Name</th>
              <th className="text-[14px] text-card-foreground font-normal text-left pb-3">Company</th>
              <th className="text-[14px] text-card-foreground font-normal text-left pb-3">Type</th>
              <th className="text-[14px] text-card-foreground font-normal text-left pb-3">Priority</th>
              <th className="text-[14px] text-card-foreground font-normal text-left pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <Activity mode={isLoading ? 'visible' : 'hidden'}>
              {Array.from({ length: 3 }).map((_, i) => (
                <EnquirySkeletonRow key={i} />
              ))}
            </Activity>

            <Activity mode={!isLoading && !!enquiries?.length ? 'visible' : 'hidden'}>
              {enquiries?.map((e) => {
                const priority = PRIORITY_CONFIG[e.priority] ?? PRIORITY_CONFIG.NORMAL;
                const status = STATUS_CONFIG[e.status] ?? STATUS_CONFIG.NEW;
                return (
                  <tr key={e.id} className="border-t border-border hover:bg-[#fafafa] transition-colors">
                    <td className="py-4 pr-4 text-[14px] text-accent">{e.fullName}</td>
                    <td className="py-4 pr-4 text-[14px] text-card-foreground">{e.company}</td>
                    <td className="py-4 pr-4 text-[14px] text-card-foreground">{e.enquiryType}</td>
                    <td className="py-4 pr-4">
                      <span className={cn('text-[10px] font-semibold px-2 h-4 inline-flex items-center rounded-[2px] uppercase tracking-[0.07px]', priority.className)}>
                        {priority.label}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={cn('text-[14px]', status.className)}>{status.label}</span>
                    </td>
                  </tr>
                );
              })}
            </Activity>

            <Activity mode={!isLoading && !enquiries?.length ? 'visible' : 'hidden'}>
              <tr>
                <td colSpan={5} className="py-8 text-center text-[13px] text-card-foreground">
                  No enquiries found
                </td>
              </tr>
            </Activity>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestEnquiries;
