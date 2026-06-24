import { CirclePileIcon, ClipboardIcon, TruckElectricIcon, WarehouseIcon } from 'lucide-react';
import React from 'react';

const steps = [
  {
    Icon: WarehouseIcon,
    title: 'Strategic Warehousing',
    description: 'Distributed storage facilities across key industrial hubs for rapid response.',
  },
  {
    Icon: TruckElectricIcon,
    title: 'Express Delivery',
    description: 'Owned fleet and logistics partnerships for guaranteed lead times.',
  },
  {
    Icon: CirclePileIcon,
    title: 'Inventory Stability',
    description: 'Proactive stock management to mitigate global supply chain fluctuations.',
  },
  {
    Icon: ClipboardIcon,
    title: 'Quality Assurance',
    description: 'Rigorous testing protocols for every batch before dispatch.',
  },
];

const SupplyChain: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-20 md:py-28 bg-card">
      <div className="text-left md:w-150 space-y-3 md:space-y-6">
        <h2 className="font-bold text-[24px] md:text-4xl leading-[30px] md:leading-10 text-accent">Supply Chain Strength</h2>
        <p className="text-sm md:text-lg text-[#606060] md:text-card-foreground leading-[22.75px] md:leading-7">
          Ensuring your production never stops. Our logistics infrastructure is built for reliability and scale.
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-x-6 mt-8 md:mt-16">
        {steps.map((step) => (
          <div key={step.title} className="bg-background shadow-sm flex items-center gap-x-6 p-6 md:block md:p-10 text-left">
            <step.Icon size={30} className="text-secondary shrink-0 md:hidden" />
            <step.Icon size={45} className="text-secondary hidden md:block" />
            <div>
              <div className="font-bold text-[16px] md:text-xl leading-6 md:leading-7 text-[#333333] md:mb-4 md:mt-8">{step.title}</div>
              <p className="text-[12px] md:text-sm text-[#606060] md:text-muted-foreground leading-4 md:leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupplyChain;
