import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const offshoreImg = 'https://www.figma.com/api/mcp/asset/9732b44e-e8d9-43ca-85b1-2cf12a4df1ad';
const avatarImg = 'https://www.figma.com/api/mcp/asset/baa10243-4b00-4492-a2d6-7f36a3d61382';

const BlogFeatured: React.FC = () => {
  return (
    <section className="bg-white px-0 md:py-20 md:px-30 text-left">
      <div className="border-x-0 md:border border-border md:shadow-[0px_16px_32px_0px_rgba(0,0,0,0.1)] flex flex-col md:grid md:grid-cols-2">
        {/* Image — top on mobile, left on desktop */}
        <div className="w-full h-[300px] md:h-auto overflow-hidden shrink-0">
          <img src={offshoreImg} alt="Offshore oil platform at sunset" className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-8 py-8 md:p-16 gap-5">
          <div className="flex gap-3 items-center">
            <div className="bg-secondary/10 px-3 py-1">
              <span className="font-bold text-secondary text-[11px] md:text-[12px] uppercase tracking-[0.6px]">Featured Technical Article</span>
            </div>
          </div>

          <h2 className="font-bold text-accent text-[26px] leading-[32.5px] md:text-[32px] md:leading-10">
            Improving Industrial Performance Through Tailored Chemical Programmes
          </h2>

          <p className="text-[#777] text-[15px] leading-[24px] md:text-[16px] md:leading-6.5">
            Efficiency in industrial processes is often hindered by generic chemical applications. This paper explores how customized chemical
            engineering solutions optimize output and reduce downtime in high-stress environments.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <img src={avatarImg} alt="Dr. Samuel Adeyemi" className="w-10 h-10 md:w-8 md:h-8 rounded-full object-cover" />
              <div className="flex flex-col">
                <span className="font-semibold text-accent text-sm leading-[21px]">Dr. Samuel Adeyemi</span>
                <span className="text-muted text-[12px] uppercase tracking-[0.3px]">8 min read • May 12, 2024</span>
              </div>
            </div>
          </div>

          <a href="#" className="flex items-center gap-3 text-secondary font-bold text-[16px] leading-6 self-start pt-2">
            Read Full Article
            <ArrowRightIcon size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
