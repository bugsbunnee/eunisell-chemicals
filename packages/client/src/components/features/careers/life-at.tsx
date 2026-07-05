import React from 'react';
import { RotateCcwIcon, UserCheckIcon, type LucideIcon } from 'lucide-react';

const features: { Icon: LucideIcon; text: string }[] = [
  { Icon: RotateCcwIcon, text: 'Structured Rotation across 4 departments' },
  { Icon: UserCheckIcon, text: 'Mentorship from Senior Executives' },
];

const gridImages = Array.from({ length: 9 }, (_, index) => `/careers/life-${index + 1}.svg`);
const largeImages = ['/careers/life-large-1.svg', '/careers/life-large-2.svg'];

const LifeAtEunisell: React.FC = () => (
  <section>
    {/* Mobile — "Graduate Trainee Programmes" */}
    <div className="md:hidden bg-[#f6f9fc] py-16 flex flex-col gap-8">
      <div className="px-6 flex flex-col gap-4">
        <span className="text-secondary text-[12px] uppercase tracking-[1.2px] font-semibold">The Future is You</span>
        <h2 className="font-bold text-accent text-[28px] leading-10.5">
          Graduate Trainee
          <br />
          Programmes
        </h2>
        <p className="text-card-foreground text-[15px] leading-[25.5px]">Nurturing the next generation of technical leaders through hands-on experience and mentorship.</p>
      </div>

      <div className="px-6 flex flex-col gap-4">
        {features.map(({ Icon, text }) => (
          <div key={text} className="bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-4 p-4 rounded-lg">
            <div className="size-10 rounded-full bg-secondary/6 flex items-center justify-center shrink-0">
              <Icon size={18} className="text-secondary" />
            </div>
            <p className="text-accent text-[14px] leading-5.25 font-medium">{text}</p>
          </div>
        ))}
      </div>

      <div className="h-60 overflow-hidden">
        <img src="/careers/graduate.svg" alt="Graduate trainees in laboratory" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Desktop — "Life at Eunisell" */}
    <div className="hidden md:block bg-card pt-30 px-30 text-left">
      <div className="max-w-[1776px]">
        <h2 className="text-accent text-[40px] leading-15 mb-12">Life at Eunisell</h2>

        <div className="flex gap-4">
          <div className="grid grid-cols-3 gap-4 w-[66.386%]">
            {gridImages.map((image, index) => (
              <div key={image} className="aspect-square rounded-[8px] overflow-hidden">
                <img src={image} alt={`Life at Eunisell ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {largeImages.map((image, index) => (
              <div key={image} className="flex-1 rounded-[8px] overflow-hidden">
                <img src={image} alt={`Life at Eunisell featured ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LifeAtEunisell;
