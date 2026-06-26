import React from 'react';

const metrics = [
  {
    id: '01',
    title: 'Field-Proven Tech',
    description: "Formulations tested in the world's most demanding environments, from deepwater to high-pressure reservoirs.",
  },
  {
    id: '02',
    title: 'Localized Support',
    description: 'Strategic regional presence ensuring rapid response and on-site technical expertise where it matters most.',
  },
  {
    id: '03',
    title: 'Lab Analytics',
    description: 'State-of-the-art analytical labs for water analysis, fluid compatibility, and custom chemical tailoring.',
  },
  {
    id: '04',
    title: 'ESG Compliance',
    description: 'Developing environmentally responsible chemistries that meet strict regulatory and safety standards globally.',
  },
];

const Performance: React.FC = () => {
  return (
    <section className="bg-accent text-left">
      {/* Mobile */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <h2 className="text-[28px] leading-9 text-white">Built for Production Performance and Mission-Critical Reliability</h2>
        <div className="flex flex-col gap-8">
          {metrics.map((metric) => (
            <div key={metric.id} className="flex flex-col gap-2">
              <div className="text-[36px] leading-10 text-secondary">{metric.id}</div>
              <div className="text-[18px] leading-7 text-white">{metric.title}</div>
              <p className="text-[14px] leading-5 text-white/60">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-16 px-45">
        <div className="text-4xl leading-13.75 font-bold text-primary-foreground max-w-163.25">Built for Production Performance and Mission-Critical Reliability</div>

        <div className="mt-16 grid grid-cols-4 gap-x-6">
          {metrics.map((metric) => (
            <div key={metric.id}>
              <div className="font-black text-secondary text-4xl">{metric.id}</div>
              <div className="my-4 text-lg font-bold text-primary-foreground">{metric.title}</div>
              <p className="text-primary-foreground/60 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;
