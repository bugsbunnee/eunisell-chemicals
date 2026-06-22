import React from 'react';

const capabilities = [
  {
    title: 'On-Site Audits',
    description: 'Comprehensive process assessment and efficiency mapping.',
  },
  {
    title: 'Custom Blending',
    description: 'Bespoke formulations developed in our ISO-certified labs.',
  },
];

const TechnicalExcellence: React.FC = () => {
  return (
    <section className="px-30 py-28 bg-accent grid grid-cols-2 gap-x-30 items-center">
      <div className="text-left">
        <h2 className="font-bold text-4xl leading-10 text-white">Technical Excellence as a Standard</h2>

        <p className="mt-8 text-primary-foreground/60 text-lg leading-[29.3px]">
          Beyond chemical supply, we provide on-site technical audits, laboratory analysis, and customized formulation services to ensure optimal
          integration of our solutions into your specific processes.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-8">
          {capabilities.map((cap) => (
            <div key={cap.title} className="border border-white/10 bg-white/5 p-6 text-left space-y-2">
              <div className="font-bold text-base leading-6 text-secondary">{cap.title}</div>
              <p className="text-white/60 text-xs leading-4 font-normal">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-116 rounded-[2px] overflow-hidden">
        <img src="/industrial-manufacturing/technical-excellence.svg" alt="Technical Excellence" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default TechnicalExcellence;
