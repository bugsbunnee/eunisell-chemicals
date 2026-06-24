import React from 'react';

const ChemicalsHero: React.FC = () => {
  return (
    <section className="relative h-180 px-30 text-left bg-accent overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-40">
        <img src="/oilfield-chemicals/chemicals-hero.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-accent via-accent/80 to-transparent" />

      <div className="relative w-full max-w-360 mx-auto px-8">
        <div className="max-w-200 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-secondary text-sm font-bold uppercase tracking-[2px]">Our Chemicals</span>
            <div className="h-px w-10 bg-secondary" />
            <span className="text-white/60 text-sm">Home / Our Chemicals</span>
          </div>

          <h1 className="font-bold text-white text-[64px] leading-[1.1]">
            Specialty Chemical
            <br />
            Solutions for Industrial,
            <br />
            Energy and Water
            <br />
            Operations
          </h1>

          <p className="text-[#cbd5e1] text-[20px] leading-relaxed">
            Providing high-performance formulations and technical diagnostic support to
            <br />
            optimize complex industrial processes and maximize asset longevity.
          </p>

          <div className="flex items-center gap-4 pt-3">
            <button className="bg-secondary text-white font-semibold text-base px-8 py-4 rounded-[4px] hover:bg-secondary/90 transition-colors">
              Request Product Consultation
            </button>

            <button className="border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-[4px] hover:bg-white/10 transition-colors">
              Explore Chemical Categories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChemicalsHero;
