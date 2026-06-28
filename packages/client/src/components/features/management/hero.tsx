import React from 'react';

import { paths } from '../../../lib/data';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn, scrollToView } from '../../../lib/utils';
import { ChevronRightIcon } from 'lucide-react';
import { Button } from '../../ui/button';

const crumbs = [
  { path: paths.home, label: 'Home' },
  { path: paths.aboutUs, label: 'About Us' },
  { path: paths.management, label: 'Executive Management' },
];

const Hero: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className="relative bg-background flex flex-col md:grid md:grid-cols-2 md:gap-x-14 text-left px-6 py-12 md:py-17.5 md:px-30 md:items-center gap-6">
      <div>
        <div className="md:hidden font-bold text-[10px] leading-3.75 tracking-[2px] text-secondary uppercase mb-4">Executive Management</div>

        <div className="hidden md:flex items-center gap-x-2">
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

        <div className="text-accent font-bold leading-11 md:leading-16.5 text-[40px] md:text-[64px] md:mt-8">Experienced Leadership. Strategic Vision.</div>

        <p className="mt-4 md:mt-8 text-card-foreground text-[16px] md:text-lg leading-6.5 md:leading-8 max-w-full md:max-w-126.5">
          Eunisell is led by a seasoned management team with deep industry expertise, committed to driving innovation and technical excellence across the African chemical
          landscape.
        </p>

        <div className="mt-6 md:mt-[39.75px] flex flex-col md:flex-row gap-3 md:gap-x-4">
          <Button
            onClick={() => scrollToView('team')}
            className="h-13 md:h-15 w-full md:w-auto md:py-4 md:px-8 bg-secondary rounded-[2px] text-sm leading-5 tracking-[0.7px] font-bold uppercase flex items-center justify-center"
          >
            Meet Our Leadership
          </Button>
          <Button
            onClick={() => navigate(paths.aboutUs)}
            className="h-13 md:h-15 w-full md:w-auto md:py-4 md:px-8 border-2 border-accent rounded-[2px] bg-transparent text-accent text-sm font-bold uppercase leading-5 tracking-[0.7px]"
          >
            Learn About Eunisell
          </Button>
        </div>
      </div>

      <div className="relative mr-2 mb-2 md:m-0 h-80 md:min-h-125 md:h-full w-full">
        <div className="md:hidden absolute top-2 right-[-8px] bottom-[-8px] left-2 bg-[rgba(0,32,55,0.05)] rounded-[4px]" />

        <div className="relative h-full rounded-[2px]">
          <img src="/management/hero.svg" alt="Management" className="w-full h-full object-cover" />

          <div className="md:hidden absolute inset-0 bg-linear-to-t from-[rgba(0,32,55,0.4)] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
