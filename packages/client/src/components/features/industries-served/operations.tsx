import { HeadsetIcon, LockIcon, TicketsIcon } from 'lucide-react';
import React from 'react';
import IndustriesServed from '../../common/industries-served';

const operations = [
  {
    Icon: TicketsIcon,
    title: 'Industrial Performance',
    description: 'Optimizing chemical processes to maximize output and reduce operational downtime across all sectors.',
  },
  {
    Icon: LockIcon,
    title: 'Asset Protection',
    description: 'Advanced corrosion inhibitors and specialty coatings designed to extend the lifecycle of multi-million dollar infrastructure.',
  },
  {
    Icon: HeadsetIcon,
    title: 'Technical Support',
    description: 'On-site laboratory testing and expert chemical engineering support to solve complex industrial challenges.',
  },
];

const Operations: React.FC = () => {
  return (
    <section id="sectors" className="bg-background text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <h2 className="font-bold text-[30px] leading-[37.5px] text-accent">Supporting Operations Across Essential Sectors</h2>

        <p className="text-[16px] leading-6.5 text-card-foreground">
          Eunisell Chemicals is Africa's leading specialty chemical distribution provider. We deliver integrated solutions that optimize performance and protect multi-million
          dollar assets.
        </p>

        <div className="flex flex-col gap-4 pt-4">
          {operations.slice(0, 2).map((op) => (
            <div key={op.title} className="bg-card border border-popover rounded-[4px] p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center shrink-0">
                <op.Icon size={24} className="text-secondary" />
              </div>
              <div>
                <div className="font-bold text-[18px] leading-6.75 text-accent">{op.title}</div>
                <div className="text-[14px] leading-5 text-card-foreground mt-2">{op.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block px-30 py-24">
        <div className="grid grid-cols-2 gap-x-18">
          <div>
            <div className="text-[48px] font-bold text-accent leading-[57.6px]">Supporting Operations Across Essential Industrial Sectors</div>
            <div className="mt-8 text-card-foreground leading-[29.3px]">
              Eunisell Chemicals is Africa's leading specialty chemical distribution and technical service provider. We deliver more than just products; we provide integrated
              solutions that optimize performance, protect critical assets, and drive operational efficiency in the continent's most demanding environments.
            </div>
          </div>

          <div className="space-y-6">
            {operations.map((operation) => (
              <div key={operation.title} className="bg-card border border-popover p-8 flex items-start rounded-[4px] gap-x-6">
                <div className="w-12 h-12 rounded-full flex bg-background items-center justify-center">
                  <operation.Icon size={24} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-xl leading-7.5 text-accent">{operation.title}</div>
                  <div className="font-normal text-base leading-6 text-card-foreground mt-2">{operation.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-30">
          <IndustriesServed />
        </div>
      </div>
    </section>
  );
};

export default Operations;
