import React from 'react';
import { get } from 'lodash';
import { CheckCircle2Icon, Minus } from 'lucide-react';
import { cn } from '../../../lib/utils';

const COLS = [
  { key: 'industry', label: 'Industry / Service', width: '25%', align: 'left' },
  { key: 'corrosion', label: 'Corrosion Mgmt', width: '19%', align: 'center' },
  { key: 'process', label: 'Process Chemicals', width: '21%', align: 'center' },
  { key: 'water', label: 'Water Treatment', width: '19%', align: 'center' },
  { key: 'maintenance', label: 'Maintenance', width: '16%', align: 'center' },
];

const ROWS = [
  {
    industry: 'Oil & Gas (Upstream)',
    corrosion: true,
    process: true,
    water: true,
    maintenance: true,
  },
  {
    industry: 'Manufacturing',
    corrosion: false,
    process: true,
    water: true,
    maintenance: true,
  },
  {
    industry: 'Utilities & Power',
    corrosion: true,
    process: false,
    water: true,
    maintenance: true,
  },
  {
    industry: 'Marine & Offshore',
    corrosion: true,
    process: true,
    water: false,
    maintenance: true,
  },
];

const Matrix: React.FC = () => {
  return (
    <section className="p-30 bg-background ">
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
    </section>
  );
};

export default Matrix;
