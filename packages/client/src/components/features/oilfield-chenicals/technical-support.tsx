import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const outlines = [
  {
    title: 'Field Optimization Audits',
    description: 'On-site assessments to identify efficiency gaps and chemical waste.',
  },
  {
    title: 'Analytical Lab Services',
    description: 'Full-spectrum water, oil, and solids analysis for precise dosing.',
  },
  {
    title: 'Custom Formulation',
    description: 'Developing site-specific chemical cocktails for unique reservoir challenges.',
  },
];

const TechnicalSupport: React.FC = () => {
  return (
    <section className="py-16 px-45 bg-card">
      <div className="grid bg-background shadow-2xl grid-cols-2 text-left">
        <div className="p-16">
          <div className="font-bold text-accent text-4xl leading-10">Unrivaled Technical Support</div>

          <p className="text-base text-muted-foreground mt-4">
            Our commitment goes beyond chemical supply. We provide end-to-end technical partnerships powered by field-based expertise and rigorous
            laboratory analysis.
          </p>

          <div className="mt-10 space-y-4">
            {outlines.map((outline) => (
              <div className="flex items-start gap-x-4">
                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-secondary/10 text-secondary">
                  <CheckIcon size={12} />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-base text-accent leading-6">{outline.title}</div>
                  <div className="text-sm font-normal text-muted-foreground leading-5">{outline.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-b-2 py-1 border-b-secondary w-fit">
            <Link to={paths.aboutUs} className="text-secondary text-base font-bold leading-6 flex items-center gap-x-2">
              View Technical Capabilities <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>

        <div className="h-full">
          <img src="/oilfield-chemicals/technical-support.svg" alt="Technical Support" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupport;
