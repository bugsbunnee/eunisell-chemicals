import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToView } from '../../../lib/utils';
import { paths } from '../../../lib/data';

const CareerCta: React.FC = () => (
  <section className="bg-white">
    {/* Mobile */}
    <div className="md:hidden px-6 pb-16">
      <div
        className="relative overflow-hidden rounded-[16px] bg-accent p-10 flex flex-col items-center text-center gap-6"
        style={{ backgroundImage: 'linear-gradient(90deg, rgb(0, 32, 55) 0%, rgb(0, 32, 55) 100%)' }}
      >
        <div className="absolute -bottom-20 -right-20 size-50 rounded-full bg-secondary blur-[30px] opacity-20 pointer-events-none" />

        <div className="relative flex flex-col items-center gap-6 w-full">
          <h2 className="font-bold text-white text-[30px] leading-9 text-center">
            Start Your
            <br />
            Career Journey
          </h2>
          <p className="text-[#afb1b3] text-[15px] leading-[22.5px] text-center">Be part of the specialized force moving Africa's industry forward.</p>
          <div className="flex flex-col gap-3 w-full">
            <button onClick={() => scrollToView('open-positions')} className="w-full h-13 bg-secondary text-white font-bold text-[16px] rounded-[4px]">
              Apply Now
            </button>
            <a
              href="https://www.linkedin.com/company/eunisell"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-13 border border-white text-white font-bold text-[16px] rounded-[4px] flex items-center justify-center tracking-[0.031px]"
            >
              LinkedIn Careers
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden md:block py-24 px-30">
      <div
        className="relative overflow-hidden rounded-[24px] bg-accent py-20 px-20 text-center"
        style={{ backgroundImage: 'linear-gradient(90deg, rgb(0, 32, 55) 0%, rgb(0, 32, 55) 100%)' }}
      >
        <div className="absolute -bottom-50 -right-50 w-125 h-125 rounded-full bg-secondary blur-[60px] opacity-10 pointer-events-none" />

        <div className="relative flex flex-col items-center gap-6 max-w-[1616px] mx-auto">
          <h2 className="font-bold text-white text-[48px] leading-18 text-center">Start Your Career Journey with Eunisell Chemicals</h2>
          <p className="text-[#afb1b3] text-[20px] leading-7.5 text-center max-w-200">Be part of the specialized force that keeps Africa's industry and energy moving forward.</p>

          <div className="flex items-center gap-6 mt-4">
            <button
              onClick={() => scrollToView('open-positions')}
              className="bg-secondary text-white font-bold text-[18px] px-10 py-5.25 rounded-[4px] hover:bg-secondary/90 transition-colors"
            >
              Apply Now
            </button>
            <a
              href="https://www.linkedin.com/company/eunisell"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-bold text-[18px] px-10 py-5 rounded-[4px] hover:bg-white/10 transition-colors"
            >
              LinkedIn Careers
            </a>
          </div>

          <div className="flex items-center gap-12 mt-6">
            {['Our Locations', 'Internship Programs', 'Expertise Areas'].map((label) => (
              <Link key={label} to={paths.contact} className="text-[#afb1b3] text-sm leading-5.25 hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CareerCta;
