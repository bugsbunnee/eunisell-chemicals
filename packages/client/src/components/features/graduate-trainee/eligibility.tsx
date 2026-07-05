import React from 'react';

const requirements = [
  "Hold a Bachelor's degree (or equivalent qualification) from a recognised institution.",
  'Have successfully completed the National Youth Service Corps (NYSC) programme',
  'Demonstrate strong academic achievement and involvement in extracurricular activities.',
  'Possess excellent interpersonal and communication skills.',
  'Not more than 28 years as at the point of application',
];

const Eligibility: React.FC = () => {
  return (
    <section className="bg-accent text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-[13px] leading-5 tracking-[3px] uppercase text-secondary">Requirements</div>
          <h2 className="font-light text-[28px] leading-9 text-white">Eligibility Requirements</h2>
          <p className="font-light text-[15px] leading-6 text-white/60">
            Specific eligibility criteria and programme requirements will be published during each recruitment cycle.
          </p>
        </div>

        <div className="border border-white/10 flex flex-col">
          {requirements.map((requirement, index) => (
            <div key={requirement} className={`p-6 flex flex-col gap-3 ${index > 0 ? 'border-t border-white/10' : ''}`}>
              <div className="text-[12px] leading-4 text-white/40">{String(index + 1).padStart(2, '0')}</div>
              <p className="font-light text-[14px] leading-[22.75px] text-white">{requirement}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col gap-16 max-w-350 mx-auto px-10 py-24 w-full">
        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-[14px] leading-5 tracking-[3px] uppercase text-secondary">Requirements</div>
            <h2 className="font-light text-[36px] leading-10 text-white">Eligibility Requirements</h2>
          </div>
          <p className="font-light text-[16px] leading-6 text-white/60 text-right max-w-md">
            Specific eligibility criteria and programme requirements will be published during each recruitment cycle.
          </p>
        </div>

        <div className="border border-white/10 grid grid-cols-5">
          {requirements.map((requirement, index) => (
            <div key={requirement} className={`p-8 flex flex-col gap-3.75 ${index < requirements.length - 1 ? 'border-r border-white/10' : ''}`}>
              <div className="text-[12px] leading-4 text-white/40">{String(index + 1).padStart(2, '0')}</div>
              <p className="font-light text-[14px] leading-[22.75px] text-white">{requirement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
