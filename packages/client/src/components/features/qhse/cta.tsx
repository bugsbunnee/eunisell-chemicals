import type React from 'react';
import { Button } from '../../ui/button';

const CTA: React.FC = () => {
  return (
    <section className="px-30 py-24 bg-accent">
      <div className="font-bold text-5xl leading-12 text-white max-w-198.75 mx-auto">
        Partner with a Team Committed to
        <span className="text-secondary"> Safe and Responsible Operations</span>
      </div>

      <p className="text-xl leading-7 text-muted max-w-174.75 mt-8 mx-auto">
        Ready to elevate your operational standards? Contact our technical safety experts today to learn more about our integrated QHSE protocols.
      </p>

      <div className="flex items-center justify-center gap-x-6 mt-12">
        <Button className="px-10 flex items-center h-15 bg-secondary text-base text-white font-bold rounded-[2px]">Request Consultation</Button>
        <Button className="px-10 flex items-center h-15 bg-transparent text-white border-2 border-white/20 text-base font-bold rounded-[2px]">
          View Safety Record
        </Button>
      </div>
    </section>
  );
};

export default CTA;
