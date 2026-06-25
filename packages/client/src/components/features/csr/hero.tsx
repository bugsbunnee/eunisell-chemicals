import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';

const crumbs = [
  { path: paths.home, label: 'Home' },
  { path: paths.csr, label: 'CSR' },
];

const Hero: React.FC = () => {
  const location = useLocation();

  return (
    <section className="bg-background text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-10 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <Link
                className={cn('font-medium text-[12px]', {
                  'text-secondary': location.pathname === crumb.path,
                  'text-muted': location.pathname !== crumb.path,
                })}
                to={crumb.path}
              >
                {crumb.label}
              </Link>
              {index !== crumbs.length - 1 && <ChevronRightIcon size={10} className="text-muted" />}
            </React.Fragment>
          ))}
        </div>

        <div className="font-black text-[12px] text-secondary tracking-[2px] uppercase leading-4">Corporate Social Responsibility</div>

        <h1 className="font-bold text-[36px] leading-[39.6px] text-accent">Driving Community Impact Through Sports</h1>

        <p className="text-[18px] leading-[29.25px] text-card-foreground">
          Eunisell's partnership with Abia Warriors FC reflects a commitment to sustainable community development, youth empowerment, and lasting
          impact beyond business.
        </p>

        <div className="flex flex-col gap-4 pt-2">
          <Button className="w-full h-[54px] bg-secondary text-white text-[16px] font-semibold rounded-[4px] flex items-center justify-center gap-2">
            Explore Our CSR Impact <ArrowRightIcon size={16} />
          </Button>
          <Button className="w-full h-[54px] border-2 border-accent bg-transparent text-accent text-[16px] font-semibold rounded-[4px]">
            Learn About Eunisell
          </Button>
        </div>

        <div className="h-[300px] rounded-[12px] overflow-hidden shadow-2xl">
          <img src="/csr/hero.svg" alt="Eunisell & Abia Warriors FC" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid relative grid-cols-2 gap-x-24 text-left py-24 px-30 items-center overflow-hidden">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-x-2">
            {crumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                <Link
                  className={cn({
                    'font-medium text-sm': true,
                    'text-secondary': location.pathname === crumb.path,
                    'text-muted': location.pathname !== crumb.path,
                  })}
                  to={crumb.path}
                >
                  {crumb.label}
                </Link>
                {index !== crumbs.length - 1 && <ChevronRightIcon size={14} className="text-muted" />}
              </React.Fragment>
            ))}
          </div>

          <div className="font-bold text-sm text-secondary leading-4 tracking-[2px] uppercase mt-6 mb-4 w-fit">Corporate Social Responsibility</div>

          <h1 className="text-[64px] font-bold text-accent leading-[70.4px] max-w-178">Driving Community Impact Through Sports</h1>

          <p className="mt-6 text-card-foreground text-xl leading-[32.5px] max-w-178">
            At Eunisell Chemicals, our responsibility extends far beyond the industrial solutions we provide. We are deeply committed to the
            communities we operate within across Africa.
          </p>

          <p className="mt-6 text-card-foreground text-xl leading-[32.5px] max-w-178">
            Through strategic investments in sports and youth development, we create lasting social value that transforms lives and strengthens
            communities.
          </p>

          <div className="mt-10 flex gap-x-6">
            <Button className="py-4 px-8 bg-secondary text-primary-foreground h-15 text-base font-semibold rounded-[4px] items-center flex gap-x-2">
              Explore Our CSR Impact <ArrowRightIcon size={18} />
            </Button>
            <Button className="py-4 px-8 border-2 border-accent bg-transparent text-accent h-15 text-base font-semibold rounded-[4px]">
              Learn About Eunisell
            </Button>
          </div>
        </div>

        <div className="relative min-h-150 h-full w-full overflow-hidden rounded-[6px]">
          <img src="/csr/hero.svg" alt="Eunisell & Abia Warriors FC" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
