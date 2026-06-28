import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const BlogCta: React.FC = () => {
  return (
    <section className="bg-accent relative overflow-hidden px-8 py-16 md:py-20 md:px-30 text-center">
      <div className="relative flex flex-col gap-6 items-center max-w-195 mx-auto">
        <h2 className="font-bold text-white text-[32px] leading-10 md:text-[48px] md:leading-15">
          Need Technical
          <br />
          Guidance?
        </h2>

        <p className="text-white/60 text-[15px] leading-6 md:text-[18px] md:leading-6.75 max-w-175">
          Our specialists are ready to help you optimize performance with tailored chemical solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
          <Link
            to={paths.contact}
            className="bg-secondary text-white font-bold text-[15px] md:text-[16px] px-10 py-5 md:py-4.75 hover:bg-secondary/90 transition-colors text-center"
          >
            Speak to a Specialist
          </Link>
          <Link
            to={paths.contact}
            className="bg-white/10 border border-white/20 text-white font-bold text-[15px] md:text-[16px] px-10 py-5 md:py-4.5 hover:bg-white/15 transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCta;
