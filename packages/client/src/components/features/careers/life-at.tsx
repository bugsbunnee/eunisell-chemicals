import React from 'react';

const LifeAtEunisell: React.FC = () => (
  <section className="bg-card py-24 px-30 text-left">
    <div className="max-w-[1776px]">
      <h2 className="font-bold text-accent text-[40px] leading-[60px] mb-12">Life at Eunisell</h2>

      {/* Photo grid: large left (spans 2 rows) + 2 smaller right */}
      <div className="grid gap-4" style={{ gridTemplateColumns: '2fr 1fr', gridTemplateRows: '1fr 1fr', height: '600px' }}>
        {/* Large left — spans both rows */}
        <div className="rounded-[8px] overflow-hidden" style={{ gridRow: '1 / 3' }}>
          <img
            src="https://www.figma.com/api/mcp/asset/582a17ff-3e75-4320-9034-9ac701a2ee07"
            alt="Eunisell manufacturing facility"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Top right */}
        <div className="rounded-[8px] overflow-hidden">
          <img
            src="https://www.figma.com/api/mcp/asset/63624a47-074a-4b55-88b6-8249868efe0e"
            alt="Chemical engineers collaborating"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Bottom right */}
        <div className="rounded-[8px] overflow-hidden">
          <img
            src="https://www.figma.com/api/mcp/asset/4b49eda6-b1f3-4845-a2c9-30b27dab0693"
            alt="Laboratory researcher"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default LifeAtEunisell;
