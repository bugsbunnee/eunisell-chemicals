import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';

const crumbs = [
  { path: paths.home, label: 'Home' },
  { path: paths.qhse, label: 'QHSE' },
];

const Hero: React.FC = () => {
  const location = useLocation();

  return (
    <section className="bg-background text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-12 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <Link
                className={cn('font-medium text-[12px]', {
                  'text-secondary': location.pathname === crumb.path,
                  'text-accent': location.pathname !== crumb.path,
                })}
                to={crumb.path}
              >
                {crumb.label}
              </Link>
              {index !== crumbs.length - 1 && <ChevronRightIcon size={10} className="text-accent" />}
            </React.Fragment>
          ))}
        </div>

        <h1 className="font-extrabold text-[36px] leading-[39.6px] text-accent">
          Zero Harm. <span className="text-secondary">Maximum Responsibility.</span>
        </h1>

        <p className="text-[16px] leading-[29.25px] text-card-foreground">
          At Eunisell Chemicals, safety is not a protocol—it is our core operational philosophy. Protecting people, environment, and assets.
        </p>

        <Button className="w-full h-[48px] bg-accent text-white text-[14px] font-semibold rounded-[2px]">Download QHSE Policy</Button>

        <div className="relative rounded-tr-[60px] overflow-hidden h-[300px]">
          <img src="/qhse/compliance.svg" alt="QHSE Compliance" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 right-4 bg-secondary p-4 rounded-[1px]">
            <div className="font-bold text-[28px] leading-[32px] text-white">100%</div>
            <div className="font-medium text-[12px] leading-[15px] text-white">Compliance</div>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid relative grid-cols-2 gap-x-24 py-[56.5px] px-30 items-center overflow-hidden">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-x-2">
              {crumbs.map((crumb, index) => (
                <React.Fragment key={crumb.path}>
                  <Link
                    className={cn({
                      'font-medium text-sm': true,
                      'text-secondary': location.pathname === crumb.path,
                      'text-primary': location.pathname !== crumb.path,
                    })}
                    to={crumb.path}
                  >
                    {crumb.label}
                  </Link>
                  {index !== crumbs.length - 1 && <ChevronRightIcon size={14} className="text-primary" />}
                </React.Fragment>
              ))}
            </div>

            <h1 className="text-6xl font-extrabold text-accent leading-18.75 max-w-148">
              Zero Harm. <span className="text-secondary">Maximum Responsibility.</span>
            </h1>

            <p className="text-card-foreground text-xl leading-[32.5px] max-w-148">
              At Eunisell Chemicals, safety is not a protocol—it is our core operational philosophy. We are committed to protecting our people, the
              environment, and our partners' assets through rigorous QHSE management.
            </p>
          </div>

          <Button className="py-4 px-8 bg-accent text-primary-foreground h-15 text-base font-semibold rounded-[2px]">Download QHSE Policy</Button>
        </div>

        <div className="relative min-h-150 h-full w-full">
          <img src="/qhse/compliance.svg" alt="Eunisell & Abia Warriors FC" className="w-full h-full object-cover rounded-tr-[100px]" />
          <div className="absolute bg-secondary p-8 rounded-[1px] -bottom-10 -right-10">
            <div className="font-bold text-4xl text-white">100%</div>
            <div className="font-medium text-sm leading-6 text-white max-w-55">Compliance Standards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
