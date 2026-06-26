import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const portfolios = ['Production Chemicals', 'Flow Assurance', 'Well Intervention', 'Water Treatment'];

const Portfolio: React.FC = () => {
  return (
    <section className="bg-background text-left">
      {/* Mobile */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[24px] leading-8 text-accent">Chemical Portfolio</h2>
          <p className="text-[10px] uppercase tracking-[0.5px] text-card-foreground">Architecture v2.0</p>
        </div>
        <div className="border-t border-border flex flex-col">
          {portfolios.map((portfolio) => (
            <div key={portfolio} className="flex items-center justify-between py-5 border-b border-border">
              <span className="text-[18px] leading-7 text-accent">{portfolio}</span>
              <ArrowRightIcon size={14} className="text-secondary shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-16 px-45">
        <div className="flex items-center gap-x-8">
          <div className="font-bold text-3xl text-accent">Oilfield Chemical Portfolio</div>
          <div className="border-b border-b-border flex-1"></div>
          <div className="text-muted-foreground text-sm">SYSTEM ARCHITECTURE</div>
        </div>

        <div className="grid grid-cols-4 gap-x-4">
          {portfolios.map((portfolio) => (
            <div key={portfolio} className="mt-12 p-6 bg-card border-input border">
              <div className="px-4 py-5.5 border-l-4 border-l-secondary capitalize h-full flex items-center text-accent text-lg font-bold">{portfolio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
