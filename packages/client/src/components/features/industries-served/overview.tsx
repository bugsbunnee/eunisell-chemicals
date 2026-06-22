import React from 'react';

const highlights = [
  {
    value: '15+',
    label: 'Industries Served',
    description: 'Spanning energy, manufacturing, utilities, marine, construction, and beyond.',
  },
  {
    value: '500+',
    label: 'Active Clients',
    description: 'IOCs, LOCs, industrial operators, and utilities across the continent.',
  },
  {
    value: '20+',
    label: 'Years of Expertise',
    description: "Decades of applied chemical knowledge for Africa's most complex operations.",
  },
];

const Overview: React.FC = () => {
  return (
    <section className="px-30 py-32 bg-background grid grid-cols-2 gap-x-24 items-start">
      <div className="text-left">
        <div className="w-16 h-1 bg-secondary mb-9" />

        <h2 className="font-bold text-[40px] leading-[1.2] text-accent max-w-xl">
          Trusted Across Africa's Most
          <br />
          Demanding Sectors
        </h2>

        <p className="mt-10 text-muted-foreground text-base leading-relaxed max-w-xl">
          Eunisell Chemicals provides high-performance chemical solutions tailored to the unique demands of diverse industrial sectors. Our deep
          technical expertise, expansive product portfolio, and responsive supply chain allow us to deliver consistent value wherever operations take
          place — upstream, downstream, or onshore.
        </p>

        <blockquote className="mt-10 flex items-start gap-x-4 text-muted-foreground text-base italic">
          <span className="text-secondary font-black text-3xl leading-none mt-1">&ldquo;</span>
          <p>
            We don't just supply chemicals — we partner with operators to solve the specific challenges of their industry and optimize performance
            from the ground up.
          </p>
        </blockquote>
      </div>

      <div className="space-y-0">
        {highlights.map((item) => (
          <div key={item.label} className="p-8 border border-border border-l-4 border-l-secondary bg-background text-left">
            <div className="font-extrabold text-4xl text-secondary mb-2">{item.value}</div>
            <div className="font-bold text-lg text-accent mb-2">{item.label}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
