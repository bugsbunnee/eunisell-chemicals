import React, { useCallback, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface Props {
  page: number;
  totalPages: number;
  total: number;
  perPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = (props) => {
  const pagination = usePagination(props);

  return (
    <div className="bg-[#f9fafb] border-t border-border rounded-b-[8px] p-6 flex items-center justify-between">
      <p className="text-[14px] text-[#777]">
        Showing{' '}
        <span className="text-[#333]">
          {pagination.from} to {pagination.to}
        </span>{' '}
        of {props.total} entries
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => props.onPageChange(Math.max(1, props.page - 1))}
          disabled={props.page === 1}
          className="size-8 flex items-center justify-center rounded-[4px] border border-border bg-white text-[#777] hover:border-secondary/40 hover:text-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeftIcon size={12} />
        </button>

        {pagination.pages.map((p, i) =>
          p === '...' ? (
            <span key={`ellipsis-${i}`} className="size-8 flex items-center justify-center text-[16px] text-[#777]">
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => props.onPageChange(p as number)}
              className={cn({
                'size-8 flex items-center justify-center rounded-[4px] text-[12px] border transition-colors': true,
                'bg-secondary border-secondary text-white': props.page === p,
                'bg-white border-border text-[#777] hover:border-secondary/40 hover:text-secondary': props.page !== p,
              })}
            >
              {p}
            </button>
          )
        )}

        <button
          onClick={() => props.onPageChange(Math.min(props.totalPages, props.page + 1))}
          disabled={props.page === props.totalPages}
          className="size-8 flex items-center justify-center rounded-[4px] border border-border bg-white text-[#777] hover:border-secondary/40 hover:text-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRightIcon size={12} />
        </button>
      </div>
    </div>
  );
};

const usePagination = (props: Props) => {
  const buildPages = useCallback((current: number, total: number): (number | '...')[] => {
    if (total <= 0) return [];
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, '...', total];
    if (current >= total - 2) return [1, '...', total - 2, total - 1, total];
    return [1, '...', current - 1, current, current + 1, '...', total];
  }, []);

  return useMemo(
    () => ({
      from: props.total === 0 ? 0 : (props.page - 1) * props.perPage + 1,
      to: Math.min(props.page * props.perPage, props.total),
      pages: buildPages(props.page, props.totalPages),
    }),
    [props, buildPages]
  );
};

export default Pagination;
