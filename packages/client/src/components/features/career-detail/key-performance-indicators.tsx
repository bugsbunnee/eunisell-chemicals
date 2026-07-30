import React from 'react';
import { TargetIcon } from 'lucide-react';

interface KeyPerformanceIndicatorsProps {
  items: string[];
}

const KeyPerformanceIndicators: React.FC<KeyPerformanceIndicatorsProps> = ({ items }) => (
  <section className="py-24 px-30 text-left">
    <div className="max-w-[1680px]">
      <h2 className="font-bold text-accent text-[30px] leading-9 mb-8">Key Performance Indicators</h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 border border-border rounded-[6px] p-5">
            <TargetIcon size={18} className="text-secondary shrink-0 mt-0.5" />
            <span className="text-muted-foreground text-[16px] leading-6">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KeyPerformanceIndicators;
