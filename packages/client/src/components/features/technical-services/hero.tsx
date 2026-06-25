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
    <section className="bg-white px-6 py-12 md:px-30 md:py-24 flex flex-col md:grid md:grid-cols-2 md:gap-x-18 text-left md:items-stretch gap-8">
      <div className="space-y-6 md:space-y-8">
        <div className="flex items-center gap-x-2">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <Link
                className={cn({
                  'font-medium uppercase text-[12px] md:text-sm tracking-[0.7px]': true,
                  'text-secondary': location.pathname !== crumb.path,
                  'text-muted': location.pathname === crumb.path,
                })}
                to={crumb.path}
              >
                {crumb.label}
              </Link>

              {index !== crumbs.length - 1 && <ChevronRightIcon size={12} className="text-secondary" />}
            </React.Fragment>
          ))}
        </div>

        <h1 className="font-bold text-accent text-[32px] md:text-6xl leading-[38.4px] md:leading-16.5">
          Technical Expertise That Drives <span className="text-secondary">Better Operational Decisions</span>
        </h1>

        <p className="font-normal text-card-foreground text-[16px] md:text-xl leading-6.5 md:leading-[32.5px] m-0">
          Eunisell's technical services bridge the gap between complex chemical science and field application, ensuring your assets perform at their
          peak while minimizing operational risk.
        </p>

        <div className="flex flex-col mt-12 md:flex-row gap-3 md:gap-x-4">
          <Button className="h-14 md:h-15 w-full md:w-auto md:py-4 md:px-8 bg-secondary text-primary-foreground text-sm md:text-lg font-semibold rounded-[4px]">
            Request Technical Consultation
          </Button>
          <Button className="h-14 md:h-15 w-full md:w-auto md:py-4 md:px-8 border-2 border-secondary bg-transparent text-secondary text-sm md:text-lg font-semibold rounded-[4px]">
            Explore Capabilities
          </Button>
        </div>
      </div>

      <div className="w-full h-65 md:h-auto md:min-h-125">
        <img src="/technical-services/hero.svg" alt="Technical Services" className="w-full h-full rounded-[8px] md:rounded-[16px] object-fill" />
      </div>
    </section>
  );
};

export default Hero;
