import React from 'react';
import { ChartLineIcon, HandHeartIcon, Hexagon, ShieldHalfIcon } from 'lucide-react';

const philosophies = [
  {
    Icon: Hexagon,
    id: '01',
    title: 'Technical Excellence',
    description: 'Commitment to science-led solutions and deep engineering expertise in every project.',
  },
  {
    Icon: Hexagon,
    id: '02',
    title: 'Operational Discipline',
    description: 'Rigorous processes and safety standards that ensure consistent, high-performance delivery.',
  },
  {
    Icon: ShieldHalfIcon,
    id: '03',
    title: 'Corporate Governance',
    description: 'Adherence to global best practices in transparency, ethics, and strategic oversight.',
  },
  {
    Icon: HandHeartIcon,
    id: '04',
    title: 'Customer Value',
    description: 'Focusing on solutions that drive efficiency and profitability for our industrial partners.',
  },
  {
    Icon: ChartLineIcon,
    id: '05',
    title: 'Long-Term Growth',
    description: 'Building sustainable value that endures across market cycles and generations.',
  },
];

const Philosophy: React.FC = () => {
  return (
    <section className="py-16 px-6 md:py-24 md:px-30 bg-accent">
      <div className="flex flex-col items-center space-y-3 md:space-y-4">
        <div className="text-[10px] leading-[15px] tracking-[2px] md:text-xs md:tracking-[3.6px] text-secondary uppercase">Our Foundation</div>
        <div className="text-[32px] md:text-5xl font-bold leading-[48px] md:leading-18 text-white text-center">Leadership Philosophy</div>
        <div className="w-16 md:w-30 h-1 bg-secondary"></div>
      </div>

      <div className="mt-10 md:mt-20 flex flex-col md:grid md:grid-cols-5 gap-4 md:gap-x-6">
        {philosophies.map((philosophy) => (
          <div key={philosophy.title} className="text-left border border-white/10 p-6 md:p-8 space-y-4 md:space-y-6 overflow-hidden">
            <div className="flex items-center justify-between">
              <philosophy.Icon className="text-secondary" size={20} />
              <div className="text-[24px] leading-[36px] text-white/20 font-light">{philosophy.id}</div>
            </div>

            <div className="text-[18px] md:text-xl text-white font-bold leading-[27px] md:leading-7.5">{philosophy.title}</div>

            <div className="text-[13px] md:text-sm font-normal leading-[21px] md:leading-[22.8px] text-white/70 md:text-white/50">
              {philosophy.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
