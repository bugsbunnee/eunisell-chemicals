import React from 'react';
import { FileTextIcon, TrendingUpIcon, BellRingIcon } from 'lucide-react';

const categories = [
  {
    Icon: FileTextIcon,
    title: 'Technical Articles',
    description: 'In-depth white papers and analysis of chemical performance across industries.',
    borderColor: 'border-secondary',
    iconColor: 'text-secondary',
  },
  {
    Icon: TrendingUpIcon,
    title: 'Industry Insights',
    description: 'Market trends and regulatory updates affecting energy and manufacturing.',
    borderColor: 'border-[#00558e]',
    iconColor: 'text-[#00558e]',
  },
  {
    Icon: BellRingIcon,
    title: 'Company Updates',
    description: "News regarding Eunisell's innovations, facility upgrades, and partnerships.",
    borderColor: 'border-[#afb1b3]',
    iconColor: 'text-[#afb1b3]',
  },
];

const BlogCategories: React.FC = () => {
  return (
    <section className="bg-card p-30 text-left">
      <div className="grid grid-cols-[1fr_2fr] gap-18 items-start">
        <div className="flex flex-col gap-6">
          <div className="w-6 h-6 rounded-full border border-accent/25 shrink-0" />
          <h2 className="font-bold text-accent text-[40px] leading-12.5">Technical Perspectives for Better Operational Decisions</h2>
          <p className="text-[#777] text-[18px] leading-7.25">
            Our editorial mission is to bridge the gap between complex chemical engineering and practical field application, providing actionable
            insights for the West African industrial sector.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {categories.map(({ Icon, title, description, borderColor, iconColor }) => (
            <div key={title} className={`bg-white ${borderColor} border-b-4 shadow-[0px_2px_2px_rgba(0,0,0,0.05)] flex flex-col gap-4 p-8`}>
              <div className="bg-[#f0f7ff] w-12 h-12 flex items-center justify-center shrink-0">
                <Icon size={20} className={iconColor} />
              </div>
              <h3 className="font-bold text-accent text-[20px] leading-[30px]">{title}</h3>
              <p className="text-[#777] text-[14px] leading-[21px]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
