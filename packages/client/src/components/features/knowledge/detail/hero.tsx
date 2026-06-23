import React from 'react';
import { ChevronRightIcon, ClockIcon } from 'lucide-react';

const ArticleHero: React.FC = () => {
  return (
    <section className="bg-[#f0f4f8] px-30 py-18 text-left">
      <div className=" mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-[45px]">
          <a href="/" className="hover:text-foreground transition-colors">
            Home
          </a>
          <ChevronRightIcon size={11} />
          <a href="/knowledge" className="hover:text-foreground transition-colors">
            Knowledge Centre
          </a>
          <ChevronRightIcon size={11} />
          <span className="text-secondary">Improving Industrial Performance</span>
        </nav>

        {/* Tags */}
        <div className="flex items-center gap-3 mb-[58px]">
          <span className="bg-secondary text-white text-[11px] font-bold uppercase tracking-[1.5px] px-3 py-[5px]">Technical Article</span>
          <span className="border border-border text-muted-foreground text-[13px] px-3 py-0.5">Industrial Chemicals</span>
          <span className="border border-border text-muted-foreground text-[13px] px-3 py-0.5">Manufacturing</span>
        </div>

        {/* Two-column: content left, CTAs right */}
        <div className="grid" style={{ gridTemplateColumns: '760px 368px', gap: '24px' }}>
          {/* Left: title + description + author */}
          <div className="flex flex-col">
            <h1 className="font-bold text-foreground text-[48px] leading-[1.1] tracking-tight">
              Improving Industrial
              <br />
              Performance Through Tailored
              <br />
              Chemical Programmes
            </h1>

            <p className="mt-6 text-muted-foreground text-[17px] leading-[1.75]">
              Exploring how precision-engineered chemical solutions drive efficiency, reduce downtime, and enhance product quality in complex
              manufacturing environments.
            </p>

            <div className="mt-[24px] pt-6 border-t border-border flex items-center gap-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted shrink-0">
                  <img src="/knowledge/article.svg" alt="Eunisell Technical Team" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-[15px] leading-[21px]">Eunisell Technical Team</p>
                  <p className="text-muted-foreground text-[14px] mt-0.5">October 24, 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-[14px]">
                <ClockIcon size={16} />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Right: CTAs pushed to bottom */}
          <div className="flex flex-col gap-4 pt-[257px]">
            <button className="w-full h-14 bg-secondary text-white font-bold text-[14px] uppercase tracking-[1.2px] hover:bg-secondary/90 transition-colors">
              Request Consultation
            </button>
            <button className="w-full h-14 border-2 border-secondary text-secondary font-bold text-[14px] uppercase tracking-[1.2px] hover:bg-secondary/5 transition-colors bg-transparent">
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
