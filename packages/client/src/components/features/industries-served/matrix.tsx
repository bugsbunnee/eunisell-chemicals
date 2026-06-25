import React, { useState } from 'react';
import { get } from 'lodash';
import { CheckCircle2Icon, ChevronDownIcon, Minus } from 'lucide-react';
import { cn } from '../../../lib/utils';

const COLS = [
  { key: 'industry', label: 'Industry / Service', width: '25%', align: 'left' },
  { key: 'corrosion', label: 'Corrosion Mgmt', width: '19%', align: 'center' },
  { key: 'process', label: 'Process Chemicals', width: '21%', align: 'center' },
  { key: 'water', label: 'Water Treatment', width: '19%', align: 'center' },
  { key: 'maintenance', label: 'Maintenance', width: '16%', align: 'center' },
];

const CAPABILITY_COLS = [
  { key: 'corrosion', label: 'Corrosion Mgmt' },
  { key: 'process', label: 'Process Chem' },
  { key: 'water', label: 'Water Treat' },
  { key: 'maintenance', label: 'Maintenance' },
];

const ROWS = [
  { industry: 'Oil & Gas (Upstream)', corrosion: true, process: true, water: true, maintenance: true },
  { industry: 'Manufacturing', corrosion: false, process: true, water: true, maintenance: true },
  { industry: 'Utilities & Power', corrosion: true, process: false, water: true, maintenance: true },
  { industry: 'Marine & Offshore', corrosion: true, process: true, water: false, maintenance: true },
];

const Matrix: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>('Oil & Gas (Upstream)');

  return (
    <section className="bg-background">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <h2 className="font-bold text-[28px] leading-[42px] text-accent text-center">Solutions Matrix</h2>

        <div className="flex flex-col gap-3">
          {ROWS.map((row) => {
            const isOpen = expanded === row.industry;
            return (
              <div key={row.industry} className="border border-[#d2d2d2] rounded-[4px] overflow-hidden">
                <button
                  onClick={() => setExpanded(isOpen ? null : row.industry)}
                  className={cn({
                    'w-full flex items-center justify-between p-4 text-left': true,
                    'bg-accent': isOpen,
                    'bg-white border-b border-[#d2d2d2]': !isOpen,
                  })}
                >
                  <span className={cn('text-[14px] font-medium leading-[20px]', isOpen ? 'text-white' : 'text-accent')}>{row.industry}</span>
                  <ChevronDownIcon size={12} className={cn('transition-transform shrink-0', isOpen ? 'rotate-180 text-white' : 'text-accent')} />
                </button>

                {isOpen && (
                  <div className="bg-card grid grid-cols-2 gap-4 p-4">
                    {CAPABILITY_COLS.map((col) => (
                      <div key={col.key} className="flex items-center gap-2">
                        {get(row, col.key) ? (
                          <CheckCircle2Icon size={12} className="text-secondary shrink-0" strokeWidth={2.5} />
                        ) : (
                          <Minus size={12} className="text-muted shrink-0" strokeWidth={2.5} />
                        )}
                        <span className="text-[12px] leading-[16px] text-accent">{col.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <div className="text-accent text-[40px] leading-15 font-bold">Industry Solutions Matrix</div>

        <p className="font-normal text-base leading-6 text-card-foreground mt-4">
          A cross-sectional view of our capabilities across primary industrial applications.
        </p>

        <div className="w-full overflow-x-auto rounded-lg border border-border mt-16">
          <table className="w-full min-w-160 border-collapse text-sm">
            <colgroup>
              {COLS.map((col) => (
                <col key={col.key} style={{ width: col.width }} />
              ))}
            </colgroup>

            <thead>
              <tr className="bg-accent">
                {COLS.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className={cn({
                      'px-6 py-6 font-bold text-white': true,
                      'text-left text-base': col.align === 'left',
                      'text-center text-sm': col.align !== 'left',
                    })}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {ROWS.map((row) => (
                <tr key={row.industry}>
                  <th scope="row" className="bg-card px-6 text-left text-base font-bold text-accent">
                    {row.industry}
                  </th>

                  {COLS.slice(1).map((col) => (
                    <td key={col.key} className="px-6 py-6 text-center border border-popover">
                      <div className="flex items-center justify-center">
                        {get(row, col.key) ? (
                          <CheckCircle2Icon className="h-4 w-4 text-secondary" strokeWidth={2.5} aria-label="Yes" />
                        ) : (
                          <Minus className="h-3.5 w-3.5 text-popover" strokeWidth={2.5} aria-label="Not applicable" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Matrix;
