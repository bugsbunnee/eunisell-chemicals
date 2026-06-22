import React from 'react';

import { paths } from '../../../lib/data';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { ChevronRightIcon } from 'lucide-react';
import { Button } from '../../ui/button';

const crumbs = [
  {
    path: paths.home,
    label: 'Home',
  },
  {
    path: paths.aboutUs,
    label: 'About Us',
  },
  {
    path: paths.management,
    label: 'Executive Management',
  },
];

const Hero: React.FC = () => {
  const location = useLocation();

  return (
    <section className="relative bg-background grid grid-cols-2 gap-x-14 text-left py-17.5 px-30 items-center">
      <div>
        <div className="flex items-center gap-x-2">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <Link
                className={cn({
                  'font-medium text-sm': true,
                  'text-card-foreground': location.pathname !== crumb.path,
                  'text-secondary': location.pathname === crumb.path,
                })}
                to={crumb.path}
              >
                {crumb.label}
              </Link>

              {index !== crumbs.length - 1 && <ChevronRightIcon size={14} className="text-secondary" />}
            </React.Fragment>
          ))}
        </div>

        <div className="text-accent font-bold leading-16.5 text-[64px] mt-8">Experienced Leadership. Strategic Vision.</div>

        <p className="mt-8 text-card-foreground text-lg leading-8 max-w-126.5">
          Eunisell is led by a seasoned management team with deep industry expertise, committed to driving innovation and technical excellence across
          the African chemical landscape.
        </p>

        <div className="mt-[39.75px] flex gap-x-4">
          <Button className="py-4 px-8 bg-secondary h-15 rounded-[2px] text-sm leading-5 tracking-[0.7px] font-bold uppercase items-center flex">
            Meet Our Leadership
          </Button>

          <Button className="py-4 px-8 border-2 border-accent rounded-[2px] bg-transparent text-accent h-15 text-sm font-bold uppercase leading-5 tracking-[0.7px]">
            Learn About Eunisell
          </Button>
        </div>
      </div>

      <div className="min-h-125 h-full w-full rounded-[2px] overflow-hidden">
        <img src="/management/hero.svg" alt="Management" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
