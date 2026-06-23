import React from 'react';
import { MicroscopeIcon, ZapIcon, ShieldIcon, LeafIcon } from 'lucide-react';

const cards = [
  {
    Icon: MicroscopeIcon,
    title: 'Precision Dosing',
    body: 'Reduces chemical waste by up to 22% through automated injection algorithms.',
  },
  {
    Icon: ZapIcon,
    title: 'Heat Efficiency',
    body: 'Specialized surfactants improve thermal transfer rates in cooling towers.',
  },
  {
    Icon: ShieldIcon,
    title: 'Asset Protection',
    body: 'Inhibitors neutralize acidic precursors before they reach critical metal surfaces.',
  },
  {
    Icon: LeafIcon,
    title: 'Sustainability',
    body: 'Transitioning to low-VOC alternatives without impacting performance benchmarks.',
  },
];

const ArticleTakeaways: React.FC = () => {
  return (
    <section className="bg-[#f0f4f8] py-20 px-30 text-left">
      <div className="mx-auto">
        <h2 className="font-bold text-foreground text-4xl leading-[1.2] text-center mb-16">Technical Summary &amp; Key Takeaways</h2>

        <div className="grid grid-cols-4 gap-6">
          {cards.map(({ Icon, title, body }) => (
            <div key={title} className="relative bg-white border border-border shadow-sm p-8 flex flex-col pb-10">
              <Icon size={24} className="text-secondary mb-4" />
              <h4 className="font-bold text-foreground text-[17px] leading-[1.3] mb-3">{title}</h4>
              <p className="text-muted-foreground text-[14px] leading-[1.65]">{body}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-secondary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleTakeaways;
