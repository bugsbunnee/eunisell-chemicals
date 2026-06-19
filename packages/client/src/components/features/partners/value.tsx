import React from 'react';
import { BookOpenIcon, PackageIcon, ShieldCheckIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

const stats = [
  { value: '25+', label: 'Global Partners' },
  { value: '150+', label: 'Technical Audits' },
  { value: '100%', label: 'Quality Compliance' },
  { value: '24/7', label: 'Supply Chain Support' },
];

const benefits = [
  {
    Icon: BookOpenIcon,
    title: 'Technical Knowledge Transfer',
    description: 'Empowering regional teams through direct training and shared IP from global chemical leaders.',
  },
  {
    Icon: PackageIcon,
    title: 'Broader Product Access',
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
    <section className="bg-card py-30 px-30">
      <div className="grid grid-cols-2 gap-20 text-left">
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
