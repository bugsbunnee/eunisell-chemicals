import React from 'react';
import { RotateCcwIcon, UserCheckIcon, type LucideIcon } from 'lucide-react';

const features: { Icon: LucideIcon; text: string }[] = [
  { Icon: RotateCcwIcon, text: 'Structured Rotation across 4 departments' },
  { Icon: UserCheckIcon, text: 'Mentorship from Senior Executives' },
];

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
        <p className="text-[#606060] text-[15px] leading-[25.5px]">Nurturing the next generation of technical leaders through hands-on experience and mentorship.</p>
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
    <div className="hidden md:block bg-card py-24 px-30 text-left">
      <div className="max-w-[1776px]">
        <h2 className="font-bold text-accent text-[40px] leading-15 mb-12">Life at Eunisell</h2>

        <div className="grid gap-4" style={{ gridTemplateColumns: '2fr 1fr', gridTemplateRows: '1fr 1fr', height: '600px' }}>
          <div className="rounded-[8px] overflow-hidden" style={{ gridRow: '1 / 3' }}>
            <img src="/careers/life.svg" alt="Eunisell manufacturing facility" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[8px] overflow-hidden">
            <img src="/careers/group.jpeg" alt="Chemical engineers collaborating" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[8px] overflow-hidden">
            <img src="/careers/toast.jpeg" alt="Laboratory researcher" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LifeAtEunisell;
