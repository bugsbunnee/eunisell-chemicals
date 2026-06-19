import React from 'react';
import { DropletIcon, LinkIcon, MountainIcon } from 'lucide-react';

const cards = [
  {
    Icon: MountainIcon,
    title: 'Resilience',
    description: 'We believe in the power of staying the course, whether in industrial chemistry or in the 90th minute of a match.',
  },
  {
    Icon: DropletIcon,
    title: 'Ambition',
    description: 'Driving growth and seeking new frontiers—a trait shared by world-class athletes and engineers alike.',
  },
  {
    Icon: LinkIcon,
    title: 'Teamwork',
    description: 'Success is a collective effort. We foster collaboration as the ultimate catalyst for community impact.',
  },
];

const ValuesAlignment: React.FC = () => {
  return (
    <section className="bg-accent px-30 py-25 text-left">
      <div className="max-w-[1560px] px-8 w-full flex flex-col gap-16">
        <div className="flex flex-col gap-6 items-center text-center">
          <h2 className="text-5xl font-bold text-white leading-18">Values Alignment</h2>

          <p className="text-lg font-normal text-muted leading-[29.25px] max-w-199.5 text-center">
            Our CSR initiatives are not random acts of charity; they are intentional alignments with our corporate ethos.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {cards.map(({ Icon, title, description }) => (
            <div key={title} className="backdrop-blur-[6px] bg-background/5 border border-white/10 p-14 rounded-[2px] space-y-8 text-center">
              <div className="mx-auto bg-secondary rounded-full size-20 flex items-center justify-center shrink-0">
                <Icon size={32} className="text-white" />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[28px] font-bold text-white leading-10.5">{title}</h4>
                <p className="text-base font-normal text-muted leading-6.75">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesAlignment;
