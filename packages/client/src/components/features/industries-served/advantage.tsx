import React from 'react';

const advantages = [
  {
    title: '25+',
    label: 'years experience',
  },
  {
    title: 'ISO',
    label: 'certified',
  },
  {
    title: '10k+',
    label: 'storage capacity',
  },
  {
    title: 'LIMS',
    label: 'lab managament',
  },
  {
    title: '70%',
    label: 'local workforce',
  },
  {
    title: '24/7',
    label: 'operations',
  },
  {
    title: 'Global',
    label: 'supply partners',
  },
];

const Advantage: React.FC = () => {
  return (
    <section className="p-30">
      <div className="text-[40px] leading-15 font-bold text-accent">The Eunisell Advantage</div>

      <div className="mt- mt-16 grid grid-cols-7 divide-x divide-border">
        {advantages.map((advantage) => (
          <div key={advantage.title} className="text-center">
            <div className="text-[32px] text-secondary font-extrabold leading-12">{advantage.title}</div>
            <div className="mt-2 text-xs leading-4 text-accent font-bold uppercase">{advantage.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantage;
