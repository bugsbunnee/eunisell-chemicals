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
      className="px-45 py-35"
      title="Explore Technical Knowledge and Industry Insights"
      description="Technical articles, industry insights, product brochures, and technical bulletins from Eunisell Chemicals."
      legend="knowledge center"
    >
      <div className="mt-16 border border-border rounded-lg grid grid-cols-4 divide-x divide-border">
        {knowledges.map((knowledge) => (
          <div className="p-10 text-left" key={knowledge.id}>
            <div className="text-[9px] uppercase font-bold tracking-[2px] text-secondary">{knowledge.title}</div>
            <div className="text-[52px] font-black leading-13 text-ring">{knowledge.id}</div>
            <div className="text-[22px] text-accent font-extrabold mb-3.25">{knowledge.title}</div>
            <div className="text-[13px] text-muted-foreground leading-5.5">{knowledge.description}</div>

            <div className="mt-8 border-t border-t-border pt-5">
              <Link to={knowledge.path} className="text-xs font-bold leading-4 flex items-center text-secondary gap-1">
                Read More <ArrowRightIcon size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center flex items-center justify-center">
        <Link
          to={paths.aboutUs}
          className="px-8 py-3.5 border border-secondary rounded-xs mx-auto text-sm leading-5 text-secondary font-medium  flex items-center gap-x-1"
        >
          Visit Knowledge Center <ArrowRightIcon size={14} />
        </Link>
      </div>
    </SectionWithTitle>
  );
};

export default KnowledgeCenter;
