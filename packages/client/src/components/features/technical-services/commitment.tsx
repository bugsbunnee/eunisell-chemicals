import { FlaskConicalIcon, MicroscopeIcon, SettingsIcon, UserStarIcon } from 'lucide-react';
import type React from 'react';

const commitments = [
  {
    Icon: FlaskConicalIcon,
    title: 'Chemical Specialists',
  },
  {
    Icon: SettingsIcon,
    title: 'Process Engineers',
  },
  {
    Icon: MicroscopeIcon,
    title: 'Laboratory Professionals',
  },
  {
    Icon: UserStarIcon,
    title: 'Technical Consultants',
  },
];

const Commitment: React.FC = () => {
  return (
    <section className="relative bg-accent text-left py-17.5 px-30 grid grid-cols-2 items-center gap-x-16">
      <div>
        <div className="mb-6 text-sm leading-5 tracking-[1.4px] text-secondary uppercase">Our Commitment</div>

        <div className="text-4xl leading-11.25 font-bold text-white max-w-184">Elite Technical Excellence Built on Professional Expertise.</div>

        <p className="text-lg text-white/70 leading-[29.3px] font-normal max-w-184 mt-6">
          Our team consists of specialists across multiple disciplines, working together to solve the industry's most complex chemical challenges.
        </p>

        <div className="grid grid-cols-2 gap-8 mt-12">
          {commitments.map((commitment) => (
            <div key={commitment.title} className="flex items-center gap-x-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 text-secondary flex items-center justify-center rounded-full">
                <commitment.Icon />
              </div>

              <div className="font-medium text-base leading-6 text-white">{commitment.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-125 h-full rounded-[16px] overflow-hidden">
        <img src="/technical-services/professional.svg" alt="Technical Services" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Commitment;
