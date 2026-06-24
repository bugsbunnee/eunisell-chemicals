import type React from 'react';
import { Button } from '../../ui/button';

const CTA: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-30 md:py-24 bg-accent text-center">
      <div className="font-bold text-[30px] md:text-5xl leading-[36px] md:leading-12 text-white max-w-full md:max-w-265.75 mx-auto">
        Optimize Your Industrial Processes
      </div>

      <p className="text-sm md:text-xl leading-[20px] md:leading-7 text-white/60 max-w-full md:max-w-194.75 mt-6 md:mt-8 mx-auto">
        Connect with our technical consultants to discuss your chemical requirements and discover how Eunisell can drive value in your operation.
      </p>

      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-x-6 mt-8 md:mt-12">
        <Button className="h-[52px] md:h-16 md:px-12 flex items-center justify-center leading-5 md:leading-6 bg-secondary text-sm md:text-base text-white font-bold rounded-[2px] capitalize">
          Request a Consultation
        </Button>
        <Button className="h-[52px] md:h-16 md:px-12 flex items-center justify-center bg-transparent text-white border border-white/20 text-sm md:text-base font-bold rounded-[2px] capitalize">
          Download Brochure
        </Button>
      </div>
    </section>
  );
};

export default CTA;
