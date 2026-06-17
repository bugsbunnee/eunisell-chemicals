import React from 'react';
import BreadCrumbNavigation from '../../common/bread-crumb';

import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';

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
  return (
    <section className="px-45 py-37.75 bg-[url(/solutions/solution-hero.svg)] w-screen bg-cover bg-no-repeat relative">
      <div className="absolute z-10 bg-linear-to-r from-accent via-accent/80 to-accent/50 w-screen h-full top-0 left-0 right-0 bottom-0"></div>
      <div className="relative w-full text-left z-50">
        <div className="mb-2">
          <div className="uppercase font-bold text-secondary tracking-[1.4px] text-sm">Oilfield Solutions</div>
        </div>

        <BreadCrumbNavigation crumbs={crumbs} />

        <h1 className="leading-18 mt-6 max-w-152.25 text-primary-foreground font-extrabold text-[72px]">
          Oilfield <br /> Chemicals
        </h1>

        <p className="mt-7.25 max-w-2xl text-xl text-primary-foreground/80">
          Specialty chemical solutions for production optimization, asset integrity, flow assurance, well intervention, and water treatment across
          upstream oil and gas operations.
        </p>

        <div className="flex items-center mt-11 gap-x-4">
          <Button className="rounded-xs bg-secondary font-bold text-base h-13 flex items-center gap-x-3 px-7">
            Request Technical Consultation <ArrowRightIcon />
          </Button>
          <Button className="rounded-xs bg-transparent border border-primary-foreground/40 font-bold text-base h-13 px-7">
            Explore Oilfield Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
