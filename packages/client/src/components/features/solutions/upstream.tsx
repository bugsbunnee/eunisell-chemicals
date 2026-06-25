import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ShieldCheckIcon } from 'lucide-react';
import { specialties, paths } from '../../../lib/data';

const Upstream: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-accent px-20 py-24">
      <div className="flex gap-33.5 items-center">
        <div className="flex-1 text-left">
          <p className="font-black text-secondary text-[15px] uppercase tracking-[3px] leading-4">Upstream Portfolio</p>

          <h2 className="mt-8 font-bold text-white text-[48px] leading-15 max-w-100">Specialty Oilfield Solutions</h2>

          <p className="mt-8 text-white/65 text-[18px] leading-[29.25px] max-w-115">
            Our upstream portfolio is engineered to protect critical assets and maximize production in Africa's most challenging oil and gas
            environments.
          </p>

          <button
            onClick={() => navigate(paths.oilfield)}
            className="mt-8 flex items-center gap-3 bg-secondary text-white font-semibold text-[16px] h-14 px-7 rounded-xs hover:bg-secondary/90 transition-colors"
          >
            Explore Oilfield Chemicals
            <ArrowRightIcon size={12} />
          </button>

          <div className="mt-16 bg-white/5 border border-white/10 p-8 rounded-[8px] flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-lg bg-[#003e61] flex items-center justify-center shrink-0">
                <ShieldCheckIcon size={24} className="text-secondary" />
              </div>
              <div>
                <p className="font-bold text-white text-[16px] leading-6">Trusted by IOCs</p>
                <p className="text-white/40 text-[12px] leading-4">Operational Support for 30+ Years</p>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-secondary text-[20px] leading-7">24/7</p>
                <p className="text-white/40 text-[10px] uppercase tracking-[1px]">Field Support</p>
              </div>
              <div>
                <p className="font-bold text-secondary text-[20px] leading-7">100%</p>
                <p className="text-white/40 text-[10px] uppercase tracking-[1px]">Compliance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {specialties.map((specialty) => (
            <div key={specialty.title} className="bg-primary border border-white/10 rounded-[4px] p-8 flex flex-col gap-4 text-left">
              <p className="font-bold text-secondary text-[9px] uppercase tracking-[0.9px] leading-[13.5px]">{specialty.legend}</p>
              <h5 className="font-bold text-white text-[20px] leading-7">{specialty.title}</h5>
              <p className="text-white/50 text-[12px] leading-[19.5px]">{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upstream;
