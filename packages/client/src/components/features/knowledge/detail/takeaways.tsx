import React from 'react';
import type { ArticleDetail } from '../../../../lib/entities';

type ArticleTakeawaysProps = Pick<ArticleDetail, 'takeaways' | 'takeawaysTitle'>;

const ArticleTakeaways: React.FC<ArticleTakeawaysProps> = ({ takeaways, takeawaysTitle = 'Technical Summary & Key Takeaways' }) => {
  return (
    <section className="bg-[#f0f4f8] py-12 px-5 md:py-20 md:px-30 text-left">
      <div className="mx-auto">
        <h2 className="font-bold text-foreground text-[24px] leading-9 md:text-4xl md:leading-[1.2] text-center mb-8 md:mb-16">{takeawaysTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {takeaways.map(({ Icon, title, body }) => (
            <div key={title} className="relative bg-white border border-border shadow-sm p-6 md:p-8 flex flex-col pb-8 md:pb-10">
              <Icon size={20} className="text-secondary mb-3 md:mb-4" />
              <h4 className="font-bold text-foreground text-[16px] md:text-[17px] leading-[1.3] mb-2 md:mb-3">{title}</h4>
              <p className="text-muted-foreground text-[13px] md:text-sm leading-[1.65]">{body}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-secondary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleTakeaways;
