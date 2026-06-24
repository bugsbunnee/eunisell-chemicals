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
    <section className="py-16 px-6 md:py-24 md:px-30 bg-card">
      <div className="font-bold text-accent text-[24px] md:text-[32px] leading-[36px] md:leading-12 text-center">Value of Expert Leadership</div>

      <div className="mt-10 md:mt-16 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12">
        {values.map((value) => (
          <div key={value.id} className="flex items-start gap-x-4 md:gap-x-6 text-left">
            <div className="font-bold text-secondary/20 text-[32px] leading-[32px] shrink-0">{value.id}</div>
            <div className="flex-1 space-y-1">
              <div className="text-[16px] md:text-xl leading-[24px] md:leading-7.5 font-bold text-accent">{value.title}</div>
              <div className="text-sm md:text-[15px] leading-[21px] md:leading-[22.5px] text-card-foreground">{value.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipValue;
