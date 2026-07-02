import React from 'react';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { ChevronRightIcon } from 'lucide-react';

const crumbs = [
  {
    path: paths.home,
    label: 'Home',
  },
  {
    path: paths.chemicals,
    label: 'Our Chemicals',
  },
  {
    path: paths.processFluids,
    label: 'Industrial Process Fluids',
  },
];

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white md:bg-accent relative text-left">
      {/* Desktop background */}
      <div className="hidden md:block absolute inset-0 opacity-40">
        <img src="/industrial-process-fluids/hero.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="hidden md:block absolute inset-0 bg-linear-to-r from-accent via-accent/80 via-50% to-transparent" />

      {/* Content */}
      <div className="z-40 relative px-6 pt-8 pb-0 md:py-28.5 md:px-30">
        <div className="hidden md:block font-medium text-sm leading-5 uppercase tracking-[2.8px] text-secondary">Our Chemicals</div>

        <div className="flex items-center gap-x-2 md:mt-3">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <Link
                className={cn({
                  'text-[10px] md:text-sm leading-[15px] md:leading-5 uppercase md:capitalize tracking-[1px] md:tracking-normal': true,
                  'text-secondary md:text-primary-foreground/60': index !== crumbs.length - 1,
                  'text-[#4a4a4a] md:text-primary-foreground': index === crumbs.length - 1,
                })}
                to={crumb.path}
              >
                {crumb.label}
              </Link>
              {index !== crumbs.length - 1 && <ChevronRightIcon size={8} className="text-secondary md:text-primary-foreground/60 shrink-0 md:size-3" />}
            </React.Fragment>
          ))}
        </div>

        <h1 className="text-[30px] md:text-[72px] leading-[37.5px] md:leading-[90px] font-bold text-accent md:text-primary-foreground max-w-full md:max-w-200 mt-5.25 md:mt-6">
          Industrial Process Fluids
        </h1>

        <p className="hidden md:block text-2xl leading-[39px] text-secondary mt-6 max-w-200">
          Engineered formulations for thermal management, metalworking, and operational integrity.
        </p>

        <p className="md:hidden text-[16px] leading-[26px] text-[#4a4a4a] mt-4">
          Optimizing industrial performance through advanced chemical engineering and high-performance fluid technology for global processing facilities.
        </p>

        <p className="hidden md:block font-normal text-lg leading-[29.25px] text-primary-foreground/80 mt-6 max-w-175">
          Eunisell Chemicals provides a comprehensive range of high-performance process fluids designed to optimize efficiency, protect critical infrastructure, and ensure the
          highest standards of production quality in demanding industrial environments.
        </p>

        <div className="hidden md:flex flex-row items-center gap-x-6 mt-10">
          <Button
            onClick={() => navigate(paths.contact)}
            className="h-[62px] px-8 flex items-center justify-center bg-secondary text-lg leading-7 text-white font-bold rounded-[4px] capitalize"
          >
            Request Product Consultation
          </Button>
          <Button
            onClick={() => navigate(paths.chemicals)}
            className="h-[60px] px-8 flex items-center justify-center bg-transparent backdrop-blur-[2px] border border-white/30 text-lg leading-7 text-white font-bold rounded-[4px] capitalize"
          >
            Explore Product Groups
          </Button>
        </div>
      </div>

      {/* Mobile-only image below content */}
      <div className="md:hidden px-6 pt-6 pb-12 z-50 relative">
        <div className="relative h-60 overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
          <img src="/industrial-process-fluids/hero-mobile.png" alt="Industrial chemical plant pipes and processing equipment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-accent/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
