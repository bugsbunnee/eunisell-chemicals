import React, { useMemo } from 'react';

interface Props {
  completed: number;
  total: number;
  pct: number;
}

const CmsCompletionBar: React.FC<Props> = ({ completed, total, pct }) => {
  const color = useMemo(() => {
    if (pct === 100) return '#10b981';
    if (pct >= 70) return '#f59e0b';
    return '#0083ce';
  }, [pct]);

  return (
    <div className="flex flex-col gap-1 w-32">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-[#777]">
          {completed}/{total} sections
        </span>
        <span className="text-[10px] font-medium" style={{ color }}>
          {pct}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[#e5e8ec] overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
};

export default CmsCompletionBar;
