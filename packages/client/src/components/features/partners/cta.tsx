import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const Cta: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden">
      {/* Desktop image panel */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-160">
        <img src="/partners/cta-plant.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-accent via-accent/20 to-transparent" />
      </div>

      {/* Mobile: subtle background */}
      <div className="md:hidden absolute inset-0 opacity-10 pointer-events-none">
        <img src="/partners/cta-plant.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden relative z-10 flex flex-col items-center text-center px-6 py-16 gap-6">
        <h2 className="font-bold text-[28px] text-white leading-[35px]">Looking for a Chemical Solutions Partner?</h2>

        <p className="text-[16px] text-muted leading-[26px] max-w-sm">
          Join forces with Eunisell Chemicals to access premium products and world-class technical support.
        </p>

        <div className="flex flex-col gap-4 w-full pt-4">
          <Link
            to={paths.contact}
            className="w-full bg-secondary text-white uppercase font-bold text-[14px] py-5 rounded-[1px] tracking-[0.7px] text-center"
          >
            Request Consultation
          </Link>
          <Link
            to={paths.contact}
            className="w-full border border-white text-white uppercase font-bold text-[14px] py-5 rounded-[1px] tracking-[0.7px] text-center"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex relative z-10 p-30 items-center text-left">
        <div className="space-y-8">
          <h2 className="font-bold text-5xl text-white leading-15 max-w-175">
            Looking for a Chemical
            <br />
            Solutions Partner?
          </h2>

          <p className="text-xl text-muted leading-[32.5px] max-w-175">
            Join forces with Eunisell Chemicals to access premium products, world-class technical support, and a robust supply chain built for
            performance.
          </p>

          <div className="flex items-center gap-4">
            <Link to={paths.contact} className="bg-secondary text-white uppercase font-bold text-base px-10 py-5 rounded-[1px] whitespace-nowrap">
              Request Technical Consultation
            </Link>
            <Link
              to={paths.contact}
              className="bg-transparent border border-white uppercase text-white font-bold text-base px-10 py-5 rounded-[1px] whitespace-nowrap"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
