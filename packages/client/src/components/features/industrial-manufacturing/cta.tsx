import type React from 'react';
import { Button } from '../../ui/button';

const CTA: React.FC = () => {
  return (
    <section className="px-30 py-24 bg-accent">
      <div className="font-bold text-5xl leading-12 text-white max-w-265.75 mx-auto">Ready to Optimize Your Industrial Processes?</div>

      <p className="text-xl leading-7 text-white/60 max-w-194.75 mt-8 mx-auto">
        Connect with our technical consultants to discuss your chemical requirements and discover how Eunisell can drive value in your operation.
      </p>

      <div className="flex items-center justify-center gap-x-6 mt-12">
        <Button className="px-12 flex items-center h-16 leading-6 bg-secondary text-base text-white capitalize font-bold rounded-[2px]">
          Request a Consultation
        </Button>
        <Button className="px-12 flex items-center h-16 bg-transparent text-white border border-white/20 capitalize text-base font-bold rounded-[2px]">
          Download Brochure
        </Button>
      </div>
    </section>
  );
};

export default CTA;
