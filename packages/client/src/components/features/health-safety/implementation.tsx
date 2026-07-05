import React from 'react';

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M24 0C24.4312 0 24.8625 0.09375 25.2562 0.271875L42.9094 7.7625C44.9719 8.63438 46.5094 10.6688 46.5 13.125C46.4531 22.425 42.6281 39.4406 26.475 47.175C24.9094 47.925 23.0906 47.925 21.525 47.175C5.37188 39.4406 1.54687 22.425 1.5 13.125C1.49062 10.6688 3.02812 8.63438 5.09062 7.7625L22.7531 0.271875C23.1375 0.09375 23.5687 0 24 0ZM24 6.2625V41.7C36.9375 35.4375 40.4156 21.5719 40.5 13.2563L24 6.2625Z"
      fill="currentColor"
    />
  </svg>
);

const Implementation: React.FC = () => {
  return (
    <section className="bg-accent">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col items-center gap-6">
        <ShieldIcon className="size-10 text-secondary" />

        <h2 className="font-bold text-[26px] leading-8 text-white text-center">Implementation and Assurance</h2>

        <p className="opacity-90 italic text-[17px] leading-7 text-secondary-pale text-center">
          "Management at all levels is responsible for the communication, implementation, and visible leadership of this policy. Every employee and contractor is expected to
          understand their roles and responsibilities and to comply with this policy at all times."
        </p>

        <div className="flex items-center gap-4 pt-4">
          <div className="bg-secondary h-px w-12" />
          <div className="font-semibold text-[13px] leading-5 tracking-[2.8px] uppercase text-secondary text-center">Operational Standard</div>
          <div className="bg-secondary h-px w-12" />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid justify-items-center py-24">
        <div className="grid justify-items-center gap-8 w-full max-w-250 px-10">
          <ShieldIcon className="size-12 text-secondary" />

          <h2 className="font-bold text-[30px] leading-9 text-white text-center">Implementation and Assurance</h2>

          <p className="opacity-90 italic text-[20px] leading-[32.5px] text-secondary-pale text-center">
            "Management at all levels is responsible for the communication, implementation, and visible leadership of this policy. Every employee and contractor is expected to
            understand their roles and responsibilities and to comply with this policy at all times."
          </p>

          <div className="flex items-center gap-4 pt-4">
            <div className="bg-secondary h-px w-12" />
            <div className="font-semibold text-[14px] leading-5 tracking-[2.8px] uppercase text-secondary text-center">Operational Standard</div>
            <div className="bg-secondary h-px w-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
