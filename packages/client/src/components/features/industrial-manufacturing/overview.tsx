import React from 'react';
import { BadgeIcon, ShieldCheckIcon, ZapIcon } from 'lucide-react';

const features = [
  {
    Icon: ZapIcon,
    title: 'Process Efficiency',
    description:
      'Reducing downtime and optimizing throughput with high-performance additives and treatment programs tailored to your specific operational needs.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Asset Protection',
    description:
      'Extending the lifecycle of critical machinery and infrastructure through advanced anti-corrosion, descaling, and lubrication technologies.',
  },
  {
    Icon: BadgeIcon,
    title: 'Product Quality',
    description: 'Ensuring consistent output and meeting stringent regulatory requirements with high-purity chemical components and catalysts.',
  },
];

const Overview: React.FC = () => {
  return (
    <section className="px-6 py-16 md:p-30 bg-white flex flex-col md:grid md:grid-cols-2 md:gap-x-32 md:items-start">
      <div className="text-left">
        <h2 className="font-bold text-[24px] md:text-4xl leading-[30px] md:leading-11.25 text-accent">
          Driving Efficiency through Scientific Innovation
        </h2>

        <p className="mt-6 md:mt-8 text-[16px] md:text-lg text-[#606060] md:text-card-foreground leading-[26px] md:leading-[29.3px] max-w-full md:max-w-225">
          Eunisell provides a comprehensive portfolio of specialty and commodity chemicals designed for the rigors of modern manufacturing. From water
          treatment to cleaning and maintenance, our solutions are backed by global technical expertise and a robust supply chain.
        </p>

        <div className="mt-8 h-108 rounded-xs w-full overflow-hidden hidden md:block">
          <img src="/industrial-manufacturing/overview.svg" alt="Overview" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:space-y-6 mt-8 md:mt-0">
        {features.map((feature) => (
          <div key={feature.title} className="p-6 md:p-8 border-l-4 border-l-secondary bg-card text-left">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-secondary shadow-sm rounded-full flex items-center justify-center mb-4 md:mb-6">
              <feature.Icon size={16} className="text-secondary" />
            </div>
            <div className="font-bold text-[20px] md:text-2xl text-accent mb-2 md:mb-4">{feature.title}</div>
            <p className="text-sm md:text-base text-[#606060] md:text-card-foreground leading-[22.75px] md:leading-6.5">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
