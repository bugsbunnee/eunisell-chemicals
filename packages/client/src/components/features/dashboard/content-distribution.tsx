import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../../../lib/utils';

const segments = [
  { label: 'Articles', value: 55, fill: '#0083ce' },
  { label: 'Brochures', value: 25, fill: '#002037' },
  { label: 'Tech Bulletins', value: 12, fill: '#6b7280' },
  { label: 'Knowledge', value: 8, fill: '#94a3b8' },
];

const statusStyles: Record<string, string> = {
  PUBLISHED: 'bg-green-50 text-green-700',
  REVIEW: 'bg-amber-50 text-amber-700',
  DRAFT: 'bg-gray-100 text-gray-500',
};

const contentItems = [
  { title: 'Polymer Additives for Performance', type: 'Tech Bulletin', status: 'PUBLISHED', updated: '2 hours ago' },
  { title: 'Oilfield Chemicals Overview 2024', type: 'Brochure', status: 'REVIEW', updated: 'Yesterday' },
  { title: 'Water Treatment Safety Protocols', type: 'Knowledge Centre', status: 'DRAFT', updated: 'Oct 22, 2023' },
];

const ContentDistribution: React.FC = () => (
  <div className="bg-white border border-border rounded-[4px]">
    <div className="flex items-center justify-between px-5 py-4 border-b border-border">
      <h2 className="text-[15px] font-semibold text-accent">Content Distribution</h2>
      <button className="flex items-center gap-1 text-[13px] text-secondary hover:text-secondary/80 transition-colors">
        View Content Library <ArrowRightIcon size={13} />
      </button>
    </div>

    <div className="flex gap-6 p-5">
      <div className="flex flex-col items-center gap-3 shrink-0">
        <ResponsiveContainer width={120} height={120}>
          <PieChart>
            <Pie data={segments} cx="50%" cy="50%" innerRadius={36} outerRadius={58} dataKey="value" strokeWidth={0} />
            <Tooltip formatter={(value) => [`${value ?? ''}%`]} contentStyle={{ fontSize: 12, borderRadius: 4, border: '1px solid #e5e7eb', boxShadow: 'none' }} />
          </PieChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {segments.map(({ label, fill }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-[2px] shrink-0" style={{ backgroundColor: fill }} />
              <span className="text-[11px] text-card-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-[11px] font-semibold text-card-foreground uppercase tracking-[0.5px] text-left pb-2">Title</th>
              <th className="text-[11px] font-semibold text-card-foreground uppercase tracking-[0.5px] text-left pb-2 whitespace-nowrap">Type</th>
              <th className="text-[11px] font-semibold text-card-foreground uppercase tracking-[0.5px] text-left pb-2">Status</th>
              <th className="text-[11px] font-semibold text-card-foreground uppercase tracking-[0.5px] text-left pb-2 whitespace-nowrap">Last Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {contentItems.map(({ title, type, status, updated }) => (
              <tr key={title}>
                <td className="text-[13px] text-accent py-3 pr-4 max-w-0">
                  <span className="block truncate">{title}</span>
                </td>
                <td className="text-[13px] text-card-foreground py-3 pr-4 whitespace-nowrap">{type}</td>
                <td className="py-3 pr-4">
                  <span className={cn('text-[11px] font-semibold px-2 py-0.5 rounded-[3px] whitespace-nowrap', statusStyles[status])}>{status}</span>
                </td>
                <td className="text-[13px] text-card-foreground py-3 whitespace-nowrap">{updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default ContentDistribution;
