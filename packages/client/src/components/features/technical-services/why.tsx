import React from 'react';
import { DiamondIcon } from 'lucide-react';

const reasons = [
  {
    caption: '24/7',
    title: 'On-Site Support',
    description: 'Round-the-clock technical assistance for critical operations.',
  },
  {
    caption: 'ISO',
    title: 'Certified Labs',
    description: 'Fully compliant facilities ensuring globally recognized results.',
  },
  {
    caption: '98%',
    title: 'Accuracy Rate',
    description: 'Unmatched precision in analytical diagnostic reporting.',
  },
  {
    caption: '15+',
    title: 'Years Experience',
    description: 'Proven track record across global energy and industrial sectors.',
  },
];

const alernate = [
  {
    caption: 'ROI',
    title: 'Focused',
    description: 'Every recommendation is designed to optimize your bottom line.',
  },
  {
    caption: 'Rapid',
    title: 'Deployment',
    description: 'Agile response teams for emergency troubleshooting.',
  },
];

const Why: React.FC = () => {
  return (
    <section className="relative bg-background text-center py-17.5 px-30">
      <div className="text-3xl leading-11.25 font-bold text-accent">Why Eunisell Technical Services?</div>

      <div className="mt-16 grid grid-cols-4 gap-8">
        {reasons.map((reason) => (
          <div key={reason.title} className="relative bg-card border border-border rounded-[12px] p-10 text-left">
            <DiamondIcon size={24} className="text-accent absolute right-6 top-6" />
            <div className="text-4xl leading-10 font-bold text-secondary capitalize">{reason.caption}</div>
            <div className="text-base leading-6 font-bold text-accent mt-4">{reason.title}</div>
            <p className="text-sm leading-5 mt-2 text-card-foreground font-regular">{reason.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-8">
          {alernate.map((reason) => (
            <div key={reason.title} className="relative bg-card border border-border rounded-[12px] p-10 text-left">
              <DiamondIcon size={24} className="text-accent absolute right-6 top-6" />

              <div className="text-4xl leading-10 font-bold text-secondary capitalize">{reason.caption}</div>
              <div className="text-base leading-6 font-bold text-accent mt-4">{reason.title}</div>
              <p className="text-sm leading-5 mt-2 text-card-foreground font-regular">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-[12px] p-10 text-center space-y-4">
          <div className="text-2xl leading-8 font-bold text-white capitalize">Ready to Optimize?</div>
          <div className="text-base leading-6 font-normal text-white/80">Speak with a specialist today for a technical assessment.</div>

          <button className="text-secondary text-base leading-6 font-bold py-3 px-6 bg-white rounded-[4px]">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Why;
