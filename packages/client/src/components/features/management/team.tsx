import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { team } from '../../../lib/data';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 px-6 md:py-24 md:px-30 bg-card">
      <div className="text-left md:text-center">
        <div className="text-[32px] md:text-5xl font-bold leading-12 md:leading-18 text-accent">The Management Team</div>
        <div className="w-16 h-1 bg-secondary mt-3 md:mt-4 md:mx-auto"></div>
      </div>

      <div className="mt-8 md:mt-20 flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-x-8">
        {team.map((member) => (
          <div key={member.title} className="text-left border border-sidebar-accent/20 overflow-hidden">
            <div className="h-90 md:h-100 w-full">
              <img src={member.src} alt={member.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 md:p-8 md:h-full bg-background">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[18px] md:text-xl leading-6.75 md:leading-7.5 text-accent font-bold">{member.name}</div>
                  <div className="text-[13px] md:text-sm text-secondary font-medium leading-[19.5px] md:leading-5">{member.title}</div>
                </div>
                <FaLinkedin className="text-[#0076B2] shrink-0" size={20} />
              </div>

              <div className="text-sm md:text-sm font-normal leading-5.5 md:leading-5.5 mt-3.5 md:mt-[14.75px] text-card-foreground">{member.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
