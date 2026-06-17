import React from 'react';

const flows = [
  {
    title: 'Paraffin/Wax Control',
    label: '98% Efficiency',
    weight: 98,
  },
  {
    title: 'Asphaltene Management',
    label: '95% Efficiency',
    weight: 95,
  },
  {
    title: 'Hydrate Inhibition',
    label: '99% Efficiency',
    weight: 99,
  },
];

const FlowAssurance: React.FC = () => {
  return (
    <section className="bg-accent text-left py-16 px-45 grid grid-cols-2 gap-x-16 items-center">
      <div className="relative">
        <img src="/oilfield-chemicals/flow-assurance.svg" alt="Flow Assurance" className="w-160 h-112 object-contain" />
      </div>

      <div>
        <div className="text-primary-foreground font-bold text-4xl">Flow Assurance</div>

        <div className="text-lg text-primary-foreground/70 mt-8">
          Advanced chemistries to mitigate risks associated with solids deposition and viscosity issues in subsea and surface transport lines.
        </div>

        {flows.map((flow) => (
          <div key={flow.title} className="mt-8">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold leading-5 text-primary-foreground">{flow.title}</div>
              <div className="text-sm font-bold leading-5 text-secondary">{flow.label}</div>
            </div>

            <div className="mt-2 bg-primary-foreground/10 w-full h-1">
              <div className="h-1 bg-secondary" style={{ width: flow.weight + '%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlowAssurance;
