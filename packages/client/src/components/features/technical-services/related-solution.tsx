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
    <section className="px-6 py-16 md:px-30 md:py-24 text-left bg-card">
      <h2 className="font-bold text-[24px] md:text-3xl leading-8 md:leading-9 text-accent mb-8 md:mb-12">Related Solutions</h2>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8">
        {solutions.map((solution) => (
          <div key={solution.title} className="border border-border rounded-[8px] overflow-hidden shadow-md">
            <div className="h-40 md:h-48 w-full overflow-hidden">
              <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 md:p-8 flex flex-col">
              <div className="font-bold text-[16px] md:text-lg leading-6 md:leading-7 text-accent mb-2 md:mb-3">{solution.title}</div>
              <p className="text-muted-foreground text-[13px] md:text-sm leading-relaxed mb-5 md:mb-6">{solution.description}</p>
              <Link
                to={solution.path}
                className="mt-auto text-[12px] md:text-sm leading-5 font-bold uppercase text-secondary flex items-center gap-x-1.5 tracking-wider"
              >
                Learn More <ChevronRightIcon size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedSolutions;
