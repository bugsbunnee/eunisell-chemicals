import React from 'react';

const opportunities = [
  'Gain practical experience through real business projects.',
  'Learn from experienced industry professionals and subject matter experts.',
  'Develop technical, business, and leadership capabilities.',
  'Collaborate within a dynamic, innovative, and high-performing environment.',
  "Build a rewarding career with one of Africa's leading chemicals and engineering solutions providers.",
];

const WhyJoin: React.FC = () => {
  const intro = (
    <>
      <p>
        For over 30 years, Eunisell has delivered innovative chemical and engineering solutions across Africa. While our heritage is rooted in the oil and gas industry, our
        expertise also supports a wide range of industrial sectors, including food and beverage, cleaning and hygiene, water treatment, metal cleaning, aluminium processing,
        construction, and marine industries.
      </p>
      <p>
        Our Graduate Trainee Programme offers a unique opportunity to gain practical experience, structured learning, professional mentorship, and exposure to impactful projects
        across our Chemicals, Engineering, Production Solutions, and Corporate Services functions. If you are ambitious, curious, and eager to make a meaningful impact, we invite
        you to begin your career journey with us.
      </p>
    </>
  );

  const list = (
    <ul className="flex flex-col gap-4">
      {opportunities.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <img src="/graduate-trainee/check.svg" alt="" className="w-[10.5px] h-3 mt-2 shrink-0" />
          <span className="font-light text-[15px] leading-7 text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="bg-background text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="bg-secondary h-0.5 w-10" />
          <h2 className="font-light text-[28px] leading-9 text-accent">Why Join Eunisell?</h2>
        </div>

        <div className="flex flex-col gap-6 font-light text-[15px] leading-6.5 text-muted-foreground">{intro}</div>

        <div className="font-medium text-[16px] leading-7 text-accent">As a Graduate Trainee, you will have the opportunity to:</div>

        {list}

        <div className="relative mt-6">
          <div className="absolute bg-card-soft border border-muted/20 inset-0 translate-x-3 translate-y-3" />
          <img src="/graduate-trainee/portrait.jpg" alt="Young Eunisell professional engineer" className="relative w-full h-80 object-cover" />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-2 gap-20 items-start px-36 py-24">
        <div className="flex flex-col gap-4">
          <div className="bg-secondary h-0.5 w-10" />
          <h2 className="font-light text-[36px] leading-10 text-accent">Why Join Eunisell?</h2>

          <div className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col gap-6 font-light text-[15px] leading-6.25 text-muted-foreground">{intro}</div>

            <div className="font-medium text-[16px] leading-7 text-accent">As a Graduate Trainee, you will have the opportunity to:</div>

            {list}
          </div>
        </div>

        <div className="relative h-150 self-center">
          <div className="absolute bg-card-soft border border-muted/20 inset-0 translate-x-6 translate-y-6" />
          <img src="/graduate-trainee/portrait.jpg" alt="Young Eunisell professional engineer" className="relative size-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
