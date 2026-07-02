import React from 'react';
import { Button } from '../../ui/button';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { DownloadIcon } from 'lucide-react';
import { Reveal } from '../../common/animate';

const CTA: React.FC = () => {
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

      {/* Mobile: Optimize Your Process Today */}
      <div className="md:hidden">
        <h2 className="font-bold text-[24px] leading-8 text-white">Optimize Your Process Today</h2>

        <p className="text-sm leading-5 text-white/70 mt-6">Consult with our technical experts for a tailored fluid solution for your facility.</p>

        <div className="flex flex-col items-stretch gap-4 mt-8">
          <Button
            onClick={() => navigate(paths.contact)}
            className="h-14 flex items-center justify-center bg-secondary text-[16px] leading-6 text-white font-bold rounded-[4px] uppercase"
          >
            Request a Consultation
          </Button>
          <Button
            onClick={() => navigate(paths.brochures)}
            className="h-14 flex items-center justify-center gap-x-2 bg-transparent border border-white/30 text-[16px] leading-6 text-white font-bold rounded-[4px] uppercase"
          >
            Download Brochure <DownloadIcon size={12} />
          </Button>
        </div>
      </div>

      {/* Desktop: Elevate Your Operational Standard Today */}
      <Reveal duration={0.8} className="hidden md:block relative max-w-250 mx-auto">
        <h2 className="font-bold text-6xl leading-[75px] text-white">Elevate Your Operational Standard Today</h2>

        <p className="text-xl leading-[32.5px] text-white/70 max-w-187.5 mt-10 mx-auto">
          Connect with our technical consultants to design a chemical strategy that maximizes efficiency and protects your industrial assets.
        </p>

        <div className="flex flex-row items-center justify-center gap-x-6 mt-10">
          <Button
            onClick={() => navigate(paths.contact)}
            className="h-[70px] px-12 flex items-center justify-center bg-secondary text-xl leading-7 text-white font-bold rounded-[4px] capitalize"
          >
            Start Product Consultation
          </Button>
          <Button
            onClick={() => navigate(paths.brochures)}
            className="h-[68px] px-12 flex items-center justify-center bg-transparent border border-white text-xl leading-7 text-white font-bold rounded-[4px] capitalize"
          >
            Download Brochure
          </Button>
        </div>
      </Reveal>
    </section>
  );
};

export default CTA;
