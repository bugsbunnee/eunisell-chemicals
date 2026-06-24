import React from 'react';
import BreadCrumbNavigation from '../../common/bread-crumb';

import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const crumbs = [
  { path: paths.home, label: 'Home' },
  { path: paths.knowledge, label: 'Knowledge Centre' },
  { path: paths.brochures, label: 'Product Brochures' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative bg-accent text-white flex items-center px-6 md:px-30 py-[75px] md:py-26.25 min-h-[600px] md:min-h-0 overflow-hidden text-left">
      <div className="absolute inset-0 opacity-40">
        <img src="/brochures/hero.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-[rgba(0,32,55,0.6)] via-[#002037] via-50% to-[#002037] md:bg-linear-to-r md:from-accent md:via-[rgba(0,32,55,0.8)] md:via-50% md:to-transparent" />

      <div className="relative z-10 w-full max-w-360 mx-auto">
        <div className="max-w-full md:max-w-200 flex flex-col gap-5 md:gap-6">
          <BreadCrumbNavigation crumbs={crumbs} />

          <div className="font-bold text-xs md:text-sm uppercase tracking-[2.4px] md:tracking-[2.8px] leading-[18px] md:leading-5 text-secondary">
            Product Brochures
          </div>

          <div className="space-y-3 md:space-y-4">
            <h1 className="font-bold text-[36px] md:text-[60px] leading-[45px] md:leading-15 text-white">
              <span className="md:hidden">
                Download
                <br />
                Chemicals
                <br />
                Brochures
              </span>
              <span className="hidden md:inline">
                Download Eunisell
                <br />
                Chemicals Brochures
              </span>
            </h1>

            <p className="text-base md:text-xl text-white/80 leading-[26px] md:leading-[32.5px] max-w-full md:max-w-160">
              Access our comprehensive library of technical documentation and industrial chemical solutions.
              <span className="hidden md:inline"> Detailed insights for global engineering and procurement teams.</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-stretch md:items-center pt-4">
            <Link
              to={paths.contact}
              className="bg-secondary text-white font-bold text-sm md:text-base text-center py-4 md:py-5 md:px-10 rounded-[4px] whitespace-nowrap"
            >
              <span className="md:hidden">Request Consultation</span>
              <span className="hidden md:inline">Request Technical Consultation</span>
            </Link>

            <Link
              to={paths.contact}
              className="border border-white text-white font-bold text-sm md:text-base text-center py-4 md:py-5 md:px-10 rounded-[4px] whitespace-nowrap"
            >
              <span className="md:hidden">Product Support</span>
              <span className="hidden md:inline">Contact Product Support</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
