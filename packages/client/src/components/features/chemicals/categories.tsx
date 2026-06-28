import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, WrenchIcon, SprayCanIcon, ActivityIcon } from 'lucide-react';
import { paths } from '../../../lib/data';

const waterFeatures = ['Cooling Tower Treatment', 'Boiler Water Chemicals', 'Effluent Management'];

const ChemicalsCategories: React.FC = () => {
  return (
    <section id="categories" className="bg-card py-20 px-30 text-left">
      <div className="max-w-360 mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-[2fr_1fr] gap-6 h-150">
          <div className="relative rounded-[6px] overflow-hidden">
            <img src="/oilfield-chemicals/oilfield-chemicals.svg" alt="Oilfield Chemicals" className="absolute inset-0 w-full h-full object-cover" />

            <div className="absolute inset-0 bg-linear-to-t from-accent/90 to-accent/0" />

            <div className="absolute bottom-0 left-0 right-0 p-12 flex flex-col gap-4">
              <span className="text-secondary text-[12px] font-bold uppercase tracking-[1px]">Specialty Upstream</span>

              <h3 className="font-bold text-white text-[40px] leading-normal">Oilfield Chemicals</h3>

              <p className="text-white/80 text-[16px] leading-normal max-w-125">
                Advanced flow assurance, production, and drilling chemicals for onshore and offshore energy operations.
              </p>

              <div className="flex gap-3 pt-3">
                {['Demulsifiers', 'Scale Inhibitors', 'Biocides'].map((tag) => (
                  <span key={tag} className="bg-white/10 text-white text-[12px] px-3 py-1 rounded-[2px]">
                    {tag}
                  </span>
                ))}
              </div>

              <Link to={paths.oilfield} className="inline-flex items-center gap-2 text-secondary font-bold text-base uppercase pt-6 hover:gap-3 transition-all">
                Explore Category <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>

          <div className="bg-sidebar-primary rounded-[6px] overflow-hidden p-10 flex flex-col">
            <div className="flex-1 flex flex-col gap-3">
              <span className="text-white/60 text-[12px] font-bold uppercase tracking-[1px]">Process Integrity</span>

              <h3 className="font-bold text-white text-[32px] leading-normal">Water Solutions</h3>

              <p className="text-white/80 text-[16px] leading-normal">Comprehensive treatment for boiler, cooling, and reverse osmosis systems to ensure water quality.</p>

              <ul className="flex flex-col gap-3 mt-5">
                {waterFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckIcon size={14} className="text-white shrink-0" />
                    <span className="text-white/90 text-[16px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-45 rounded-[4px] overflow-hidden mt-4">
              <img src="/oilfield-chemicals/water-solution.svg" alt="Water treatment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <Link to={paths.industrial} className="bg-background border border-input rounded-[6px] p-10 flex flex-col h-112.5 group hover:border-secondary/30 transition-colors">
            <div className="mb-6">
              <div className="bg-card w-12 h-12 flex items-center justify-center">
                <WrenchIcon size={20} className="text-secondary" />
              </div>
            </div>

            <h3 className="font-bold text-accent text-[24px] leading-normal mb-3">Industrial Process Fluids</h3>

            <p className="text-[#777] text-[16px] leading-normal flex-1">Specialized lubricants, heat transfer fluids, and metalworking additives for manufacturing efficiency.</p>

            <div className="flex items-center justify-between pt-6 border-t border-input">
              <span className="font-semibold text-accent text-sm group-hover:text-secondary transition-colors">Learn More</span>
              <ArrowRightIcon size={12} className="text-accent group-hover:text-secondary transition-colors" />
            </div>
          </Link>

          <Link to={paths.industrial} className="bg-background border border-input rounded-[6px] p-10 flex flex-col h-112.5 group hover:border-secondary/30 transition-colors">
            <div className="mb-6">
              <div className="bg-card w-12 h-12 flex items-center justify-center">
                <SprayCanIcon size={20} className="text-secondary" />
              </div>
            </div>

            <h3 className="font-bold text-accent text-[24px] leading-normal mb-3">Cleaning & Hygiene</h3>

            <p className="text-[#777] text-[16px] leading-normal flex-1">Food-grade sanitizers, heavy-duty industrial cleaners, and surface disinfection protocols.</p>

            <div className="flex items-center justify-between pt-6 border-t border-input">
              <span className="font-semibold text-accent text-sm group-hover:text-secondary transition-colors">Learn More</span>
              <ArrowRightIcon size={12} className="text-accent group-hover:text-secondary transition-colors" />
            </div>
          </Link>

          <Link to={paths.technical} className="bg-accent rounded-[6px] p-10 flex flex-col h-112.5 group hover:bg-accent/90 transition-colors">
            <div className="mb-6">
              <div className="bg-white/10 w-12 h-12 flex items-center justify-center">
                <ActivityIcon size={20} className="text-white" />
              </div>
            </div>

            <h3 className="font-bold text-white text-[24px] leading-normal mb-3">Fluid Condition Monitoring</h3>

            <p className="text-white/60 text-[16px] leading-normal flex-1">Predictive laboratory analysis for oil, fuel, and chemical health to mitigate mechanical failure.</p>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="font-semibold text-white text-sm">View Lab Services</span>
              <ArrowRightIcon size={12} className="text-white" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChemicalsCategories;
