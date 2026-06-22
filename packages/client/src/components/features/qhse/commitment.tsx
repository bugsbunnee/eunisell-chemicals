import { EarthIcon, FenceIcon, UsersRoundIcon } from 'lucide-react';
import React from 'react';

const commitments = [
  {
    Icon: UsersRoundIcon,
    title: 'people',
    description: 'Protecting every individual on-site through mandatory training and a proactive intervention culture.',
  },
  {
    Icon: EarthIcon,
    title: 'environment',
    description: 'Safeguarding natural resources by implementing closed-loop chemical systems and efficient processing.',
  },
  {
    Icon: FenceIcon,
    title: 'assets',
    description: 'Ensuring operational continuity and technical integrity of equipment through predictive maintenance.',
  },
];
const Commitment: React.FC = () => {
  return (
    <section className="py-24 px-30 bg-accent text-center">
      <div className="flex items-center justify-center">
        <div className="space-y-4">
          <div className="text-4xl text-primary-foreground font-bold leading-10 capitalize">Our commitment to zero harm</div>
          <div className="mx-auto w-20 h-1 bg-secondary"></div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-12">
        {commitments.map((commitment) => (
          <div key={commitment.title} className="space-y-6 text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-white/10 flex justify-center items-center text-secondary">
              <commitment.Icon size={20} />
            </div>

            <div className="text-xl capitalize text-primary-foreground font-bold leading-7">{commitment.title}</div>

            <p className="text-base text-muted leading-6.5">{commitment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Commitment;
