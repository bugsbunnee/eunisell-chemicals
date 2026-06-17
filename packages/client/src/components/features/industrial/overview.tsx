import React from 'react';
import { DropletIcon, ShieldCheckIcon, TrendingUpIcon } from 'lucide-react';

const features = [
  {
    Icon: TrendingUpIcon,
    title: 'Process Efficiency',
    description: 'Streamlining production flows and reducing energy consumption through optimized chemical treatment programs.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Asset Protection',
    description: 'Extending the lifecycle of critical machinery and infrastructure with industry-leading corrosion and scale inhibitors.',
  },
  {
    Icon: DropletIcon,
    title: 'Product Quality',
    description: 'Ensuring high-purity outputs and consistent results through precise chemical control and technical oversight.',
  },
];

const Overview: React.FC = () => {
  return (
    <section className="px-20 py-32 bg-accent-bg grid grid-cols-2 gap-x-20 items-start">
      <div className="text-left">
        <div className="w-16 h-1 bg-secondary mb-9" />

        <h2 className="font-bold text-[40px] leading-13.5 text-accent max-w-173">
          Supporting Industrial Performance
          <br />
          Through Chemical Expertise
        </h2>

        <p className="mt-10 text-muted-foreground text-base leading-relaxed max-w-173">
          Eunisell Chemicals provides high-performance solutions tailored to the unique demands of the manufacturing sector. From large-scale
          industrial plants to specialized manufacturing facilities, our chemical programs are designed to optimize operations, reduce downtime, and
          lower total cost of ownership.
        </p>

        <blockquote className="mt-10 flex items-start gap-x-4 text-muted-foreground text-base italic">
          <span className="text-secondary font-black text-3xl leading-none mt-1">&ldquo;</span>
          <p>We don&apos;t just supply chemicals; we engineer outcomes for the most demanding industrial environments.</p>
        </blockquote>
      </div>

      <div className="space-y-0">
        {features.map((feature) => (
          <div key={feature.title} className="p-8 border border-border border-l-4 border-l-secondary bg-background text-left">
            <div className="w-12 h-12 rounded-sm bg-accent flex items-center justify-center mb-5">
              <feature.Icon size={20} className="text-secondary" />
            </div>
            <div className="font-bold text-xl text-accent mb-3">{feature.title}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
