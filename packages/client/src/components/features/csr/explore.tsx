import React from 'react';
import { paths } from '../../../lib/data';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

const explorationPaths = [
  { title: 'About us', label: 'Learn More', path: paths.aboutUs },
  { title: 'QHSE', label: 'View Standards', path: paths.qhse },
  { title: 'Executive Management', label: 'Meet the Team', path: paths.management },
  { title: 'Careers', label: 'Join Eunisell', path: paths.careers },
];

const Explore: React.FC = () => {
  return (
    <section className="bg-card text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <h2 className="font-bold text-[24px] leading-[30px] text-accent">Explore Eunisell</h2>

        <div className="flex flex-col gap-3">
          {explorationPaths.map((path) => (
            <Link key={path.title} to={path.path} className="bg-white border border-border shadow-sm p-5 rounded-[6px] flex items-center justify-between">
              <span className="font-bold text-[18px] leading-6 text-accent">{path.title}</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[14px] text-secondary leading-5">{path.label}</span>
                <ArrowRightIcon size={14} className="text-secondary" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block px-30 py-25">
        <div className="text-2xl font-bold text-accent">Explore Eunisell</div>

        <div className="mt-10 grid grid-cols-4 gap-6">
          {explorationPaths.map((path) => (
            <div className="bg-background shadow-md p-8 rounded-[6px] flex flex-col space-y-30.5" key={path.title}>
              <div className="font-bold text-accent text-xl leading-7.5 flex-1">{path.title}</div>
              <div>
                <Link to={path.path} className="font-semibold text-base text-secondary leading-6">
                  {path.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
