import React from 'react';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const labImg = 'https://www.figma.com/api/mcp/asset/2debd6a9-f6bf-4969-8e8d-8f6bf7fd04f7';

const BlogHero: React.FC = () => {
  return (
    <section className="bg-white px-30 flex items-center relative overflow-hidden min-h-152 text-left">
      <div className="flex flex-col gap-6 items-start relative z-10 w-210 shrink-0 py-22">
        <div className="flex items-center gap-2">
          <Link to={paths.home} className="text-[#afb1b3] text-[14px]">
            Home
          </Link>
          <ChevronRightIcon size={10} className="text-[#afb1b3]" />
          <span className="font-medium text-secondary text-[14px]">Blog</span>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-bold text-secondary text-[14px] uppercase tracking-[1.4px]">Blog</span>

          <h1 className="font-bold text-accent text-[56px] leading-[61.6px] tracking-[-0.11px]">
            Insights for Industrial
            <br />
            and Energy
            <br />
            Performance
          </h1>

          <p className="text-[#777] text-[20px] leading-[32.5px] max-w-135">
            Our technical specialists share deep-domain knowledge and industry updates to help you navigate complex chemical challenges.
          </p>
        </div>

        <div className="flex items-center gap-4 pt-3">
          <a
            href="#articles"
            className="bg-secondary flex items-center gap-3 text-white font-semibold text-[16px] px-8 py-4.5 hover:bg-secondary/90 transition-colors"
          >
            Explore Articles
            <ArrowRightIcon size={14} />
          </a>
          <Link
            to={paths.knowledge}
            className="border-2 border-secondary text-secondary font-semibold text-[16px] px-8 py-4 hover:bg-secondary/5 transition-colors"
          >
            Visit Knowledge Centre
          </Link>
        </div>
      </div>

      <div className="absolute left-1/2 right-0 top-0 bottom-0">
        <div className="relative w-full h-full">
          <img src={labImg} alt="" className="absolute w-full h-[150%] top-[-25%] object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
