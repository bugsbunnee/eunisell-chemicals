import React from 'react';
import { Button } from '../../ui/button';

const Cta: React.FC = () => {
  return (
    <section className="relative py-28 bg-accent overflow-hidden text-center">
      <div className="absolute right-0 top-0 bottom-0 w-80 opacity-10">
        <svg viewBox="0 0 640 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="320" cy="215" r="322" stroke="white" strokeWidth="1" />
          <circle cx="320" cy="215" r="215" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 px-20">
        <h2 className="font-bold text-[48px] text-primary-foreground max-w-205 mx-auto leading-tight">Need Industrial Chemical Support?</h2>

        <p className="mt-6 text-primary-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
          Partner with the technical experts who understand the complexities of manufacturing. Let&apos;s optimize your facility today.
        </p>

        <div className="flex items-center justify-center gap-x-4 mt-14">
          <Button className="rounded-xs bg-secondary font-semibold text-base h-15.5 px-10">Request Technical Consultation</Button>
          <Button className="rounded-xs bg-transparent border border-primary-foreground/40 font-semibold text-base h-15.5 px-10">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
