import React from 'react';
import { cn } from '../../../lib/utils';

const steps = [
  {
    id: 1,
    label: 'report',
  },
  {
    id: 2,
    label: 'escalate',
  },
  {
    id: 3,
    label: 'respond',
  },
  {
    id: 4,
    label: 'control',
  },
  {
    id: 5,
    label: 'review',
  },
  {
    id: 6,
    label: 'improve',
  },
];

const EmergencyResponse: React.FC = () => {
  return (
    <section className="py-24 px-30 bg-accent">
      <div className="text-4xl text-primary-foreground font-bold leading-10">Emergency Response & Incident Management</div>
      <div className="text-base text-muted font-normal leading-6 mt-4">A structured protocol for immediate action and long-term resolution.</div>

      <div className="mt-16 grid-cols-6 grid">
        {steps.map((step, index) => (
          <div key={step.id} className="">
            <div
              className={cn({
                'w-16 h-16 text-xl mx-auto flex items-center justify-center font-bold rounded-full': true,
                'bg-secondary text-primary-foreground': index === 0,
                'bg-primary/20 text-primary-foreground': index !== 0,
                'bg-primary-foreground text-accent': index === steps.length - 1,
              })}
            >
              {step.id}
            </div>

            <div
              className={cn({
                'text-sm font-bold uppercase tracking-[1.4px] pt-2 border-t border-secondary/30 mt-4 leading-5': true,
                'text-secondary': [0, steps.length - 1].includes(index),
                'text-white': ![0, steps.length - 1].includes(index),
              })}
            >
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmergencyResponse;
