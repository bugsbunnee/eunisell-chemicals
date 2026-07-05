import React from 'react';
import FilePenIcon from '../../../assets/icons/FilePenIcon';

const requirements = [
  'To prevent harm to people or the environment as a result of our operations',
  'To define and communicate responsibility and accountability for HSE activities',
  'To Provide and maintain a safe and healthy work place and work equipment',
  'To Provide and maintain a safe and efficient work method for HSE critical activities',
  'To identify, eliminate or minimize any potential source of harm to people or the environment',
  'To acknowledge and respond to HSE concerns raised by our own employees, customers, contractors, and the wider public',
  'To Ensure our employees and contractors are provided with necessary information, instruction, training and supervision to enable them to work without causing or sustaining harm',
  'To define and measure objectives and targets for HSE performance',
  'To Establish and maintain effective HSE management controls',
  'To Continuously improve our HSE performance',
];

const SignatureCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative bg-card-soft border border-ring rounded-[8px] p-12 w-full max-w-md flex flex-col gap-6 ${className ?? ''}`}>
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background px-4 pt-px pb-0.5">
      <div className="pt-0.5 pb-0.75">
        <FilePenIcon className="w-6.75 h-6 text-secondary" />
      </div>
    </div>

    <div className="h-16 flex items-center justify-center">
      <div className="opacity-80 font-[Georgia] italic text-[26.8px] leading-9 text-accent text-center">Chika Ikenga</div>
    </div>

    <div className="border-t border-muted pt-6 flex flex-col items-center">
      <div className="font-bold text-[20px] leading-7 text-accent text-center">Chika Ikenga</div>
      <div className="font-medium text-[16px] leading-6 text-primary-light text-center">Group Managing Director</div>
      <div className="pt-2 text-[14px] leading-5 text-muted text-center">6th January 2025</div>
    </div>
  </div>
);

const PolicyStatement: React.FC = () => {
  const body = (
    <>
      <p>
        Eunisell will conduct our business in a manner that prevents harm to people and environment as a result of our operations through the management and control of risk and
        compliance with legal and similar requirements, contractors, shareholders and the wider public.
      </p>

      <p className="mt-[32.5px]">The requirements of the HSE policy are:</p>

      <ul className="list-disc list-outside ml-[22.5px]">
        {requirements.map((requirement) => (
          <li key={requirement}>{requirement}</li>
        ))}
      </ul>

      <p className="mt-[32.5px]">
        The details of how this policy is implemented within Eunisell are detailed in the Health, Safety and Environment policy Manual, Handbook, and other supporting information.
      </p>
    </>
  );

  return (
    <section className="bg-background text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[28px] leading-9 text-accent">Policy Statement</h2>
          <div className="bg-secondary h-1.5 w-20" />
        </div>

        <div className="text-[15px] leading-7 text-ink">{body}</div>

        <SignatureCard className="mt-6 self-center" />
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-[341.33px_1fr] gap-17 pt-[50px] pb-14 pl-[294px] pr-30">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-4xl leading-[45px] text-accent">Policy Statement</h2>
          <div className="bg-secondary h-1.5 w-20" />
        </div>

        <div className="flex flex-col gap-13 max-w-[731px]">
          <div className="text-[15px] leading-[32.5px] text-ink">{body}</div>

          <SignatureCard />
        </div>
      </div>
    </section>
  );
};

export default PolicyStatement;
