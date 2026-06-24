import React from 'react';
import { ClockIcon } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="md:px-30 md:pb-30">
      <section className="bg-accent overflow-hidden text-left">
        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr]">
          <div className="md:hidden h-48 overflow-hidden">
            <img src="/knowledge/article.svg" alt="Industrial control room" className="w-full h-[170%] object-cover mt-[-35%]" />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-16">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="bg-secondary text-white text-[8px] md:text-[10px] font-bold tracking-[0.8px] md:tracking-[1px] uppercase px-2 md:px-3 py-1 rounded-[1px]">
                Technical Article
              </span>
              <div className="flex items-center gap-1.5">
                <ClockIcon size={12} className="text-popover-foreground" />
                <span className="text-popover-foreground text-[10px] md:text-sm">5 min read</span>
              </div>
            </div>

            <h2 className="font-bold text-white text-[20px] leading-6.25 md:text-[40px] md:leading-tight mb-4 md:mb-6">
              Improving Industrial Performance
              <br />
              Through Tailored Chemical
              <br />
              Programmes
            </h2>

            <p className="text-popover-foreground text-sm leading-5 md:text-lg md:leading-relaxed md:max-w-150 mb-6 md:mb-10">
              How precision chemistry is reshaping production efficiency in the West African energy corridor.
            </p>

            <a href="#" className="inline-block font-bold text-white text-sm md:text-base border-b border-secondary pb-1 self-start">
              Read Full Article
            </a>
          </div>

          <div className="hidden md:block overflow-hidden">
            <img src="/knowledge/article.svg" alt="Industrial control room" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
