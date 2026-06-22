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
    description: 'Optimized logistics for global chemical distribution..',
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
    <section className="px-30 py-28 bg-background">
      <h2 className="font-bold text-3xl leading-9 text-left text-accent mb-12">Related Solutions</h2>

      <div className="grid grid-cols-4 gap-8 text-left">
        {solutions.map((solution) => (
          <div key={solution.title} className="border border-border p-8 rounded-xs overflow-hidden">
            <div className="font-bold text-xl leading-7 text-accent mb-4">{solution.title}</div>
            <p className="text-card-foreground text-sm leading-5 mb-8">{solution.description}</p>
            <Link to={solution.path} className="text-base font-bold capitalize text-secondary flex items-center gap-x-1.5">
              Learn More <ArrowRightIcon size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedSolutions;
