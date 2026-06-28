import Table from '../enquiries/table';
import { COLUMNS } from './columns';
import type { CareerRole } from './types';

interface Props {
  data: CareerRole[];
  total: number;
  page: number;
  totalPages: number;
  onPage: (p: number) => void;
}

export default function CareerTable({ data, total, page, totalPages, onPage }: Props) {
  return (
    <div className="bg-white border border-[#e5e8ec] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.01)] rounded-[6px] overflow-hidden">
      <Table columns={COLUMNS} data={data} keyExtractor={(r) => r.id} loading={false} />
      <div className="bg-[#f6f9fc] border-t border-[#e8e8e8] flex items-center justify-between px-5 py-4">
        <p className="text-[12px] text-[#777]">
          Showing {data.length} of {total} roles
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => onPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="size-8 bg-white border border-[#e8e8e8] rounded-[4px] flex items-center justify-center text-[#777] text-[14px] disabled:opacity-40"
          >
            ‹
          </button>
          {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => onPage(n)}
              className={`size-8 rounded-[4px] flex items-center justify-center text-[12px] ${
                page === n ? 'bg-secondary border border-secondary text-white' : 'bg-white border border-[#e8e8e8] text-[#777]'
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => onPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="size-8 bg-white border border-[#e8e8e8] rounded-[4px] flex items-center justify-center text-[#777] text-[14px] disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
