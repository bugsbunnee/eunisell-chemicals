import React from 'react';

const CsrVision: React.FC = () => {
  return (
    <section className="bg-accent text-center">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-20 flex flex-col items-center gap-8">
        <p className="font-bold text-[12px] text-secondary tracking-[4px] uppercase leading-4">Our CSR Vision</p>

        <h2 className="font-bold text-[30px] leading-9 text-white">
          Empowering Communities, Nurturing Talent and Creating Lasting Impact Beyond Business.
        </h2>

        <div className="w-16 h-1 bg-secondary" />
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <div className="max-w-250 mx-auto space-y-8 items-center">
          <p className="text-base font-bold text-secondary tracking-[4px] uppercase leading-6">Our CSR Vision</p>

          <h2 className="text-6xl font-bold text-white leading-16.5 tracking-[-0.9375px] max-w-211.5 mx-auto">
            Empowering Communities, Nurturing Talent and Creating Lasting Impact Beyond Business.
          </h2>

          <div className="flex items-center justify-center">
            <div className="w-20 h-1 bg-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CsrVision;
