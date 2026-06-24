import type React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const tags = ['Founder', 'Industrial Chemist', 'Visionary Leader'];

const GroupManagingDirector: React.FC = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:gap-x-30 py-16 px-6 md:py-24 md:px-30 bg-background text-left gap-8">
      <div className="h-[400px] md:min-h-150 rounded-[2px] overflow-hidden">
        <img src="/management/director.svg" alt="Chika Ikenga" className="w-full h-full object-cover" />
      </div>

      <div>
        <div className="mb-1 uppercase font-black text-[12px] md:text-[15px] tracking-[1.2px] md:tracking-[3px] text-secondary">
          Group Managing Director
        </div>
        <div className="text-[36px] md:text-[56px] text-accent leading-[54px] md:leading-21 font-bold">Chika Ikenga</div>

        <div className="flex flex-wrap items-center my-6 md:my-8 gap-2 md:gap-x-3">
          {tags.map((tag) => (
            <div
              key={tag}
              className="font-semibold text-[11px] md:text-[13px] leading-[16px] md:leading-4.75 bg-card rounded-full border border-sidebar-accent px-3 md:px-4 py-1 md:py-2"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="space-y-4 md:space-y-6">
          <p className="text-[16px] md:text-lg font-normal text-card-foreground leading-[26px] md:leading-[29.3px]">
            Chika Ikenga is the visionary founder and Group Managing Director of Eunisell. With over three decades of experience, he has steered
            Eunisell into Africa's leading chemical specialty company.
          </p>

          <p className="text-[16px] md:text-lg font-normal text-card-foreground leading-[26px] md:leading-[29.3px]">
            His leadership is defined by an uncompromising commitment to quality and a passion for industrial development across the continent.
          </p>
        </div>

        <FaLinkedin className="text-[#0076B2] mt-6 md:mt-8" size={24} />
      </div>
    </section>
  );
};

export default GroupManagingDirector;
