import React from 'react';

const CareerCta: React.FC = () => (
  <section className="bg-white py-24 px-30">
    <div
      className="relative overflow-hidden rounded-[24px] bg-accent py-20 px-20 text-center"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgb(0, 32, 55) 0%, rgb(0, 32, 55) 100%)',
      }}
    >
      <div className="absolute -bottom-50 -right-50 w-125 h-125 rounded-full bg-secondary blur-[60px] opacity-10 pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6 max-w-[1616px] mx-auto">
        <h2 className="font-bold text-white text-[48px] leading-18 text-center">Start Your Career Journey with Eunisell Chemicals</h2>
        <p className="text-[#afb1b3] text-[20px] leading-7.5 text-center max-w-200">
          Be part of the specialized force that keeps Africa's industry and energy moving forward.
        </p>

        <div className="flex items-center gap-6 mt-4">
          <button className="bg-secondary text-white font-bold text-[18px] px-10 py-5.25 rounded-[4px] hover:bg-secondary/90 transition-colors">
            Apply Now
          </button>
          <button className="border border-white text-white font-bold text-[18px] px-10 py-5 rounded-[4px] hover:bg-white/10 transition-colors">
            LinkedIn Careers
          </button>
        </div>

        <div className="flex items-center gap-12 mt-6">
          {['Our Locations', 'Internship Programs', 'Expertise Areas'].map((label) => (
            <a key={label} href="#" className="text-[#afb1b3] text-sm leading-5.25 hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CareerCta;
