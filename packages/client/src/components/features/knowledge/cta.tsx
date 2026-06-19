import React from 'react';
import { Button } from '../../ui/button';
import { ArrowRightIcon } from 'lucide-react';

const Cta: React.FC = () => {
  return (
    <section className="relative py-28 bg-accent overflow-hidden text-center">
      <div className="absolute right-0 top-0 bottom-0 w-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 640 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="320" cy="215" r="322" stroke="white" strokeWidth="1" />
          <circle cx="320" cy="215" r="215" stroke="white" strokeWidth="1" />
          <circle cx="320" cy="215" r="108" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-96 opacity-10 pointer-events-none scale-x-[-1]">
        <svg viewBox="0 0 640 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <circle cx="320" cy="215" r="322" stroke="white" strokeWidth="1" />
          <circle cx="320" cy="215" r="215" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 px-20 max-w-4xl mx-auto">
        <div className="text-[10px] font-bold uppercase text-secondary tracking-[2px] mb-5">Stay Informed</div>
        <h2 className="font-bold text-[52px] text-primary-foreground leading-tight">Access Expert Chemical Knowledge</h2>
        <p className="mt-6 text-primary-foreground/60 text-xl max-w-2xl mx-auto leading-relaxed">
          Subscribe to receive the latest technical publications, case studies, and industry insights from Eunisell's engineering team delivered
          directly to your inbox.
        </p>

        <div className="flex items-center justify-center gap-x-4 mt-14">
          <Button className="rounded-xs bg-secondary font-semibold text-base h-15 px-10 flex items-center gap-x-2">
            Subscribe to Newsletter <ArrowRightIcon size={16} />
          </Button>
          <Button className="rounded-xs bg-transparent border border-primary-foreground/40 font-semibold text-base h-15 px-10">
            Request Technical Consultation
          </Button>
        </div>

        <div className="mt-14 flex items-center justify-center gap-x-16">
          {[
            { value: '2,400+', label: 'Active Subscribers' },
            { value: 'Monthly', label: 'Publication Frequency' },
            { value: '0', label: 'Spam, Always' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-black text-secondary">{item.value}</div>
              <div className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta;
