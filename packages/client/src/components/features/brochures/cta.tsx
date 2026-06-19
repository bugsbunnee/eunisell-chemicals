import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const Cta: React.FC = () => {
  return (
    <section className="relative bg-accent text-white h-[520px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 40px),
                        repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 40px)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-10 flex flex-col items-center">
        <div className="pb-6">
          <span className="font-bold text-secondary text-[14px] uppercase tracking-[4.2px]">Expert Assistance</span>
        </div>

        <div className="pb-8">
          <h2 className="font-bold text-[48px] text-white text-center leading-[60px] whitespace-nowrap">
            Need Help Choosing the Right
            <br />
            Chemical Solution?
          </h2>
        </div>

        <p className="text-white/70 text-[20px] text-center leading-[28px] max-w-[800px] pb-12">
          Our technical engineers are ready to assist you with product selection, application guidance, and custom chemical formulations tailored to
          your specific operational requirements.
        </p>

        <div className="flex gap-6 items-center">
          <Link to={paths.contact} className="bg-secondary text-white font-bold text-base px-12 py-5 rounded-[4px] whitespace-nowrap">
            Request Product Consultation
          </Link>
          <Link to={paths.contact} className="border border-white/30 text-white font-bold text-base px-12 py-5 rounded-[4px] whitespace-nowrap">
            Contact Technical Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
