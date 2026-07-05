import React from 'react';

const steps = ['Online Application', 'Application Review', 'Aptitude Assessment', 'Interviews', 'Final Selection', 'Offer and Onboarding'];

const RecruitmentProcess: React.FC = () => {
  return (
    <section className="bg-background">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-light text-[28px] leading-9 text-accent">Our Recruitment Process</h2>
          <p className="font-light text-[15px] leading-6 text-muted-foreground">
            Our recruitment process is designed to identify graduates with the potential to succeed and grow within Eunisell.
          </p>
        </div>

        <div className="relative flex flex-col gap-8">
          <div className="absolute bg-muted/30 left-[29px] top-8 bottom-8 w-px" />
          {steps.map((step, index) => (
            <div key={step} className="relative flex items-center gap-6 text-left">
              <div className="bg-background border border-secondary rounded-full size-15 shrink-0 flex items-center justify-center text-[16px] leading-6 text-accent">
                {index + 1}
              </div>
              <div className="font-medium text-[15px] leading-5 text-accent">{step}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col gap-16 max-w-350 mx-auto px-10 py-24 w-full">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-light text-[36px] leading-10 text-accent text-center">Our Recruitment Process</h2>
          <p className="font-light text-[16px] leading-6 text-muted-foreground text-center max-w-2xl">
            Our recruitment process is designed to identify graduates with the potential to succeed and grow within Eunisell.
          </p>
        </div>

        <div className="relative flex items-start justify-between px-10">
          <div className="absolute bg-muted/30 h-px left-37.5 right-37.5 top-7.5" />
          {steps.map((step, index) => (
            <div key={step} className="relative flex flex-col items-center gap-4">
              <div className="bg-background border border-secondary rounded-full size-15 flex items-center justify-center text-[16px] leading-6 text-accent">{index + 1}</div>
              <div className="font-medium text-[14px] leading-5 text-accent text-center">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcess;
