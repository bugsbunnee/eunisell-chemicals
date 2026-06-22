import React from 'react';

import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-30 text-center bg-accent relative">
      <img src="/technical-services/abstract.svg" alt="CTA" className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover" />

      <div className="text-5xl leading-12 font-bold text-white max-w-4xl mx-auto">Need Technical Support for Your Operation?</div>

      <p className="font-norml text-xl leading-8 text-white/70 mt-8 mx-auto max-w-164.75">
        Partner with Eunisell to unlock hidden efficiencies and safeguard your operational integrity through science.
      </p>

      <div className="flex gap-6 mt-12 items-center justify-center">
        <Link to={paths.contact} className="bg-secondary text-white font-bold text-lg leading-7 px-10 py-5 rounded-[4px] whitespace-nowrap">
          Get Started Today
        </Link>

        <Link to={paths.contact} className="border border-white/30 text-white font-bold text-lg leading-7 px-10 py-5 rounded-[4px] whitespace-nowrap">
          View Technical Blog
        </Link>
      </div>
    </section>
  );
};

export default CTA;
