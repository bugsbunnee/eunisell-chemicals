import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRightIcon, ArrowRightIcon } from 'lucide-react';
import { paths } from '../../../../lib/data';

const heroImage = 'https://www.figma.com/api/mcp/asset/1e66e779-57e2-4cae-82b7-aa9116851cc5';

const crumbs = [
  { label: 'Home', to: paths.home },
  { label: 'Solutions', to: paths.solutions },
];

const IndustrialHero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-accent relative overflow-hidden px-30 py-24 flex items-center text-left">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative w-full">
        <div className="px-10 flex flex-col gap-6 max-w-[1560px]">
          <nav className="flex items-center gap-2">
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

          <h1 className="font-bold text-white text-[72px] leading-18 tracking-[-1.8px] max-w-4xl">
            Industrial &amp; Manufacturing
            <br />
            Chemicals
          </h1>

          <p className="text-[#afb1b3] text-[20px] leading-[32.5px] max-w-2xl">
            Enhancing production efficiency, protecting critical assets, and ensuring uncompromising product quality through advanced chemical
            engineering and specialty formulations.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link
              to={paths.contact}
              className="flex items-center gap-3 bg-secondary text-white font-bold text-sm uppercase tracking-[1.4px] px-8 py-[17px] hover:bg-secondary/90 transition-colors"
            >
              Talk to an Expert
              <ArrowRightIcon size={12} />
            </Link>
            <button
              onClick={() => navigate(paths.brochures)}
              className="border border-white/30 text-white font-bold text-sm uppercase tracking-[1.4px] px-8 py-4 hover:bg-white/10 transition-colors"
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
