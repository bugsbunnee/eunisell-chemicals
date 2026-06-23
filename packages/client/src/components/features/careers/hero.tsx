import React from 'react';
import { ChevronRightIcon } from 'lucide-react';

const CareersHero: React.FC = () => (
  <section className="bg-white py-24 px-30 text-left">
    <div className="grid grid-cols-2 gap-12 max-w-[1776px]">
      <div className="flex flex-col gap-0 shrink-0">
        <nav className="flex items-center gap-2 text-[14px] text-card-foreground mb-6">
          <a href="/" className="hover:text-foreground transition-colors">
            Home
          </a>
          <ChevronRightIcon size={10} className="text-card-foreground" />
          <span className="font-medium text-secondary">Careers</span>
        </nav>

        <p className="font-bold text-secondary text-[14px] uppercase tracking-[1.4px] mb-4">Careers</p>

        <h1 className="font-bold text-accent text-[64px] leading-[1.1] mb-6">
          Build a Career That
          <br />
          Supports Industry, Energy
          <br />
          and Innovation
        </h1>

        <p className="text-card-foreground text-[20px] leading-[1.625] max-w-[600px] mb-8">
          Join Eunisell Chemicals and become part of a legacy that powers the continent's most vital industries through chemistry and technical
          expertise.
        </p>

        <a
          href="#open-positions"
          className="inline-flex items-center justify-center bg-secondary text-white font-semibold text-[16px] px-8 py-[18px] rounded-[4px] hover:bg-secondary/90 transition-colors w-fit"
        >
          View Current Opportunities
        </a>
      </div>

      <div className="relative h-160 shrink-0">
        <div className="w-full h-full rounded-[12px] overflow-hidden">
          <img
            src="https://www.figma.com/api/mcp/asset/fa48f77a-7c2e-45f9-9082-44bc0530c151"
            alt="Eunisell laboratory professional"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-6 -left-6 w-75 h-50 rounded-[12px] overflow-hidden border-8 border-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <img
            src="https://www.figma.com/api/mcp/asset/a143417e-6fac-4766-938e-b961cb8ba1f3"
            alt="Eunisell field engineers"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CareersHero;
