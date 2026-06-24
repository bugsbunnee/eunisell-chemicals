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
    <section className="px-6 py-16 md:px-30 md:py-28 bg-accent">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-30 md:items-center">
        <div className="text-left order-2 md:order-1 mt-8 md:mt-0">
          <h2 className="font-bold text-[24px] md:text-4xl leading-[30px] md:leading-10 text-white">Technical Excellence as a Standard</h2>

          <p className="mt-6 md:mt-8 text-white/60 text-sm md:text-lg leading-[22.75px] md:leading-[29.3px] hidden md:block">
            Beyond chemical supply, we provide on-site technical audits, laboratory analysis, and customized formulation services to ensure optimal
            integration of our solutions into your specific processes.
          </p>

          <div className="mt-6 md:mt-12 grid grid-cols-2 gap-4 md:gap-x-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="border border-white/10 bg-white/5 p-4 md:p-6 text-left space-y-2">
                <div className="font-bold text-sm md:text-base leading-5 md:leading-6 text-secondary">{cap.title}</div>
                <p className="text-white/60 text-[10px] md:text-xs leading-[15px] md:leading-4">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          {/* Mobile: wrapped in white card */}
          <div className="md:hidden bg-white p-4 rounded-[2px]">
            <div className="h-[300px] overflow-hidden">
              <img src="/industrial-manufacturing/technical-excellence.svg" alt="Technical Excellence" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Desktop: full image */}
          <div className="hidden md:block relative h-116 rounded-[2px] overflow-hidden">
            <img src="/industrial-manufacturing/technical-excellence.svg" alt="Technical Excellence" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExcellence;
