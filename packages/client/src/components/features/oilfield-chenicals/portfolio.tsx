import React from 'react';

const portfolios = ['Production Chemicals', 'Flow Assurance', 'Well Intervention', 'Water Treatment'];

const Portfolio: React.FC = () => {
  return (
    <section className="bg-background text-left py-16 px-45">
      <div className="flex items-center gap-x-8">
        <div className="font-bold text-3xl text-accent">Oilfield Chemical Portfolio</div>
        <div className="border-b border-b-border flex-1"></div>
        <div className="text-muted-foreground text-sm ">SYSTEM ARCHITECTURE</div>
      </div>

      <div className="grid grid-cols-4 gap-x-4">
        {portfolios.map((portfolio) => (
          <div key={portfolio} className="mt-12 p-6 bg-card border-input border ">
            <div className="px-4 py-5.5 border-l-4 border-l-secondary capitalize h-full flex items-center text-accent text-lg font-bold">
              {portfolio}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
