import React from 'react';
import { Button } from '../../ui/button';

const ImpactGallery: React.FC = () => {
  return (
    <section className="bg-white p-30 text-left">
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
            <img src="/csr/hero.svg" alt="Hero" className="w-full h-full object-cover" />
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
    </section>
  );
};

export default ImpactGallery;
