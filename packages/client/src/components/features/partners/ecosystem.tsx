import React from 'react';
import { FlaskConicalIcon, TruckIcon, BarChart3Icon } from 'lucide-react';

const cards = [
  {
    Icon: FlaskConicalIcon,
    title: 'Technical Capability',
    description: 'Direct access to original equipment manufacturer laboratories and specialized chemical engineering support.',
  },
  {
    Icon: TruckIcon,
    title: 'Supply Reliability',
    description: 'Seamless logistics and robust supply chain networks ensuring consistent availability across the continent.',
  },
  {
    Icon: BarChart3Icon,
    title: 'Industry Performance',
    description: 'Collaborative R&D focused on solving unique regional challenges and maximizing operational efficiency.',
  },
];

const Ecosystem: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-30 md:px-30 text-left">
      <div className="flex flex-col gap-12 md:gap-16 items-start w-full">
        <div className="flex flex-col items-start md:items-center w-full gap-3 md:gap-3.5">
          <span className="font-black text-secondary text-[12px] md:text-[15px] uppercase tracking-[2.4px] md:tracking-[3.25px]">
            Partnership Ecosystem
          </span>

          <h2 className="font-bold text-[28px] md:text-[36px] text-accent text-left md:text-center leading-[35px] md:leading-11 max-w-full md:max-w-200">
            Built on Technical Trust and Supply Strength
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {cards.map(({ Icon, title, description }) => (
            <div key={title} className="border border-border bg-card rounded-[1px] p-8 md:p-10">
              <div className="w-14 h-14 bg-background shadow-[0px_2px_2px_rgba(0,0,0,0.05)] rounded-[1px] flex items-center justify-center mb-6 md:mb-8">
                <Icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold text-[20px] md:text-2xl text-accent leading-7 mb-4">{title}</h3>
              <p className="text-[14px] md:text-base text-card-foreground leading-[22.75px] md:leading-6">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
