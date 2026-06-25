import React from 'react';

const Infrastructure: React.FC = () => {
  return (
    <section className="bg-white text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-[22.8px]">
        <h2 className="font-bold text-[28px] leading-[42px] text-accent">Infrastructure</h2>

        <p className="text-[14px] leading-[22.75px] text-card-foreground">
          Concrete admixtures, waterproofing, and structural protection for the future of African cities.
        </p>

        <div className="flex flex-col gap-4 pt-[9.2px]">
          <div className="h-[200px] rounded-[4px] overflow-hidden">
            <img src="/industries-served/skyscraper.svg" alt="Skyscraper" className="w-full h-full object-cover" />
          </div>

          <div className="bg-card border-l-4 border-l-secondary p-4">
            <div className="text-[14px] leading-[20px] text-accent italic">"Advanced chemistry is the foundation of durable infrastructure."</div>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid p-30 gap-x-16 items-center grid-cols-[1fr_2fr]">
        <div className="space-y-6">
          <div className="text-[40px] leading-15 text-accent font-bold">Infrastructure & Construction</div>

          <p className="text-base text-card-foreground leading-6 font-normal">
            Chemical technologies for the future of African cities. We provide concrete admixtures, waterproofing, and structural protection.
          </p>

          <div className="bg-card border-l-4 border-l-secondary py-8 px-6">
            <div className="italic text-base text-accent leading-6">"Advanced chemistry is the foundation of durable infrastructure."</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div className="min-h-75 rounded-[4px] overflow-hidden">
            <img src="/industries-served/skyscraper.svg" alt="Bridge 1" />
          </div>
          <div className="min-h-75 rounded-[4px] overflow-hidden">
            <img src="/industries-served/bridge.svg" alt="Bridge 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
