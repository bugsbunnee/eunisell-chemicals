import React from 'react';

import { paths } from '../../../lib/data';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { ArrowRightIcon, ChevronRightIcon, MicroscopeIcon } from 'lucide-react';
import { Button } from '../../ui/button';

const crumbs = [
  { path: paths.home, label: 'Home' },
  { path: paths.contact, label: 'Contact Us' },
];

const Hero: React.FC = () => {
  const location = useLocation();

  return (
    <section className="relative bg-background flex flex-col md:grid md:grid-cols-2 md:gap-x-24 text-left py-12 px-6 md:py-17.5 md:px-30 md:items-center overflow-hidden gap-8">
      <div>
        <div className="flex items-center gap-x-2">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <Link
                className={cn({
                  'font-medium text-[14px] md:text-sm tracking-[0.6px] capitalize': true,
                  'text-secondary': location.pathname !== crumb.path,
                  'text-muted': location.pathname === crumb.path,
                })}
                to={crumb.path}
              >
                {crumb.label}
              </Link>
              {index !== crumbs.length - 1 && <ChevronRightIcon size={12} className="text-muted-foreground" />}
            </React.Fragment>
          ))}
        </div>

        <div className="py-1 px-3 font-bold text-[10px] md:text-xs text-secondary leading-4 uppercase my-5 md:my-6 bg-secondary/10 rounded-[2px] w-fit tracking-[2px]">
          Contact Us
        </div>

        <div className="text-accent font-bold leading-[39.6px] md:leading-16.5 text-[36px] md:text-[60px]">Speak with Eunisell Chemicals</div>

        <p className="mt-4 md:mt-8 text-[#afb1b3] md:text-primary text-[18px] md:text-xl leading-7.25 md:leading-8 max-w-full md:max-w-126.5">
          Connect with our technical specialists for world-class industrial chemical solutions, advanced laboratory services, and oilfield expertise
          tailored to your operational needs.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-3 md:gap-x-6">
          <Button className="h-14 md:h-15 w-full md:w-auto md:py-4 md:px-8 bg-primary rounded-[2px] text-[14px] md:text-base font-bold capitalize tracking-[0.35px] flex items-center justify-center">
            Submit Enquiry <ArrowRightIcon />
          </Button>
          <Button className="h-14 md:h-15 w-full md:w-auto md:py-4 md:px-8 border border-[rgba(0,0,0,0.15)] md:border-2 md:border-primary rounded-[2px] bg-transparent text-primary text-sm md:text-base font-bold capitalize tracking-[0.35px]">
            Our Locations
          </Button>
        </div>
      </div>

      <div className="relative h-60 md:min-h-125 md:h-full w-full">
        <div className="h-full w-full rounded-[2px] overflow-hidden shadow-[0px_16px_32px_rgba(0,0,0,0.08)]">
          <img src="/contact/hero.svg" alt="Contact" className="w-full h-full object-cover" />
        </div>

        {/* ISO badge — desktop only */}
        <div className="hidden md:block absolute -bottom-8 -left-8 bg-background p-8 rounded-2xl shadow-2xl w-fit">
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
