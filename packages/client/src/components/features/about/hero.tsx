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
    <section className="px-30 py-37.75 w-screen bg-cover bg-no-repeat relative">
      <div className="absolute inset-0 opacity-40">
        <img src="/about/hero.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-accent via-accent via-30% to-transparent" />

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
