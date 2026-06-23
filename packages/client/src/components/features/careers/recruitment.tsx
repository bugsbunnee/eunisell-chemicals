import React from 'react';

const steps = [
  { label: 'Search', description: 'Find the role that fits you.' },
  { label: 'Submit', description: 'Send us your credentials.' },
  { label: 'Review', description: 'Initial screening by HR.' },
  { label: 'Interview', description: 'Technical and culture fit.' },
  { label: 'Onboarding', description: 'Welcome to the team.' },
];

const RecruitmentProcess: React.FC = () => (
  <section className="bg-white py-24 px-30 text-center">
    <div className="max-w-[1776px] mx-auto">
      <h2 className="font-bold text-accent text-[40px] leading-[60px] mb-[72px]">Our Recruitment Process</h2>

      <div className="relative flex items-start justify-between">
        {/* Horizontal line */}
        <div className="absolute top-[12px] left-0 right-0 h-[2px] bg-[#e8e8e8]" />

        {steps.map((step) => (
          <div key={step.label} className="relative flex flex-col items-center w-[160px]">
            {/* Step marker */}
            <div className="w-6 h-6 rounded-full border-2 border-[#002037] bg-white flex items-center justify-center mb-2 z-10 shrink-0" />
            <p className="font-bold text-accent text-[16px] leading-[24px] mb-2">{step.label}</p>
            <p className="text-[#606060] text-[13px] leading-[19.5px]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecruitmentProcess;
