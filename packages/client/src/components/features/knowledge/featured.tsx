import React from 'react';
import { ArrowRightIcon, FileTextIcon, TrendingUpIcon, BookOpenIcon, ListOrderedIcon, MicroscopeIcon } from 'lucide-react';

const categories = [
  {
    Icon: FileTextIcon,
    title: 'Technical Articles',
    description: 'In-depth analysis of chemical applications and performance data.',
  },
  {
    Icon: TrendingUpIcon,
    title: 'Industry Insights',
    description: 'Market trends, regulatory updates, and strategic outlooks.',
  },
  {
    Icon: BookOpenIcon,
    title: 'Product Brochures',
    description: 'Detailed specifications for our entire chemical portfolio.',
  },
  {
    Icon: ListOrderedIcon,
    title: 'Technical Bulletins',
    description: 'Urgent updates and critical product usage guidelines.',
  },
];

const Featured: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-24 md:px-30 text-left">
      <div className="max-w-[1560px] mx-auto">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-18 md:items-start">
          {/* Left — heading, body, research card */}
          <div className="flex flex-col gap-0">
            <h2 className="font-bold text-[24px] md:text-[44px] text-accent leading-8 md:leading-[1.2] md:tracking-tight">
              Insights and Technical Resources
            </h2>

            <p className="text-[#475569] text-sm md:text-lg leading-[22.75px] md:leading-relaxed mt-4 md:mt-8">
              Eunisell bridges the gap between chemical innovation and operational reality for African industrial contexts.
            </p>

            <div className="hidden md:flex mt-8 bg-sidebar border border-[#f1f5f9] shadow-sm rounded-sm p-8 flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <MicroscopeIcon size={16} className="text-secondary" />
                </div>
                <h4 className="font-bold text-accent text-base">Research-Driven Content</h4>
              </div>
              <p className="text-[#64748b] text-base leading-relaxed">
                Every resource is vetted by our technical committee to ensure accuracy and practical relevance for African industrial contexts.
              </p>
            </div>
          </div>

          {/* Right — 2×2 category cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-0">
            {categories.map(({ Icon, title, description }) => (
              <div key={title} className="border border-border p-6 md:p-8 flex flex-col gap-2">
                <Icon size={24} className="text-secondary" />
                <h3 className="font-bold text-accent text-[18px] md:text-xl leading-7 mt-1">{title}</h3>
                <p className="text-[#64748b] text-[12px] md:text-sm leading-4 md:leading-5 pt-2 md:pt-3 flex-1">{description}</p>
                <div className="flex items-center gap-2 pt-4 md:pt-6">
                  <span className="font-semibold text-secondary text-[12px] md:text-sm tracking-wide">Explore</span>
                  <ArrowRightIcon size={12} className="text-secondary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
