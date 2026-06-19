import React from 'react';

const cards = [
  {
    title: 'Healthy Lifestyles',
    description: 'Encouraging physical activity and wellness across all age groups through community sport events.',
  },
  {
    title: 'Local Economic Activity',
    description: 'Match days stimulate local commerce, from hospitality to transportation, benefiting small businesses.',
  },
  {
    title: 'State Pride',
    description: 'Building a strong regional identity that unifies the state and fosters social cohesion.',
  },
  {
    title: 'Youth Potential',
    description: 'Providing productive outlets for energy, reducing social vices and crime in the community.',
  },
];

const BroadSocial: React.FC = () => {
  return (
    <section className="bg-card px-30 py-25 text-left">
      <div className="max-w-[1560px] px-8 w-full space-y-16">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold text-accent leading-13.5 tracking-[-0.4219px] text-center">Broad-Scale Social Value</h2>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {cards.map(({ title, description }) => (
            <div key={title} className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05)] space-y-2.75 items-start p-8 rounded-[4px]">
              <div className="bg-secondary rounded-full size-3 shrink-0" />

              <div className="flex flex-col gap-2 pt-3.25">
                <h6 className="text-lg font-bold text-accent leading-6.75">{title}</h6>
                <p className="text-[15px] font-normal text-card-foreground leading-6">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BroadSocial;
