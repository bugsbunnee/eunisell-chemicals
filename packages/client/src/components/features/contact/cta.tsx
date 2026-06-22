import { SendIcon } from 'lucide-react';
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="px-30 py-24 bg-accent relative flex items-center justify-between">
      <div className="text-left max-w-2xl space-y-6">
        <div className="text-4xl leading-10 font-bold text-white">Ready to optimize your industrial chemical processes?</div>
        <p className="text-lg leading-7 text-[#CBD5E1] font-regular">Partner with West Africa's leading chemical solutions provider.</p>
      </div>
      <div>
        <button className="h-17 bg-secondary text-white font-bold leading-7 flex items-center gap-x-4 px-12 rounded-[2px]">
          Start Consultation <SendIcon />
        </button>
      </div>
    </section>
  );
};

export default CTA;
