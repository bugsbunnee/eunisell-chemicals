import React from 'react';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { ChevronRightIcon } from 'lucide-react';

const crumbs = [
  {
    path: paths.solutions,
    label: 'Our Solutions',
  },
  {
    path: paths.industrial,
    label: 'Industrial & Manufacturing Chemicals',
  },
];

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-accent relative text-left">
      {/* Desktop background */}
      <div className="hidden md:block absolute inset-0 opacity-40">
        <img src="/industrial-manufacturing/hero.svg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="hidden md:block absolute inset-0 bg-linear-to-r from-accent via-accent via-30% to-transparent" />

      {/* Content */}
      <div className="z-40 relative px-6 pt-12 pb-0 md:py-44.25 md:px-30">
        <div className="flex items-center gap-x-2">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <Link
                className={cn({
                  'font-medium text-[10px] md:text-sm leading-5 uppercase tracking-[0.35px]': true,
                  'text-secondary': location.pathname !== crumb.path,
                  'text-primary-foreground/60': location.pathname === crumb.path,
                })}
                to={crumb.path}
              >
                {crumb.label}
              </Link>
              {index !== crumbs.length - 1 && <ChevronRightIcon size={12} className="text-secondary" />}
            </React.Fragment>
          ))}
        </div>

        <h1 className="text-[36px] md:text-[72px] leading-[45px] md:leading-[79.2px] font-bold text-primary-foreground max-w-full md:max-w-225 mt-6 md:mt-8">
          Precision Chemistry for <span className="text-secondary">Industrial Excellence.</span>
        </h1>

        <p className="font-normal text-[16px] md:text-xl leading-[26px] md:leading-[32.5px] text-primary-foreground/80 mt-6 max-w-full md:max-w-146.25">
          Advanced chemical solutions engineered to optimize performance, protect critical assets, and ensure the highest standards of product quality across the manufacturing
          value chain.
        </p>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-x-4 mt-8 md:mt-12">
          <Button
            onClick={() => navigate(paths.chemicals)}
            className="h-[52px] md:h-14 md:px-8 md:py-4 flex items-center justify-center bg-secondary text-sm md:text-base leading-5 md:leading-6 text-white font-bold rounded-[2px] capitalize"
          >
            Explore Products
          </Button>
          <Button
            onClick={() => navigate(paths.contact)}
            className="h-[52px] md:h-14 md:px-8 flex items-center justify-center bg-transparent border border-white/30 text-sm md:text-base leading-5 md:leading-6 text-white font-bold rounded-[2px] capitalize"
          >
            Technical Consultation
          </Button>
        </div>
      </div>

      {/* Mobile-only image below content */}
      <div className="md:hidden px-6 pt-6 pb-16 z-50 relative">
        <div className="h-[240px] overflow-hidden rounded-sm shadow-2xl">
          <img src="/industrial-manufacturing/hero.svg" alt="Industrial chemical laboratory" className="w-full h-[136%] object-cover mt-[-18%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
