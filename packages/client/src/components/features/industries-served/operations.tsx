import { HeadsetIcon, LockIcon, TicketsIcon } from 'lucide-react';
import React from 'react';

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

const images = [
  {
    src: '/industries-served/oil.svg',
    title: 'oil & gas',
  },
  {
    src: '/industries-served/manufacture.svg',
    title: 'manufacturing',
  },
  {
    src: '/industries-served/utils.svg',
    title: 'utilities',
  },
  {
    src: '/industries-served/infra.svg',
    title: 'infrastructure',
  },
  {
    src: '/industries-served/marine.svg',
    title: 'marine',
  },
];

const Operations: React.FC = () => {
  return (
    <section className="bg-background px-30 py-24 text-left">
      <div className="grid grid-cols-2 gap-x-18">
        <div>
          <div className="text-[48px] font-bold text-accent leading-[57.6px]">Supporting Operations Across Essential Industrial Sectors</div>

          <div className="mt-8 text-card-foreground leading-[29.3px]">
            Eunisell Chemicals is Africa's leading specialty chemical distribution and technical service provider. We deliver more than just products;
            we provide integrated solutions that optimize performance, protect critical assets, and drive operational efficiency in the continent's
            most demanding environments.
          </div>
        </div>

        <div className="space-y-6">
          {operations.map((operation) => (
            <div key={operation.title} className="bg-card border border-popover p-8 flex items-start rounded-[4px] gap-x-6">
              <div className="w-12 h-12 rounded-full flex bg-background items-center justify-center ">
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

      <div className="mt-30 grid grid-cols-5 gap-x-4">
        {images.map((image) => (
          <div key={image.title} className="relative h-125 overflow-hidden">
            <img src={image.src} alt={image.title} className="h-full w-full object-cover" />

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-tr from-accent opacity-80 to-accent/0"></div>

            <div className="space-y-2 absolute left-8 bottom-8 text-left">
              <div className="text-xl capitalize leading-8 text-primary-foreground font-bold">{image.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Operations;
