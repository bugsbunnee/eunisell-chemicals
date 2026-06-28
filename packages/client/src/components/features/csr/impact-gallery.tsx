import React from 'react';
import { Button } from '../../ui/button';

const ImpactGallery: React.FC = () => {
  return (
    <section className="bg-white text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-[30px] leading-[37.5px] text-accent">Impact in Focus</h2>
          <p className="text-[14px] leading-[20px] text-card-foreground">Moments that define our commitment to community.</p>
        </div>

        <Button className="w-full border-2 border-secondary bg-transparent text-secondary text-[16px] font-semibold py-3 rounded-[4px] h-auto hover:bg-secondary hover:text-white transition-colors">
          View Full Gallery
        </Button>

        <div className="grid grid-cols-2 gap-2 h-[400px]">
          <div className="rounded-[6px] overflow-hidden">
            <img src="/csr/stadium.svg" alt="Hero" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="rounded-[6px] overflow-hidden">
              <img src="/csr/hero.svg" alt="Hero" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[6px] overflow-hidden">
              <img src="/csr/warriors.svg" alt="Warriors" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <div className="max-w-[1560px] px-8 w-full space-y-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-5xl font-bold text-accent leading-[72.6px]">Impact in Focus</h2>
              <div className="text-lg text-card-foreground font-normal mt-4">Capturing the moments that define our commitment to community.</div>
            </div>

            <Button className="border-2 border-secondary px-8 py-4 rounded-[4px] bg-transparent text-secondary font-semibold text-base h-auto hover:bg-secondary hover:text-white transition-colors">
              View Full Gallery
            </Button>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-200">
            <div className="rounded-[6px] overflow-hidden min-h-200">
              <img src="/csr/stadium.svg" alt="Hero" className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="rounded-[6px] overflow-hidden h-97">
                  <img src="/csr/hero.svg" alt="Hero" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[6px] overflow-hidden h-97">
                  <img src="/csr/warriors.svg" alt="Hero" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="rounded-[6px] overflow-hidden min-h-200">
                <img src="/csr/hero.svg" alt="Hero" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactGallery;
