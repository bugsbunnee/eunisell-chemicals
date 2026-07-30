import React from 'react';
import { GraduationCapIcon, BriefcaseIcon, WrenchIcon, AwardIcon, type LucideIcon } from 'lucide-react';

interface RequirementsProps {
  requirements: {
    education: string;
    experience: string;
    skills: string;
    advantage: string;
  };
}

const Requirements: React.FC<RequirementsProps> = ({ requirements }) => {
  const cards: { icon: LucideIcon; title: string; description: string }[] = [
    { icon: GraduationCapIcon, title: 'Education', description: requirements.education },
    { icon: BriefcaseIcon, title: 'Experience', description: requirements.experience },
    { icon: WrenchIcon, title: 'Skills', description: requirements.skills },
    { icon: AwardIcon, title: 'Advantage', description: requirements.advantage },
  ];

  return (
    <section className="bg-card py-24 px-30">
      <div className="max-w-[1680px] mx-auto flex flex-col gap-12">
        <h2 className="font-bold text-accent text-[30px] leading-9 text-center">Requirements &amp; Expertise</h2>

        <div className="grid grid-cols-4 gap-8 text-left">
          {cards.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white border border-[#e8e8e8] rounded-[8px] p-8 flex flex-col gap-4">
              <Icon size={30} className="text-secondary" />
              <h4 className="font-bold text-accent text-[18px] leading-7">{title}</h4>
              <p className="text-muted-foreground text-sm leading-5.5">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requirements;
