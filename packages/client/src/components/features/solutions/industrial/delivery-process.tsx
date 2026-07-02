import React from 'react';
import { cn } from '../../../../lib/utils';
import { Reveal, Stagger, StaggerItem } from '../../../common/animate';

const steps = [
  { num: '01', title: 'Understand', description: 'Facility audit and site assessment.' },
  { num: '02', title: 'Assess', description: 'Technical gaps and needs analysis.' },
  { num: '03', title: 'Recommend', description: 'Custom chemical program design.', active: true },
  { num: '04', title: 'Implement', description: 'Deployment and on-site support.' },
  { num: '05', title: 'Monitor', description: 'Continuous optimization and reporting.' },
];

const mobileSteps = [
  { num: '01', title: 'Understand', description: 'Facility audit and site assessment.' },
  { num: '02', title: 'Assess', description: 'Technical gaps and needs analysis.' },
  { num: '03', title: 'Recommend', description: 'Custom chemical program design.', active: true },
  { num: '04', title: 'Implement', description: 'Deployment and on-site support.' },
  { num: '05', title: 'Optimize', description: 'Continuous monitoring and refinement.' },
];

const DeliveryProcess: React.FC = () => (
  <section className="bg-white py-20 px-6 md:py-32 md:px-30">
    {/* Mobile */}
    <div className="md:hidden flex flex-col gap-16">
      <Reveal>
        <h2 className="font-bold text-accent text-[24px] leading-8 text-center">The Delivery Process</h2>
      </Reveal>

      <Stagger className="relative flex flex-col gap-10">
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-input" />
        {mobileSteps.map(({ num, title, description, active }) => (
          <StaggerItem key={num} direction="left" className="relative flex items-start gap-6 text-left">
            <div
              className={cn('size-12 rounded-full border-2 flex items-center justify-center shrink-0 z-10', {
                'bg-secondary border-secondary shadow-[0px_10px_15px_-3px_rgba(0,131,206,0.2),0px_4px_6px_-4px_rgba(0,131,206,0.2)]': active,
                'bg-white border-input': !active,
              })}
            >
              <span className={cn('font-bold text-[16px] leading-6', active ? 'text-white' : 'text-accent')}>{num}</span>
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <h6 className={cn('font-bold text-xs leading-4 uppercase tracking-[0.6px]', active ? 'text-secondary' : 'text-accent')}>{title}</h6>
              <p className="text-[#777] text-sm leading-5">{description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>

    {/* Desktop */}
    <div className="hidden md:flex flex-col gap-24">
      <Reveal>
        <h2 className="font-bold text-accent text-[36px] leading-10 text-center">The Eunisell Delivery Process</h2>
      </Reveal>

      <Stagger stagger={0.15} className="relative flex items-start justify-between">
        <div className="absolute left-0 right-0 top-8 -translate-y-1/2 h-0.5 bg-[#e8e8e8]" />
        {steps.map(({ num, title, description, active }) => (
          <StaggerItem key={num} className="relative flex flex-col items-center gap-2 px-6 bg-white">
            <div
              className={`w-16 h-16 rounded-full border-4 flex items-center justify-center z-10 shrink-0 ${active ? 'bg-secondary border-secondary' : 'bg-white border-[#e8e8e8]'}`}
            >
              <span className={`font-bold text-[20px] leading-7 ${active ? 'text-white' : 'text-accent'}`}>{num}</span>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 max-w-[120px] text-center">
              <h5 className={`font-bold text-[16px] leading-6 uppercase tracking-[0.8px] ${active ? 'text-secondary' : 'text-accent'}`}>{title}</h5>
              <p className="text-[#777] text-[12px] leading-4">{description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default DeliveryProcess;
