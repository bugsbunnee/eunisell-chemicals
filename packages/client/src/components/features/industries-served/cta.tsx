import type React from 'react';
import { Button } from '../../ui/button';

const CTA: React.FC = () => {
  return (
    <section className="px-30 py-24 bg-secondary">
      <div className="font-bold text-[56px] leading-21 text-white max-w-302 mx-auto">Need Chemical Solutions for Your Industry?</div>

      <p className="text-xl leading-7 text-white/80 max-w-195 mt-8 mx-auto">
        Our team of industry experts is ready to help you optimize your operations, protect your assets, and improve your bottom line.
      </p>

      <div className="flex items-center justify-center gap-x-6 mt-12">
        <Button className="px-10 flex items-center h-16 leading-6 bg-background text-base text-secondary uppercase font-bold rounded-[2px]">
          Contact Our Experts
        </Button>
        <Button className="px-10 flex items-center h-16 bg-transparent text-white border border-white uppercase text-base font-bold rounded-[2px]">
          Download Brochure
        </Button>
      </div>
    </section>
  );
};

export default CTA;
