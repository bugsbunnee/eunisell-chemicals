import React from 'react';

const products = [
  { title: 'Heat Transfer Fluids', desc: 'Synthetic and mineral-based media for thermal stability.' },
  { title: 'Metalworking Fluids', desc: 'Coolants, cutting oils, and rust preventatives.' },
  { title: 'Gear & Hydraulic Oils', desc: 'High-viscosity formulations for heavy industrial assets.' },
  { title: 'Specialty Greases', desc: 'Extreme temperature and waterproof lubrication.' },
];

const ChemicalsIndustrialFluids: React.FC = () => {
  return (
    <section className="bg-background p-30 text-left">
      <div className="max-w-360 mx-auto flex gap-18 items-center">
        <div className="flex-1 h-150 rounded-[6px] overflow-hidden shrink-0">
          <img src="/oilfield-chemicals/process-fluids.svg" alt="Industrial manufacturing facility" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-secondary text-sm font-bold uppercase tracking-[1px]">Industrial Process Fluids</span>
            <h2 className="font-bold text-accent text-[48px] leading-tight">
              Precision Solutions for
              <br />
              Manufacturing Excellence
            </h2>
          </div>

          <p className="text-[#777] text-[18px] leading-relaxed">
            Our industrial fluids are formulated to withstand extreme pressure and temperature variations, ensuring your machinery operates at peak
            performance with minimal wear.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {products.map(({ title, desc }) => (
              <div key={title} className="flex flex-col gap-2">
                <h5 className="font-bold text-accent text-[16px] leading-normal">{title}</h5>
                <p className="text-[#777] text-sm leading-normal">{desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button className="bg-accent text-white font-semibold text-[16px] px-8 py-4 rounded-[4px] hover:bg-accent/90 transition-colors">
              View Full Product List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChemicalsIndustrialFluids;
