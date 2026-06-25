import { ArrowRightIcon } from 'lucide-react';
import type React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

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
  const navigate = useNavigate();
  return (
    <section className="px-6 py-16 md:px-30 md:py-24 bg-card">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-0">
        <div className="text-left">
          <div className="text-[26px] md:text-3xl leading-8 md:leading-9 font-bold text-accent">Industries Supported</div>
          <div className="hidden md:block text-base leading-6 font-normal text-card-foreground mt-4">
            Tailored technical services for diverse industrial applications.
          </div>
        </div>
        <button
          onClick={() => navigate(paths.industries)}
          className="hidden md:flex text-base leading-6 text-secondary font-bold uppercase items-center gap-x-2"
        >
          VIEW ALL SECTORS <ArrowRightIcon size={16} />
        </button>
      </div>

      <div className="mt-6 md:mt-16 flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-x-6">
        {industries.map((industry) => (
          <div key={industry.title} className="h-50 md:h-100 rounded-[8px] overflow-hidden relative">
            <div className="absolute inset-0 bg-accent/30" />
            <div className="absolute space-y-1 md:space-y-2 text-left bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
              <div className="font-bold text-white text-[16px] md:text-xl leading-6 md:leading-7">{industry.title}</div>
              <div className="text-white/70 text-[13px] md:text-sm leading-4 md:leading-5">{industry.description}</div>
            </div>
            <img src={industry.src} className="w-full h-full object-cover" alt={industry.title} />
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate(paths.industries)}
        className="md:hidden mt-6 text-[13px] leading-5 text-secondary font-bold uppercase flex items-center gap-x-2"
      >
        VIEW ALL SECTORS <ArrowRightIcon size={14} />
      </button>
    </section>
  );
};

export default IndustriesSupported;
