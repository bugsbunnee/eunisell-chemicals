import React from 'react';

const steps = [
  { num: '01', title: 'Understand', description: 'Facility audit and site assessment.' },
  { num: '02', title: 'Assess', description: 'Technical gaps and needs analysis.' },
  { num: '03', title: 'Recommend', description: 'Custom chemical program design.', active: true },
  { num: '04', title: 'Implement', description: 'Deployment and on-site support.' },
  { num: '05', title: 'Monitor', description: 'Continuous optimization and reporting.' },
];

const DeliveryProcess: React.FC = () => (
  <section className="bg-white py-32 px-30">
    <div className="flex flex-col gap-24">
      <h2 className="font-bold text-accent text-[36px] leading-10 text-center">The Eunisell Delivery Process</h2>

      <div className="relative flex items-start justify-between">
        <div className="absolute left-0 right-0 top-8 -translate-y-1/2 h-0.5 bg-[#e8e8e8]" />
        {steps.map(({ num, title, description, active }) => (
          <div key={num} className="relative flex flex-col items-center gap-2 px-6 bg-white">
            <div
              className={`w-16 h-16 rounded-full border-4 flex items-center justify-center z-10 shrink-0 ${
                active ? 'bg-secondary border-secondary' : 'bg-white border-[#e8e8e8]'
              }`}
            >
              <span className={`font-bold text-[20px] leading-7 ${active ? 'text-white' : 'text-accent'}`}>{num}</span>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 max-w-[120px] text-center">
              <h5 className={`font-bold text-[16px] leading-6 uppercase tracking-[0.8px] ${active ? 'text-secondary' : 'text-accent'}`}>{title}</h5>
              <p className="text-[#777] text-[12px] leading-4">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliveryProcess;
