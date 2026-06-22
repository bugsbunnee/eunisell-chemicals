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
    <section className="px-20 py-28 bg-card">
      <div className="space-y-6 text-left w-150">
        <h2 className="font-bold text-4xl leading-10 text-accent text-left">Supply Chain Strength</h2>

        <p className="text-lg text-card-foreground font-normal leading-7">
          Ensuring your production never stops. Our logistics infrastructure is built for reliability and scale.
        </p>
      </div>

      <div className="grid grid-cols-4 mt-16 gap-x-6">
        {steps.map((step) => (
          <div key={step.title} className="bg-background p-10 text-left">
            <step.Icon size={45} className="text-secondary" />
            <div className="font-bold text-xl leading-7 text-[#333333] mb-4 mt-8">{step.title}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupplyChain;
