import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const roles = [
  {
    icon: 'https://www.figma.com/api/mcp/asset/eedaf225-4f6f-4a7d-baba-de002cbd8239',
    title: 'Chemical Specialists',
    description: 'Development and application of specialty chemicals for industrial use.',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/42dd02a0-c184-4a03-90fe-03549f38e4ca',
    title: 'Engineers',
    description: 'Field and facility engineering across various energy projects.',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/dca1f985-665c-4905-a834-c8b99ff2473a',
    title: 'Laboratory Pros',
    description: 'Quality control and rigorous testing in our world-class labs.',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/b472e6a6-a1b4-4b7a-93a0-31ab20241871',
    title: 'Corporate Services',
    description: 'Human Resources, Finance, Legal and Strategic Operations.',
  },
];

const WhereYouFit: React.FC = () => (
  <section className="bg-accent py-24 px-30 text-left">
    <div className="max-w-[1776px]">
      <h2 className="font-bold text-white text-[40px] leading-[60px] mb-12">Where Do You Fit?</h2>

      <div className="grid grid-cols-4 gap-6">
        {roles.map((role) => (
          <div key={role.title} className="bg-white/5 rounded-[4px] p-8 flex flex-col gap-0">
            <img src={role.icon} alt={role.title} className="w-[30px] h-6 object-contain mb-4" />
            <h4 className="font-bold text-white text-[20px] leading-[30px] mb-4">{role.title}</h4>
            <p className="text-[#afb1b3] text-[14px] leading-[21px] mb-0 flex-1">{role.description}</p>
            <a
              href="#open-positions"
              className="flex items-center gap-2 mt-6 text-secondary font-semibold text-[14px] hover:text-secondary/80 transition-colors"
            >
              Explore Roles
              <ArrowRightIcon size={12} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhereYouFit;
