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
      'Extending the lifecycle of critical machinery and infrastructure through advanced anti- corrosion, descaling, and lubrication technologies.',
  },
  {
    Icon: BadgeIcon,
    title: 'Product Quality',
    description: 'Ensuring consistent output and meeting stringent regulatory requirements with high-purity chemical components and catalysts.',
  },
];

const Overview: React.FC = () => {
  return (
    <section className="p-30 bg-white grid grid-cols-2 gap-x-32 items-start">
      <div className="text-left">
        <h2 className="font-bold text-4xl leading-11.25 text-accent max-w-200">Driving Efficiency through Scientific Innovation</h2>

        <p className="mt-8 text-card-foreground text-lg leading-[29.3px] max-w-225">
          Eunisell provides a comprehensive portfolio of specialty and commodity chemicals designed for the rigors of modern manufacturing. From water
          treatment to cleaning and maintenance, our solutions are backed by global technical expertise and a robust supply chain.
        </p>

        <div className="mt-8 h-108 rounded-xs w-full overflow-hidden">
          <img src="/industrial-manufacturing/overview.svg" alt="Overview" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="space-y-6">
        {features.map((feature) => (
          <div key={feature.title} className="p-8  border-l-4 border-l-secondary bg-card text-left">
            <div className="w-12 h-12 bg-white text-secondary shadow-sm rounded-full flex items-center justify-center mb-6">
              <feature.Icon size={20} className="text-secondary" />
            </div>
            <div className="font-bold text-2xl text-accent mb-4">{feature.title}</div>
            <p className="text-card-foreground text-base leading-6.5 font-normal">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
