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
    <section className="p-30 bg-accent">
      <div className="grid grid-cols-4 gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="p-8 border border-white/10 text-left">
            <div className="font-light text-secondary/40 text-5xl leading-12 mb-6">{benefit.id}</div>
            <div className="font-bold text-xl text-primary-foreground mb-[22.88px]">{benefit.title}</div>
            <p className="text-primary-foreground/60 text-sm leading-[22.8px] font-normal">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goals;
