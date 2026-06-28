import React, { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { EnquiryPriority } from '../../../hooks/use-enquiries';

const tabs = [
  { label: 'CONSULTATION', count: '08' },
  { label: 'PRODUCT', count: '15' },
  { label: 'TECHNICAL', count: '04' },
  { label: 'LABORATORY', count: '02' },
  { label: 'EMERGENCY', count: '01', urgent: true },
];

const rows = [
  { name: 'Johnathan Smith', company: 'Shell Nigeria', type: 'Technical', priority: 'URGENT', status: 'In Progress' },
  { name: 'Amaka Okafor', company: 'Dangote Refinery', type: 'Product', priority: 'NORMAL', status: 'Closed' },
];

const LatestEnquiries: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white border border-border rounded-[4px]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <h2 className="text-[15px] font-semibold text-accent">Latest Enquiries</h2>
        <button className="flex items-center gap-1 text-[13px] text-secondary hover:text-secondary/80 transition-colors">
          All Enquiries <ArrowRightIcon size={13} />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-2 px-5 pt-4">
        {tabs.map(({ label, count, urgent }, i) => (
          <button
            key={label}
            onClick={() => setActive(i)}
            className={cn(
              'flex flex-col items-center border rounded-[4px] px-2 py-3 transition-colors',
              urgent ? 'border-red-200 bg-red-50' : active === i ? 'border-secondary/30 bg-secondary/5' : 'border-border hover:border-secondary/30'
            )}
          >
            <span className={cn('text-[9px] font-semibold tracking-[0.5px] leading-4 uppercase', urgent ? 'text-red-500' : 'text-card-foreground')}>{label}</span>
            <span className={cn('text-[22px] font-bold leading-7', urgent ? 'text-red-500' : active === i ? 'text-secondary' : 'text-accent')}>{count}</span>
          </button>
        ))}
      </div>

      <div className="px-5 py-4">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-[11px] font-semibold text-card-foreground uppercase tracking-[0.5px] text-left pb-2 w-1/4">Name</th>
              <th className="text-[11px] font-semibold text-card-foreground uppercase tracking-[0.5px] text-left pb-2 w-1/4">Company</th>
              <th className="text-[11px] font-semibold text-card-foreground uppercase tracking-[0.5px] text-left pb-2">Type</th>
              <th className="text-[11px] font-semibold text-card-foreground uppercase tracking-[0.5px] text-left pb-2">Priority</th>
              <th className="text-[11px] font-semibold text-card-foreground uppercase tracking-[0.5px] text-left pb-2">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {rows.map(({ name, company, type, priority, status }) => (
              <tr key={name}>
                <td className="text-[13px] text-accent py-3 pr-4">{name}</td>
                <td className="text-[13px] text-card-foreground py-3 pr-4">{company}</td>
                <td className="text-[13px] text-card-foreground py-3 pr-4">{type}</td>
                <td className="py-3 pr-4">
                  <span
                    className={cn({
                      'text-[11px] font-semibold px-2 py-0.5 rounded-[3px] text-white': true,
                      'bg-red-500': priority === EnquiryPriority.Urgent,
                      'bg-secondary': priority !== EnquiryPriority.Urgent,
                    })}
                  >
                    {priority}
                  </span>
                </td>
                <td className={cn('text-[13px] py-3', status === 'In Progress' ? 'text-secondary' : 'text-green-600')}>{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestEnquiries;
