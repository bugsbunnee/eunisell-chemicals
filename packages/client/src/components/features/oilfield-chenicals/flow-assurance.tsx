import React from 'react';

const flows = [
  {
    title: 'Wax Management',
    label: '98% Efficiency',
    weight: 98,
  },
  {
    title: 'Hydrate Control',
    label: '95% Efficiency',
    weight: 95,
  },
  {
    title: 'Pipeline Integrity Solutions',
    label: '99% Efficiency',
    weight: 99,
  },
];

const FlowAssurance: React.FC = () => {
  return (
    <section className="bg-accent text-left">
      {/* Mobile */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <h2 className="text-[28px] leading-9 text-white">Flow Assurance</h2>
        <p className="text-[16px] leading-6.5 text-white/70">
          Advanced chemistries to mitigate risks associated with solids deposition and viscosity issues in subsea and surface transport lines.
        </p>
        <div className="flex flex-col gap-6">
          {flows.map((flow) => (
            <div key={flow.title}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[14px] text-white">{flow.title}</span>
                <span className="text-[14px] text-secondary">{flow.label}</span>
              </div>
              <div className="bg-white/10 w-full h-1">
                <div className="h-1 bg-secondary" style={{ width: flow.weight + '%' }} />
              </div>
            </div>
          ))}
        </div>
        <div className="h-56 rounded-[8px] overflow-hidden mt-2">
          <img src="/oilfield-chemicals/flow-assurance.svg" alt="Flow Assurance" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-16 px-45">
        <div className="grid grid-cols-2 gap-x-16 items-center">
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
        </div>
      </div>
    </section>
  );
};

export default FlowAssurance;
