import React from 'react';
import SectionWithTitle from '../../layout/section-with-title';

import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const knowledges = [
  {
    id: '01',
    title: 'Technical Articles',
    description: 'Peer-reviewed technical insights and chemical engineering articles from our expert team.',
    path: paths.aboutUs,
  },
  {
    id: '02',
    title: 'Industry Insights',
    description: 'Market intelligence, sector analysis, and operational best practices for industrial operators.',
    path: paths.aboutUs,
  },
  {
    id: '03',
    title: 'Product Brochures',
    description: 'Comprehensive product data sheets, technical specifications, and application guides.',
    path: paths.aboutUs,
  },
  {
    id: '04',
    title: 'Technical Bulletins',
    description: 'Field updates, performance reports, and technical advisories from our operations team.',
    path: paths.aboutUs,
  },
];

const KnowledgeCenter: React.FC = () => {
  return (
    <SectionWithTitle
      className="md:px-30 md:py-35"
      title="Explore Technical Knowledge and Industry Insights"
      description="Technical articles, industry insights, product brochures, and technical bulletins from Eunisell Chemicals."
      legend="knowledge center"
    >
      <div className="mt-10 md:mt-16 flex flex-col gap-4 md:gap-0 md:border md:border-border md:rounded-lg md:grid md:grid-cols-4 md:divide-x divide-border">
        {knowledges.map((knowledge) => (
          <div
            className="p-6 md:p-10 text-left flex flex-col border border-border rounded-[4px] shadow-[0px_2px_2px_rgba(0,0,0,0.05)] md:border-0 md:rounded-none md:shadow-none"
            key={knowledge.id}
          >
            <div className="text-[9px] uppercase font-bold tracking-[2px] text-secondary">{knowledge.title}</div>
            <div className="text-[52px] font-black leading-13 text-ring">{knowledge.id}</div>
            <div className="text-[22px] flex-1 text-accent font-extrabold mb-3.25">{knowledge.title}</div>
            <div className="text-[13px] text-muted-foreground leading-5.5">{knowledge.description}</div>

            <div className="mt-8 border-t border-t-border pt-5">
              <Link to={knowledge.path} className="text-xs font-bold leading-4 flex items-center text-secondary gap-1">
                Read More <ArrowRightIcon size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-16 flex items-center justify-center">
        <Link
          to={paths.aboutUs}
          className="w-full md:w-auto px-8 py-3.5 border border-secondary rounded-xs text-sm leading-5 text-secondary font-medium flex items-center justify-center gap-x-1"
        >
          Visit Knowledge Centre <ArrowRightIcon size={14} />
        </Link>
      </div>
    </SectionWithTitle>
  );
};

export default KnowledgeCenter;
