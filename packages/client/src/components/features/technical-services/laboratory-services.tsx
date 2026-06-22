import React from 'react';

import { ActivityIcon, ArrowRightIcon, DropletIcon, MicroscopeIcon, SearchIcon, ShieldCogIcon, ShuffleIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <MicroscopeIcon size={30} />,
    title: 'Chemical Analysis',
    description: 'Comprehensive molecular analysis to verify product quality and purity.',
  },
  {
    icon: <ShuffleIcon size={30} />,
    title: 'Compatibility Testing',
    description: 'Ensuring chemical additives perform harmoniously with existing systems and materials.',
  },
  {
    icon: <ShieldCogIcon size={30} />,
    title: 'Corrosion Testing',
    description: 'Accelerated aging and atmospheric testing to validate protection strategies for critical infrastructure.',
  },
  {
    icon: <DropletIcon size={30} />,
    title: 'Water Analysis',
    description: 'Comprehensive diagnostic testing for boiler water, cooling systems, and industrial wastewater.',
  },
  {
    icon: <SearchIcon size={30} />,
    title: 'Product Evaluation',
    description: 'Comparative performance benchmarks and quality assurance for new product pilot phases.',
  },
  {
    icon: <ActivityIcon size={30} />,
    title: 'Performance Testing',
    description: 'Real-world simulation testing to validate chemical effectiveness.',
  },
];

const LaboratoryServices: React.FC = () => {
  return (
    <section className="bg-card px-30 py-24 space-y-16">
      <div className="space-y-4 items-center w-full">
        <h2 className="font-bold text-accent text-[30px] text-center leading-9">Laboratory Services</h2>

        <p className="max-w-2xl mx-auto font-normal text-card-foreground text-base text-center leading-6">
          Precision testing and analysis in our state-of-the-art facilities to ensure chemical
          <br />
          efficacy and asset integrity.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {services.map((service) => (
          <div className="bg-white rounded-[8px] p-10 shadow-sm space-y-4 text-left">
            <div className="space-y-6">
              <div className="text-secondary shrink-0">{service.icon}</div>

              <h5 className="font-bold text-accent text-lg leading-6 m-0">{service.title}</h5>
            </div>

            <p className="font-normal text-card-foreground text-base leading-6 m-0">{service.description}</p>

            <div className="mt-6 text-sm uppercase font-semibold leading-5 text-secondary">
              <Link to="" className="flex items-center gap-x-2">
                View Capabilities <ArrowRightIcon size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaboratoryServices;
