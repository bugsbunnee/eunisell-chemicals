import { CheckIcon } from 'lucide-react';
import React, { Activity } from 'react';

const treatments = [
  {
    title: 'Produced Water Treatment',
    description: 'Advanced separation and conditioning of produced water for safe disposal or reinjection.',
  },
  {
    title: 'Deoiling Chemicals',
    description: 'Specialized chemistry to remove residual oil from produced water streams.',
  },
  {
    title: 'Clarifiers',
    description: 'Effective removal of suspended solids and fine particulates from water systems.',
  },
  {
    title: 'Water Quality Management',
    description: 'Comprehensive monitoring and treatment programs to maintain water quality standards.',
  },
];

const TechnicalSupport: React.FC = () => {
  return (
    <section className="bg-card text-left">
      {/* Mobile */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-[28px] leading-9 text-accent">Water Treatment Chemicals</h2>
          <p className="text-[14px] leading-5 text-card-foreground">
            Our commitment goes beyond chemical supply. We provide end-to-end technical partnerships powered by field-based expertise and rigorous laboratory analysis.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {treatments.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="size-6 rounded-full flex items-center justify-center bg-secondary/10 text-secondary shrink-0 mt-0.5">
                <CheckIcon size={12} />
              </div>
              <div>
                <div className="text-[16px] text-accent leading-6">{item.title}</div>
                <Activity mode="hidden">
                  <div className="text-[13px] text-card-foreground leading-5 mt-0.5">{item.description}</div>
                </Activity>
              </div>
            </div>
          ))}
        </div>
        <div className="relative h-56 rounded-[8px] overflow-hidden mt-2">
          <img src="/oilfield-chemicals/water-treatment.svg" alt="Laboratory" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 bg-linear-to-b from-accent/80 to-transparent p-4">
            <p className="text-[11px] text-white uppercase tracking-[1.2px]">Global Standards / Local Knowledge</p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-16 px-45">
        <div className="grid bg-background shadow-2xl grid-cols-2 text-left">
          <div className="p-16">
            <div className="font-bold text-accent text-4xl leading-10">Water Treatment Chemicals</div>

            <p className="text-base text-muted-foreground mt-4">
              Our commitment goes beyond chemical supply. We provide end-to-end technical partnerships powered by field-based expertise and rigorous laboratory analysis.
            </p>

            <div className="mt-10 space-y-4">
              {treatments.map((item) => (
                <div key={item.title} className="flex items-start gap-x-4">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center bg-secondary/10 text-secondary shrink-0">
                    <CheckIcon size={12} />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-base text-accent leading-6">{item.title}</div>
                    <Activity mode="hidden">
                      <div className="text-sm font-normal text-muted-foreground leading-5">{item.description}</div>
                    </Activity>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full relative overflow-hidden">
            <img src="/oilfield-chemicals/water-treatment.svg" alt="Laboratory" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent/80 to-transparent p-12">
              <p className="text-xs text-white uppercase tracking-[1.2px]">Global Standards / Local Knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupport;
