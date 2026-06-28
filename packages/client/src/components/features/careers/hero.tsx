import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { paths } from '../../../lib/data';
import { scrollToView } from '../../../lib/utils';

const CareersHero: React.FC = () => (
  <section>
    {/* Mobile */}
    <div className="md:hidden bg-white px-6 pt-12 pb-16 flex flex-col gap-8 text-left">
      <nav className="flex items-center gap-2">
        <Link to={paths.home} className="text-secondary text-[12px] tracking-[0.6px] uppercase">
          Home
        </Link>
        <ChevronRightIcon size={10} className="text-muted" />
        <span className="text-muted text-[12px] tracking-[0.6px] uppercase">Careers</span>
      </nav>

      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-accent text-[36px] leading-[39.6px] tracking-[-0.07px]">
          Catalyze Your
          <br />
          Industrial Career
        </h1>
        <p className="text-card-foreground text-[16px] leading-[25.6px]">
          Join the leading technical force providing specialized chemical solutions across Africa's energy and industrial sectors.
        </p>
        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={() => scrollToView('open-positions')}
            className="w-full h-13 bg-secondary text-white text-[16px] font-semibold flex items-center justify-center rounded-[4px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
          >
            View Openings
          </button>
          <button
            onClick={() => scrollToView('advantage')}
            className="w-full h-13 border border-secondary text-secondary text-[16px] flex items-center justify-center rounded-[4px]"
          >
            Our Culture
          </button>
        </div>
      </div>

      <div className="h-75 rounded-[12px] overflow-hidden">
        <img src="/careers/careers-hero.svg" alt="Eunisell laboratory" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Desktop */}
    <section className="hidden md:block bg-white py-24 px-30 text-left">
      <div className="grid grid-cols-2 gap-12 max-w-[1776px]">
        <div className="flex flex-col gap-0 shrink-0">
          <nav className="flex items-center gap-2 text-sm text-card-foreground mb-6">
            <Link to={paths.home} className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRightIcon size={10} className="text-card-foreground" />
            <span className="font-medium text-secondary">Careers</span>
          </nav>

          <p className="font-bold text-secondary text-sm uppercase tracking-[1.4px] mb-4">Careers</p>

          <h1 className="font-bold text-accent text-[64px] leading-[1.1] mb-6">
            Build a Career That
            <br />
            Supports Industry, Energy
            <br />
            and Innovation
          </h1>

          <p className="text-card-foreground text-[20px] leading-[1.625] max-w-150 mb-8">
            Join Eunisell Chemicals and become part of a legacy that powers the continent's most vital industries through chemistry and technical expertise.
          </p>

          <button
            onClick={() => scrollToView('open-positions')}
            className="inline-flex items-center justify-center bg-secondary text-white font-semibold text-[16px] px-8 py-[18px] rounded-[4px] hover:bg-secondary/90 transition-colors w-fit"
          >
            View Current Opportunities
          </button>
        </div>

        <div className="relative min-h-120 h-full">
          <div className="w-full h-full rounded-[12px] overflow-hidden">
            <img src="/careers/careers-hero.svg" alt="Eunisell laboratory professional" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-75 h-50 rounded-[12px] overflow-hidden border-8 border-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
            <img src="/careers/graduate.svg" alt="Eunisell field engineers" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default CareersHero;
