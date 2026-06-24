import { DiamondIcon, HexagonIcon } from 'lucide-react';
import type React from 'react';

const workflows = [
  {
    title: 'Audit & Sample',
    description: 'Initial field audit and representative sampling.',
    caption: 'STEP 01',
    Icon: HexagonIcon,
  },
  {
    title: 'Lab Screening',
    description: 'Comprehensive screening to find the best formulation.',
    caption: 'STEP 02',
    Icon: HexagonIcon,
  },
  {
    title: 'Recommendation',
    description: 'Detailed technical report and dosing strategy.',
    caption: 'STEP 03',
    Icon: HexagonIcon,
  },
  {
    title: 'Trial Setup',
    description: 'Controlled on-site field trials and validation.',
    caption: 'STEP 04',
    Icon: HexagonIcon,
  },
  {
    title: 'Execution',
    description: 'Full-scale chemical program deployment.',
    caption: 'STEP 05',
    Icon: HexagonIcon,
  },
  {
    title: 'Monitoring',
    description: 'Ongoing KPIs tracking and service reports.',
    caption: 'STEP 06',
    Icon: HexagonIcon,
  },
];

const TechnicalWorkflow: React.FC = () => {
  return (
    <section className="bg-accent px-6 py-16 md:px-30 md:py-24 text-center">
      <div className="text-[24px] md:text-3xl leading-8 md:leading-9 font-bold text-primary-foreground">Our Technical Workflow</div>
      <div className="text-border text-sm md:text-base leading-5 md:leading-6 font-normal mt-2 md:mt-4 opacity-80">
        A systematic approach to <span className="md:hidden">performance.</span>
        <span className="hidden md:inline">chemical performance management.</span>
      </div>

      {/* Desktop: 6-col horizontal row */}
      <div className="hidden md:grid mt-20 grid-cols-6">
        {workflows.map((workflow) => (
          <div key={workflow.title}>
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
              <workflow.Icon />
            </div>
            <div className="w-full h-0.5 bg-white/20 my-3" />
            <div className="uppercase text-xs text-secondary leading-4 font-bold">{workflow.caption}</div>
            <div className="my-2 text-white font-bold text-sm leading-5">{workflow.title}</div>
            <div className="text-border text-[11px] leading-[16.5px]">{workflow.description}</div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline stepper */}
      <div className="md:hidden mt-12 relative flex flex-col gap-10 items-start text-left">
        {/* Vertical connecting line, centered on the 48px circles (left-[24px]) */}
        <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-white/20" />

        {workflows.map((workflow) => (
          <div key={workflow.title} className="relative flex items-center gap-6 w-full">
            {/* Circle icon */}
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0 shadow-[0_0_7.5px_rgba(0,131,206,0.5)] z-10">
              <DiamondIcon size={16} className="text-white" />
            </div>

            {/* Step content */}
            <div className="flex flex-col">
              <div className="text-[10px] font-bold text-secondary uppercase leading-[15px]">{workflow.caption}</div>
              <div className="text-[16px] font-bold text-white leading-6">{workflow.title}</div>
              <div className="text-[12px] text-white/60 leading-4 mt-0.5">{workflow.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalWorkflow;
