import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRightIcon, ClockIcon } from 'lucide-react';
import { paths } from '../../../../lib/data';

import type { ArticleDetail } from '../../../../lib/entities';

type ArticleHeroProps = Pick<ArticleDetail, 'breadcrumb' | 'type' | 'tags' | 'title' | 'excerpt' | 'author' | 'date' | 'readTime'>;

const ArticleHero: React.FC<ArticleHeroProps> = ({ breadcrumb, type, tags, title, excerpt, author, date, readTime }) => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f0f4f8] px-5 pt-8 pb-10 md:px-30 md:py-18 text-left">
      <div className="mx-auto">
        <nav className="flex items-center gap-2 text-[12px] md:text-sm text-muted-foreground mb-6 md:mb-11.25">
          <Link to={paths.home} className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRightIcon size={10} />
          <Link to={breadcrumb.href} className="hover:text-foreground transition-colors">
            {breadcrumb.label}
          </Link>
          <ChevronRightIcon size={10} />
          <span className="text-secondary truncate">{title}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-2 mb-6 md:mb-14.5">
          <span className="bg-secondary text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5px] md:tracking-[1.5px] px-3 py-1">
            {type}
          </span>
          {tags.map((tag) => (
            <span key={tag} className="border border-border text-muted-foreground text-[12px] md:text-[13px] px-3 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:grid md:gap-6 md:grid-cols-[2fr_1fr]">
          <div className="flex flex-col">
            <h1 className="font-bold text-foreground text-[32px] leading-10 md:text-[48px] md:leading-[1.1] md:tracking-tight">{title}</h1>

            <p className="mt-4 md:mt-6 text-muted-foreground text-[16px] leading-6.5 md:text-[17px] md:leading-[1.75]">{excerpt}</p>

            <div className="mt-6 pt-6 border-t border-border flex items-center gap-4 md:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-muted shrink-0">
                  <img src={author.avatarSrc} alt={author.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm md:text-[15px] leading-5">{author.name}</p>
                  <p className="text-muted-foreground text-[12px] md:text-sm mt-0.5">
                    {date} • {readTime}
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-muted-foreground text-sm">
                <ClockIcon size={16} />
                <span>{readTime}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-6 md:hidden">
              <button
                onClick={() => navigate(paths.contact)}
                className="w-full h-12 bg-secondary text-white font-bold text-sm uppercase tracking-[0.35px] hover:bg-secondary/90 transition-colors"
              >
                Request Consultation
              </button>
              <button
                onClick={() => navigate(paths.solutions)}
                className="w-full h-12 border-2 border-secondary text-secondary font-bold text-sm uppercase tracking-[0.35px] hover:bg-secondary/5 transition-colors bg-transparent"
              >
                Explore Solutions
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-4 pt-64.5">
            <button
              onClick={() => navigate(paths.contact)}
              className="w-full h-14 bg-secondary text-white font-bold text-sm uppercase tracking-[1.2px] hover:bg-secondary/90 transition-colors"
            >
              Request Consultation
            </button>
            <button
              onClick={() => navigate(paths.solutions)}
              className="w-full h-14 border-2 border-secondary text-secondary font-bold text-sm uppercase tracking-[1.2px] hover:bg-secondary/5 transition-colors bg-transparent"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
