import React from 'react';

const values = [
  {
    id: '01',
    title: 'Proven Track Record',
    description: 'Our executives have led Eunisell through diverse economic cycles, ensuring stability and consistent growth.',
  },
  {
    id: '02',
    title: 'Deep Technical Knowledge',
    description: 'The team blends business acumen with specialized chemical engineering expertise unique to the sector.',
  },
  {
    id: '03',
    title: 'Stakeholder Confidence',
    description: 'Building long-term relationships with global OEMs and regional energy producers through integrity.',
  },
  {
    id: '04',
    title: 'Agile Strategy',
    description: 'Rapidly adapting to technological shifts and regulatory changes in the global chemical industry.',
  },
  {
    id: '05',
    title: 'Ethical Standards',
    description: 'Maintaining a culture of uncompromising compliance and ethical conduct at every management level.',
  },
  {
    id: '06',
    title: 'Future Focus',
    description: "Investing in the next generation of leaders to ensure Eunisell's vision thrives for decades to come.",
  },
];

const LeadershipValue: React.FC = () => {
  return (
    <section className="py-24 px-30 bg-card">
      <div className="font-bold text-accent text-[32px] leading-12 text-center">The Value of Expert Leadership</div>

      <div className="mt-16 grid grid-cols-2 gap-12">
        {values.map((value) => (
          <div className="flex items-start gap-x-6 text-left">
            <div className="font-bold text-secondary/30 text-[40px] leading-15">{value.id}</div>
            <div className="flex-1 space-y-1">
              <div className="text-xl leading-7.5 font-bold text-accent">{value.title}</div>
              <div className="font-regular text-[15px] leading-[22.5px] text-card-foreground">{value.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipValue;
