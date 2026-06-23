import React from 'react';
import { ClockIcon } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="px-30 pb-30">
      <section className="bg-accent overflow-hidden text-left">
        <div className="mx-auto grid grid-cols-[2fr_1fr]">
          <div className="flex flex-col justify-center p-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-secondary text-white text-[10px] font-bold tracking-[1px] uppercase px-3 py-1 rounded-[1px]">
                Technical Article
              </span>
              <div className="flex items-center gap-2">
                <ClockIcon size={14} className="text-popover-foreground" />
                <span className="text-popover-foreground text-sm">5 min read</span>
              </div>
            </div>

            <h2 className="font-bold text-white text-[40px] leading-[1.25] mb-6">
              Improving Industrial Performance
              <br />
              Through Tailored Chemical
              <br />
              Programmes
            </h2>

            <p className="text-[#cbd5e1] text-lg leading-relaxed max-w-[600px] mb-10">
              How precision chemistry is reshaping production efficiency in the West African energy corridor through localized R&amp;D and flow
              assurance strategies.
            </p>

            <a href="#" className="inline-block font-bold text-white text-base border-b-2 border-secondary pb-1 self-start">
              Read Full Article
            </a>
          </div>

          <div className="overflow-hidden">
            <img src="/knowledge/article.svg" alt="Industrial control room" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
