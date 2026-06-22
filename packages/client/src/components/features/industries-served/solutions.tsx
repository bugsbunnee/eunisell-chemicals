import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { paths } from '../../../lib/data';

const solutions = [
  {
    title: 'Industrial & Manufacturing',
    description: ' Specialty chemicals for complex industrial processes.',
    path: paths.industrial,
  },
  {
    title: 'Oilfield Chemicals',
    description: 'Comprehensive chemical solutions for oil and gas assets.',
    path: paths.oilfield,
  },
  {
    title: 'Technical Services',
    description: 'Engineering and consulting support for chemical optimization.',
    path: paths.oilfield,
  },
  {
    title: 'Laboratory Services',
    description: 'Rigorous analysis and testing in our local facilities.',
    path: paths.oilfield,
  },
];

const Solutions: React.FC = () => {
  return (
    <section className="bg-accent p-30 text-left">
      <h2 className="text-[32px] font-bold text-primary-foreground leading-12 mb-10">Related Solution Areas</h2>

      <div className="w-full grid grid-cols-4 gap-6 items-center">
        {solutions.map((solution) => (
          <div key={solution.title} className="bg-white/5 p-8 h-full flex flex-col rounded-[4px] border border-white/10 space-y-4">
            <div className="text-xl leading-7 text-white font-bold">{solution.title}</div>
            <p className="text-sm leading-5 flex-1 text-white/60">{solution.description}</p>
            <ArrowRightIcon size={24} className="text-white" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
