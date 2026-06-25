import { OctagonIcon, PentagonIcon, TriangleIcon } from 'lucide-react';
import React from 'react';

const frameworks = [
  {
    Icon: OctagonIcon,
    title: 'Risk-Based Safety',
    description: 'Utilizing quantitative risk assessments (QRA) to identify potential hazards before operations begin.',
    mobileDescription: 'Quantitative assessments to identify hazards before work starts.',
  },
  {
    Icon: OctagonIcon,
    title: 'Environmental Impact',
    description: 'Rigorous monitoring of emissions, effluents, and waste disposal to exceed regulatory requirements.',
    mobileDescription: 'Monitoring emissions and effluents beyond regulatory rules.',
  },
  {
    Icon: TriangleIcon,
    title: 'Emergency Response',
    description: '24/7 readiness protocols and specialized response teams for chemical containment and incident management.',
    mobileDescription: '24/7 readiness and specialized chemical containment teams.',
  },
  {
    Icon: PentagonIcon,
    title: 'Employee Training',
    description: 'Continuous technical training and certification programs to ensure safety competency at all levels.',
    mobileDescription: 'Continuous training and certification for safety competency.',
  },
];

const Framework: React.FC = () => {
  return (
    <section className="bg-background text-center">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-[24px] leading-[36px] text-accent">Eunisell Framework</h2>
          <p className="text-[14px] leading-[20px] text-card-foreground">Four foundational pillars driving excellence.</p>
        </div>

        <div className="flex flex-col gap-4">
          {frameworks.slice(0, 3).map((fw) => (
            <div key={fw.title} className="border border-border rounded-[4px] p-6 flex items-start gap-4 text-left">
              <div className="w-12 h-12 bg-secondary/10 rounded-[2px] flex items-center justify-center shrink-0">
                <fw.Icon size={24} className="text-secondary" />
              </div>
              <div className="space-y-1">
                <div className="font-bold text-[18px] leading-[28px] text-accent">{fw.title}</div>
                <div className="text-[13px] leading-[19.5px] text-card-foreground">{fw.mobileDescription}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block py-24 px-30">
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
      </div>
    </section>
  );
};

export default Framework;
