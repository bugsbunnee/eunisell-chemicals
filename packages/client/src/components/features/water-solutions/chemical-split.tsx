import React from 'react';
import { cn } from '../../../lib/utils';
import { Reveal } from '../../common/animate';

export interface SplitImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface ChemicalSplitProps {
  legend: string;
  title: string;
  description: string;
  items: string[];
  images: SplitImage[];
  imagePosition?: 'left' | 'right';
}

const ChemicalSplit: React.FC<ChemicalSplitProps> = ({ legend, title, description, items, images, imagePosition = 'left' }) => {
  const imageBlocks = images.map((image) => (
    <div key={image.src} className="relative min-h-60 md:min-h-140 overflow-hidden">
      <img src={image.src} alt={image.alt ?? ''} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 items-start p-8 bg-linear-to-b from-[rgba(0,8,20,0)] to-[rgba(0,8,20,0.75)] text-left">
        {image.caption && (
          <React.Fragment>
            <div className="w-10 h-0.5 bg-secondary" />
            <div className="text-sm text-white leading-[43.2px]">{image.caption}</div>
          </React.Fragment>
        )}
      </div>
    </div>
  ));

  const content = (
    <Reveal
      direction={imagePosition === 'left' ? 'right' : 'left'}
      distance={56}
      className={cn({
        'bg-white py-12 px-6 md:py-20 text-left': true,
        'md:pl-15 md:pr-20': imagePosition === 'left',
        'md:pl-30 md:pr-20': imagePosition === 'right',
      })}
    >
      <div className="font-medium text-[15px] leading-[15px] uppercase tracking-[3px] text-secondary">{legend}</div>

      <h2 className="font-bold text-[24px] leading-8 md:text-4xl md:leading-[43.2px] text-accent mt-2.75">{title}</h2>

      <p className="text-[15px] leading-6.75 text-muted-foreground mt-5">{description}</p>

      <div className="flex flex-col gap-5 mt-7 pb-10">
        {items.map((item) => (
          <div key={item} className="border-b border-border pb-5">
            <div className="border-l-3 border-l-secondary pl-3 text-sm leading-5.25 text-accent">{item}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );

  return (
    <section
      className={cn({
        'bg-white grid': true,
        'md:grid-cols-2': images.length === 1,
        'md:grid-cols-3': images.length === 2,
      })}
    >
      {imagePosition === 'left' ? (
        <React.Fragment>
          {imageBlocks}
          {content}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {content}
          {imageBlocks}
        </React.Fragment>
      )}
    </section>
  );
};

export default ChemicalSplit;
