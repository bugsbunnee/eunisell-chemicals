import React from 'react';
import { ZapIcon, ShieldIcon, CheckCircleIcon, type LucideIcon } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../../../common/animate';

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
}

const props: ValueProp[] = [
  {
    icon: ZapIcon,
    title: 'Process Efficiency',
    description: 'Streamlining production flows and reducing energy consumption through optimized chemical treatment programs.',
    borderColor: 'border-secondary',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    icon: ShieldIcon,
    title: 'Asset Protection',
    description: 'Extending the lifecycle of critical machinery and infrastructure with industry-leading corrosion and scale inhibitors.',
    borderColor: 'border-[#afb1b3]',
    iconBg: 'bg-[#afb1b3]/10',
    iconColor: 'text-[#afb1b3]',
  },
  {
    icon: CheckCircleIcon,
    title: 'Product Quality',
    description: 'Ensuring high-purity outputs and consistent results through precise chemical control and technical oversight.',
    borderColor: 'border-accent',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
];

const mobileProps = [
  {
    icon: ZapIcon,
    title: 'Process Efficiency',
    description: 'Streamlining production flows and reducing energy consumption.',
    borderColor: 'border-secondary',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    icon: ShieldIcon,
    title: 'Asset Protection',
    description: 'Extending the lifecycle of critical machinery and infrastructure.',
    borderColor: 'border-[#afb1b3]',
    iconBg: 'bg-[#afb1b3]/10',
    iconColor: 'text-[#afb1b3]',
  },
];

const ValueProps: React.FC = () => (
  <section className="bg-white py-16 px-6 md:py-32 md:px-30 text-left">
    {/* Mobile */}
    <div className="md:hidden flex flex-col gap-6">
      <Reveal direction="left" className="flex flex-col gap-6">
        <h2 className="font-bold text-accent text-[24px] leading-[30px]">Supporting Industrial Performance Through Chemical Expertise</h2>
        <p className="text-[#777] text-[16px] leading-[26px]">
          Eunisell Chemicals provides high-performance solutions tailored to the unique demands of the manufacturing sector. From large-scale industrial plants to specialized
          manufacturing facilities.
        </p>
      </Reveal>

      <Stagger className="flex flex-col gap-4 pt-2">
        {mobileProps.map(({ icon: Icon, title, description, borderColor, iconBg, iconColor }) => (
          <StaggerItem key={title} className={`bg-card border-l-4 ${borderColor} flex flex-col gap-4 p-6`}>
            <div className={`size-10 rounded-full ${iconBg} flex items-center justify-center`}>
              <Icon size={18} className={iconColor} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-accent text-[18px] leading-7">{title}</h4>
              <p className="text-[#777] text-[14px] leading-5">{description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>

    {/* Desktop */}
    <div className="hidden md:grid grid-cols-2 gap-24">
      <Reveal direction="left" distance={56} className="flex flex-col gap-8">
        <div className="w-16 h-1 bg-secondary" />
        <h2 className="font-bold text-accent text-[36px] leading-11.25">Supporting Industrial Performance Through Chemical Expertise</h2>
        <p className="text-[#777] text-[18px] leading-[29.25px]">
          Eunisell Chemicals provides high-performance solutions tailored to the unique demands of the manufacturing sector. From large-scale industrial plants to specialized
          manufacturing facilities, our chemical programs are designed to optimize operations, reduce downtime, and lower total cost of ownership.
        </p>
        <div className="flex items-start gap-4">
          <span className="text-secondary font-black text-[30px] leading-none mt-1">"</span>
          <p className="font-bold italic text-accent text-[16px] leading-6">
            "We don't just supply chemicals; we engineer outcomes for the most demanding industrial environments."
          </p>
        </div>
      </Reveal>

      <Stagger className="flex flex-col gap-6">
        {props.map(({ icon: Icon, title, description, borderColor, iconBg }) => (
          <StaggerItem key={title} direction="right" className={`bg-card border-l-4 ${borderColor} flex gap-6 items-start p-8 transition-shadow duration-300 hover:shadow-md`}>
            <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
              <Icon size={20} className="text-accent" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-accent text-[20px] leading-7">{title}</h4>
              <p className="text-[#777] text-[16px] leading-6">{description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default ValueProps;
