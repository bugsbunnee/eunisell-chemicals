import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-[58.55px] px-30 bg-accent overflow-hidden text-left flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
          <img src="/home/laboratory.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-accent via-[#002037cc] via-50% to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1560px] mx-auto">
        <div className="max-w-200 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-secondary" />
            <span className="text-secondary text-sm font-semibold tracking-[2.8px] uppercase">Intellectual Capital</span>
          </div>

          <h1 className="text-white font-bold text-[64px] leading-[1.1]">
            Technical Knowledge for
            <br />
            Industrial and Energy
            <br />
            Performance
          </h1>

          <p className="text-[#cbd5e1] text-xl leading-relaxed max-w-160">
            Access our comprehensive repository of technical articles, industry insights, and product specifications designed to optimize your
            critical operations.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="bg-secondary text-white font-semibold text-base px-8 py-4.25 rounded-xs">Browse All Resources</button>
            <button className="border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xs">Search Library</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
