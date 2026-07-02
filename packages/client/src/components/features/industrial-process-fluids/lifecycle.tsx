import React from 'react';
import { cn } from '../../../lib/utils';
import { Reveal, Stagger, StaggerItem } from '../../common/animate';

const steps = [
  {
    id: '01',
    title: 'Audit',
    description: 'Comprehensive system assessment.',
  },
  {
    id: '02',
    title: 'Formulation',
    description: 'Precision fluid selection.',
  },
  {
    id: '03',
    title: 'Distribution',
    description: 'Safe, timely delivery.',
  },
  {
    id: '04',
    title: 'Monitoring',
    description: 'Field analysis and testing.',
  },
  {
    id: '05',
    title: 'Optimization',
    description: 'Ongoing system refinement.',
  },
];

const phases = [
  {
    title: '01. Site Assessment',
    description: 'Detailed audit of existing systems and fluid requirements.',
  },
  {
    title: '02. Fluid Selection',
    description: 'Technical matching of fluid chemistries to operational goals.',
  },
  {
    title: '03. Implementation',
    description: 'Managed transition and initial system flushing protocols.',
  },
  {
    title: '04. Monitoring',
    description: 'Scheduled fluid analysis and performance tracking.',
  },
  {
    title: '05. Optimization',
    description: 'Continuous improvement to reduce total cost of ownership.',
  },
];

const Lifecycle: React.FC = () => {
  return (
    <section className="px-6 py-12 md:px-30 md:py-25 bg-card/50 md:bg-accent border-y border-input md:border-y-0">
      {/* Mobile: A Partnership-Driven Approach */}
      <div className="md:hidden">
        <h2 className="font-bold text-[24px] leading-8 text-accent text-center">A Partnership-Driven Approach</h2>
        <p className="text-sm leading-5 text-[#4a4a4a] text-center mt-2">How we implement fluid solutions.</p>

        <div className="ml-4 mt-10 border-l border-secondary/30 pl-8 flex flex-col gap-8 text-left">
          {phases.map((phase) => (
            <div key={phase.title} className="relative">
              <div className="absolute -left-[41px] top-0 size-[18px] rounded-full bg-secondary border-4 border-white" />
              <div className="font-bold text-sm leading-5 uppercase text-accent">{phase.title}</div>
              <p className="text-xs leading-4 text-[#4a4a4a] mt-1">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Our Supply & Support Lifecycle */}
      <div className="hidden md:block">
        <Reveal>
          <h2 className="font-bold text-3xl leading-9 text-white text-center">Our Supply &amp; Support Lifecycle</h2>
        </Reveal>

        <Stagger stagger={0.15} className="grid grid-cols-5 gap-[27px] mt-20">
          {steps.map((step, index) => (
            <StaggerItem key={step.id} className="flex flex-col items-center gap-6">
              <div
                className={cn('size-12 rounded-full flex items-center justify-center text-base leading-6 text-white font-bold', {
                  'bg-secondary': index === 0,
                  'bg-white/20': index !== 0,
                })}
              >
                {step.id}
              </div>
              <div className="w-full backdrop-blur-[6px] bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <div className="font-bold text-base leading-6 text-white">{step.title}</div>
                <p className="text-xs leading-4 text-white/60 mt-2">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Lifecycle;
