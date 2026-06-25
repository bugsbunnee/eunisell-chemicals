import React from 'react';

const stats = [
  { value: '4', label: 'Continents' },
  { value: '12+', label: 'Logistics Hubs' },
  { value: '500+', label: 'Chemical Solutions' },
];

const GlobalReach: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden text-center">
      {/* Desktop background image */}
      <img src="/partners/global-reach-bg.jpg" alt="Global Reach" className="hidden md:block absolute inset-0 w-full h-full object-cover" />
      <div className="hidden md:block absolute inset-0 bg-linear-to-r from-accent/90 via-accent/75 to-accent/90" />

      {/* Mobile: simple dark bg with subtle pattern overlay */}
      <div className="md:hidden absolute inset-0 opacity-10 pointer-events-none">
        <img src="/partners/global-reach-bg.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 py-20 md:py-44 px-6 md:px-30 flex flex-col items-center">
        <span className="font-bold text-secondary text-[12px] md:text-[13px] uppercase tracking-[2.4px] md:tracking-[3.25px] mb-4 md:mb-6">
          Global Reach
        </span>

        <h2 className="font-bold text-[32px] md:text-[52px] text-white leading-10 md:leading-15 max-w-[323px] md:max-w-170 mb-4 md:mb-8 text-center">
          Bridging Global Innovation and Local Performance
        </h2>

        <p className="text-muted text-[16px] md:text-xl leading-[26px] md:leading-[32.5px] max-w-sm md:max-w-181.5 mb-10 md:mb-12 text-center">
          Connecting major chemical manufacturing hubs to front-line industrial operations across Africa.
        </p>

        {/* Mobile: stacked stats */}
        <div className="flex flex-col gap-8 items-center md:hidden w-full">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-black text-[30px] text-white leading-9">{value}</span>
              <span className="font-medium text-[10px] text-muted uppercase tracking-[1px]">{label}</span>
            </div>
          ))}
        </div>

        {/* Desktop: side-by-side stats */}
        <div className="hidden md:grid grid-cols-3 gap-24 items-center justify-center w-full max-w-250 mx-auto">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <span className="font-black text-[36px] text-white leading-10">{value}</span>
              <span className="font-medium text-sm text-muted uppercase tracking-[1px]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
