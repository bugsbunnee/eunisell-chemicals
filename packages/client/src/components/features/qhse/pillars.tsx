import { EarthIcon, FileUserIcon, ListCheckIcon, MessageSquareIcon, SearchSlashIcon, ToolboxIcon } from 'lucide-react';
import React from 'react';

const pillars = [
  {
    Icon: ListCheckIcon,
    title: 'procedural adherence',
    description: '100% compliance with Standard Operating Procedures (SOPs) without exception.',
  },
  {
    Icon: EarthIcon,
    title: 'clear accountability',
    description: 'Defined QHSE roles and responsibilities for every team member on site.',
  },
  {
    Icon: MessageSquareIcon,
    title: 'open communication',
    description: 'Encouraging the reporting of near-misses to foster a learning culture.',
  },
  {
    Icon: ToolboxIcon,
    title: 'technical integrity',
    description: 'Rigorous maintenance programs to ensure equipment is fit for purpose.',
  },
  {
    Icon: FileUserIcon,
    title: 'competence training',
    description: 'Regular skills assessment and safety leadership development.',
  },
  {
    Icon: SearchSlashIcon,
    title: 'performance reviews',
    description: 'Data-driven analysis of safety metrics to drive continuous improvement.',
  },
];

const Pillars: React.FC = () => {
  return (
    <section className="py-24 px-30 bg-background text-center">
      <div className="flex items-center justify-center">
        <div className="space-y-4">
          <div className="text-4xl text-accent font-bold leading-10 capitalize">The 6 Pillars of Operational Discipline</div>
          <div className="mx-auto w-20 h-1 bg-secondary"></div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-16">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="flex text-left items-start gap-x-4">
            <pillar.Icon size={40} className="text-secondary" />

            <div className="space-y-2">
              <div className="text-base capitalize text-accent font-bold leading-6">{pillar.title}</div>
              <p className="text-sm text-card-foreground leading-5">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
