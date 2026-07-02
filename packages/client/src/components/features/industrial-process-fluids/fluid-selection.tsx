import React from 'react';
import { FlaskConicalIcon, TestTube2Icon } from 'lucide-react';
import { Reveal } from '../../common/animate';

const capabilities = [
  {
    Icon: FlaskConicalIcon,
    title: 'Lab Analysis',
    description: 'Ongoing monitoring of fluid health and performance metrics.',
  },
  {
    Icon: TestTube2Icon,
    title: 'Compatibility Testing',
    description: 'Verification against system seals, gaskets, and alloys.',
  },
];

const stats = [
  {
    value: '99.8%',
    label: 'Batch Purity',
  },
  {
    value: '24/7',
    label: 'Tech Support',
  },
];

const FluidSelection: React.FC = () => {
  return (
    <section className="px-6 py-12 md:px-30 md:py-30 bg-accent md:bg-card md:border-y md:border-border">
      {/* Mobile: Advanced Laboratory Backing */}
      <div className="md:hidden text-left">
        <div className="bg-secondary h-1 w-12" />

        <h2 className="font-bold text-[24px] leading-8 text-white mt-6">Advanced Laboratory Backing</h2>

        <p className="text-sm leading-[22.75px] text-white/70 mt-6">
          Our state-of-the-art analytical laboratory provides comprehensive fluid monitoring, helping our clients maximize oil life and minimize equipment wear.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-7">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="font-bold text-[20px] leading-7 text-secondary">{stat.value}</div>
              <div className="text-[10px] leading-[15px] uppercase tracking-[0.5px] text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Data-Driven Fluid Selection */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-20 md:items-center">
        <Reveal direction="left" distance={56} className="text-left">
          <div className="font-medium text-sm leading-5 uppercase tracking-[1.4px] text-secondary">Selection &amp; Analysis</div>

          <h2 className="font-bold text-4xl leading-10 text-accent mt-4">Data-Driven Fluid Selection</h2>

          <p className="mt-8 text-lg text-card-foreground leading-[29.25px]">
            Choosing the right chemical formulation requires technical precision. Our expert team provides on-site assessments and laboratory fluid analysis to ensure your
            selection perfectly matches your hardware and operating conditions.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-10">
            {capabilities.map((capability) => (
              <div key={capability.title} className="flex items-start gap-x-4">
                <capability.Icon size={20} className="text-secondary shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-base leading-6 text-accent">{capability.title}</div>
                  <p className="text-sm text-card-foreground leading-5">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" distance={56} className="relative">
          <div className="absolute -top-10 -right-10 bottom-10 left-10 bg-secondary/5 rounded-[2px]" />
          <div className="relative bg-white border border-ring rounded-[2px] p-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div className="h-100 rounded-2xl overflow-hidden shadow-[0px_16px_40px_rgba(0,0,0,0.12)]">
              <img
                src="/industrial-process-fluids/fluid-selection.png"
                alt="Professional chemist in a high-tech laboratory using advanced analytical equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FluidSelection;
