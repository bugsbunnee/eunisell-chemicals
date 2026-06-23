import React from 'react';
import { CoinsIcon, HeartPulseIcon, MonitorIcon, GlobeIcon, ShieldCheckIcon, CarIcon, type LucideIcon } from 'lucide-react';

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: CoinsIcon, title: 'Competitive Salary', description: 'Industry-leading base with performance bonuses.' },
  { icon: HeartPulseIcon, title: 'Premium Health Cover', description: 'Comprehensive HMO for you and your dependents.' },
  { icon: MonitorIcon, title: 'Modern Workspace', description: 'Top-tier equipment and collaborative work areas.' },
  { icon: GlobeIcon, title: 'Regional Training', description: 'Opportunities for international certifications.' },
  { icon: ShieldCheckIcon, title: 'Life & Pension', description: 'Secure life insurance and robust pension scheme.' },
  { icon: CarIcon, title: 'Transport Allowance', description: 'Monthly vehicle and fuel allowance for field work.' },
];

const WhatWeOffer: React.FC = () => (
  <section className="py-24 px-30 text-left">
    <div className="max-w-[1680px] flex flex-col gap-12">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-4">
          <span className="font-black text-secondary text-[12px] uppercase tracking-[2.4px]">The Eunisell Advantage</span>
          <h2 className="font-extrabold text-accent text-[36px] leading-10">What We Offer</h2>
        </div>
        <p className="text-muted-foreground text-[18px] leading-7 max-w-105 text-right">
          We provide more than just a job; we offer a career where your growth is directly tied to our collective success.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-center gap-6 border border-border rounded-[6px] p-6">
            <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center shrink-0">
              <Icon size={24} className="text-secondary" />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-accent text-[16px] leading-6">{title}</h5>
              <p className="text-muted-foreground text-[12px] leading-4">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOffer;
