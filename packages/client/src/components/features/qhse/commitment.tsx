import { EarthIcon, FenceIcon, UsersRoundIcon } from 'lucide-react';
import React from 'react';

const commitments = [
  {
    Icon: UsersRoundIcon,
    title: 'People',
    description: 'Protecting every individual through mandatory training and proactive intervention.',
    desktopDescription: 'Protecting every individual on-site through mandatory training and a proactive intervention culture.',
  },
  {
    Icon: EarthIcon,
    title: 'Environment',
    description: 'Safeguarding resources by implementing closed-loop chemical systems and efficiency.',
    desktopDescription: 'Safeguarding natural resources by implementing closed-loop chemical systems and efficient processing.',
  },
  {
    Icon: FenceIcon,
    title: 'Assets',
    description: 'Ensuring technical integrity of equipment through rigorous predictive maintenance.',
    desktopDescription: 'Ensuring operational continuity and technical integrity of equipment through predictive maintenance.',
  },
];

const Commitment: React.FC = () => {
  return (
    <section className="bg-accent text-center">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <h2 className="font-bold text-[24px] leading-[36px] text-white">Commitment to Zero Harm</h2>

        <div className="flex flex-col gap-8">
          {commitments.map((c) => (
            <div key={c.title} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex justify-center items-center text-secondary shrink-0">
                <c.Icon size={20} />
              </div>
              <div className="font-bold text-[18px] leading-[28px] text-white">{c.title}</div>
              <p className="text-[14px] leading-[22.75px] text-muted">{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block py-24 px-30">
        <div className="flex items-center justify-center">
          <div className="space-y-4">
            <div className="text-4xl text-primary-foreground font-bold leading-10 capitalize">Our commitment to zero harm</div>
            <div className="mx-auto w-20 h-1 bg-secondary" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-12">
          {commitments.map((commitment) => (
            <div key={commitment.title} className="space-y-6 text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-white/10 flex justify-center items-center text-secondary">
                <commitment.Icon size={20} />
              </div>
              <div className="text-xl capitalize text-primary-foreground font-bold leading-7">{commitment.title}</div>
              <p className="text-base text-muted leading-6.5">{commitment.desktopDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
