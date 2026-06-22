import React from 'react';

const presence = ['Lagos HQ', 'Port Harcourt', 'Niger Delta Operations'];

const GeographicPresence: React.FC = () => {
  return (
    <section className="px-30 py-24 bg-accent relative">
      <img
        src="/contact/geography.svg"
        alt="Geographical Presence"
        className="w-full absolute object-cover h-full top-0 right-0 left-0 bottom-0 z-10"
      />

      <div className="max-w-2xl mx-auto text-center z-50 relative">
        <div className="text-sm font-bold mx-auto text-secondary tracking-[1.4px] py-2 px-6 border-4 border-secondary rounded-full w-fit uppercase">
          geographic presence
        </div>

        <div className="text-5xl font-bold text-white mt-6 capitalize">Serving Across the Region</div>

        <p className="mt-8 text-lg leading-7 text-popover-foreground">
          Strategically positioned to deliver chemical solutions to the most demanding oilfields and industrial hubs in West Africa.
        </p>

        <div className="flex items-center justify-center gap-x-16 mt-16">
          {presence.map((presence) => (
            <div key={presence} className="space-y-4">
              <div className="w-4 h-4 rounded-full bg-secondary mx-auto"></div>
              <div className="text-base leading-6 text-white font-bold capitalize">{presence}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeographicPresence;
