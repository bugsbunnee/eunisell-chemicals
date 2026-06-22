import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { Button } from '../../ui/button';
import { CheckIcon } from 'lucide-react';

const features = [
  'Water treatment for boilers, cooling towers, and closed-loop systems',
  'Heavy-duty degreasers and industrial cleaning agents',
  'Specialty lubricants and process additives',
  'Surface treatments, corrosion inhibitors, and anti-scaling agents',
  'Wastewater management chemicals for regulatory compliance',
  'Custom formulations for unique manufacturing processes',
];

const Manufacturing: React.FC = () => {
  return (
    <section className="flex w-full min-h-[856px]">
      <div className="w-[600px] shrink-0 overflow-hidden relative">
        <img src="/about/manufacturing.svg" alt="Industrial manufacturing facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-accent/20" />
      </div>

      <div className="flex-1 bg-accent-bg flex items-center px-20 py-32">
        <div className="w-full text-left">
          <div className="text-[10px] text-secondary uppercase font-semibold tracking-widest mb-6">sector spotlight</div>

          <h2 className="font-bold text-[40px] text-accent leading-tight mb-6">
            Industrial &amp; Manufacturing
            <br />
            Chemical Solutions
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Eunisell delivers comprehensive chemical programs tailored to the specific needs of manufacturing facilities — from FMCG production lines
            to heavy industrial plants. Our solutions protect assets, improve efficiency, and help clients achieve consistent product quality.
          </p>

          <ul className="space-y-4 mb-12">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-x-3">
                <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon size={11} className="text-secondary" />
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <Link to={paths.industrial}>
            <Button className="px-8 h-13 bg-accent text-white font-bold text-sm rounded-[2px]">Explore Industrial Chemical Solutions</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
