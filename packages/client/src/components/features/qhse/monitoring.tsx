import React from 'react';

const metrics = [
  { title: '500,000+', description: 'Man-Hours LTI Free' },
  { title: '100%', description: 'Audit Completion' },
];

const Monitoring: React.FC = () => {
  return (
    <section className="bg-white text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <div className="h-[264px] rounded-[6px] overflow-hidden">
          <img src="/qhse/monitoring.svg" alt="Performance Monitoring" className="w-full h-full object-cover" />
        </div>

        <h2 className="font-bold text-[28px] leading-[35px] text-accent">Performance Monitoring</h2>

        <p className="text-[16px] leading-[26px] text-card-foreground">
          We maintain absolute transparency in our safety performance. Through real-time monitoring and quarterly audits, we ensure every technician
          meets our high standards.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <div key={metric.title} className="p-5 bg-secondary/5 border-l-4 border-l-secondary">
              <h5 className="font-bold text-[20px] leading-8 text-accent">{metric.title}</h5>
              <p className="text-[12px] leading-5 text-card-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <div className="max-w-[1560px] w-full grid grid-cols-2 gap-x-16 items-center">
          <div className="rounded-[6px] w-full h-full relative">
            <img src="/qhse/monitoring.svg" alt="Performance Monitoring" className="w-full h-full object-cover rounded-[6px]" />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-accent leading-10">Performance Monitoring</h2>

            <p className="text-lg font-normal text-card-foreground leading-[29.25px]">
              We maintain absolute transparency in our safety performance. Through real-time monitoring and quarterly audits, we ensure that every
              technician and driver meets our high standards of operational discipline.
            </p>

            <div className="grid grid-cols-2 gap-x-6">
              {metrics.map((metric) => (
                <div key={metric.title} className="p-6 bg-secondary/5 border-l-4 border-l-secondary">
                  <h5 className="text-2xl font-bold text-accent leading-8">{metric.title}</h5>
                  <p className="text-sm font-normal text-card-foreground leading-5">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;
