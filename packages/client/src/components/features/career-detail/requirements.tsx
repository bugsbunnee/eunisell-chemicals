import React from 'react';
import { GraduationCapIcon, BriefcaseIcon, WrenchIcon, AwardIcon, type LucideIcon } from 'lucide-react';

const requirements: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: GraduationCapIcon,
    title: 'Education',
    description:
      'Minimum of a B.Sc/B.Eng in Chemical Engineering, Industrial Chemistry, or a related technical discipline from a reputable institution.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Experience',
    description: '5-7 years of technical sales experience in the oil & gas service sector, specifically with production chemicals.',
  },
  {
    icon: WrenchIcon,
    title: 'Skills',
    description: 'Proficient in chemical dosage calculations, troubleshooting field issues, and high-level technical report writing.',
  },
  {
    icon: AwardIcon,
    title: 'Advantage',
    description: 'Existing network within IOCs and marginal field operators. Membership of SPE or NSE is highly desirable.',
  },
];

const Requirements: React.FC = () => (
  <section className="bg-card py-24 px-30">
    <div className="max-w-[1680px] mx-auto flex flex-col gap-12">
      <h2 className="font-bold text-accent text-[30px] leading-9 text-center">Requirements &amp; Expertise</h2>

      <div className="grid grid-cols-4 gap-8 text-left">
        {requirements.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-white border border-[#e8e8e8] rounded-[8px] p-8 flex flex-col gap-4">
            <Icon size={30} className="text-secondary" />
            <h4 className="font-bold text-accent text-[18px] leading-7">{title}</h4>
            <p className="text-muted-foreground text-[14px] leading-5.5">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Requirements;
