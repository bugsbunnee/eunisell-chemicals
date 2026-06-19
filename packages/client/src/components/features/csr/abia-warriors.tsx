import React from 'react';

const stats = [
  { label: 'Platform', value: 'NPFL League' },
  { label: 'Focus', value: 'Professionalism' },
  { label: 'Channel', value: 'Elite Coaching' },
  { label: 'Outcome', value: 'Youth Growth' },
];

const AbiaWarriors: React.FC = () => {
  return (
    <section className="bg-white p-30 text-left">
      <div className="lg:max-w-[1560px] w-full grid grid-cols-2 gap-x-24 items-center">
        <div className="h-160 rounded-[6px] overflow-hidden">
          <img src="/csr/warriors.svg" alt="Abia Warriors FC" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-4">
          <p className="text-[15px] font-black text-secondary tracking-[3px] uppercase leading-4">Strategic Partnership</p>

          <h2 className="text-5xl font-bold text-accent leading-18">Eunisell &amp; Abia Warriors FC</h2>

          <div className="pt-[15.25px]">
            <p className="text-lg font-normal text-card-foreground leading-[29.25px]">
              Our partnership with Abia Warriors Football Club represents a multi-year commitment to elevating Nigerian football to international
              standards. By investing in the club, we are investing in the ecosystem that supports players, coaching staff, and local fans.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12">
            {stats.map(({ label, value }) => (
              <div key={label} className="border border-border space-y-1 p-6 rounded-[4px]">
                <div className="text-xs font-bold text-muted tracking-[-0.3px] uppercase leading-4.5">{label}</div>

                <div className="text-lg font-bold text-accent leading-6.75">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbiaWarriors;
