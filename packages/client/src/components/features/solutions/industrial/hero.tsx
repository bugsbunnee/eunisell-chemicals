import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRightIcon, ArrowRightIcon, SettingsIcon } from 'lucide-react';
import { paths } from '../../../../lib/data';

const crumbs = [
  { label: 'Home', to: paths.home },
  { label: 'Solutions', to: paths.solutions },
];

const IndustrialHero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-accent relative overflow-hidden h-150 md:h-auto flex items-end md:items-center px-6 md:px-30 pb-16 md:pb-24 md:pt-24 text-left">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <img src="/solution-detail/hero-mobile.png" alt="" className="md:hidden w-full h-full object-cover" />
        <img src="/solution-detail/hero.png" alt="" className="hidden md:block w-full h-full object-cover" />
      </div>
      <div className="md:hidden absolute inset-0 bg-linear-to-t from-accent via-accent/60 to-transparent pointer-events-none" />
      <div className="md:hidden absolute -right-5 top-10 opacity-20 pointer-events-none">
        <SettingsIcon size={192} className="text-white" strokeWidth={1} />
      </div>

      <div className="relative w-full">
        <div className="md:px-10 flex flex-col gap-4 md:gap-6 max-w-[1560px]">
          <nav className="hidden md:flex items-center gap-2">
            {crumbs.map(({ label, to }) => (
              <React.Fragment key={label}>
                <Link to={to} className="text-[#afb1b3] text-sm font-medium hover:text-white transition-colors">
                  {label}
                </Link>
                <ChevronRightIcon size={10} className="text-[#afb1b3]" />
              </React.Fragment>
            ))}
            <span className="text-secondary text-sm font-medium">Industrial &amp; Manufacturing Chemicals</span>
          </nav>

          <div className="md:hidden w-12 h-1 bg-secondary" />

          <h1 className="font-bold text-white text-[36px] md:text-[72px] leading-[45px] md:leading-18 md:tracking-[-1.8px] max-w-4xl">
            Industrial &amp; Manufacturing
            <br className="hidden md:block" /> Chemicals
          </h1>

          <p className="text-[#afb1b3] text-[16px] md:text-[20px] leading-[26px] md:leading-[32.5px] max-w-2xl">
            Enhancing production efficiency, protecting critical assets, and ensuring uncompromising product quality through advanced chemical engineering and specialty
            formulations.
          </p>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 pt-4">
            <Link
              to={paths.contact}
              className="flex items-center justify-center md:justify-start gap-3 h-14 md:h-auto bg-secondary text-white font-bold text-xs md:text-sm uppercase tracking-[1.2px] md:tracking-[1.4px] px-8 md:py-[17px] hover:bg-secondary/90 transition-colors"
            >
              Talk to an Expert
              <ArrowRightIcon size={12} />
            </Link>
            <button
              onClick={() => navigate(paths.brochures)}
              className="flex items-center justify-center h-14 md:h-auto border border-white/30 text-white font-bold text-xs md:text-sm uppercase tracking-[1.2px] md:tracking-[1.4px] px-8 md:py-4 hover:bg-white/10 transition-colors"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialHero;
