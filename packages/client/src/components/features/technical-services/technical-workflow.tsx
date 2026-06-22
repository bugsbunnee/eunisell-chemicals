import { HexagonIcon } from 'lucide-react';
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
    <section className="bg-accent px-30 py-24 text-center">
      <div className="text-3xl leading-9 font-bold text-primary-foreground">Our Technical Workflow</div>
      <div className="text-border text-base leading-6 font-normal mt-4">A systematic approach to chemical performance management.</div>

      <div className="mt-20 grid grid-cols-6">
        {workflows.map((workflow) => (
          <div key={workflow.title}>
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
              <workflow.Icon />
            </div>

            <div className="w-full h-0.5 bg-white/20 my-3"></div>

            <div className="uppercase text-xs text-secondary leading-4 font-bold">{workflow.caption}</div>
            <div className="my-2 text-white font-bold text-sm leading-5">{workflow.title}</div>
            <div className="text-border font-regular text-[11px] leading-[16.5px]">{workflow.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalWorkflow;
