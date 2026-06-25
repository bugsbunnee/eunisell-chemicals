import React from 'react';
import { BookOpenIcon, PackageIcon, ShieldCheckIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

const stats = [
  { value: '25+', label: 'Global Partners' },
  { value: '150+', label: 'Technical Audits' },
  { value: '100%', label: 'Compliance' },
  { value: '24/7', label: 'Supply Chain' },
];

const benefits = [
  {
    Icon: BookOpenIcon,
    title: 'Knowledge Transfer',
    description: 'Empowering regional teams through direct training and shared IP from global chemical leaders.',
  },
  {
    Icon: PackageIcon,
    title: 'Product Access',
    description: 'Exclusive distribution rights for premium chemical formulations and innovative new molecules.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Reliable Supply Support',
    description: 'Contingency planning and localized warehousing that mitigates international supply chain volatility.',
  },
];

const Value: React.FC = () => {
  return (
    <section className="bg-card py-16 px-6 md:py-30 md:px-30 text-left">
      {/* Mobile layout */}
      <div className="flex flex-col gap-10 md:hidden">
        <div className="flex flex-col gap-3">
          <span className="font-bold text-secondary text-[12px] uppercase tracking-[2.4px]">Unmatched Value</span>
          <h2 className="font-bold text-[28px] text-accent leading-[35px]">The Gold Standard in Chemical Alliances</h2>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-7">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-bold text-[28px] text-secondary leading-[42px]">{value}</span>
              <span className="font-bold text-[11px] text-accent uppercase">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-9">
          {benefits.slice(0, 2).map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-6 bg-background border-l-4 border-secondary rounded-[1px] shadow-[0px_2px_2px_rgba(0,0,0,0.05)]"
            >
              <Icon size={20} className="text-secondary shrink-0 mt-1" />
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-[18px] text-accent leading-[28px]">{title}</h4>
                <p className="text-[14px] text-card-foreground leading-5">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-2 gap-20">
        <div className="space-y-4">
          <span className="font-bold text-secondary text-[13px] uppercase tracking-[2px]">Unmatched Value</span>
          <h2 className="font-bold text-[44px] text-accent leading-13.75">Defining the Gold Standard in Strategic Chemical Alliances</h2>

          <div className="grid grid-cols-2 gap-x-0 gap-y-0">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-4">
                <div className="font-extrabold text-[32px] text-secondary leading-12">{value}</div>
                <div className="font-bold text-sm text-accent uppercase tracking-[0.5px] mt-3">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-6">
          {benefits.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              className={cn({
                'flex items-start gap-6 p-8 bg-background border-l-4 border-secondary rounded-[1px]': true,
                'shadow-[0px_4px_16px_rgba(0,0,0,0.04)]': i < benefits.length - 1,
              })}
            >
              <Icon size={56} className="text-secondary" />
              <div className="space-y-2">
                <h4 className="font-bold text-xl text-accent leading-7">{title}</h4>
                <p className="text-sm text-card-foreground leading-5">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
