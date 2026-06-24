import React from 'react';
import { ArrowRightIcon, FileTextIcon, BookOpenIcon, BriefcaseIcon, PlayCircleIcon } from 'lucide-react';

const resources = [
  {
    Icon: FileTextIcon,
    title: 'Product Brochures',
    description: 'Technical specifications and product details.',
    accentColor: 'border-secondary',
    iconColor: 'text-secondary',
    link: 'Browse',
  },
  {
    Icon: BookOpenIcon,
    title: 'Technical Bulletins',
    description: 'Operational guidance and safety alerts.',
    accentColor: 'border-[#00558e]',
    iconColor: 'text-[#00558e]',
    link: 'Read',
  },
  {
    Icon: BriefcaseIcon,
    title: 'Case Studies',
    description: 'Real-world applications and results from our partnership projects.',
    accentColor: 'border-secondary',
    iconColor: 'text-secondary',
    link: 'Explore',
  },
  {
    Icon: PlayCircleIcon,
    title: 'Technical Videos',
    description: 'Visual demonstrations of product application and laboratory testing.',
    accentColor: 'border-secondary',
    iconColor: 'text-secondary',
    link: 'Watch',
  },
];

const BlogMoreResources: React.FC = () => {
  return (
    <section className="bg-white px-6 py-16 md:py-20 md:px-30 text-left">
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-accent text-[24px] leading-9 md:text-[32px] md:leading-12">More Resources</h2>
            <div className="w-12 h-1 bg-secondary" />
          </div>

          <a href="#" className="hidden md:flex items-center gap-2 font-bold text-secondary text-[16px] leading-6">
            View All Resources
            <ArrowRightIcon size={10} />
          </a>
        </div>

        <div className="flex flex-col gap-6 md:hidden">
          {resources.slice(0, 2).map(({ Icon, title, description, accentColor, iconColor }) => (
            <div key={title} className={`bg-card ${accentColor} border-l-4 flex items-center gap-6 p-6`}>
              <Icon size={28} className={iconColor} />
              <div className="flex flex-col gap-1 flex-1">
                <h4 className="font-bold text-accent text-[16px] leading-6">{title}</h4>
                <p className="text-[#777] text-[13px] leading-[19.5px]">{description}</p>
              </div>
              <ArrowRightIcon size={16} className="text-muted shrink-0" />
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-4 gap-6">
          {resources.map(({ Icon, title, description, iconColor, link }) => (
            <div key={title} className="bg-white border border-[#e8e8e8] shadow-[0px_2px_2px_rgba(0,0,0,0.05)] flex flex-col gap-5 p-8">
              <Icon size={24} className={iconColor} />
              <h4 className="font-bold text-accent text-[18px] leading-7">{title}</h4>
              <p className="text-[#777] text-sm leading-5.25 flex-1">{description}</p>
              <a href="#" className="flex items-center gap-2 font-bold text-secondary text-[13px] uppercase tracking-[0.65px]">
                {link}
                <ArrowRightIcon size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogMoreResources;
