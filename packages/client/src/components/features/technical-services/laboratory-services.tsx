import React from 'react';

import { ArrowRightIcon, HexagonIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Water Analysis',
    description: 'Full ion analysis and scaling potential prediction.',
  },
  {
    title: 'Crude Oil Assay',
    description: 'Characterization of hydrocarbon components and properties.',
  },
  {
    title: 'Corrosion Testing',
    description: 'Weight loss coupons and electrochemical evaluation.',
  },
  {
    title: 'Microbial Studies',
    description: 'SRB and APB monitoring for biocide optimization.',
  },
  {
    title: 'Wax & Asphaltenes',
    description: 'Deposition studies and inhibitor screening tests.',
  },
  {
    title: 'Fluid Compatibility',
    description: 'Assessing interactions between chemicals and formation fluids.',
  },
];

const LaboratoryServices: React.FC = () => {
  return (
    <section className="bg-card px-6 py-16 md:px-30 md:py-24 space-y-10 md:space-y-16">
      <div className="space-y-3 md:space-y-4 items-center w-full">
        <h2 className="font-bold text-accent text-[26px] md:text-[30px] text-center leading-8 md:leading-9">Laboratory Services</h2>
        <p className="max-w-2xl mx-auto font-normal text-card-foreground text-sm md:text-base text-center leading-6">
          Precision testing and analysis in our state-of-the-art facilities to ensure chemical efficacy and asset integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-[8px] p-6 md:p-10 shadow-sm text-left relative">
            <HexagonIcon size={20} className="text-border absolute top-4 right-4 md:hidden" />
            <div className="hidden md:block mb-6 text-secondary">
              <HexagonIcon size={30} />
            </div>

            <h5 className="font-bold text-accent text-[16px] md:text-lg leading-6 mb-2 md:mb-4 pr-8 md:pr-0">{service.title}</h5>
            <p className="font-normal text-card-foreground text-[13px] md:text-base leading-5 md:leading-6">{service.description}</p>

            <div className="hidden md:flex mt-6 text-sm uppercase font-semibold leading-5 text-secondary">
              <Link to="" className="flex items-center gap-x-2">
                View Capabilities <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaboratoryServices;
