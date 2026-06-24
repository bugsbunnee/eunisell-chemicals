import React from 'react';
import SectionWithTitle from '../../layout/section-with-title';

const processes = [
  {
    id: '01',
    title: 'Understand',
    description: 'In-depth field surveys and operational requirement analysis.',
  },
  {
    id: '02',
    title: 'Evaluate',
    description: 'Laboratory analysis and chemical performance compatibility testing.',
  },
  {
    id: '03',
    title: 'Develop',
    description: 'Engineering custom chemical programs and logistics planning.',
  },
  {
    id: '04',
    title: 'Support',
    description: 'On-site implementation and field technical deployment.',
  },
  {
    id: '05',
    title: 'Monitor',
    description: 'Continuous optimization through performance reporting.',
  },
];

const Process: React.FC = () => {
  return (
    <SectionWithTitle className="md:px-30 md:py-35" legend="our process" title="Technical Partnership Approach" description="">
      <div className="hidden md:grid grid-cols-5 mt-24">
        {processes.map((process) => (
          <div key={process.id} className="relative">
            <div className="h-px mt-10 w-full bg-border absolute z-10" />

            <div className="flex items-center justify-center z-40 relative">
              <div className="w-20 h-20 bg-background border-2 rounded-full border-secondary shadow-lg font-bold leading-8 text-2xl text-secondary flex items-center justify-center">
                {process.id}
              </div>
            </div>

            <div className="mt-8 font-bold text-accent text-xl">{process.title}</div>
            <div className="text-sm text-muted-foreground mt-4">{process.description}</div>
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-col gap-10 mt-8 relative pl-1">
        <div className="absolute left-5.75 top-6 bottom-6 w-[2px] bg-border" />

        {processes.map((process) => (
          <div key={process.id} className="flex gap-6 items-start relative">
            <div className="w-12 h-12 bg-background border-2 rounded-full border-secondary shadow-sm font-bold text-base text-secondary flex items-center justify-center shrink-0 z-10">
              {process.id}
            </div>
            <div className="pt-2">
              <div className="font-bold text-accent text-[18px] leading-7">{process.title}</div>
              <div className="text-sm text-muted-foreground mt-1 leading-5">{process.description}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWithTitle>
  );
};

export default Process;
