import React from 'react';

const meta = [
  { label: 'Document Ref', value: 'HSEQ-001 Rev.3' },
  { label: 'Last Revised', value: 'January, 2025' },
];

const Hero: React.FC = () => {
  return (
    <section className="bg-card-soft">
      {/* Mobile layout */}
      <div className="md:hidden px-6 pt-16 pb-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-bold text-[28px] leading-9 text-accent">HSE Policy Requirements</h1>
          <p className="text-[15px] leading-6 text-muted">To achieve our HSE objectives, Eunisell adheres to the following core requirements across all industrial operations.</p>
        </div>

        <div className="bg-background border-l-4 border-secondary shadow-2xl p-6 flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-[13px] leading-5 tracking-[0.7px] uppercase text-secondary">Eunisell Limited</div>
            <h2 className="font-bold text-[20px] leading-7 text-accent">Policy: Health Safety and Environment</h2>
          </div>
          <div className="flex gap-8">
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col">
                <div className="font-medium text-[10px] leading-[15px] tracking-[0.13px] uppercase text-muted">{item.label}</div>
                <div className="font-semibold text-[14px] leading-5 text-accent">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col items-center gap-[29px] px-30 pt-24 pb-[54px]">
        <div className="flex flex-col items-center gap-4 w-full max-w-280">
          <h1 className="font-bold text-[30px] leading-9 text-accent text-center">HSE Policy Requirements</h1>
          <p className="text-[16px] leading-6 text-muted text-center max-w-168">
            To achieve our HSE objectives, Eunisell adheres to the following core requirements across all industrial operations.
          </p>
        </div>

        <div className="bg-background border-l-4 border-secondary shadow-2xl w-full max-w-280 p-8 grid grid-cols-[1fr_auto] items-center gap-8">
          <div className="flex flex-col gap-1 text-left">
            <div className="font-semibold text-[14px] leading-5 tracking-[0.7px] uppercase text-secondary">Eunisell Limited</div>
            <h2 className="font-bold text-[24px] leading-8 text-accent">Policy: Health Safety and Environment</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 self-start">
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col items-end">
                <div className="font-medium text-[10px] leading-[15px] tracking-[0.13px] uppercase text-muted text-right">{item.label}</div>
                <div className="font-semibold text-[14px] leading-5 text-accent text-right">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
