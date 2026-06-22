import React from 'react';

const values = [
  {
    title: 'Reduced',
    description: 'Risk Exposure',
  },
  {
    title: 'Lower',
    description: 'LTI Frequency',
  },
  {
    title: 'Higher',
    description: 'Uptime Reliability',
  },
  {
    title: 'ISO',
    description: 'Compliance Guarantee',
  },
];

const Value: React.FC = () => {
  return (
    <section className="py-20 px-30 bg-primary">
      <div className="text-3xl font-bold text-primary-foreground capitalize">Value for our clients</div>

      <div className="mt-12 grid grid-cols-4 gap-x-8">
        {values.map((value) => (
          <div key={value.title} className="bg-background/5 p-8 border border-white/10 space-y-2">
            <div className="font-extrabold text-secondary text-4xl leading-10">{value.title}</div>
            <div className="font-medium text-white text-lg leading-7">{value.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Value;
