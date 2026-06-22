import React from 'react';

const metrics = [
  {
    title: '100+',
    description: 'Vessels Serviced Annually',
  },
  {
    title: '24/7',
    description: 'Port-side Technical Support',
  },
];

const Offshore: React.FC = () => {
  return (
    <section className="py-13.75 px-30 bg-[url(/industries-served/ship.svg)] bg-no-repeat bg-cover text-left space-y-6">
      <div className="max-w-150">
        <div className="text-[48px] leading-18 font-bold text-white">Marine & Offshore Services</div>
        <p className="font-normal text-white/80 text-xl leading-[32.5px]">
          From blue water marine operations to deep-water offshore platforms, Eunisell provides specialized corrosion protection, fuel treatments, and
          maintenance chemicals built for the harshest environments.
        </p>

        <div className="flex items-center gap-x-12 mt-8">
          {metrics.map((metric) => (
            <div>
              <div className="text-4xl leading-10 font-bold text-secondary">{metric.title}</div>
              <div className="text-sm leading-5 text-white/60 font-normal">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offshore;
