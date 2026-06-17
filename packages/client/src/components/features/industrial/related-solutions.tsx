import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const solutions = [
  {
    title: 'Oilfield Chemicals',
    description: 'Drilling, completion and production chemistry.',
    image: '/industrial/related/oilfield.svg',
    path: paths.solutions,
  },
  {
    title: 'Chemical Blending',
    description: 'Customized formulation and toll blending.',
    image: '/industrial/related/blending.svg',
    path: paths.solutions,
  },
  {
    title: 'Supply & Distribution',
    description: 'Secure supply chain and bulk chemical delivery.',
    image: '/industrial/related/supply.svg',
    path: paths.solutions,
  },
  {
    title: 'Laboratory Services',
    description: 'Precision testing and analytical expertise.',
    image: '/industrial/related/lab.svg',
    path: paths.solutions,
  },
];

const RelatedSolutions: React.FC = () => {
  return (
    <section className="px-20 py-28 bg-background">
      <h2 className="font-bold text-[40px] text-accent mb-12">Related Solutions</h2>

      <div className="grid grid-cols-4 gap-4">
        {solutions.map((solution) => (
          <div key={solution.title} className="border border-border rounded-sm overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="font-bold text-[17px] text-accent mb-3">{solution.title}</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{solution.description}</p>
              <Link to={solution.path} className="text-[11px] font-bold uppercase text-secondary flex items-center gap-x-1.5 tracking-wider">
                View Solution <ArrowRightIcon size={11} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedSolutions;
