import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const solutions = [
  {
    title: 'Industrial & Manufacturing',
    description: 'Specialized chemical solutions for factories and processing plants.',
    image: '/technical-services/industrial.svg',
    path: paths.solutions,
  },
  {
    title: 'Oilfield Chemicals',
    description: 'Advanced chemistries for upstream production and midstream transport.',
    image: '/technical-services/oilfield.svg',
    path: paths.solutions,
  },
  {
    title: 'Quality Control',
    description: 'Ensuring every product meets the highest standards of purity and efficacy.',
    image: '/technical-services/quality.svg',
    path: paths.solutions,
  },
];

const RelatedSolutions: React.FC = () => {
  return (
    <section className="px-30 py-24 text-left bg-card">
      <h2 className="font-bold text-3xl leading-9 text-accent mb-12">Related Solutions</h2>

      <div className="grid grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <div key={solution.title} className="border border-border rounded-[8px] overflow-hidden shadow-md">
            <div className="h-48 w-full overflow-hidden">
              <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 flex flex-col">
              <div className="font-bold text-lg leading-7 text-accent mb-3">{solution.title}</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{solution.description}</p>
              <Link
                to={solution.path}
                className="mt-auto text-sm leading-5 font-bold uppercase text-secondary flex items-center gap-x-1.5 tracking-wider"
              >
                Learn More <ChevronRightIcon size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedSolutions;
