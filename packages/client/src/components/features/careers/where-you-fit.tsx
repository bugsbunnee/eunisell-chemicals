import React from 'react';
import { ArrowRightIcon, FlaskConicalIcon, CogIcon, TestTube2Icon, BriefcaseIcon, type LucideIcon } from 'lucide-react';

const roles: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: FlaskConicalIcon,
    title: 'Chemical Specialists',
    description: 'Development and application of specialty chemicals for industrial use.',
  },
  {
    Icon: CogIcon,
    title: 'Engineers',
    description: 'Field and facility engineering across various energy projects.',
  },
  {
    Icon: TestTube2Icon,
    title: 'Laboratory Pros',
    description: 'Quality control and rigorous testing in our world-class labs.',
  },
  {
    Icon: BriefcaseIcon,
    title: 'Corporate Services',
    description: 'Human Resources, Finance, Legal and Strategic Operations.',
  },
];

const WhereYouFit: React.FC = () => (
  <section>
    {/* Mobile */}
    <div className="md:hidden bg-accent px-6 py-16 flex flex-col gap-8 text-left">
      <h2 className="font-bold text-white text-[28px] leading-10.5">Where Do You Fit?</h2>
      <div className="flex flex-col gap-4">
        {roles.map(({ Icon, title, description }) => (
          <div key={title} className="bg-white/5 rounded-[4px] p-6 flex flex-col gap-4">
            <Icon size={20} className="text-secondary" />
            <h4 className="font-bold text-white text-[18px] leading-6.75">{title}</h4>
            <p className="text-[#afb1b3] text-[14px] leading-5.25">{description}</p>
            <a href="#open-positions" className="flex items-center gap-2 text-secondary text-[14px] font-semibold">
              Explore Roles <ArrowRightIcon size={12} />
            </a>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden md:block bg-accent py-24 px-30 text-left">
      <div className="max-w-[1776px]">
        <h2 className="font-bold text-white text-[40px] leading-15 mb-12">Where Do You Fit?</h2>
        <div className="grid grid-cols-4 gap-6">
          {roles.map(({ Icon, title, description }) => (
            <div key={title} className="bg-white/5 rounded-[4px] p-8 flex flex-col gap-0">
              <Icon size={24} className="text-secondary mb-4" />
              <h4 className="font-bold text-white text-[20px] leading-7.5 mb-4">{title}</h4>
              <p className="text-[#afb1b3] text-sm leading-5.25 mb-0 flex-1">{description}</p>
              <a href="#open-positions" className="flex items-center gap-2 mt-6 text-secondary font-semibold text-sm hover:text-secondary/80 transition-colors">
                Explore Roles <ArrowRightIcon size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhereYouFit;
