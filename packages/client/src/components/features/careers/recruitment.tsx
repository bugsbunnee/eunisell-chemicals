import React from 'react';
import { TriangleIcon } from 'lucide-react';

const mobileSteps = [
  { title: 'Application Review', description: 'Our HR team evaluates your technical fit.' },
  { title: 'Technical Assessment', description: 'Rigorous testing of specialized knowledge.' },
  { title: 'Interview Panel', description: 'Meeting with technical and leadership teams.' },
];

const desktopSteps = [
  { label: 'Search', description: 'Find the role that fits you.' },
  { label: 'Submit', description: 'Send us your credentials.' },
  { label: 'Review', description: 'Initial screening by HR.' },
  { label: 'Interview', description: 'Technical and culture fit.' },
  { label: 'Onboarding', description: 'Welcome to the team.' },
];

const RecruitmentProcess: React.FC = () => (
  <section>
    {/* Mobile */}
    <div className="md:hidden px-6 py-16 flex flex-col gap-12 text-left">
      <h2 className="font-bold text-accent text-[28px] leading-10.5 text-center tracking-[-0.027px]">Recruitment Process</h2>

      <div className="relative flex flex-col gap-10">
        <div className="absolute bg-[#e8e8e8] top-4 bottom-4 left-[11px] w-0.5" />
        {mobileSteps.map((step) => (
          <div key={step.title} className="flex items-start gap-6">
            <div className="size-6 shrink-0 flex items-center justify-center relative z-10">
              <TriangleIcon size={18} className="text-secondary fill-secondary" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-accent text-[16px] leading-6">{step.title}</h4>
              <p className="text-[#606060] text-[13px] leading-[19.5px]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden md:block bg-white py-24 px-30 text-center">
      <div className="max-w-[1776px] mx-auto">
        <h2 className="font-bold text-accent text-[40px] leading-15 mb-18">Our Recruitment Process</h2>

        <div className="relative flex items-start justify-between">
          <div className="absolute top-[12px] left-0 right-0 h-[2px] bg-border" />
          {desktopSteps.map((step) => (
            <div key={step.label} className="relative flex flex-col items-center w-40">
              <div className="w-6 h-6 rounded-full border-2 border-accent bg-white flex items-center justify-center mb-2 z-10 shrink-0" />
              <p className="font-bold text-accent text-[16px] leading-6 mb-2">{step.label}</p>
              <p className="text-[#606060] text-[13px] leading-[19.5px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RecruitmentProcess;
