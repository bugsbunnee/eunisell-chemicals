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
    <section className="relative bg-accent text-left py-16 px-6 md:py-17.5 md:px-30 flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-x-16 gap-10">
      <div>
        <div className="mb-4 md:mb-6 text-[11px] md:text-sm leading-5 tracking-[1.4px] text-secondary uppercase">Our Commitment</div>

        <div className="text-[28px] md:text-4xl leading-[35px] md:leading-11.25 font-bold text-white">
          Elite Technical Excellence Built on Professional Expertise.
        </div>

        <p className="text-[15px] md:text-lg text-white/70 leading-[24px] md:leading-[29.3px] font-normal mt-4 md:mt-6">
          Our team consists of specialists across multiple disciplines, working together to solve the industry's most complex chemical challenges.
        </p>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-8 mt-8 md:mt-12">
          {commitments.map((commitment) => (
            <div
              key={commitment.title}
              className="flex items-center gap-x-3 md:gap-x-4 border border-white/10 rounded-[8px] px-4 py-3 md:p-0 md:border-0 md:rounded-none"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 text-secondary flex items-center justify-center rounded-full shrink-0">
                <commitment.Icon size={18} />
              </div>
              <div className="font-medium text-sm md:text-base leading-5 md:leading-6 text-white">{commitment.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[300px] md:min-h-125 md:h-full rounded-[8px] md:rounded-[16px] overflow-hidden">
        <img src="/technical-services/professional.svg" alt="Technical Services" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Commitment;
