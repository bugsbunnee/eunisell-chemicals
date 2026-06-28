import React from 'react';

import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

const CTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 md:py-24 md:px-30 text-center bg-accent relative">
      <img src="/technical-services/abstract.svg" alt="CTA" className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover" />

      <div className="relative z-10">
        <div className="text-[30px] md:text-5xl leading-9.5 md:leading-12 font-bold text-white max-w-4xl mx-auto">Need Technical Support for Your Operation?</div>

        <p className="text-[15px] md:text-xl leading-6 md:leading-8 text-white/70 mt-5 md:mt-8 mx-auto max-w-164.75">
          Partner with Eunisell to unlock hidden efficiencies and safeguard your operational integrity through science.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8 md:mt-12 items-center justify-center">
          <button
            onClick={() => navigate(paths.contact)}
            className="w-full md:w-auto h-14 md:h-auto flex items-center justify-center bg-secondary text-white font-bold text-sm md:text-lg leading-7 md:px-10 md:py-5 rounded-[4px]"
          >
            Get Started Today
          </button>

          <button
            onClick={() => navigate(paths.blog)}
            className="w-full md:w-auto h-14 md:h-auto flex items-center justify-center border border-white/30 text-white font-bold text-sm md:text-lg leading-7 md:px-10 md:py-5 rounded-[4px]"
          >
            View Technical Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
