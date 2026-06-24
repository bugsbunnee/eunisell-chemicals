import React from 'react';

import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const solutions = [
  {
    title: 'Oilfield Chemicals',
    description: 'Upstream and downstream specialty chemical solutions.',
    path: paths.solutions,
  },
  {
    title: 'Blending & Packaging',
    description: 'Contract manufacturing to your exact specifications.',
    path: paths.solutions,
  },
  {
    title: 'Supply Chain',
    description: 'Optimized logistics for global chemical distribution.',
    path: paths.solutions,
  },
  {
    title: 'Laboratory Services',
    description: 'Independent testing and quality validation.',
    path: paths.solutions,
  },
];

const RelatedSolutions: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-30 md:py-28 bg-background">
      <h2 className="font-bold text-[20px] md:text-3xl leading-7 md:leading-9 text-left text-accent mb-8 md:mb-12">Related Solutions</h2>

      <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-8 text-left">
        {solutions.map((solution) => (
          <div key={solution.title} className="border border-border p-6 md:p-8 rounded-xs">
            <div className="font-bold text-[16px] md:text-xl leading-6 md:leading-7 text-accent mb-2 md:mb-4">{solution.title}</div>
            <p className="text-[12px] md:text-sm text-[#606060] md:text-card-foreground leading-4 md:leading-5 mb-6 md:mb-8">
              {solution.description}
            </p>
            <Link to={solution.path} className="text-sm md:text-base font-bold capitalize text-secondary flex items-center gap-x-1.5">
              Learn More <ArrowRightIcon size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedSolutions;
