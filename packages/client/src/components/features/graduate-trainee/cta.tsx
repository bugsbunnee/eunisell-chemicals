import type React from 'react';

import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

const CTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-accent">
      <div className="absolute inset-0 opacity-10">
        <img src="/graduate-trainee/decor-circle.svg" alt="" className="absolute -right-20 -top-20 size-125" />
        <img src="/graduate-trainee/decor-hex.svg" alt="" className="absolute -bottom-20 -left-20 w-100 h-125" />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden relative px-6 py-16 flex flex-col items-center gap-6 text-center">
        <h2 className="font-light text-[32px] leading-10 text-white">Ready to Begin Your Journey?</h2>
        <p className="font-light text-[17px] leading-7 text-white/70">
          Take the first step towards building a rewarding career with Eunisell. Explore opportunities. Apply. Grow with us.
        </p>

        <div className="flex flex-col gap-3 pt-2 w-full">
          <button
            onClick={() => navigate(paths.careers)}
            className="w-full h-14 bg-secondary text-white text-[16px] font-medium flex items-center justify-center rounded-xs transition-all hover:scale-105"
          >
            Apply Now
          </button>
          <button
            onClick={() => navigate(paths.careers)}
            className="w-full h-14 border border-white/30 text-white text-[16px] font-medium flex items-center justify-center rounded-xs transition-all hover:scale-105"
          >
            View Career Opportunities
          </button>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex relative flex-col items-center gap-8 px-15 py-32">
        <h2 className="font-light text-[48px] leading-12 text-white text-center">Ready to Begin Your Journey?</h2>

        <p className="font-light text-[20px] leading-7 text-white/70 text-center max-w-2xl">
          Take the first step towards building a rewarding career with Eunisell. Explore opportunities. Apply. Grow with us.
        </p>

        <div className="flex items-start justify-center gap-6 pt-4">
          <button
            onClick={() => navigate(paths.careers)}
            className="bg-secondary text-white text-[16px] font-medium px-12 py-5.25 rounded-xs hover:bg-secondary/90 transition-all hover:scale-105"
          >
            Apply Now
          </button>
          <button
            onClick={() => navigate(paths.careers)}
            className="border border-white/30 text-white text-[16px] font-medium px-12 py-5 rounded-xs hover:bg-white/10 transition-all hover:scale-105"
          >
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
