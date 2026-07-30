import { BriefcaseIcon } from 'lucide-react';
import Table from '../../enquiries/table';
import { getColumns } from './columns';
import type { CareerRole } from '../model/types';

interface Props {
  data: CareerRole[];
  total: number;
  page: number;
  totalPages: number;
  onPage: (p: number) => void;
  onEdit: (id: string) => void;
  loading?: boolean;
}

export default function CareerTable({ data, total, page, totalPages, onPage, onEdit, loading = false }: Props) {
  const isEmpty = !loading && data.length === 0;

  return (
    <div className="bg-white border border-[#e5e8ec] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.01)] rounded-[6px] overflow-hidden">
      {isEmpty ? (
        <div className="flex flex-col items-center gap-3 py-16 px-6 text-center">
          <div className="size-12 rounded-full bg-[#f6f9fc] flex items-center justify-center">
            <BriefcaseIcon size={20} className="text-[#94a3b8]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[14px] text-accent">No career openings found</p>
            <p className="text-[12px] text-[#777]">{total === 0 ? 'Create your first career opening to get started.' : 'Try adjusting your search or filters.'}</p>
          </div>
        </div>
      ) : (
        <Table columns={getColumns(onEdit)} data={data} keyExtractor={(r) => r.id} loading={loading} />
      )}
      <div className="bg-[#f6f9fc] border-t border-[#e8e8e8] flex items-center justify-between px-5 py-4">
        <p className="text-[12px] text-[#777]">
          Showing {data.length} of {total} roles
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => onPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="size-8 bg-white border border-[#e8e8e8] rounded-[4px] flex items-center justify-center text-[#777] text-[14px] disabled:opacity-40 transition-all hover:scale-105"
          >
            ‹
          </button>
          {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => onPage(n)}
              className={`size-8 rounded-[4px] flex items-center justify-center text-[12px] transition-all hover:scale-105 ${
                page === n ? 'bg-secondary border border-secondary text-white' : 'bg-white border border-[#e8e8e8] text-[#777]'
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => onPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="size-8 bg-white border border-[#e8e8e8] rounded-[4px] flex items-center justify-center text-[#777] text-[14px] disabled:opacity-40 transition-all hover:scale-105"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
