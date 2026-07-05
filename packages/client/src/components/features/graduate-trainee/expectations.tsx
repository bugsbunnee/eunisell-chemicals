import React from 'react';

const cards = [
  {
    icon: '/graduate-trainee/onboarding.svg',
    iconClassName: 'size-4',
    title: 'Comprehensive Onboarding',
    description: 'Comprehensive onboarding and orientation to get you started on the right foot.',
  },
  {
    icon: '/graduate-trainee/development.svg',
    iconClassName: 'w-5 h-4',
    title: 'Development Programmes',
    description: 'Technical, professional, and leadership development programmes designed for growth.',
  },
  {
    icon: '/graduate-trainee/exposure.svg',
    iconClassName: 'w-4.5 h-4',
    title: 'Cross-functional Exposure',
    description: 'Cross-functional exposure across multiple business areas to broaden your horizons.',
  },
  {
    icon: '/graduate-trainee/mentorship.svg',
    iconClassName: 'w-5 h-4',
    title: 'Structured Mentorship',
    description: 'Structured mentorship and coaching from industry leading professionals.',
  },
  {
    icon: '/graduate-trainee/feedback.svg',
    iconClassName: 'size-4',
    title: 'Performance Feedback',
    description: 'Regular performance feedback and career development support throughout your journey.',
  },
  {
    icon: '/graduate-trainee/projects.svg',
    iconClassName: 'size-4',
    title: 'Impactful Projects',
    description: 'Opportunities to contribute to meaningful business projects from day one.',
  },
];

const Expectations: React.FC = () => {
  return (
    <section className="bg-card-soft text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="font-bold text-[13px] leading-5 tracking-[3px] uppercase text-secondary">Expectations</div>
          <h2 className="font-light text-[28px] leading-9 text-accent">What You Can Expect</h2>
        </div>

        <div className="flex flex-col gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-background border-b-2 border-transparent drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4">
              <div className="bg-card-soft size-12 flex items-center justify-center">
                <img src={card.icon} alt="" className={card.iconClassName} />
              </div>
              <h3 className="font-medium text-[18px] leading-7 text-accent">{card.title}</h3>
              <p className="font-light text-[14px] leading-[22.75px] text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col items-center gap-16 px-15 py-24">
        <div className="flex flex-col items-center gap-4">
          <div className="font-bold text-[14px] leading-5 tracking-[3px] uppercase text-secondary text-center">Expectations</div>
          <h2 className="font-light text-[36px] leading-10 text-accent text-center">What You Can Expect</h2>
        </div>

        <div className="grid grid-cols-3 gap-8 w-full max-w-333">
          {cards.map((card) => (
            <div key={card.title} className="bg-background border-b-2 border-transparent drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-10 flex flex-col gap-3.75 self-start">
              <div className="bg-card-soft size-12 flex items-center justify-center">
                <img src={card.icon} alt="" className={card.iconClassName} />
              </div>
              <h3 className="font-medium text-[20px] leading-7 text-accent pt-4.25">{card.title}</h3>
              <p className="font-light text-[14px] leading-[22.75px] text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expectations;
