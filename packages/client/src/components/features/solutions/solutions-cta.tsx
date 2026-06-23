import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const categories = ['Product Enquiries', 'Lab Services', 'Engineering Support'];

const SolutionsCta: React.FC = () => (
  <section className="bg-accent py-24 px-30">
    <div className="flex flex-col items-center gap-6 text-center max-w-[974px] mx-auto">
      <span className="font-black text-secondary text-[15px] uppercase tracking-[3px] leading-4">Get Started</span>

      <h2 className="font-black text-[60px] leading-[75px] text-center">
        <span className="text-white">Need a Specialized</span>
        <br />
        <span className="text-secondary">Chemical Solution?</span>
      </h2>

      <p className="text-white/60 text-[20px] leading-7 max-w-175">
        Our technical teams are ready to assess your operational challenges and engineer a performance-driven solution.
      </p>

      <div className="flex items-center gap-6 mt-4">
        <Link
          to={paths.contact}
          className="bg-secondary text-white font-bold text-[18px] px-12 py-5 rounded-[2px] hover:bg-secondary/90 transition-colors"
        >
          Request Technical Consultation
        </Link>
        <Link
          to={paths.contact}
          className="bg-white/5 border border-white/20 text-white font-bold text-[18px] px-12 py-5 rounded-[2px] hover:bg-white/10 transition-colors"
        >
          Contact Technical Support
        </Link>
      </div>

      <div className="flex items-center gap-12 mt-8">
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {i > 0 && <div className="w-1 h-1 rounded-full bg-white/20" />}
            <span className="text-white/30 text-[12px] uppercase tracking-[1.2px]">{cat}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsCta;
