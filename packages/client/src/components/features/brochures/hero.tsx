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
    <section className="relative bg-accent text-white flex items-center px-30 py-26.25 overflow-hidden text-left">
      <div className="absolute inset-0 opacity-40">
        <img src="/brochures/hero.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-accent via-[rgba(0,32,55,0.8)] via-50% to-transparent" />

      <div className="relative z-10 w-full max-w-360 mx-auto">
        <div className="max-w-200 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <BreadCrumbNavigation crumbs={crumbs} />
          </div>

          <div className="font-bold text-sm uppercase tracking-[2.8px] leading-5 text-secondary">Product Brochures</div>

          <div className="space-y-4">
            <h1 className="font-bold text-[60px] leading-15 text-white">
              Download Eunisell
              <br />
              Chemicals Brochures
            </h1>

            <p className="text-xl text-white/80 leading-[32.5px] max-w-160">
              Access our comprehensive library of technical documentation, corporate profiles, and industrial chemical solutions. Detailed insights
              for global engineering and procurement teams.
            </p>
          </div>

          <div className="flex gap-6 items-center pt-4">
            <Link to={paths.contact} className="bg-secondary text-white font-bold leading-6 text-base px-10 py-5 rounded-[4px] whitespace-nowrap">
              Request Technical Consultation
            </Link>

            <Link
              to={paths.contact}
              className="bg-transparent border border-white text-white font-bold leading-6 text-base px-10 py-5 rounded-[4px] whitespace-nowrap"
            >
              Contact Product Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
