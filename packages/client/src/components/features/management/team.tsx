import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { team } from '../../../lib/data';

const Team: React.FC = () => {
  return (
    <section className="py-24 px-30 bg-card">
      <div className="mx-auto">
        <div className="text-5xl font-bold leading-18 text-accent text-center">The Management Team</div>
        <div className="w-30 h-1 bg-secondary mt-4 mx-auto"></div>
      </div>

      <div className="mt-20 grid grid-cols-4 gap-x-8">
        {team.map((member) => (
          <div key={member.title} className="text-left border border-sidebar-accent/20 overflow-hidden">
            <div className="h-100 w-full">
              <img src={member.src} alt={member.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 h-full bg-background">
              <div className="flex items-center justify-between">
                <div className="text-xl leading-7.5 text-accent font-bold">{member.name}</div>
                <FaLinkedin className="text-[#0076B2]" size={20} />
              </div>

              <div className="text-sm text-secondary font-medium leading-5">{member.title}</div>

              <div className="text-sm font-normal leading-5.5 mt-[14.75px] text-card-foreground">{member.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
