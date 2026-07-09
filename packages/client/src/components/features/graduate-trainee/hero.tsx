import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden text-left">
      <img src="/graduate-trainee/hero.jpg" alt="Young professionals in a modern industrial laboratory" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 via-40% to-accent/0" />

      {/* Mobile layout */}
      <div className="md:hidden relative px-6 py-16 flex flex-col gap-6">
        <nav className="font-medium text-[12px] leading-5 tracking-[2px] uppercase text-secondary">
          <Link to={paths.home}>Home</Link> / <Link to={paths.careers}>Careers</Link> / Graduate Trainee Programme
        </nav>

        <div className="flex flex-col gap-4">
          <div className="font-bold text-[13px] leading-5 tracking-[4px] uppercase text-secondary">Careers</div>
          <h1 className="font-light text-[38px] leading-12 text-white">Eunisell Graduate Trainee Programme</h1>
          <p className="font-medium text-[18px] leading-7 text-muted">Build Your Future. Shape Africa's Energy Industry.</p>
          <p className="font-light text-[16px] leading-6.5 text-white/80">
            Your career begins with the opportunities you choose. At Eunisell, we are committed to developing exceptional graduates into the next generation of professionals who
            will help shape the future of Africa's energy and industrial sectors.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={() => navigate(paths.careers)}
            className="w-full h-13 bg-secondary text-white text-[14px] font-medium flex items-center justify-center rounded-xs transition-all hover:scale-105"
          >
            Apply Now
          </button>
          <button
            onClick={() => navigate(paths.careers)}
            className="w-full h-13 border border-white/30 backdrop-blur-[2px] text-white text-[14px] font-medium flex items-center justify-center rounded-xs transition-all hover:scale-105"
          >
            View Careers
          </button>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex relative h-175 flex-col justify-center px-15">
        <nav className="font-medium text-[14px] leading-5 tracking-[3px] uppercase text-secondary pb-6">
          <Link to={paths.home}>Home</Link> / <Link to={paths.careers}>Careers</Link> / Graduate Trainee Programme
        </nav>

        <div className="flex flex-col gap-6 max-w-192">
          <div className="font-bold text-[14px] leading-5 tracking-[5px] uppercase text-secondary">Careers</div>

          <h1 className="font-light text-[60px] leading-18.75 text-white">
            Eunisell Graduate Trainee
            <br />
            Programme
          </h1>

          <p className="font-medium text-[24px] leading-8 text-muted">Build Your Future. Shape Africa's Energy Industry.</p>

          <p className="font-light text-[18px] leading-7.3125 text-white/80">
            Your career begins with the opportunities you choose. At Eunisell, we are committed to developing exceptional graduates into the next generation of professionals who
            will help shape the future of Africa's energy and industrial sectors.
          </p>

          <div className="flex items-start gap-4 pt-6">
            <button
              onClick={() => navigate(paths.careers)}
              className="bg-secondary text-white text-[14px] font-medium px-10 py-4.25 rounded-xs hover:bg-secondary/90 transition-all hover:scale-105"
            >
              Apply Now
            </button>
            <button
              onClick={() => navigate(paths.careers)}
              className="border border-white/30 backdrop-blur-[2px] text-white text-[14px] font-medium px-10 py-4 rounded-xs hover:bg-white/10 transition-all hover:scale-105"
            >
              View Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
