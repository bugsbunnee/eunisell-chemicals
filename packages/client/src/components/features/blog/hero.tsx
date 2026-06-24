import React from 'react';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const BlogHero: React.FC = () => {
  return (
    <section className="bg-white px-6 md:px-30 flex flex-col md:flex-row md:items-center relative overflow-hidden md:min-h-152 text-left">
      <div className="flex flex-col gap-6 items-start relative z-10 py-8 md:py-22 md:w-210 md:shrink-0">
        <div className="flex items-center gap-2">
          <Link to={paths.home} className="text-muted text-[12px] md:text-sm">
            Home
          </Link>
          <ChevronRightIcon size={10} className="text-muted" />
          <span className="font-medium text-secondary text-[12px] md:text-sm">Blog</span>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <span className="font-bold text-secondary text-[12px] md:text-sm uppercase tracking-[1.2px] md:tracking-[1.4px]">Insights</span>

          <h1 className="font-bold text-accent text-[36px] leading-[39.6px] md:text-[56px] md:leading-[61.6px] md:tracking-[-0.11px]">
            Insights for
            <br />
            Industrial
            <br />
            Performance
          </h1>

          <p className="text-[#777] text-[16px] leading-6.5 md:text-[20px] md:leading-[32.5px] md:max-w-135">
            Expert analysis and technical updates to help you navigate complex chemical challenges in energy and manufacturing.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
          <a
            href="#articles"
            className="bg-secondary flex items-center justify-center gap-3 text-white font-bold text-[15px] md:font-semibold md:text-[16px] px-8 py-4 md:py-4.5 hover:bg-secondary/90 transition-colors"
          >
            Explore Articles <ArrowRightIcon size={14} />
          </a>

          <Link
            to={paths.knowledge}
            className="border-2 border-secondary text-secondary font-bold text-[15px] md:font-semibold md:text-[16px] px-8 py-4 flex items-center justify-center hover:bg-secondary/5 transition-colors"
          >
            Knowledge Centre
          </Link>
        </div>
      </div>

      <div className="relative w-full h-60 mt-12 overflow-hidden rounded-sm md:hidden">
        <img src="/blog/hero.svg" alt="Blogs" className="absolute w-full h-[136%] top-[-18%] object-cover" />
      </div>

      <div className="hidden md:block absolute left-1/2 right-0 top-0 bottom-0">
        <div className="relative w-full h-full">
          <img src="/blog/hero.svg" alt="Blogs" className="absolute w-full h-[150%] top-[-25%] object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
