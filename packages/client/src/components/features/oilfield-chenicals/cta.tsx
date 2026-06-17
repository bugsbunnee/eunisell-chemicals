import React from 'react';
import { Button } from '../../ui/button';

const CTA: React.FC = () => {
  return (
    <section className="relative bg-accent text-left py-16 px-45 items-center overflow-hidden">
      <div className="absolute -rotate-12 -top-10 right-5 opacity-20 z-20">
        <img src="/oilfield-chemicals/cta.svg" alt="Test Tube" className="w-100 h-100 object-contain " />
      </div>

      <div className="text-left max-w-2xl z-50">
        <div className="text-5xl leading-15 text-primary-foreground font-bold ">
          Partner with Africa's Leading
          <span className="text-secondary"> Oilfield Chemical Experts</span>
        </div>

        <p className="mt-6 text-xl text-primary-foreground/70">
          Elevate your production performance with Eunisell's field-proven chemical solutions. Request a technical consultation today and discover the
          difference specialized expertise makes.
        </p>

        <div className="mt-10 flex items-center gap-x-6">
          <Button className="rounded-xs bg-secondary font-bold text-lg h-16 px-10">Request Technical Documentation</Button>

          <div>
            <div className="text-sm font-normal text-primary-foreground/50">Direct Support</div>
            <div className="text-lg font-bold text-primary-foreground leading-7">+234 1 234 5678</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
