import React from 'react';

import { ArrowRightIcon, ChevronRightIcon, CircleIcon, DropletIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const chemicals = ['Production Chemicals', 'Drilling Chemicals', 'Flow Assurance Chemicals', 'Pipeline Integrity Chemicals', 'Water Management Chemicals'];

const tags = ['Heat Transfer Fluids', 'Metalworking Fluids', 'Process Chemicals', 'Refrigeration & Cooling Fluids', 'Specialty Process Fluids'];

const hygienes = ['General Cleaning', 'Disinfection', 'Food & Beverage', 'Healthcare'];

const OurChemicals: React.FC = () => {
  return (
    <section className="px-6 py-12 md:p-30 bg-background text-left">
      <div>
        <div className="flex items-center gap-x-3 md:gap-x-4">
          <div className="h-0.5 w-6 md:h-1 md:w-10 bg-secondary shrink-0"></div>
          <div className="font-black text-[15px] text-secondary uppercase leading-3 tracking-[3px]">OUR CHEMICALS</div>
        </div>

        <div className="mt-4 md:mt-5 font-extrabold text-[32px] md:text-[56px] leading-10 md:leading-16 text-accent max-w-full md:max-w-[50%]">Specialty Chemical Solutions</div>

        <p className="text-[16px] md:text-lg leading-6.5 md:leading-8 font-normal text-accent/70 max-w-full md:max-w-[50%] mt-4 md:mt-7">
          Explore our portfolio of industrial process fluids, cleaning and hygiene chemicals, oilfield chemicals, and fluid monitoring services designed for operational excellence.
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-6 md:gap-x-8 mt-6 md:mt-20">
        <div className="min-h-130 md:min-h-180 rounded-[4px] overflow-hidden relative bg-accent flex flex-col justify-end">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <img src="/home/oilfield-chemicals.svg" alt="" className="h-full w-full object-cover" />
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-accent via-accent/40 to-accent/0 pointer-events-none" />

          <div className="relative z-10 p-6 md:p-15 flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div className="w-11 h-11 bg-white/10 backdrop-blur-[6px] border border-secondary/30 rounded-[4px] flex items-center justify-center">
                <CircleIcon className="text-secondary/40" />
              </div>
              <div className="text-xs leading-4.5 tracking-[2px] text-secondary uppercase font-bold">Energy Sector</div>
            </div>

            <div className="font-bold text-[28px] md:text-[42px] leading-8.5 md:leading-12 text-white">Oilfield Chemicals</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[12.5px]">
              {chemicals.map((tag) => (
                <div key={tag} className="flex items-center gap-x-2.5 md:gap-x-4">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div>
                  <div className="font-normal text-sm md:text-[15px] leading-5.25 md:leading-[22.5px] text-white/80 capitalize">{tag}</div>
                </div>
              ))}
            </div>

            <div className="pt-5">
              <Link to={paths.oilfield} className="text-sm md:text-base leading-6 uppercase font-semibold text-white flex items-center gap-x-2">
                Explore Energy Solutions <ChevronRightIcon size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border border-border bg-accent-bg rounded-[4px] overflow-hidden">
          <div className="h-50 md:h-77.25">
            <img src="/home/industrial-process-fluids.svg" alt="Industrial Process Fluids" className="w-full h-full object-cover" />
          </div>

          <div className="p-6 md:p-10">
            <div className="w-11 h-11 bg-secondary rounded-[4px] flex items-center justify-center">
              <CircleIcon className="text-white" />
            </div>

            <div className="text-[22px] md:text-[28px] leading-8 md:leading-10.5 mt-4 md:mt-5 text-accent font-bold">Industrial Process Fluids</div>

            <ul className="mt-4 md:mt-5 space-y-2 md:space-y-3 list-disc ml-4 mb-6 md:mb-[35.5px]">
              {tags.map((tag) => (
                <li key={tag} className="text-sm md:text-sm font-normal text-accent/60 leading-5.25 md:leading-5.25">
                  {tag}
                </li>
              ))}
            </ul>

            <Link to={paths.aboutUs} className="font-bold text-[12px] md:text-[13px] tracking-[1px] leading-[19.5px] uppercase flex items-center gap-x-1 text-secondary">
              Learn More <ArrowRightIcon size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 mt-6 md:mt-8 gap-6 md:gap-x-8">
        <div className="border border-border flex flex-col rounded-sm overflow-hidden">
          <div className="h-50 md:h-60">
            <img src="/home/cleaning-hygiene.svg" className="h-full w-full object-cover" />
          </div>

          <div className="p-6 md:p-8 text-left flex flex-col flex-1">
            <div className="flex-1">
              <div className="text-[22px] md:text-2xl leading-8.25 md:leading-9 font-bold capitalize text-accent text-left">Cleaning &amp; Hygiene</div>

              <div className="flex items-center flex-wrap gap-2 mt-3 md:mt-4">
                {hygienes.map((hygiene) => (
                  <div
                    key={hygiene}
                    className="bg-accent-bg border border-[#D1D5DB] rounded-[2px] px-2 md:px-3 py-1 text-[10px] md:text-[11px] font-medium leading-[15px] md:leading-[16.5px] text-accent"
                  >
                    {hygiene}
                  </div>
                ))}
              </div>

              <p className="mt-4 md:mt-6 text-accent/60 font-normal text-sm md:text-sm leading-5.5 md:leading-6 mb-4 md:mb-6">
                Comprehensive hygiene solutions for high-risk industrial and healthcare environments.
              </p>
            </div>

            <div className="mt-auto">
              <Link to={paths.aboutUs} className="text-[12px] md:text-[13px] text-secondary leading-4.75 tracking-[1px] font-bold flex items-center gap-x-1 uppercase">
                View Range <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-[4px] flex flex-col overflow-hidden p-8 md:p-10 bg-[url(/home/water-solutions.svg)] bg-cover bg-no-repeat relative min-h-[300px] md:min-h-0">
          <div className="absolute z-10 top-0 right-0 left-0 bottom-0 bg-accent/60"></div>

          <div className="w-10 h-10 z-50 rounded-[4px] relative border border-white flex items-center justify-center">
            <DropletIcon className="text-white" />
          </div>

          <div className="my-5 md:my-6 text-[22px] md:text-2xl leading-8.25 md:leading-9 text-white font-bold z-50 relative">Water Solutions</div>

          <div className="bg-white/18 z-50 relative border border-white/38 rounded-[4px] p-4">
            <div className="font-semibold text-[13px] md:text-sm leading-5.25 text-white">Boiler & Cooling Water</div>
            <div className="font-normal text-[11px] md:text-xs leading-4.5 text-white">Optimizing thermal efficiency and asset life.</div>
          </div>

          <div className="bg-white/18 z-50 relative border border-white/38 rounded-[4px] p-4 mt-4">
            <div className="font-semibold text-[13px] md:text-sm leading-5.25 text-white">RO & Membrane Treatment</div>
            <div className="font-normal text-[11px] md:text-xs leading-4.5 text-white">Advanced filtration and scaling prevention.</div>
          </div>

          <Link to="/" className="font-bold text-[12px] md:text-[13px] z-50 relative mt-auto text-white leading-[19.5px] tracking-[1px] uppercase flex items-center gap-x-2 pt-6">
            Explore Solutions <ArrowRightIcon />
          </Link>
        </div>

        <div className="border border-border rounded-sm overflow-hidden">
          <div className="h-50 md:h-60">
            <img src="/home/monitoring.png" className="h-full w-full object-cover" />
          </div>

          <div className="p-6 md:p-8 text-left flex flex-col">
            <div className="flex items-center gap-x-2">
              <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
              <div className="uppercase font-bold text-[10px] md:text-[11px] tracking-[1px] leading-[16.5px] text-accent/40">Live Diagnostics</div>
            </div>

            <div className="text-[22px] md:text-2xl leading-8.25 md:leading-9 font-bold capitalize text-accent text-left mt-3">Fluid Condition Monitoring</div>

            <p className="mt-4 md:mt-6 text-accent/60 font-normal text-sm md:text-sm leading-5.5 md:leading-6 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-b-border">
              Real-time analysis and predictive maintenance through advanced laboratory testing.
            </p>

            <div>
              <div className="flex items-center justify-between">
                <div className="text-accent/60 font-normal text-[13px] md:text-sm leading-6">Wear Debris Analysis</div>
                <div className="text-secondary tracking-[0.5px] font-bold text-[13px] md:text-sm leading-6">ISO Certified</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-accent/60 font-normal text-[13px] md:text-sm leading-6">Contamination Monitoring</div>
                <div className="text-secondary tracking-[0.5px] font-bold text-[13px] md:text-sm leading-6">ASLE Stds</div>
              </div>
            </div>

            <div className="mt-6 md:mt-9">
              <Link to={paths.aboutUs} className="text-[12px] md:text-[13px] text-secondary leading-4.75 tracking-[1px] font-bold flex items-center gap-x-1 uppercase">
                Service Details <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurChemicals;
