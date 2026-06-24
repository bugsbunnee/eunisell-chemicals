import React from 'react';

const benefits = [
  {
    id: '01',
    title: 'Improve Process Efficiency',
    description: 'Optimizing chemical consumption and energy usage across all manufacturing stages.',
  },
  {
    id: '02',
    title: 'Maintain Equipment Integrity',
    description: 'Specialized coatings and treatment chemicals to prevent wear, scale, and corrosion.',
  },
  {
    id: '03',
    title: 'Support Product Quality',
    description: 'High-grade solvents and reagents for precision manufacturing and pharmaceutical grade output.',
  },
  {
    id: '04',
    title: 'Achieve Operational Excellence',
    description: 'Expert technical support and inventory management to keep production lines moving.',
  },
];

const Goals: React.FC = () => {
  return (
    <section className="px-6 py-16 md:p-30 bg-accent">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="p-6 md:p-8 bg-white/5 border border-white/10 text-left">
            <div className="font-light text-[30px] md:text-5xl text-secondary/40 leading-9 md:leading-12 mb-4 md:mb-6">{benefit.id}</div>
            <div className="font-bold text-[18px] md:text-xl text-primary-foreground mb-2 md:mb-[22.88px]">{benefit.title}</div>
            <p className="text-[12px] md:text-sm text-primary-foreground/60 leading-[19.5px] md:leading-[22.8px]">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goals;
