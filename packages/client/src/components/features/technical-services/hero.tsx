import React from 'react';

import { paths } from '../../../lib/data';
import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { ChevronRightIcon } from 'lucide-react';
import { Button } from '../../ui/button';

const crumbs = [
  {
    path: paths.home,
    label: 'Home',
  },
  {
    path: paths.technical,
    label: 'Technical Services',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="bg-white px-30 py-24 grid grid-cols-2 gap-x-18 text-left items-stretch">
      <div className="space-y-8">
        <div className="flex items-center gap-x-2 max-w-2xl">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <Link
                className={cn({
                  'font-medium uppercase text-sm tracking-[0.7px]': true,
                  'text-secondary': location.pathname !== crumb.path,
                  'text-muted': location.pathname === crumb.path,
                })}
                to={crumb.path}
              >
                {crumb.label}
              </Link>

              {index !== crumbs.length - 1 && <ChevronRightIcon size={14} className="text-secondary" />}
            </React.Fragment>
          ))}
        </div>

        <h1 className="font-bold text-accent text-6xl leading-16.5">
          Technical Expertise That Drives <span className="text-secondary">Better Operational Decisions</span>
        </h1>

        <p className="max-w-124 font-normal text-card-foreground text-xl leading-[32.5px] m-0">
          Eunisell's technical services bridge the gap between
          <br />
          complex chemical science and field application,
          <br />
          ensuring your assets perform at their peak while
          <br />
          minimizing operational risk.
        </p>

        <div className="mt-12 flex gap-x-4">
          <Button className="py-4 px-8 bg-secondary text-primary-foreground h-15 text-lg font-semibold rounded-[4px] items-center flex gap-x-2">
            Request Technical Consultation
          </Button>

          <Button className="py-4 px-8 border-2 border-secondary bg-transparent text-secondary h-15 text-lg font-semibold rounded-[4px]">
            Explore Capabilities
          </Button>
        </div>
      </div>

      <div className="w-full min-h-[500px]">
        <img src="/technical-services/hero.svg" alt="Technical Services" className="w-full h-full rounded-[16px] object-cover" />
      </div>
    </section>
  );
};

export default Hero;
