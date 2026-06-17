import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Understand',
    description: 'Facility audit and site assessment.',
  },
  {
    id: '02',
    title: 'Assess',
    description: 'Technical gaps and needs analysis.',
  },
  {
    id: '03',
    title: 'Recommend',
    description: 'Custom chemical program design.',
  },
  {
    id: '04',
    title: 'Implement',
    description: 'Deployment and on-site support.',
  },
  {
    id: '05',
    title: 'Monitor',
    description: 'Continuous optimization and reporting.',
  },
];

const SupplyChain: React.FC = () => {
  return (
    <section className="px-20 py-28 bg-accent-bg">
      <h2 className="font-bold text-[40px] text-accent text-center mb-18">The Eunisell Delivery Process</h2>

      <div className="relative">
        <div className="absolute top-8 left-0 right-0 h-px bg-border" />

        <div className="grid grid-cols-5 gap-0">
          {steps.map((step) => (
            <div key={step.id} className="relative pt-0 text-left px-6 first:pl-0 last:pr-0">
              <div className="w-16 h-16 border border-border bg-background flex items-center justify-center mb-5">
                <span className="font-black text-[22px] text-accent">{step.id}</span>
              </div>
              <div className="font-bold text-[17px] text-accent mb-2">{step.title}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;
