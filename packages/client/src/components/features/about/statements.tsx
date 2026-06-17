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
    <section className="px-45 py-35 bg-accent w-full grid grid-cols-2 gap-12 relative">
      <img src="/about/grid.svg" alt="Grid" className="absolute h-4/5 left-12 opacity-10 z-30" />

      {statements.map((statement) => (
        <div key={statement.caption} className="text-left space-y-6 p-16 bg-primary/40 border z-50 border-primary-foreground/10 rounded-sm">
          <div className="text-xs font-bold uppercase text-secondary leading-4">{statement.title}</div>
          <div className="font-bold text-[42px] text-primary-foreground leading-12.5">{statement.description}</div>
          <div className="flex items-center gap-x-4">
            <div className="h-0.5 w-12 bg-secondary"></div>
            <div className="text-sm font-normal uppercase text-muted leading-4">{statement.caption}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Statements;
