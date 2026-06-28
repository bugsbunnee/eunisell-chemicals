import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const categories = ['Product Enquiries', 'Lab Services', 'Engineering Support'];

const SolutionsCta: React.FC = () => (
  <section className="bg-accent py-16 px-6 md:py-24 md:px-30">
    <div className="flex flex-col items-center gap-6 text-center max-w-[974px] mx-auto">
      <span className="font-black text-secondary text-[15px] uppercase tracking-[3px] leading-4">Get Started</span>

      <h2 className="font-black text-[36px] leading-11 md:text-[60px] md:leading-[75px] text-center">
        <span className="text-white">Need a Specialized</span>
        <br />
        <span className="text-secondary">Chemical Solution?</span>
      </h2>

      <p className="text-white/60 text-[16px] md:text-[20px] leading-6.5 md:leading-7 max-w-175">
        Our technical teams are ready to assess your operational challenges and engineer a performance-driven solution.
      </p>

      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 mt-4 w-full md:w-auto">
        <Link
          to={paths.contact}
          className="bg-secondary text-white font-bold text-[16px] md:text-[18px] px-8 md:px-12 py-4 md:py-5 rounded-xs text-center hover:bg-secondary/90 transition-colors"
        >
          Request Technical Consultation
        </Link>
        <Link
          to={paths.contact}
          className="bg-white/5 border border-white/20 text-white font-bold text-[16px] md:text-[18px] px-8 md:px-12 py-4 md:py-5 rounded-xs text-center hover:bg-white/10 transition-colors"
        >
          Contact Technical Support
        </Link>
      </div>

      <div className="flex items-center gap-6 md:gap-12 mt-4 md:mt-8 flex-wrap justify-center">
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {i > 0 && <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />}
            <span className="text-white/30 text-[11px] md:text-[12px] uppercase tracking-[1.2px]">{cat}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsCta;
