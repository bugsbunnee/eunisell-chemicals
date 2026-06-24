import { ArrowRightIcon, SendIcon } from 'lucide-react';
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile layout */}
      <div className="md:hidden bg-sidebar-primary px-6 py-16 text-center">
        <h2 className="text-[30px] font-bold text-white leading-9">Ready to optimize your industrial chemical operations?</h2>
        <p className="mt-4 text-[16px] leading-6 text-[#CBD5E1]">Partner with West Africa's leading chemical solutions provider.</p>
        <button className="mt-8 w-full h-[60px] bg-secondary text-white font-bold text-sm uppercase tracking-[0.7px] rounded-[2px] flex items-center justify-center gap-x-3">
          Work With Us <ArrowRightIcon size={16} />
        </button>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex bg-accent px-30 py-24 items-center justify-between">
        <div className="text-left max-w-2xl space-y-6">
          <div className="text-4xl leading-10 font-bold text-white">Ready to optimize your industrial chemical processes?</div>
          <p className="text-lg leading-7 text-[#CBD5E1] font-regular">Partner with West Africa's leading chemical solutions provider.</p>
        </div>
        <div>
          <button className="h-17 bg-secondary text-white font-bold leading-7 flex items-center gap-x-4 px-12 rounded-[2px]">
            Start Consultation <SendIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
