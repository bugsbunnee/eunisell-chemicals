import React from 'react';
import BreadCrumbNavigation from '../../common/bread-crumb';

import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';

const crumbs = [
  {
    path: paths.home,
    label: 'Home',
  },
  {
    path: paths.aboutUs,
    label: 'About Us',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="px-45 py-37.75 bg-[url(/solutions/solution-hero.svg)] w-screen bg-cover bg-no-repeat relative">
      <div className="absolute z-10 bg-linear-to-r from-accent via-accent/80 to-accent/50 w-screen h-full top-0 left-0 right-0 bottom-0"></div>
      <div className="relative w-full text-left z-50">
        <BreadCrumbNavigation crumbs={crumbs} />

        <div className="mt-8 uppercase font-bold text-secondary tracking-[4px] text-xs">About Enisell Chemicals</div>

        <h1 className="leading-19 mt-4 max-w-200 text-primary-foreground font-extrabold text-[72px]">
          Driving Performance Through Chemical Innovation
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-muted">
          Delivering specialized industrial chemicals, oilfield chemicals, laboratory services, and technical expertise that help businesses optimize
          operations and maximize performance across Africa.
        </p>

        <div className="flex items-center mt-12 gap-x-6">
          <Button className="rounded-xs bg-secondary font-bold text-base h-13 flex items-center gap-x-3 px-7">Explore Oilfield Solutions</Button>
          <Button className="rounded-xs bg-transparent border border-primary-foreground/40 font-bold text-base h-13 px-7">
            Request Technical Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
