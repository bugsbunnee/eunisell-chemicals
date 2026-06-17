import React from 'react';
import { Button } from '../../ui/button';
import { Separator } from '../../ui/separator';
import { CircleIcon } from 'lucide-react';
import { specialties } from '../../../lib/data';

const Upstream: React.FC = () => {
  return (
    <section className="px-20 py-24 bg-accent grid grid-cols-2 gap-x-[134px]">
      <div className="text-left">
        <div className="text-[15px] font-black text-secondary uppercase leading-0.75">Upstream Portfolio</div>

        <div className="mt-4 font-bold text-5xl text-primary-foreground max-w-99.75">Specialty Oilfield Solutions</div>

        <p className="text-muted-foreground text-lg mt-8 max-w-115.5">
          Our upstream portfolio is engineered to protect critical assets and maximize production in Africa’s most challenging oil and gas
          environments.
        </p>

        <Button className="mt-4 rounded-xs bg-secondary font-semibold text-base h-13 px-7">Explore Our Portfolios</Button>

        <div className="mt-16 bg-background/5 border border-background/10 p-9 rounded-[8px]">
          <div className="flex gap-x-6 items-center">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <CircleIcon size={24} className="text-secondary" />
            </div>
            <div>
              <div className="text-base text-background font-bold">Trusted by IOCs</div>
              <div className="text-xs text-primary-foreground/40">Operational Support for 30+ Years</div>
            </div>
          </div>

          <div className="my-6 border-t border-t-background/5" />

          <div className="grid grid-cols-2 justify-start">
            <div>
              <div className="text-secondary text-xl font-bold">24/7</div>
              <div className="text-primary-foreground/40 text-[10px] uppercase">field support</div>
            </div>
            <div>
              <div className="text-secondary text-xl font-bold">100%</div>
              <div className="text-primary-foreground/40 text-[10px] uppercase">Compliance</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {specialties.map((specialty) => (
          <div className="p-6 text-left border border-primary-foreground/8 bg-primary/70 rounded-lg">
            <div className="text-[9px] uppercase text-secondary font-semibold">{specialty.legend}</div>
            <div className="text-primary-foreground capitalize text-xl font-bold">{specialty.title}</div>
            <p className="text-xs leading-4 text-primary-foreground/55">{specialty.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upstream;
