import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-accent overflow-hidden text-left">
      <div className="relative px-6 pt-16 pb-10 md:py-[58.55px] md:px-30 flex items-center">
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
            <img src="/knowledge/knowledge-hero.svg" alt="Knowledge Hero" className="w-full h-full object-cover" />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-accent via-[#002037cc] via-50% to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1560px] mx-auto">
          <div className="max-w-200 flex flex-col gap-4 md:gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 md:w-12 h-px bg-secondary" />
              <span className="text-secondary text-xs md:text-sm font-semibold tracking-[2.4px] md:tracking-[2.8px] uppercase">
                Intellectual Capital
              </span>
            </div>

            <h1 className="text-white font-bold text-3xl leading-[37.5px] md:text-[64px] md:leading-[1.1]">
              Technical Knowledge for
              <br />
              Industrial and Energy
              <br />
              Performance
            </h1>

            <p className="text-[#cbd5e1] text-base leading-6.5 md:text-xl md:leading-relaxed md:max-w-160">
              Access our comprehensive repository of technical articles, industry insights, and product specifications designed to optimize your
              critical operations.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 pt-2 md:pt-4">
              <button className="h-12 md:h-auto bg-secondary text-white font-semibold text-base md:text-base px-8 md:py-4.25 rounded-xs">
                Browse Resources
              </button>
              <button className="h-12 md:h-auto border border-white/30 text-white font-semibold text-[16px] md:text-base px-8 md:py-4 rounded-xs">
                Search Library
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden h-64.25 overflow-hidden">
        <img src="/home/laboratory.svg" alt="" className="w-full h-[156%] object-cover mt-[-28%]" />
      </div>
    </section>
  );
};

export default Hero;
