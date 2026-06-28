import React, { Activity, useMemo, useState } from 'react';
import _ from 'lodash';

import { cn } from '../../../lib/utils';

export interface Column<T> {
  key: string;
  label: string;
  headerClassName?: string;
  cellClassName?: string;
  render: (row: T) => React.ReactNode;
}

interface Props<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (row: T) => string;
  loading?: boolean;
  skeletonRows?: number;
  selectable?: boolean;
}

const Table = <T,>({ columns, data, keyExtractor, loading, skeletonRows = 5, selectable }: Props<T>) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const allSelected = useMemo(() => {
    return data.length > 0 && selected.size === data.length;
  }, [data, selected]);

  const toggleAll = () => {
    setSelected(allSelected ? new Set() : new Set(data.map(keyExtractor)));
  };

  const toggle = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);

      if (next.has(key)) next.delete(key);
      else next.add(key);

      return next;
    });
  };

  const checkboxClass = (active: boolean) => {
    return cn('flex size-[13px] rounded-[2.5px] border cursor-pointer', {
      'bg-secondary border-secondary': active,
      'bg-white border-[#767676]': !active,
    });
  };

  return (
    <table className="w-full">
      <thead>
        <tr className="bg-[#f9fafb] border-b border-[#e8e8e8]">
          {selectable && (
            <th className="w-15.25 px-6 pt-5.25 pb-[22.5px]">
              <span role="checkbox" aria-checked={allSelected} onClick={toggleAll} className={checkboxClass(allSelected)} />
            </th>
          )}

          {columns.map((col) => (
            <th
              key={col.key}
              className={cn('text-[12px] text-[#777] tracking-[0.6px] uppercase text-left px-6 pt-[19.5px] pb-5.25 whitespace-nowrap font-normal', col.headerClassName)}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        <Activity mode={loading ? 'visible' : 'hidden'}>
          {_.range(1, skeletonRows + 1).map((row) => (
            <tr key={row} className="border-t border-border animate-pulse">
              {selectable && (
                <td className="w-15.25 px-6 py-8">
                  <span className="flex size-3.25 rounded-[2.5px] bg-gray-200" />
                </td>
              )}

              {columns.map((col) => (
                <td key={col.key} className={cn('px-6 py-8', col.cellClassName)}>
                  <div className="h-4 rounded bg-gray-200 w-3/4" />
                </td>
              ))}
            </tr>
          ))}
        </Activity>

        <Activity>
          {data.map((datum) => {
            const key = keyExtractor(datum);

            return (
              <tr key={key} className="border-t border-border">
                {selectable && (
                  <td className="w-15.25 px-6 pt-[31.5px] pb-[32.5px]">
                    <span role="checkbox" aria-checked={selected.has(key)} onClick={() => toggle(key)} className={checkboxClass(selected.has(key))} />
                  </td>
                )}

                {columns.map((col) => (
                  <td key={col.key} className={cn('px-6 py-8', col.cellClassName)}>
                    {col.render(datum)}
                  </td>
                ))}
              </tr>
            );
          })}
        </Activity>
      </tbody>
    </table>
  );
};

export default Table;
