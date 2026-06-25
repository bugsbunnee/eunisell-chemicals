import React from 'react';
import { cn } from '../../../lib/utils';

const steps = [
  { id: 1, label: 'report' },
  { id: 2, label: 'escalate' },
  { id: 3, label: 'respond' },
  { id: 4, label: 'control' },
  { id: 5, label: 'review' },
  { id: 6, label: 'improve' },
];

const EmergencyResponse: React.FC = () => {
  return (
    <section className="bg-accent">
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-bold text-[30px] leading-9 text-white">Emergency Protocol</h2>
          <p className="text-[14px] leading-5 text-muted">Structured protocol for immediate action.</p>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-white/5 border border-white/10 rounded-[4px] p-5 flex items-center gap-4">
              <div
                className={cn({
                  'size-10 rounded-[4px] flex items-center justify-center font-bold text-base text-white shrink-0': true,
                  'bg-secondary': index === 0,
                  'bg-[#003e61]': index !== 0,
                })}
              >
                {step.id}
              </div>
              <div className="flex flex-col gap-0.5">
                <div
                  className={cn({
                    'text-[10px] font-bold uppercase tracking-[1px] leading-[15px]': true,
                    'text-secondary': index === 0,
                    'text-white/60': index !== 0,
                  })}
                >
                  Step {step.id}
                </div>
                <div className="text-[16px] leading-6 text-white capitalize">{step.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block py-24 px-30">
        <div className="flex flex-col items-center gap-4">
          <div className="text-4xl text-primary-foreground font-bold leading-10 text-center">Emergency Response & Incident Management</div>
          <div className="text-base text-muted font-normal leading-6 text-center">
            A structured protocol for immediate action and long-term resolution.
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-secondary/30" />

          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative z-10">
              <div className="mb-4">
                <div
                  className={cn({
                    'w-16 h-16 text-xl flex items-center justify-center font-bold rounded-full border-4 border-accent': true,
                    'bg-secondary text-white': index === 0,
                    'bg-[#003e61] text-white': index !== 0 && index !== steps.length - 1,
                    'bg-white text-accent': index === steps.length - 1,
                  })}
                >
                  {step.id}
                </div>
              </div>

              <div
                className={cn({
                  'text-sm font-bold uppercase tracking-[1.4px] leading-5': true,
                  'text-secondary': [0, steps.length - 1].includes(index),
                  'text-white': ![0, steps.length - 1].includes(index),
                })}
              >
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyResponse;
