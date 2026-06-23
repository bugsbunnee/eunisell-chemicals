import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const items = [
  {
    category: 'Bulletin',
    title: 'The Impact of High-Temp Scale Inhibitors on Boiler Longevity',
    body: 'A detailed look at thermal stability in chemical inhibitors during extreme operations.',
  },
  {
    category: 'Whitepaper',
    title: 'Reducing Carbon Footprint in Industrial Manufacturing',
    body: 'Strategies for chemical procurement that align with global ESG standards.',
  },
  {
    category: 'Case Study',
    title: 'Case Study: 15% Energy Savings in Cooling Towers',
    body: 'How a major manufacturing plant overhauled their water treatment programme.',
  },
];

const ArticleResources: React.FC = () => {
  return (
    <section className="bg-[#f0f4f8] py-20 px-30 text-left">
      <div className="mx-auto">
        <h2 className="font-bold text-foreground text-[32px] leading-[1.2] mb-12">Related Technical Resources</h2>

        <div className="grid grid-cols-3 gap-8">
          {items.map(({ category, title, body }) => (
            <div key={title} className="bg-white border border-border p-6 flex flex-col">
              <p className="text-secondary text-[11px] font-bold uppercase tracking-[1.8px] mb-4">{category}</p>
              <h4 className="font-bold text-foreground text-[19px] leading-[1.35] mb-3">{title}</h4>
              <p className="text-muted-foreground text-[14px] leading-[1.65] flex-1">{body}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-bold text-foreground text-[14px] mt-6 hover:text-secondary transition-colors"
              >
                Read More
                <ArrowRightIcon size={10} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleResources;
