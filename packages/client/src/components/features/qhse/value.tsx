import React from 'react';

const values = [
  { title: 'Reduced', description: 'Risk Exposure' },
  { title: 'Lower', description: 'LTI Frequency' },
  { title: 'Higher', description: 'Uptime Reliability' },
  { title: 'ISO', description: 'Compliance Guarantee' },
];

const Value: React.FC = () => {
  return (
    <section className="bg-primary">
      {/* Mobile layout — 2x2 grid */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <h2 className="font-bold text-[24px] leading-[30px] text-white capitalize">Value for our clients</h2>

        <div className="grid grid-cols-2 gap-4">
          {values.map((value) => (
            <div key={value.title} className="bg-white/5 p-6 border border-white/10 space-y-1">
              <div className="font-extrabold text-secondary text-[28px] leading-9">{value.title}</div>
              <div className="font-medium text-white text-[14px] leading-6">{value.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block py-20 px-30">
        <div className="text-3xl font-bold text-primary-foreground capitalize">Value for our clients</div>

        <div className="mt-12 grid grid-cols-4 gap-x-8">
          {values.map((value) => (
            <div key={value.title} className="bg-background/5 p-8 border border-white/10 space-y-2">
              <div className="font-extrabold text-secondary text-4xl leading-10">{value.title}</div>
              <div className="font-medium text-white text-lg leading-7">{value.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
