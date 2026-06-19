import React from 'react';
import { paths } from '../../../lib/data';
import { Link } from 'react-router-dom';

const explorationPaths = [
  {
    title: 'About us',
    label: 'Learn More',
    path: paths.aboutUs,
  },
  {
    title: 'QHSE',
    label: 'View Standards',
    path: paths.aboutUs,
  },
  {
    title: 'Executive Management',
    label: 'Meet the Team',
    path: paths.aboutUs,
  },
  {
    title: 'Careers',
    label: 'Join Eunisell',
    path: paths.aboutUs,
  },
];

const Explore: React.FC = () => {
  return (
    <section className="bg-card px-30 py-25 text-left">
      <div className="text-2xl font-bold text-accent">Explore Eunisell</div>

      <div className="mt-10 grid grid-cols-4 gap-6">
        {explorationPaths.map((path) => (
          <div className="bg-background shadow-md p-8 rounded-[6px] flex flex-col space-y-30.5" key={path.title}>
            <div className="font-bold text-accent text-xl leading-7.5 flex-1">{path.title}</div>
            <div className="">
              <Link to={path.path} className="font-semibold text-base text-secondary leading-6">
                {path.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
