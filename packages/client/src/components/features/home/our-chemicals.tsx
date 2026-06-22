import React from 'react';

import { ArrowRightIcon, ChevronRightIcon, CircleIcon, DropletIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const chemicals = [
  'Production Chemicals',
  'Drilling Chemicals',
  'Flow Assurance Chemicals',
  'Pipeline Integrity Chemicals',
  'Water Management Chemicals',
];

const tags = ['Heat Transfer Fluids', 'Metalworking Fluids', 'Process Chemicals', 'Refrigeration & Cooling Fluids', 'Specialty Process Fluids'];

const hygienes = ['General Cleaning', 'Disinfection', 'Food & Beverage', 'Healthcare'];

const OurChemicals: React.FC = () => {
  return (
    <section className="p-30 bg-background text-left">
      <div>
        <div className="flex items-center gap-x-4">
          <div className="h-1 w-10 bg-secondary"></div>
          <div className="font-black text-[15px] text-secondary uppercase leading-3 tracking-[3px]">OUR CHEMICALS</div>
        </div>

        <div className="mt-5 font-extrabold text-[56px] leading-16 text-accent max-w-[50%]">
          Specialty Chemical Solutions for Industrial, Energy and Water Operations
        </div>

        <p className="text-lg leading-8 font-normal text-accent/70 max-w-[50%] mt-7">
          Explore Eunisell Chemicals’ portfolio of industrial process fluids, cleaning and hygiene chemicals, water treatment solutions, oilfield
          chemicals, and fluid condition monitoring services designed to support performance, reliability, safety, and operational efficiency.
        </p>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-x-8 mt-20">
        <div className="min-h-180 rounded-[4px] overflow-hidden relative">
          <img src="/home/oilfield-chemicals.svg" alt="Oilfield Chemicals" className="h-full w-full object-cover z-10 relative" />

          <div className="absolute top-0 bottom-0 left-0 right-0 bg-accent/75 z-20"></div>

          <div className="absolute bottom-4 z-50 ml-15 mb-15">
            <div className="flex items-center gap-x-3">
              <div className="w-11 h-11 bg-background border border-secondary/30 rounded-[4px] flex items-center justify-center">
                <CircleIcon className="text-secondary/30" />
              </div>
              <div className="text-xs leading-4.5 tracking-[2px] text-secondary uppercase font-bold">Energy Sector</div>
            </div>

            <div className="font-bold text-[42px] leading-12 mt-6 text-white">Oilfield Chemicals</div>

            <div className="mt-6 grid grid-cols-2 gap-[12.5px]">
              {chemicals.map((tag) => (
                <div className="flex items-center gap-x-2.5">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <div className="font-normal text-[15px] leading-[22.5px] text-white/80 capitalize">{tag}</div>
                </div>
              ))}
            </div>

            <div className="mt-11">
              <Link to="" className="text-base leading-6 uppercase font-semibold text-white flex items-center gap-x-2">
                Explore Energy Solutions <ChevronRightIcon size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border border-border bg-accent-bg rounded-[4px] overflow-hidden">
          <div className="h-77.25">
            <img src="/home/industrial-process-fluids.svg" alt="Industrial Process Fluids" className="w-full h-full object-cover" />
          </div>

          <div className="p-10">
            <div className="w-11 h-11 bg-secondary rounded-[4px] flex items-center justify-center">
              <CircleIcon className="text-white" />
            </div>

            <div className="text-[28px] leading-10.5 mt-5 text-accent font-bold">Industrial Process Fluids</div>

            <ul className="mt-5 space-y-3 list-disc ml-4 mb-[35.5px]">
              {tags.map((tag) => (
                <li className="text-sm font-normal text-accent/60 leading-5.25">{tag}</li>
              ))}
            </ul>

            <Link
              to={paths.aboutUs}
              className="font-bold text-[13px] tracking-[1px] leading-[19.5px] uppercase flex items-center gap-x-1 text-secondary"
            >
              Learn More <ArrowRightIcon size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-8 gap-x-8">
        <div className="border border-border flex flex-col rounded-sm overflow-hidden">
          <div className="h-60">
            <img src="/home/cleaning-hygiene.svg" className="h-full w-full object-cover" />
          </div>

          <div className="p-8 text-left flex flex-col flex-1">
            <div className="flex-1">
              <div className="text-2xl leading-9 font-bold capitalize text-accent text-left">Cleaning & Hygiene</div>

              <div className="flex items-center flex-wrap gap-2 mt-4">
                {hygienes.map((hygiene) => (
                  <div
                    key={hygiene}
                    className="bg-accent-bg border border-[#D1D5DB] rounded-[2px] px-3 py-1 text-[11px] font-medium leading-[16.5px] text-accent"
                  >
                    {hygiene}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-accent/60 font-normal text-sm leading-6 mb-6">
                Comprehensive hygiene solutions for high-risk industrial and healthcare environments.
              </p>
            </div>

            <div className="mt-auto">
              <Link
                to={paths.aboutUs}
                className="text-[13px] text-secondary leading-4.75 tracking-[1px] font-bold flex items-center gap-x-1 uppercase"
              >
                View Range <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-[4px] flex flex-col overflow-hidden p-10 bg-[url(/home/water-solutions.svg)] bg-cover bg-no-repeat relative">
          <div className="absolute z-10 top-0 right-0 left-0 bottom-0 bg-accent/60"></div>

          <div className="w-10 h-10 z-50 rounded-[4px] relative border border-white flex items-center justify-center">
            <DropletIcon className="text-white" />
          </div>

          <div className="my-6 text-2xl leading-9 text-white font-bold z-50 relative">Water Solutions</div>

          <div className="bg-white/18 z-50 relative border border-white/38 rounded-[4px] p-4">
            <div className="font-semibold text-sm leading-5.25 text-white">Boiler & Cooling Water</div>
            <div className="font-normal text-xs leading-4.5 text-white">Optimizing thermal efficiency and asset life.</div>
          </div>

          <div className="bg-white/18 z-50 relative border border-white/38 rounded-[4px] p-4 mt-4">
            <div className="font-semibold text-sm leading-5.25 text-white">RO & Membrane Treatment</div>
            <div className="font-normal text-xs leading-4.5 text-white">Advanced filtration and scaling prevention.</div>
          </div>

          <Link
            to="/"
            className="font-bold text-[13px] z-50 relative mt-auto text-white leading-[19.5px] tracking-[1px] uppercase flex items-center gap-x-2"
          >
            Explore Solutions <ArrowRightIcon className="" />
          </Link>
        </div>

        <div className="border border-border rounded-sm overflow-hidden">
          <div className="h-60">
            <img src="/home/monitoring.svg" className="h-full w-full object-cover" />
          </div>

          <div className="p-8 text-left flex flex-col">
            <div className="flex items-center gap-x-2">
              <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
              <div className="uppercase font-bold text-[11px] tracking-[1px] leading-[16.5px] text-accent/40">Live Diagnostics</div>
            </div>

            <div className="text-2xl leading-9 font-bold capitalize text-accent text-left mt-3">Fluid Condition Monitoring</div>

            <p className="mt-6 text-accent/60 font-normal text-sm leading-6 mb-6 pb-6 border-b border-b-border">
              Real-time analysis and predictive maintenance through advanced laboratory testing.
            </p>

            <div>
              <div className="flex items-center justify-between">
                <div className="text-accent/60 font-normal text-sm leading-6">Wear Debris Analysis</div>

                <div className="text-secondary tracking-[0.5px] font-bold text-sm leading-6">ISO Certified</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-accent/60 font-normal text-sm leading-6">Contamination Monitoring</div>

                <div className="text-secondary tracking-[0.5px] font-bold text-sm leading-6">ASLE Stds</div>
              </div>
            </div>

            <div className="mt-9">
              <Link
                to={paths.aboutUs}
                className="text-[13px] text-secondary leading-4.75 tracking-[1px] font-bold flex items-center gap-x-1 uppercase"
              >
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
