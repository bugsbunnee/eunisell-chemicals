import React from 'react';
import { FlaskConicalIcon, TruckIcon, BarChart3Icon } from 'lucide-react';

const cards = [
  {
    Icon: FlaskConicalIcon,
    title: 'Technical Capability',
    description:
      'Direct access to original equipment manufacturer laboratories and specialized chemical engineering support for complex formulations.',
  },
  {
    Icon: TruckIcon,
    title: 'Supply Reliability',
    description:
      'Seamless logistics and robust supply chain networks ensuring consistent availability of critical performance chemicals across the continent.',
  },
  {
    Icon: BarChart3Icon,
    title: 'Industry Performance',
    description: 'Collaborative R&D focused on solving unique regional challenges and maximizing operational efficiency for our end clients.',
  },
];

const Ecosystem: React.FC = () => {
  return (
    <section className="bg-white py-30 px-30">
      <div className="flex flex-col gap-16 items-start w-full">
        <div className="flex flex-col items-center w-full gap-3.5">
          <span className="font-black text-secondary text-[15px] uppercase tracking-[3.25px] text-center">Partnership Ecosystem</span>

          <h2 className="font-bold text-[36px] text-accent text-center leading-11 max-w-200">
            Built on Technical Trust, Supply
            <br />
            Strength, and Industry Collaboration
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8 w-full text-left">
          {cards.map(({ Icon, title, description }) => (
            <div key={title} className="border border-border bg-card rounded-sm p-10">
              <div className="w-16 h-16 bg-background shadow-lg rounded-sm flex items-center justify-center mb-8">
                <Icon size={28} className="text-secondary" />
              </div>
              <h3 className="font-bold text-2xl text-accent leading-8 mb-4">{title}</h3>
              <p className="text-base text-card-foreground leading-6">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
