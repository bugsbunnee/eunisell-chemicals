import React from 'react';

const metrics = [
  {
    value: '30+',
    label: 'Years of Applied Research',
    description: 'Decades of field data and technical expertise across oilfield and industrial sectors.',
  },
  { value: '150+', label: 'Technical Publications', description: 'Peer-reviewed articles, case studies, and white papers in our growing library.' },
  { value: '12', label: 'Expert Contributors', description: 'Qualified engineers and field specialists contributing original technical content.' },
  { value: '14', label: 'Countries Covered', description: "Operations and field data spanning Sub-Saharan Africa's key markets." },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-accent-bg py-28 px-20">
      <div className="grid grid-cols-2 gap-x-24 items-center">
        <div className="text-left">
          <div className="text-[10px] font-black uppercase text-secondary tracking-[2px] mb-4">Our Expertise</div>
          <h2 className="font-bold text-[40px] text-accent leading-tight max-w-lg">Built on Decades of Applied Chemical Research</h2>
          <div className="w-16 h-1 bg-secondary mt-8 mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            Our knowledge base is grounded in real operational data, laboratory evaluation, and field performance across Africa's most demanding
            industrial and energy environments.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="p-8 bg-background text-left border border-border">
              <div className="text-5xl font-black text-secondary mb-3">{metric.value}</div>
              <div className="font-bold text-accent text-base mb-2">{metric.label}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
