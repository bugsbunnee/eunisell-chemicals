import React from 'react';
import BreadCrumbNavigation from '../../common/bread-crumb';

import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  return (
    <section className="md:relative md:w-screen">
      <div className="relative bg-accent md:bg-transparent px-6 pt-12 pb-16 md:px-30 md:py-37.75">
        <div className="hidden md:block absolute inset-0 opacity-40">
          <img src="/about/hero.svg" alt="About" className="w-full h-full object-cover" />
        </div>

        <div className="hidden md:block absolute inset-0 bg-linear-to-r from-accent via-accent via-30% to-transparent" />

        <div className="relative w-full text-left z-40">
          <BreadCrumbNavigation crumbs={crumbs} />

          <div className="mt-8 uppercase font-bold text-secondary tracking-[3px] text-[10px] md:text-xs">About Eunisell Chemicals</div>

          <h1 className="leading-[43.2px] md:leading-19 mt-4 max-w-full md:max-w-200 text-primary-foreground font-extrabold text-[36px] md:text-[72px]">
            Driving Performance Through Chemical Innovation
          </h1>

          <p className="mt-6 md:mt-8 max-w-full md:max-w-2xl text-[16px] md:text-xl text-muted leading-[25.6px] md:leading-normal">
            Delivering specialized industrial chemicals, oilfield chemicals, laboratory services, and technical expertise that help businesses optimize operations and maximize
            performance across Africa.
          </p>

          <div className="flex flex-col md:flex-row items-stretch md:items-center mt-8 md:mt-12 gap-4 md:gap-x-6">
            <Button
              onClick={() => navigate(paths.solutions)}
              className="rounded-xs bg-secondary font-bold text-sm md:text-base h-13 md:h-13 md:flex md:items-center md:gap-x-3 md:px-7"
            >
              Explore Our Solutions
            </Button>
            <Button
              onClick={() => navigate(paths.contact)}
              className="rounded-xs bg-transparent border border-primary-foreground/40 font-bold text-sm md:text-base h-13 md:h-13 md:px-7"
            >
              Technical Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="md:hidden h-60 overflow-hidden">
        <img src="/about/hero.svg" alt="Industrial chemical plant" className="w-full h-[136%] object-cover mt-[-18%]" />
      </div>
    </section>
  );
};

export default Hero;
