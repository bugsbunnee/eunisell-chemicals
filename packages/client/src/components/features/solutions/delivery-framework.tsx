import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Deep dive into operational parameters and problem statements.',
  },
  {
    number: '02',
    title: 'Assess',
    description: 'Field analysis and lab-based evaluation of current conditions.',
  },
  {
    number: '03',
    title: 'Recommend',
    description: 'Development of tailored chemical and technical strategies.',
  },
  {
    number: '04',
    title: 'Implement',
    description: 'Controlled deployment with active technical oversight.',
  },
  {
    number: '05',
    title: 'Monitor',
    description: 'Ongoing performance verification and iterative optimization.',
  },
];

const DeliveryFramework: React.FC = () => (
  <section className="bg-card py-16 px-6 md:py-24 md:px-30">
    <div className="max-w-300 mx-auto flex flex-col gap-12 md:gap-20">
      <div className="flex flex-col items-center gap-4 text-left mg: text-center">
        <span className="font-black text-secondary text-[15px] uppercase tracking-[3px] leading-4 text-center">Our Process</span>
        <h2 className="font-bold text-accent text-[32px] md:text-[48px] leading-10 md:leading-12 text-center">Solution Delivery Framework</h2>
      </div>

      {/* Mobile: vertical list with connecting line on left */}
      <div className="flex flex-col gap-0 relative md:hidden text-left">
        <div className="absolute left-8 top-8 bottom-8 w-px bg-border" />
        {steps.map(({ number, title, description }) => (
          <div key={number} className="flex items-start gap-6 pb-10 last:pb-0">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-secondary flex items-center justify-center shrink-0 relative z-10">
              <span className="font-bold text-secondary text-[16px] leading-6">{number}</span>
            </div>
            <div className="pt-4 flex flex-col gap-1">
              <h6 className="font-bold text-accent text-[16px] leading-6">{title}</h6>
              <p className="text-muted-foreground text-[13px] leading-5">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="relative pt-12 hidden md:block">
        <div className="absolute left-0 right-0 top-8 h-px bg-border" />
        <div className="grid grid-cols-5 gap-8 relative">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-secondary flex items-center justify-center shrink-0 relative z-10">
                <span className="font-bold text-secondary text-[16px] leading-6">{number}</span>
              </div>
              <div className="pt-4">
                <h6 className="font-bold text-accent text-[16px] leading-6 text-center">{title}</h6>
              </div>
              <p className="text-muted-foreground text-[12px] leading-4 text-center px-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DeliveryFramework;
