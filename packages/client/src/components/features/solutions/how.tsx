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
    description: 'Our technical team evaluates potential formulations, conducting compatibility testing and performance simulations to select the optimal chemical programme.',
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
    <section id="how">
      {/* Mobile */}
      <div className="md:hidden bg-background px-6 py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-secondary uppercase font-black text-[12px] tracking-[3px]">How We Solve</span>
          <h2 className="font-bold text-[32px] leading-10 text-accent">A Consultative Framework Designed for Performance</h2>
          <p className="text-muted-foreground text-[16px] leading-6.5">
            We don't just supply chemicals; we engineer outcomes. Our three-stage implementation model ensures that every solution is precisely matched to the operational reality
            of your facility.
          </p>
        </div>

        <div className="relative h-81 rounded-[12px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <img src="/solutions/solution-how.svg" alt="Solution methodology" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 right-4 bg-white border-l-4 border-secondary rounded-xs p-4 flex flex-col gap-1">
            <span className="text-secondary text-[10px] uppercase tracking-[1px] font-bold">Data Driven</span>
            <span className="text-accent text-[14px] font-semibold leading-[17.5px]">Technical Excellence at the Heart of Every Solution</span>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-left">
          {methods.map((method) => (
            <div key={method.id} className="relative border-l-2 border-[#f0f7ff] pl-6">
              <div className="absolute -left-2.25 top-0 size-4 rounded-full bg-white border-2 border-secondary" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[32px] font-black text-[#f0f7ff] leading-8">{method.id}</span>
                <div className="size-10 rounded-full border border-border flex items-center justify-center">
                  <method.Icon size={16} className="text-muted-foreground" />
                </div>
              </div>
              <h3 className="text-[20px] text-accent font-bold leading-7.5 mb-3">{method.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-6">{method.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid py-23.5 px-20 grid-cols-2 gap-x-24 bg-background">
        <div className="text-left">
          <div className="text-secondary uppercase font-black text-[15px] leading-0.75">how we solve</div>
          <div className="mt-4 font-bold text-5xl text-accent">A Consultative Framework Designed for Performance</div>
          <p className="text-muted-foreground text-lg mt-4">
            We don't just supply chemicals; we engineer outcomes. Our three-stage implementation model ensures that every solution is precisely matched to the operational reality
            of your facility.
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
      </div>
    </section>
  );
};

export default How;
