import React from 'react';

const stats = [
  { value: '4', label: 'Continents' },
  { value: '12+', label: 'Logistics Hubs' },
  { value: '500+', label: 'Chemical Solutions' },
];

const GlobalReach: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden py-44 flex items-center justify-center">
      <img src="/partners/global-reach-bg.jpg" alt="Global Reach" className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-r from-accent/90 via-accent/75 to-accent/90" />

      <div className="relative z-10 w-full max-w-250 mx-auto px-30 items-center text-center">
        <span className="font-bold text-secondary text-[13px] uppercase tracking-[3.25px] mb-6">Global Reach</span>

        <h2 className="font-bold text-[52px] text-white leading-15 max-w-170 mb-8">
          A Seamless Connection
          <br />
          Between Global Innovation
          <br />
          and Local Performance
        </h2>

        <p className="text-muted text-xl leading-[32.5px] max-w-181.5 mb-12">
          Our network bridges the gap between major chemical manufacturing hubs in Europe, Americas, and Asia, and the front-line industrial
          operations across Africa.
        </p>

        <div className="grid grid-cols-3 gap-24 items-center justify-center">
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
