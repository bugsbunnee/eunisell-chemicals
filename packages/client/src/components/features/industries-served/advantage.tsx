import React from 'react';

const advantages = [
  { title: '25+', label: 'years experience' },
  { title: 'ISO', label: 'certified' },
  { title: '10k+', label: 'storage capacity' },
  { title: 'LIMS', label: 'lab managament' },
  { title: '70%', label: 'local workforce' },
  { title: '24/7', label: 'operations' },
  { title: 'Global', label: 'supply partners' },
];

const Advantage: React.FC = () => {
  return (
    <section>
      {/* Mobile layout — 2x grid */}
      <div className="md:hidden px-6 py-16 bg-background">
        <h2 className="font-bold text-[28px] leading-[35px] text-accent mb-10">The Eunisell Advantage</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {advantages.map((adv) => (
            <div key={adv.title} className="text-left">
              <div className="font-extrabold text-[28px] leading-[42px] text-secondary">{adv.title}</div>
              <div className="text-[11px] leading-4 text-accent font-bold uppercase mt-1">{adv.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout — 7-column horizontal */}
      <div className="hidden md:block p-30">
        <div className="text-[40px] leading-15 font-bold text-accent">The Eunisell Advantage</div>
        <div className="mt-16 grid grid-cols-7 divide-x divide-border">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="text-center">
              <div className="text-[32px] text-secondary font-extrabold leading-12">{advantage.title}</div>
              <div className="mt-2 text-xs leading-4 text-accent font-bold uppercase">{advantage.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
