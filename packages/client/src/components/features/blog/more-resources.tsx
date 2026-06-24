import React from 'react';
import { ArrowRightIcon, FileTextIcon, BookOpenIcon, BriefcaseIcon, PlayCircleIcon } from 'lucide-react';

const resources = [
  {
    Icon: FileTextIcon,
    title: 'Product Brochures',
    description: 'Download comprehensive specs for our entire chemical portfolio.',
    link: 'Browse',
  },
  {
    Icon: BookOpenIcon,
    title: 'Technical Bulletins',
    description: 'Immediate operational guidance and safety alerts for field engineers.',
    link: 'Read',
  },
  {
    Icon: BriefcaseIcon,
    title: 'Case Studies',
    description: 'Real-world applications and results from our partnership projects.',
    link: 'Explore',
  },
  {
    Icon: PlayCircleIcon,
    title: 'Technical Videos',
    description: 'Visual demonstrations of product application and laboratory testing.',
    link: 'Watch',
  },
];

const BlogMoreResources: React.FC = () => {
  return (
    <section className="bg-card py-20 px-30 text-left">
      <div className="flex flex-col gap-12">
        <div className="flex items-end justify-between">
          <h2 className="font-bold text-accent text-[32px] leading-12">More Knowledge Resources</h2>
          <a href="#" className="flex items-center gap-2 font-bold text-secondary text-[16px] leading-6">
            View All Resources
            <ArrowRightIcon size={10} />
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {resources.map(({ Icon, title, description, link }) => (
            <div key={title} className="bg-white border border-[#e8e8e8] shadow-[0px_2px_2px_rgba(0,0,0,0.05)] flex flex-col gap-5 p-8">
              <Icon size={24} className="text-secondary" />
              <h4 className="font-bold text-accent text-[18px] leading-7">{title}</h4>
              <p className="text-[#777] text-[14px] leading-5.25 flex-1">{description}</p>
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
