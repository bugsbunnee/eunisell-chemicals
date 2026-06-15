import type React from 'react';

import SectionWithTitle from '../../layout/section-with-title';
import SolutionItem from './solution-item';
import { paths } from '../../../lib/data';

const Solutions: React.FC = () => {
  return (
    <SectionWithTitle
      legend="Our solutions"
      title="Specialized Chemical Solutions for Complex Industrial Challenges"
      description="Eunisell Chemicals provides tailored chemical programmes, technical services, and supply solutions that address the most demanding operational requirements across Africa's industries."
    >
      <div className="grid grid-cols-3 gap-x-5">
        {solutions.map((solution) => (
          <SolutionItem
            key={solution.legend}
            title={solution.title}
            description={solution.description}
            legend={solution.legend}
            path={solution.path}
            image={solution.image}
          />
        ))}
      </div>
    </SectionWithTitle>
  );
};

const solutions = [
  {
    image: '/solution.png',
    path: paths.home,
    title: 'Industrial & Manufacturing Chemicals',
    legend: '01',
    description: 'Solutions that support production efficiency and product quality across industrial operations.',
  },
  {
    image: '/solution.png',
    path: paths.home,
    title: 'Oilfield Chemicals',
    legend: '02',
    description: 'Specialty chemical solutions for production optimization, asset integrity flow assurance, well intervention, and water treatment.',
  },
  {
    image: '/solution.png',
    path: paths.home,
    title: 'Technical & Laboratory Services',
    legend: '03',
    description: 'Advanced laboratory services, product evaluation, compatibility testing, performance monitoring, and optimization.',
  },
];

export default Solutions;
