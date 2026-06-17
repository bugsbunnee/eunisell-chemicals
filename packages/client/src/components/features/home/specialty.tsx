import type React from 'react';

import { Button } from '../../ui/button';
import { Separator } from '../../ui/separator';
import { specialties } from '../../../lib/data';

const Specialty: React.FC = () => {
  return (
    <section className="px-45 py-35 gap-x-20 bg-accent grid grid-cols-2">
      <div className="text-left">
        <div className="text-[10px] uppercase text-secondary font-semibold">Oilfield Chemicals</div>
        <div className="text-4xl font-bold text-primary-foreground">Specialty Chemical Solutions for Production Optimization and Asset Integrity</div>
        <p className="mt-6.75 text-base text-primary-foreground/65">
          We provide specialty chemical solutions that support production optimization, asset integrity, flow assurance, well intervention, and water
          treatment across upstream oil and gas operations. Our offerings include corrosion inhibitors, scale inhibitors, demulsifiers, paraffin and
          asphaltene treatments, H₂S scavengers, and produced water treatment programmes.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-12">
          {specialties.map((specialty) => (
            <div className="p-6 border border-primary-foreground/8 bg-primary/70 rounded-lg">
              <div className="text-[9px] uppercase text-secondary font-semibold">{specialty.legend}</div>
              <div className="text-primary-foreground capitalize text-[13px] font-bold">{specialty.title}</div>
              <p className="text-xs text-primary-foreground/55 leading-6.5">{specialty.description}</p>
            </div>
          ))}
        </div>

        <Button className="rounded-xs bg-secondary font-semibold text-[15px] py-3.5 px-6 mt-12.5">Explore Oilfield Chemicals</Button>
      </div>
      <div className="relative">
        <img src="/solution.png" alt="Specialty" className="w-full h-full object-cover" />

        <div className="px-6 py-5 rounded-lg bg-background border-l-4 text-left border-l-secondary bottom-8 left-8 absolute">
          <div className="font-extrabold text-secondary">30+ Years</div>
          <div className="w-8">
            <Separator className="border my-2 h-1" />
          </div>
          <div className="text-[13px] font-medium text-accent">African Energy Markets</div>
          <p className="text-muted-foreground text-[11px] mt-0">Trusted by International & Local Oil Companies</p>
        </div>
      </div>
    </section>
  );
};

export default Specialty;
