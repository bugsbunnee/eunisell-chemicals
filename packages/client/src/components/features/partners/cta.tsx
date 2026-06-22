import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const Cta: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden p-30 flex items-center text-left">
      <div className="absolute right-0 top-0 bottom-0 w-160">
        <img src="/partners/cta-plant.jpg" alt="" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-linear-to-r from-accent via-accent/20 to-transparent" />
      </div>

      <div className="relative z-10 space-y-8">
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
    </section>
  );
};

export default Cta;
