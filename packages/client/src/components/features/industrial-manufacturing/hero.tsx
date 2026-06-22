import React from 'react';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';
import { Link } from 'react-router-dom';
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
  return (
    <section className="py-44.25 px-30 bg-accent relative text-left">
      <div>
        <div className="absolute inset-0 opacity-40">
          <img src="/industrial-manufacturing/hero.svg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-accent via-accent via-30% to-transparent" />

        <div className="z-50 relative">
          <div className="flex items-center gap-x-2">
            {crumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                <Link
                  className={cn({
                    'font-medium text-sm leading-5 uppercase tracking-[0.35px]': true,
                    'text-secondary': location.pathname !== crumb.path,
                    'text-primary-foreground/60': location.pathname === crumb.path,
                  })}
                  to={crumb.path}
                >
                  {crumb.label}
                </Link>

                {index !== crumbs.length - 1 && <ChevronRightIcon size={14} className="text-secondary" />}
              </React.Fragment>
            ))}
          </div>

          <h1 className="text-[72px] leading-[79.2px] font-bold text-primary-foreground max-w-225 mt-8">
            Precision Chemistry for <span className="text-secondary">Industrial Excellence.</span>
          </h1>

          <p className="font-normal text-xl leading-[32.5px] text-primary-foreground/80 mt-6 max-w-146.25">
            Advanced chemical solutions engineered to optimize performance, protect critical assets, and ensure the highest standards of product
            quality across the manufacturing value chain.
          </p>

          <div className="flex items-center justify-start gap-x-4 mt-12">
            <Button className="h-14 px-8 py-4 flex items-center bg-secondary text-base leading-6 text-white font-bold rounded-[2px] capitalize">
              Explore Products
            </Button>
            <Button className="h-14 px-8 flex items-center bg-transparent border border-white/30 text-base leading-6 text-white font-bold rounded-[2px] capitalize">
              Technical Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
