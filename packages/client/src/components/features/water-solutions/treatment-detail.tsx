import React from 'react';
import { cn } from '../../../lib/utils';
import { Reveal } from '../../common/animate';

export interface TreatmentDetailProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  cardTitle: string;
  items: string[];
  mutedCardTitle?: boolean;
}

const TreatmentDetail: React.FC<TreatmentDetailProps> = ({ title, description, image, imageAlt = '', cardTitle, items, mutedCardTitle = false }) => {
  return (
    <section className="bg-white px-6 py-12 md:px-30 md:py-30 grid md:grid-cols-2 gap-10 md:gap-x-25 items-start text-left">
      <Reveal direction="left" distance={56} className="flex flex-col gap-8">
        <h2 className="font-bold text-[24px] leading-8 md:text-4xl md:leading-10 text-accent">{title}</h2>

        <p className="text-lg leading-[29.25px] text-card-foreground">{description}</p>

        <div className="h-60 md:h-100 rounded-lg w-full overflow-hidden">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      </Reveal>

      <Reveal direction="right" distance={56} className="bg-card border-l-4 border-l-secondary p-6 md:p-10 flex flex-col gap-3 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
        <div
          className={cn({
            'font-bold': true,
            'text-lg leading-[29.25px] text-card-foreground': mutedCardTitle,
            'text-xl leading-7 text-accent': !mutedCardTitle,
          })}
        >
          {cardTitle}
        </div>

        <ul className="list-disc pl-6">
          {items.map((item) => (
            <li key={item} className="text-[17px] leading-9 text-black">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
};

export default TreatmentDetail;
