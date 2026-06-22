import React from 'react';

const Infrastructure: React.FC = () => {
  return (
    <section className="bg-white p-30 gap-x-16 items-center text-left grid grid-cols-[1fr_2fr]">
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
    </section>
  );
};

export default Infrastructure;
