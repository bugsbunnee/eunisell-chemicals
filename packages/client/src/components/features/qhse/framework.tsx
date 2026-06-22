import { OctagonIcon, PentagonIcon, TriangleIcon } from 'lucide-react';
import React from 'react';

const frameworks = [
  {
    Icon: OctagonIcon,
    title: 'Risk-Based Safety',
    description: 'Utilizing quantitative risk assessments (QRA) to identify potential hazards before operations begin.',
  },
  {
    Icon: OctagonIcon,
    title: 'Environmental Impact',
    description: 'Rigorous monitoring of emissions, effluents, and waste disposal to exceed regulatory requirements.',
  },
  {
    Icon: TriangleIcon,
    title: 'Emergency Response',
    description: '24/7 readiness protocols and specialized response teams for chemical containment and incident management.',
  },
  {
    Icon: PentagonIcon,
    title: 'Employee Training',
    description: 'Continuous technical training and certification programs to ensure safety competency at all levels.',
  },
];

const Framework: React.FC = () => {
  return (
    <section className="py-24 px-30 bg-background text-center">
      <div className="space-y-4">
        <div className="font-bold text-4xl text-accent leading-10">The Eunisell Management Framework</div>
        <div className="text-card-foreground text-base font-normal">Four foundational pillars that drive our operational excellence.</div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 text-left">
        {frameworks.map((framework) => (
          <div key={framework.title} className="border border-border p-8 rounded-[4px] flex items-start gap-x-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-[2px] flex items-center justify-center">
              <framework.Icon size={32} />
            </div>
            <div className="space-y-2 flex-1">
              <div className="text-xl text-accent leading-7 font-bold">{framework.title}</div>
              <div className="flex-1 text-base leading-6.5 text-card-foreground font-normal">{framework.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Framework;
