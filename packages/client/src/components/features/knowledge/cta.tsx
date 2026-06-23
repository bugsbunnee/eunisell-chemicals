import React from 'react';

const Cta: React.FC = () => {
  return (
    <section className="bg-accent py-24 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-200 mx-auto px-8">
        <h2 className="font-bold text-white text-[52px] leading-[1.35] mb-6">
          Need Technical Guidance for
          <br />
          Your Operation?
        </h2>

        <p className="text-white/55 text-[16px] leading-[1.75] max-w-172 mx-auto mb-12">
          Our engineers are available for specialized consultations to address your specific chemical performance challenges.
        </p>

        <button className="h-17 w-94 bg-secondary text-white font-bold text-[15px] uppercase tracking-[1px] hover:bg-secondary/90 transition-colors">
          Request Technical Consultation
        </button>
      </div>
    </section>
  );
};

export default Cta;
