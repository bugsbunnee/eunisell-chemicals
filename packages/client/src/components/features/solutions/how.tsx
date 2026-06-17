import { ChartLineIcon, TestTubesIcon } from 'lucide-react';
import React from 'react';

const methods = [
  {
    id: '01',
    Icon: ChartLineIcon,
    title: 'Identify & Analyze',
    description:
      'We begin with comprehensive field analysis and laboratory testing to understand the unique chemical environment and operational challenges of your specific site.',
  },
  {
    id: '02',
    Icon: TestTubesIcon,
    title: 'Evaluate & Recommend',
    description:
      'Our technical team evaluates potential formulations, conducting compatibility testing and performance simulations to select the optimal chemical programme.',
  },
  {
    id: '03',
    Icon: TestTubesIcon,
    title: 'Implement & Monitor',
    description:
      'Active field monitoring and ongoing laboratory support ensure that implemented solutions continue to deliver measurable improvements in efficiency and asset integrity.',
  },
];

const How: React.FC = () => {
  return (
    <section className="py-23.5 px-20 grid grid-cols-2 gap-x-24 bg-background">
      <div className="text-left">
        <div className="text-secondary uppercase font-black text-[15px] leading-0.75">how we solve</div>
        <div className="mt-4 font-bold text-5xl text-accent">A Consultative Framework Designed for Performance</div>
        <p className="text-muted-foreground text-lg mt-4">
          We don't just supply chemicals; we engineer outcomes. Our three-stage implementation model ensures that every solution is precisely matched
          to the operational reality of your facility.
        </p>

        <div className="w-full h-100 rounded-[16px] overflow-hidden mt-12 relative">
          <img src="/solutions/solution-how.svg" alt="Solution How" className="h-full w-full object-cover" />

          <div className="left-6 bottom-6 absolute p-4 rounded-xs bg-background w-full max-w-60">
            <div className="text-secondary font-bold text-[10px] uppercase">data driven</div>
            <div className="text-accent mt-0 text-sm font-semibold">Technical Excellence at the Heart of Every Solution</div>
          </div>
        </div>
      </div>
      <div className="space-y-12">
        {methods.map((method) => (
          <div key={method.id} className="py-4 px-8 text-left border-l-4 border-l-border hover:border-l-secondary transition-all">
            <div className="flex items-center justify-between">
              <div className="text-secondary-foreground font-black text-4xl">{method.id}</div>

              <div className="w-10 h-10 rounded-full border border-border text-secondary flex items-center justify-center">
                <method.Icon size={16} />
              </div>
            </div>

            <div className="mt-4 mb-3 font-bold text-2xl text-accent">{method.title}</div>

            <div className="text-base text-muted-foreground">{method.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default How;
