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
  <section className="bg-card py-24 px-30">
    <div className="max-w-300 mx-auto flex flex-col gap-20">
      <div className="flex flex-col items-center gap-4">
        <span className="font-black text-secondary text-[15px] uppercase tracking-[3px] leading-4 text-center">Our Process</span>
        <h2 className="font-bold text-accent text-[48px] leading-12 text-center">Solution Delivery Framework</h2>
      </div>

      <div className="relative pt-12">
        <div className="absolute left-0 right-0 top-8 h-px bg-[#e5e7eb]" />

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
