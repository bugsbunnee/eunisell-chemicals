import type React from 'react';
import { Button } from '../../ui/button';

const CTA: React.FC = () => {
  return (
    <section className="bg-secondary">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col items-center text-center gap-6">
        <h2 className="font-bold text-[28px] leading-[35px] text-white">Need Chemical Solutions for Your Industry?</h2>

        <p className="text-[16px] leading-[26px] text-white/80 max-w-sm">
          Our team of experts is ready to help you optimize operations and protect your assets.
        </p>

        <div className="flex flex-col gap-3 w-full pt-2">
          <Button className="w-full h-[54px] bg-background text-[12px] text-secondary font-bold rounded-[2px] uppercase tracking-[0.6px]">
            Contact Our Experts
          </Button>
          <Button className="w-full h-[54px] bg-transparent border border-white text-[12px] text-white font-bold rounded-[2px] uppercase tracking-[0.6px]">
            Download Brochure
          </Button>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block px-30 py-24 text-center">
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
      </div>
    </section>
  );
};

export default CTA;
