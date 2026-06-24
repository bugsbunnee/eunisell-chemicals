import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const offshoreImg = 'https://www.figma.com/api/mcp/asset/9732b44e-e8d9-43ca-85b1-2cf12a4df1ad';
const avatarImg = 'https://www.figma.com/api/mcp/asset/baa10243-4b00-4492-a2d6-7f36a3d61382';

const BlogFeatured: React.FC = () => {
  return (
    <section className="bg-white py-20 px-30 text-left">
      <div className="border border-border shadow-[0px_16px_32px_0px_rgba(0,0,0,0.1)] grid grid-cols-2">
        <div className="flex-1 overflow-hidden ">
          <img src={offshoreImg} alt="Offshore oil platform at sunset" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 flex flex-col justify-center p-16 gap-5">
          <div className="flex gap-3 items-center">
            <div className="bg-secondary/10 px-3 py-1">
              <span className="font-bold text-secondary text-[12px] uppercase tracking-[0.6px]">Technical Article</span>
            </div>
            <div className="w-3 h-3 rotate-45 bg-muted/40" />
            <span className="font-medium text-muted text-[12px] uppercase tracking-[0.6px]">Industrial Chemicals</span>
          </div>

          <h2 className="font-bold text-accent text-[32px] leading-10">Improving Industrial Performance Through Tailored Chemical Programmes</h2>

          <p className="text-[#777] text-[16px] leading-6.5">
            Efficiency in industrial processes is often hindered by generic chemical applications. This paper explores how customized chemical
            engineering solutions optimize output and reduce downtime in high-stress environments.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={avatarImg} alt="Dr. Samuel Adeyemi" className="w-8 h-8 rounded-full object-cover" />
              <span className="font-semibold text-accent text-[14px] leading-5.25">Dr. Samuel Adeyemi</span>
            </div>
            <span className="text-muted text-[14px] tracking-[7px]">•</span>
            <span className="text-muted text-[14px]">May 12, 2024</span>
            <span className="text-muted text-[14px] tracking-[7px]">•</span>
            <span className="text-muted text-[14px]">8 min read</span>
          </div>

          <a href="#" className="flex items-center gap-3 text-secondary font-bold text-[16px] leading-6 self-start">
            Read Full Article
            <ArrowRightIcon size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
