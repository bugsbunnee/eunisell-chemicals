import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import type { ArticleDetail } from '../../../../lib/entities';

type ArticleResourcesProps = Pick<ArticleDetail, 'relatedResources'>;

const ArticleResources: React.FC<ArticleResourcesProps> = ({ relatedResources }) => {
  return (
    <section className="bg-[#f0f4f8] py-12 px-5 md:py-20 md:px-30 text-left">
      <div className="mx-auto">
        <h2 className="font-bold text-foreground text-[24px] md:text-[32px] leading-[1.2] mb-6 md:mb-12">Related Resources</h2>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-8">
          {relatedResources.map(({ category, title, body }) => (
            <div key={title} className="bg-white border border-border p-5 md:p-6 flex flex-col">
              <p className="text-secondary text-[10px] md:text-[11px] font-bold uppercase tracking-[1.8px] mb-2 md:mb-4">{category}</p>
              <h4 className="font-bold text-foreground text-[16px] md:text-[19px] leading-[1.35] mb-2 md:mb-3">{title}</h4>
              <p className="text-muted-foreground text-[13px] md:text-sm leading-[1.65] flex-1">{body}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-bold text-foreground text-[13px] md:text-sm mt-5 md:mt-6 hover:text-secondary transition-colors"
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
