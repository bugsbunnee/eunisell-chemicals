import React from 'react';

const statements = [
  {
    title: 'our vision',
    description: "To be Africa's most trusted provider of industrial specialty chemicals and energy production solutions.",
    caption: 'Strategic Future',
  },
  {
    title: 'our mission',
    description: 'To deliver innovative, high-quality chemical solutions that improve operational efficiency and create long-term value.',
    caption: 'Operational Commitment',
  },
];

const Statements: React.FC = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 px-6 py-16 md:px-30 md:py-35 bg-accent w-full relative">
      <img src="/about/grid.svg" alt="Grid" className="absolute h-4/5 left-12 opacity-10 z-30 hidden md:block" />

      {statements.map((statement) => (
        <div
          key={statement.caption}
          className="text-left p-8 md:p-16 bg-primary/40 border z-50 border-primary-foreground/10 rounded-[4px] min-h-[300px] flex flex-col justify-between"
        >
          <div>
            <div className="text-[10px] font-bold uppercase text-secondary leading-[15px] tracking-[3px]">{statement.title}</div>
            <div className="font-bold text-[24px] md:text-[42px] text-primary-foreground leading-[32px] md:leading-12.5 mt-4 md:mt-6">
              {statement.description}
            </div>
          </div>
          <div className="flex items-center gap-x-4 mt-8">
            <div className="h-px w-8 bg-secondary shrink-0"></div>
            <div className="text-[10px] font-normal uppercase text-muted leading-[15px] tracking-[1px]">{statement.caption}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Statements;
