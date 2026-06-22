import { ArrowRightIcon } from 'lucide-react';
import type React from 'react';

const industries = [
  {
    src: '/technical-services/offshore.svg',
    title: 'Upstream Oil & Gas',
    description: 'Flow assurance & asset integrity.',
  },
  {
    src: '/technical-services/power.svg',
    title: 'Power Generation',
    description: 'Cooling & boiler water management.',
  },
  {
    src: '/technical-services/manufacturing.svg',
    title: 'Manufacturing',
    description: 'Process chemical optimization.',
  },
  {
    src: '/technical-services/downstream.svg',
    title: 'Downstream',
    description: 'Refining & petrochemical support.',
  },
];

const IndustriesSupported: React.FC = () => {
  return (
    <section className="px-30 py-24 bg-card">
      <div className="flex items-end justify-between">
        <div className="text-left">
          <div className="text-3xl leading-9 font-bold text-accent">Industries Supported</div>
          <div className="text-base leading-6 font-normal text-card-foreground mt-4">
            Tailored technical services for diverse industrial applications.
          </div>
        </div>
        <div>
          <button className="text-base leading-6 text-secondary font-bold uppercase flex items-center gap-x-2">
            VIEW ALL SECTORS <ArrowRightIcon />{' '}
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-4 gap-x-6">
        {industries.map((industry) => (
          <div key={industry.title} className="h-100 rounded-[8px] overflow-hidden relative">
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-accent/30"></div>

            <div className="absolute space-y-2 text-left bottom-8 left-8 right-8">
              <div className="font-bold text-white text-xl leading-7">{industry.title}</div>
              <div className="font-regular text-white/70 text-sm leading-5">{industry.description}</div>
            </div>

            <img src={industry.src} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSupported;
