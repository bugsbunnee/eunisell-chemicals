import React from 'react';

import { paths } from '../../../lib/data';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { ArrowRightIcon, ChevronRightIcon, MicroscopeIcon } from 'lucide-react';
import { Button } from '../../ui/button';

const crumbs = [
  {
    path: paths.home,
    label: 'Home',
  },
  {
    path: paths.contact,
    label: 'Contact',
  },
];

const Hero: React.FC = () => {
  const location = useLocation();

  return (
    <section className="relative bg-background grid grid-cols-2 gap-x-24 text-left py-17.5 px-45 items-center overflow-hidden">
      <div>
        <div className="flex items-center gap-x-2">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <Link
                className={cn({
                  'font-medium text-sm': true,
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

        <div className="py-2 px-3 font-bold text-xs text-secondary leading-4 uppercase my-6 bg-secondary/10 w-fit">contact us</div>

        <div className="text-accent font-bold leading-16.5 text-[60px]">Speak with Eunisell Chemicals</div>

        <p className="mt-8 text-primary text-xl leading-8 max-w-126.5">
          Connect with our technical specialists for world-class industrial chemical solutions, advanced laboratory services, and oilfield expertise
          tailored to your operational needs.
        </p>

        <div className="mt-10 flex gap-x-6">
          <Button className="py-4 px-8 bg-primary h-15 text-base font-semibold rounded-xs items-center flex">
            Submit Enquiry <ArrowRightIcon />
          </Button>

          <Button className="py-4 px-8 border-2 border-primary bg-transparent text-primary h-15 text-base font-semibold rounded-xs">
            Our Locations
          </Button>
        </div>
      </div>

      <div className="relative min-h-125 h-full w-full">
        <img src="/contact/hero.svg" alt="Contact" className="w-full h-full rounded-2xl object-fill" />

        <div className="absolute bg-background p-8 rounded-2xl shadow-2xl w-fit">
          <div className="flex gap-x-4 rounded-lg">
            <div className="rounded-lg bg-secondary/10 w-12 h-12 text-secondary flex items-center justify-center">
              <MicroscopeIcon size={20} />
            </div>
            <div className="flex-1">
              <div className="text-xs leading-4 text-muted-foreground uppercase font-bold">Lab Standards</div>
              <div className="text-lg text-accent font-bold">ISO 9001:2015</div>
            </div>
          </div>

          <div className="text-sm leading-5 text-primary mt-4 max-w-52">Advanced technical reviews for every chemical formulation request.</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
