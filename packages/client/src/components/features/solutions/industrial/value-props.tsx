import React from 'react';
import { ZapIcon, ShieldIcon, CheckCircleIcon, type LucideIcon } from 'lucide-react';

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
  borderColor: string;
  iconBg: string;
}

const props: ValueProp[] = [
  {
    icon: ZapIcon,
    title: 'Process Efficiency',
    description: 'Streamlining production flows and reducing energy consumption through optimized chemical treatment programs.',
    borderColor: 'border-secondary',
    iconBg: 'bg-secondary/10',
  },
  {
    icon: ShieldIcon,
    title: 'Asset Protection',
    description: 'Extending the lifecycle of critical machinery and infrastructure with industry-leading corrosion and scale inhibitors.',
    borderColor: 'border-[#afb1b3]',
    iconBg: 'bg-[#afb1b3]/10',
  },
  {
    icon: CheckCircleIcon,
    title: 'Product Quality',
    description: 'Ensuring high-purity outputs and consistent results through precise chemical control and technical oversight.',
    borderColor: 'border-accent',
    iconBg: 'bg-accent/10',
  },
];

const ValueProps: React.FC = () => (
  <section className="bg-white py-32 px-30 text-left">
    <div className="grid grid-cols-2 gap-24">
      <div className="flex flex-col gap-8">
        <div className="w-16 h-1 bg-secondary" />
        <h2 className="font-bold text-accent text-[36px] leading-11.25">Supporting Industrial Performance Through Chemical Expertise</h2>
        <p className="text-[#777] text-[18px] leading-[29.25px]">
          Eunisell Chemicals provides high-performance solutions tailored to the unique demands of the manufacturing sector. From large-scale
          industrial plants to specialized manufacturing facilities, our chemical programs are designed to optimize operations, reduce downtime, and
          lower total cost of ownership.
        </p>
        <div className="flex items-start gap-4">
          <span className="text-secondary font-black text-[30px] leading-none mt-1">"</span>
          <p className="font-bold italic text-accent text-[16px] leading-6">
            "We don't just supply chemicals; we engineer outcomes for the most demanding industrial environments."
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {props.map(({ icon: Icon, title, description, borderColor, iconBg }) => (
          <div key={title} className={`bg-card border-l-4 ${borderColor} flex gap-6 items-start p-8`}>
            <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
              <Icon size={20} className="text-accent" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-accent text-[20px] leading-7">{title}</h4>
              <p className="text-[#777] text-[16px] leading-6">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
