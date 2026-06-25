import React from 'react';
import { StarIcon, ShieldCheckIcon, UnlockIcon, UsersIcon, TrendingUpIcon, ZapIcon, BarChart2Icon, HeartIcon } from 'lucide-react';

const values = [
  { Icon: StarIcon, title: 'Excellence', description: 'Striving for the highest standards in every endeavor.' },
  { Icon: ShieldCheckIcon, title: 'Discipline', description: 'Cultivating the rigor necessary for long-term success.' },
  { Icon: UnlockIcon, title: 'Opportunity', description: 'Creating pathways for talent to be discovered.' },
  { Icon: UsersIcon, title: 'Teamwork', description: 'Harnessing collective strength for common goals.' },
  { Icon: TrendingUpIcon, title: 'Ambition', description: 'Inspiring young people to aim for global success.' },
  { Icon: ZapIcon, title: 'Resilience', description: 'Overcoming obstacles with persistence and grit.' },
  { Icon: BarChart2Icon, title: 'Professional Growth', description: 'Developing skills that transfer to any career path.' },
  { Icon: HeartIcon, title: 'Community Pride', description: 'Uniting a city through a shared sporting identity.' },
];

const ValuesCultivate: React.FC = () => {
  return (
    <section className="bg-card text-left">
      {/* Mobile layout — 2-column grid of compact cards */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="font-bold text-[30px] leading-[37.5px] text-accent">The Values We Cultivate</h2>
          <p className="text-[14px] leading-5 text-card-foreground">Through sports, we instill core values that extend beyond the pitch.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 pt-2">
          {values.slice(0, 6).map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-white border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-4 h-[90px] p-6 rounded-[6px]"
            >
              <Icon size={20} className="text-secondary shrink-0" />
              <div className="min-w-0">
                <div className="font-bold text-[16px] leading-5 text-accent truncate">{title}</div>
                <div className="text-[12px] leading-4 text-card-foreground line-clamp-2">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <div className="max-w-[1560px] w-full space-y-20">
          <div className="space-y-6 text-center">
            <h2 className="text-5xl font-bold text-accent leading-18 tracking-[-0.9375px]">The Values We Cultivate</h2>
            <p className="text-lg font-normal text-card-foreground leading-6.75 max-w-200 mx-auto text-center">
              Through sports, we instill core values that extend beyond the pitch, shaping the character of individuals and the fabric of our
              community.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {values.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border-b-4 border-secondary drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05)] p-10 rounded-[6px] space-y-3"
              >
                <div className="text-secondary">
                  <Icon size={32} />
                </div>
                <h5 className="text-[22px] font-bold text-accent leading-8.25">{title}</h5>
                <p className="text-base font-normal text-card-foreground leading-6">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesCultivate;
