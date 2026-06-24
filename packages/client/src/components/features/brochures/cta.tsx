import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const Cta: React.FC = () => {
  return (
    <section className="relative bg-accent text-white py-20 md:h-[520px] md:py-0 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 40px),
                        repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 40px)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col items-center">
        <div className="pb-4 md:pb-6">
          <span className="font-bold text-secondary text-xs md:text-sm uppercase tracking-[3.6px] md:tracking-[4.2px]">Expert Assistance</span>
        </div>

        <div className="pb-4 md:pb-8">
          <h2 className="font-bold text-[30px] md:text-[48px] text-white text-center leading-[37.5px] md:leading-[60px]">
            <span className="md:hidden">Need Help Choosing?</span>
            <span className="hidden md:inline whitespace-nowrap">
              Need Help Choosing the Right
              <br />
              Chemical Solution?
            </span>
          </h2>
        </div>

        <p className="text-white/70 text-base md:text-[20px] text-center leading-6 md:leading-[28px] max-w-full md:max-w-[800px] pb-6 md:pb-12">
          Our technical engineers are ready to assist you with custom chemical formulations.
          <span className="hidden md:inline"> tailored to your specific operational requirements.</span>
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center w-full md:w-auto">
          <Link to={paths.contact} className="bg-secondary text-white font-bold text-base text-center py-5 md:px-12 rounded-[4px] whitespace-nowrap">
            Request Consultation
          </Link>
          <Link
            to={paths.contact}
            className="border border-white/30 text-white font-bold text-base text-center py-5 md:px-12 rounded-[4px] whitespace-nowrap"
          >
            Technical Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
