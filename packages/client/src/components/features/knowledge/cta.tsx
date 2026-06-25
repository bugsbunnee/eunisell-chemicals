import React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

const Cta: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-accent py-16 px-6 md:py-24 md:px-8 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-200 mx-auto">
        <h2 className="font-bold text-white text-[24px] md:text-[52px] leading-8 md:leading-[1.35] mb-4 md:mb-6">
          Need Technical Guidance for Your Operation?
        </h2>

        <p className="text-[#cbd5e1] text-sm md:text-[16px] leading-5 md:leading-[1.75] max-w-172 mx-auto mb-4 md:mb-12">
          Our engineers are available for specialized consultations on your performance challenges.
        </p>

        <button
          onClick={() => navigate(paths.contact)}
          className="w-full md:w-auto md:h-17 md:px-12 h-14 bg-secondary text-white font-bold text-sm md:text-[15px] uppercase tracking-[1px] hover:bg-secondary/90 transition-colors"
        >
          Request Technical Consultation
        </button>
      </div>
    </section>
  );
};

export default Cta;
