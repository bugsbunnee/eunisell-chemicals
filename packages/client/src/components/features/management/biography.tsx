import type React from 'react';
import { team } from '../../../lib/data';
import { cn } from '../../../lib/utils';
import { useState } from 'react';

const Biography: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-30 bg-background">
      <div className="flex items-center border-b border-sidebar-accent/30">
        {team.map((member, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            className={cn({
              'text-base leading-6 py-6 px-12': true,
              'text-card-foreground font-medium': index !== activeIndex,
              'bg-card text-accent font-bold border-b-4 border-secondary': index === activeIndex,
            })}
          >
            {member.name}
          </button>
        ))}
      </div>

      {team[activeIndex] && (
        <div className="mt-16 text-left grid grid-cols-2 gap-x-20">
          <div>
            <div className="min-h-150 rounded-[2px] overflow-hidden">
              <img src={team[activeIndex].src} alt={team[activeIndex].name} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 bg-accent"></div>
          </div>

          <div>
            <div className="text-[40px] text-accent leading-15 font-bold">Chika Ikenga</div>
            <div className="mt-2 capitalize text-lg font-semibold tracking-[3px] leading-6.75 text-secondary">Group Managing Director</div>

            <div className="space-y-6 mt-8">
              {team[activeIndex].paragraphs.map((paragraph) => (
                <p className="text-lg font-normal text-card-foreground leading-[29.3px] max-w-150">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Biography;
