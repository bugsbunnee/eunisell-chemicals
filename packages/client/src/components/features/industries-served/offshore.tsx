import React from 'react';

const metrics = [
  { title: '100+', description: 'Vessels Serviced Annually' },
  { title: '24/7', description: 'Port-side Technical Support' },
];

const Offshore: React.FC = () => {
  return (
    <section className="text-left">
      {/* Mobile layout */}
      <div className="md:hidden relative bg-accent overflow-hidden px-6 py-16 space-y-4">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img src="/industries-served/ship.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-accent via-accent/70 to-accent/0 pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-4">
          <h2 className="font-bold text-[28px] leading-[35px] text-white">Marine & Offshore Services</h2>

          <p className="text-[14px] leading-[22.75px] text-white/70">
            Specialized corrosion protection, fuel treatments, and maintenance chemicals for marine and offshore platforms.
          </p>

          <div className="flex items-center gap-x-10 pt-4">
            {metrics.map((metric) => (
              <div key={metric.title}>
                <div className="text-[28px] leading-[34px] font-bold text-secondary">{metric.title}</div>
                <div className="text-[12px] leading-[15px] text-white/60 font-normal mt-1">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block py-13.75 px-30 bg-[url(/industries-served/ship.svg)] bg-no-repeat bg-cover space-y-6">
        <div className="max-w-150">
          <div className="text-[48px] leading-18 font-bold text-white">Marine & Offshore Services</div>
          <p className="font-normal text-white/80 text-xl leading-[32.5px]">
            From blue water marine operations to deep-water offshore platforms, Eunisell provides specialized corrosion protection, fuel treatments,
            and maintenance chemicals built for the harshest environments.
          </p>

          <div className="flex items-center gap-x-12 mt-8">
            {metrics.map((metric) => (
              <div key={metric.title}>
                <div className="text-4xl leading-10 font-bold text-secondary">{metric.title}</div>
                <div className="text-sm leading-5 text-white/60 font-normal">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offshore;
