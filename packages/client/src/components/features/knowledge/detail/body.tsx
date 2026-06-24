import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import type { ArticleDetail } from '../../../../lib/entities';

type ArticleBodyProps = Pick<ArticleDetail, 'content' | 'resourceDetails' | 'relatedSolution'>;

const ArticleBody: React.FC<ArticleBodyProps> = ({ content, resourceDetails, relatedSolution }) => {
  return (
    <div className="w-full mx-auto px-5 py-10 md:px-30 md:py-20 text-left">
      <div className="flex flex-col md:grid md:items-start" style={{ gridTemplateColumns: '744px 1fr', gap: '72px' }}>
        {/* Article content */}
        <article>{content}</article>

        {/* Sidebar — stacks below content on mobile */}
        <aside className="flex flex-col gap-6 md:gap-8 md:sticky md:top-8 mt-8 md:mt-0">
          <div className="border border-border p-6">
            <p className="text-[11px] font-bold uppercase tracking-[1.4px] md:tracking-[1.8px] text-muted-foreground pb-4 md:pb-5 border-b border-border mb-4 md:mb-5">
              Resource Details
            </p>
            <div className="grid grid-cols-2 md:flex md:flex-col gap-4">
              {[
                { label: 'Type', value: resourceDetails.type },
                { label: 'Sector', value: resourceDetails.sector },
                { label: 'Subject', value: resourceDetails.subject },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] md:text-[11px] uppercase tracking-[1.4px] text-muted-foreground/70 mb-0.5">{label}</p>
                  <p className="font-semibold text-foreground text-sm md:text-[15px] leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {relatedSolution && (
            <div className="bg-accent p-6">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[1.8px] text-secondary mb-3">Related Solution</p>
              <h4 className="font-bold text-white text-[20px] md:text-[22px] leading-[1.25] mb-3">{relatedSolution.title}</h4>
              <p className="text-muted text-sm leading-[1.6] mb-6">{relatedSolution.description}</p>
              <a
                href={relatedSolution.href}
                className="inline-flex items-center gap-2 font-bold text-white text-sm md:text-[15px] hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRightIcon size={14} />
              </a>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 md:pt-1 border-t border-border">
            <span className="font-bold text-foreground text-sm">Share this article:</span>
            <div className="flex items-center gap-4 md:gap-3">
              {[
                { label: 'in', color: '#0A66C2' },
                { label: 'f', color: '#1877F2' },
                { label: 'G', color: '#4285F4' },
              ].map(({ label, color }) => (
                <button
                  key={label}
                  style={{ color }}
                  className="w-6 h-6 md:w-5 md:h-5 flex items-center justify-center text-sm md:text-[13px] font-bold hover:opacity-70 transition-opacity"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleBody;
