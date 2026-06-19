import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
  {
    id: '01',
    title: 'Technical Articles',
    description:
      'Peer-reviewed technical insights and chemical engineering articles from our specialist team, covering oilfield, industrial, and specialty chemical applications.',
  },
  {
    id: '02',
    title: 'Industry Insights',
    description:
      "Market intelligence, sector analysis, and operational best practices for industrial and energy operators across Africa's evolving chemical landscape.",
  },
  {
    id: '03',
    title: 'Product Brochures',
    description:
      'Comprehensive product data sheets, technical specifications, SDS documentation, and application guides for our complete chemical portfolio.',
  },
  {
    id: '04',
    title: 'Technical Bulletins',
    description:
      'Field updates, performance reports, safety advisories, and technical notes from our operations and laboratory teams on emerging chemical challenges.',
  },
];

const Topics: React.FC = () => {
  return (
    <section className="flex w-full min-h-200">
      <div className="w-3xl shrink-0 overflow-hidden">
        <img src="/about/manufacturing.svg" alt="Knowledge Center Topics" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 bg-background flex items-center px-20 py-28">
        <div className="w-full text-left">
          <div className="text-[10px] font-black uppercase text-secondary tracking-[2px] mb-4">Explore by Category</div>
          <h2 className="font-bold text-[40px] text-accent mb-14 max-w-xl leading-tight">Four Core Areas of Chemical Knowledge</h2>

          <div>
            {topics.map((topic) => (
              <div key={topic.id} className="border-t border-border pt-8 pb-6">
                <div className="flex items-start justify-between gap-x-8">
                  <div className="flex items-start gap-x-8 flex-1">
                    <span className="font-black text-[40px] leading-none text-secondary/25 shrink-0 w-12">{topic.id}</span>
                    <div>
                      <div className="font-bold text-[22px] text-accent mb-3">{topic.title}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{topic.description}</p>
                    </div>
                  </div>
                  <Link to="#" className="text-secondary shrink-0 mt-2">
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
