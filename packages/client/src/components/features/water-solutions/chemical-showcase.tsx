import React from 'react';
import { Reveal } from '../../common/animate';

export interface ChemicalShowcaseProps {
  legend: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  imageAlt?: string;
}

const ChemicalShowcase: React.FC<ChemicalShowcaseProps> = ({ legend, title, description, items, image, imageAlt = '' }) => {
  return (
    <section className="bg-card border-y border-border px-6 py-12 md:px-30 md:py-30 grid md:grid-cols-2 gap-10 md:gap-x-20 items-center text-left overflow-hidden">
      <Reveal direction="left" distance={56}>
        <div className="font-medium text-sm leading-5 uppercase tracking-[1.4px] text-secondary">{legend}</div>

        <h2 className="font-bold text-[24px] leading-8 md:text-4xl md:leading-10 text-accent mt-4">{title}</h2>

        <p className="text-lg leading-[27.3px] text-card-foreground mt-4">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.25 mt-6">
          {items.map((item) => (
            <div key={item} className="text-base leading-6 text-accent">
              {item}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal direction="right" distance={56} className="relative">
        <div className="hidden md:block absolute -top-10 -right-10 bottom-10 left-10 bg-secondary/5 rounded-[2px]" />
        <div className="relative bg-white border border-ring rounded-[2px] p-4 md:p-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div className="h-60 md:h-100 md:pr-4 rounded-[2px]">
            <img src={image} alt={imageAlt} className="w-full h-full object-cover rounded-2xl shadow-[0px_16px_40px_0px_rgba(0,0,0,0.12)]" />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ChemicalShowcase;
