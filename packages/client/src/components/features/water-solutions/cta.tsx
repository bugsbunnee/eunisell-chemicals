import React from 'react';
import { Button } from '../../ui/button';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { Reveal } from '../../common/animate';

export interface CtaAction {
  label: string;
  path: string;
}

export interface CtaProps {
  title?: string;
  description?: string;
  primaryCta?: CtaAction;
  secondaryCta?: CtaAction;
}

const CTA: React.FC<CtaProps> = ({
  title = 'Elevate Your Operational Standard Today',
  description = 'Connect with our technical consultants to design a chemical strategy that maximizes efficiency and protects your industrial assets.',
  primaryCta = { label: 'Start Product Consultation', path: paths.contact },
  secondaryCta = { label: 'Download Brochure', path: paths.brochures },
}) => {
  const navigate = useNavigate();
  return (
    <section className="relative px-6 py-16 md:px-30 md:py-0 bg-accent text-center overflow-hidden md:h-150 md:flex md:items-center md:justify-center">
      {/* Technical grid background */}
      <div className="hidden md:block absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="border-r border-white/10" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="border-b border-white/10" />
          ))}
        </div>
      </div>

      <Reveal duration={0.8} className="relative max-w-250 mx-auto">
        <h2 className="font-bold text-[28px] leading-9 md:text-6xl md:leading-[75px] text-white">{title}</h2>

        <p className="text-base md:text-xl md:leading-[32.5px] text-white/70 max-w-187.5 mt-6 md:mt-10 mx-auto">{description}</p>

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-x-6 mt-10">
          <Button
            onClick={() => navigate(primaryCta.path)}
            className="h-14 md:h-[70px] px-6 md:px-12 flex items-center justify-center bg-secondary text-base md:text-xl leading-7 text-white font-bold rounded-[4px] capitalize"
          >
            {primaryCta.label}
          </Button>
          <Button
            onClick={() => navigate(secondaryCta.path)}
            className="h-14 md:h-[68px] px-6 md:px-12 flex items-center justify-center bg-transparent border border-white text-base md:text-xl leading-7 text-white font-bold rounded-[4px] capitalize"
          >
            {secondaryCta.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
};

export default CTA;
