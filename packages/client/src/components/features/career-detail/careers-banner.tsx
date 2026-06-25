import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

const CareersBanner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-accent relative overflow-hidden flex flex-col items-center justify-center text-center py-24 px-30">
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <img src="/knowledge/abstract.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative flex flex-col items-center gap-6 max-w-[974px]">
        <h2 className="font-extrabold text-white text-[48px] leading-[72px] tracking-[-0.375px]">Build Your Career with Eunisell Chemicals</h2>

        <p className="text-white/60 text-[20px] leading-7 max-w-[700px]">
          We are constantly looking for talented individuals to join our mission of engineering excellence in West Africa.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Link
            to={paths.careers}
            className="bg-secondary text-white font-bold text-[16px] px-10 h-14 rounded flex items-center justify-center hover:bg-secondary/90 transition-colors"
          >
            Explore All Openings
          </Link>
          <button
            onClick={() => navigate(paths.contact)}
            className="border border-white text-white font-bold text-[16px] px-10 h-14 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            Join Talent Pool
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
