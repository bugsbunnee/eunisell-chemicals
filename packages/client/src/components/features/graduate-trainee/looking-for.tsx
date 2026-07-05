import React from 'react';

const qualities = [
  'Strong analytical and problem-solving abilities.',
  'Curiosity, initiative, and a passion for continuous learning.',
  'Excellent communication and teamwork skills.',
  'Integrity, professionalism, and accountability.',
  'Adaptability and a commitment to excellence.',
];

const LookingFor: React.FC = () => {
  return (
    <section className="bg-background border-b border-muted/20 text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <img src="/graduate-trainee/team.jpg" alt="Young professionals collaborating" className="w-full h-64 object-cover rounded-xs" />

        <div className="flex flex-col gap-6">
          <div className="bg-secondary h-0.5 w-10" />
          <h2 className="font-light text-[28px] leading-9 text-accent">Who We're Looking For</h2>
          <p className="font-light text-[16px] leading-7 text-muted-foreground">We are looking for graduates who demonstrate:</p>

          <div className="flex flex-col gap-6">
            {qualities.map((quality, index) => (
              <div key={quality} className="flex items-center gap-6">
                <div className="w-12 shrink-0 text-center text-[22px] leading-8 text-secondary">{String(index + 1).padStart(2, '0')}</div>
                <div className="font-medium text-[16px] leading-7 text-accent">{quality}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-2 gap-20 items-center px-40 py-24">
        <img src="/graduate-trainee/team.jpg" alt="Young professionals collaborating" className="w-full h-125 object-cover rounded-xs" />

        <div className="flex flex-col gap-8">
          <div className="bg-secondary h-0.5 w-10" />
          <h2 className="font-light text-[36px] leading-10 text-accent">Who We're Looking For</h2>
          <p className="font-light text-[18px] leading-7 text-muted-foreground">We are looking for graduates who demonstrate:</p>

          <div className="flex flex-col gap-6">
            {qualities.map((quality, index) => (
              <div key={quality} className="flex items-center gap-6">
                <div className="w-12 shrink-0 text-center text-[24px] leading-8 text-secondary">{String(index + 1).padStart(2, '0')}</div>
                <div className="font-medium text-[18px] leading-7 text-accent">{quality}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingFor;
