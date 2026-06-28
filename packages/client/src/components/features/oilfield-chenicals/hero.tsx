import React from 'react';
import BreadCrumbNavigation from '../../common/bread-crumb';

import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';
import { useNavigate } from 'react-router-dom';
import { scrollToView } from '../../../lib/utils';

const crumbs = [
  {
    path: paths.home,
    label: 'Home',
  },
  {
    path: paths.solutions,
    label: 'Solutions',
  },
  {
    path: paths.oilfield,
    label: 'Oilfield Chemicals',
  },
];

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section>
      {/* Mobile */}
      <div className="text-left md:hidden bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-accent via-accent/80 to-accent/50 z-0" />
        <div className="relative z-10 px-6 pt-16 pb-0 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-[12px] uppercase tracking-[1.4px] text-secondary">Oilfield Solutions</p>
            <BreadCrumbNavigation crumbs={crumbs} />
          </div>
          <h1 className="text-[36px] leading-11 text-white">Oilfield Chemicals</h1>
          <p className="text-[16px] leading-6.5 text-white/80">
            Specialty chemical solutions for production optimization, asset integrity, flow assurance, well intervention, and water treatment.
          </p>
          <div className="flex flex-col gap-3">
            <Button onClick={() => navigate(paths.contact)} className="w-full rounded-xs bg-secondary text-base h-12 flex items-center justify-center gap-x-2">
              Request Technical Consultation <ArrowRightIcon size={16} />
            </Button>
            <Button onClick={() => scrollToView('portfolio')} className="w-full rounded-xs bg-transparent border border-white/40 text-base h-12 text-white">
              Explore Oilfield Solutions
            </Button>
          </div>
        </div>
        <div className="relative z-10 mt-8 h-70">
          <img src="/oilfield-chemicals/hero.svg" alt="Oilfield operations" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block px-45 py-37.75 bg-[url(/oilfield-chemicals/hero.svg)] w-screen bg-cover bg-no-repeat relative">
        <div className="absolute z-10 bg-linear-to-r from-accent via-accent/80 to-accent/50 w-screen h-full top-0 left-0 right-0 bottom-0" />
        <div className="relative w-full text-left z-50">
          <div className="mb-2">
            <div className="uppercase font-bold text-secondary tracking-[1.4px] text-sm">Oilfield Solutions</div>
          </div>
          <BreadCrumbNavigation crumbs={crumbs} />
          <h1 className="leading-18 mt-6 max-w-152.25 text-primary-foreground font-extrabold text-[72px]">
            Oilfield <br /> Chemicals
          </h1>
          <p className="mt-7.25 max-w-2xl text-xl text-primary-foreground/80">
            Specialty chemical solutions for production optimization, asset integrity, flow assurance, well intervention, and water treatment across upstream oil and gas
            operations.
          </p>
          <div className="flex items-center mt-11 gap-x-4">
            <Button onClick={() => navigate(paths.contact)} className="rounded-xs bg-secondary font-bold text-base h-13 flex items-center gap-x-3 px-7">
              Request Technical Consultation <ArrowRightIcon />
            </Button>
            <Button onClick={() => scrollToView('portfolio')} className="rounded-xs bg-transparent border border-primary-foreground/40 font-bold text-base h-13 px-7">
              Explore Oilfield Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
