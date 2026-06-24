import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const items = [
  {
    image: '/industrial-manufacturing/water-treatment.svg',
    title: 'Water Treatment Chemicals',
    body: 'Total water management from boiler systems to effluent treatment.',
  },
  {
    image: '/oilfield-chemicals/oilfield.svg',
    title: 'Oilfield Chemicals',
    body: 'Production chemicals and drilling additives for harsh environments.',
  },
  {
    image: '/technical-services/hero.svg',
    title: 'Technical Services',
    body: 'On-site lab testing, monitoring, and performance auditing services.',
  },
];

const ArticleSolutions: React.FC = () => {
  return (
    <section className="py-12 px-5 md:py-20 md:px-30 text-left">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-3 md:gap-0">
          <div>
            <h2 className="font-bold text-foreground text-[24px] md:text-[32px] leading-[1.2]">Tailored Chemical Solutions</h2>
            <p className="text-muted-foreground text-[15px] md:text-[16px] mt-2">Solutions related to your industry needs.</p>
          </div>
          <button className="font-bold text-secondary text-sm md:text-base tracking-[0.7px] capitalize pb-1 border-b-2 border-b-secondary self-start md:self-auto">
            View All Solutions
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map(({ image, title, body }) => (
            <div key={title} className="flex flex-col">
              <div className="h-[200px] md:h-[240px] overflow-hidden bg-muted/20">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-foreground text-[18px] md:text-[20px] leading-[1.25] mt-4 md:mt-[18px] mb-2">{title}</h4>
              <p className="text-muted-foreground text-sm md:text-[15px] leading-[1.6] flex-1">{body}</p>
              <a href="#" className="inline-flex items-center gap-2 text-secondary font-bold text-sm mt-4 hover:gap-3 transition-all">
                Explore
                <ArrowRightIcon size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSolutions;
