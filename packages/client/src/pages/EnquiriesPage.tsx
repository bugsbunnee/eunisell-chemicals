import React from 'react';

import { BellIcon, EyeIcon, CornerUpLeftIcon, MoreVerticalIcon, HeadphonesIcon, PackageIcon, SproutIcon, type LucideIcon } from 'lucide-react';
import { EnquiryPriority, EnquiryStatus, useEnquiries, type Enquiry } from '../hooks/use-enquiries';
import { cn } from '../lib/utils';

import EnquiriesFilters from '../components/features/enquiries/filters';
import Pagination from '../components/features/enquiries/pagination';
import Table, { type Column } from '../components/features/enquiries/table';

import useEnquiriesStore from '../store/enquiries';

const EnquiriesPage: React.FC = () => {
  const enquiries = useEnquiries();
  const store = useEnquiriesStore();

  return (
    <main className="h-screen overflow-y-auto bg-card flex flex-col">
      <div className="bg-white border-b border-border px-8 flex items-center justify-between shrink-0 h-20">
        <div>
          <h1 className="text-[24px] text-[#333] leading-8 tracking-[0.047px]">Inquiries Manager</h1>
          <p className="text-[14px] text-[#777] leading-5 max-w-md">Centralized hub for all incoming web communications</p>
        </div>

        <div className="flex items-center gap-6 shrink-0">
          <div className="relative">
            <button className="size-10 flex items-center justify-center rounded-full bg-card text-card-foreground hover:text-accent transition-colors">
              <BellIcon size={16} />
            </button>
            <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 border-2 border-white" />
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="bg-white border border-border drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05)] rounded-[8px] overflow-hidden">
          <EnquiriesFilters />

          <div className="overflow-x-auto">
            <Table columns={columns} data={enquiries.data?.data ?? []} loading={enquiries.isLoading} keyExtractor={(r) => r.id} selectable />
          </div>

          <Pagination
            page={store.query.page ?? 1}
            totalPages={enquiries.data?.meta?.totalPages ?? 0}
            total={enquiries.data?.meta.total ?? 0}
            perPage={store.query.limit ?? 10}
            onPageChange={(page) => store.onChangeQuery({ page })}
          />
        </div>
      </div>
    </main>
  );
};

const typeConfig: Record<string, { bg: string; text: string; icon: LucideIcon }> = {
  'Technical Support': { bg: 'bg-[#eff6ff]', text: 'text-[#00558e]', icon: HeadphonesIcon },
  'Tech Support': { bg: 'bg-[#eff6ff]', text: 'text-[#00558e]', icon: HeadphonesIcon },
  'Product Consult': { bg: 'bg-[#faf5ff]', text: 'text-[#7e22ce]', icon: PackageIcon },
  Careers: { bg: 'bg-[#f0fdf4]', text: 'text-[#15803d]', icon: SproutIcon },
};

const priorityConfig: Record<EnquiryPriority, { dot: string; label: string }> = {
  NORMAL: { dot: 'bg-[#94a3b8]', label: 'Normal' },
  URGENT: { dot: 'bg-[#ef4444]', label: 'Urgent' },
};

const statusConfig: Record<EnquiryStatus, { label: string; bg: string; text: string }> = {
  NEW: { label: 'NEW', bg: 'bg-[rgba(0,85,142,0.1)]', text: 'text-[#00558e]' },
  IN_PROGRESS: { label: 'IN PROGRESS', bg: 'bg-[rgba(223,180,0,0.1)]', text: 'text-[#dfb400]' },
  CLOSED: { label: 'CLOSED', bg: 'bg-[rgba(208,4,22,0.1)]', text: 'text-[#d00416]' },
  PENDING: { label: 'PENDING', bg: 'bg-[rgba(164,164,164,0.1)]', text: 'text-[#a4a4a4]' },
};

const columns: Column<Enquiry>[] = [
  {
    key: 'sender',
    label: 'Sender',
    render: (row) => (
      <>
        <p className="text-[14px] text-[#333] leading-5">{row.fullName}</p>
        <p className="text-[12px] text-[#777] leading-4 mt-0.5">{row.email}</p>
      </>
    ),
  },
  {
    key: 'type',
    label: 'Type',
    cellClassName: 'whitespace-nowrap',
    render: (row) => {
      const t = typeConfig[row.enquiryType] ?? { bg: 'bg-[#eff6ff]', text: 'text-[#00558e]', icon: HeadphonesIcon };
      const Icon = t.icon;
      return (
        <span className={cn('inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[12px]', t.bg, t.text)}>
          <Icon size={14} className="shrink-0" />
          {row.enquiryType}
        </span>
      );
    },
  },
  {
    key: 'subject',
    label: 'Subject Preview',
    cellClassName: 'max-w-[200px]',
    render: (row) => (
      <p className="text-[14px] text-[#333] leading-5 truncate" title={row.message}>
        {row.message}
      </p>
    ),
  },
  {
    key: 'received',
    label: 'Received',
    cellClassName: 'whitespace-nowrap',
    render: (row) => (
      <p className="text-[14px] text-[#777] leading-5">{new Date(row.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
    ),
  },
  {
    key: 'priority',
    label: 'Priority',
    cellClassName: 'whitespace-nowrap',
    render: (row) => {
      const p = priorityConfig[row.priority] ?? priorityConfig[EnquiryPriority.Normal];
      return (
        <span className="flex items-center gap-1.5 text-[12px] text-[#333] uppercase tracking-[0.3px]">
          <span className={cn('size-2 rounded-full shrink-0', p.dot)} />
          {p.label}
        </span>
      );
    },
  },
  {
    key: 'status',
    label: 'Status',
    cellClassName: 'whitespace-nowrap',
    render: (row) => {
      const s = statusConfig[row.status] ?? statusConfig[EnquiryStatus.New];
      return <span className={cn('inline-flex items-center px-3 py-[2.5px] rounded-full text-[11px] uppercase tracking-[-0.275px]', s.bg, s.text)}>{s.label}</span>;
    },
  },
  {
    key: 'actions',
    label: 'Actions',
    render: () => (
      <div className="flex items-center gap-3">
        <button className="text-[#777] hover:text-accent transition-colors">
          <EyeIcon size={18} />
        </button>
        <button className="text-[#777] hover:text-accent transition-colors">
          <CornerUpLeftIcon size={16} />
        </button>
        <button className="text-[#777] hover:text-accent transition-colors">
          <MoreVerticalIcon size={16} />
        </button>
      </div>
    ),
  },
];

export default EnquiriesPage;
