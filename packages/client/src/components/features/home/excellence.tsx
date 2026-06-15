import React from 'react';
import SectionWithTitle from '../../layout/section-with-title';

import { ChartSplineIcon, CircleGaugeIcon, DropletIcon, FlaskConicalIcon, ShieldHalfIcon, TestTubesIcon } from 'lucide-react';

const technicalities = [
  {
    Icon: ChartSplineIcon,
    title: 'Chemical Analysis',
    description: 'Comprehensive analytical testing of industrial and oilfield chemicals.',
  },
  {
    Icon: TestTubesIcon,
    title: 'Compatibility Testing',
    description: 'Evaluating chemical compatibility for safe and effective application.',
  },
  {
    Icon: ShieldHalfIcon,
    title: 'Corrosion Testing',
    description: 'Assessing corrosion rates and inhibitor performance in operational environments.',
  },
  {
    Icon: DropletIcon,
    title: 'Water Analysis',
    description: 'Full-suite water quality analysis for treatment programme optimization.',
  },
  {
    Icon: FlaskConicalIcon,
    title: 'Product Evaluation',
    description: 'Independent evaluation and benchmarking of chemical product performance.',
  },
  {
    Icon: CircleGaugeIcon,
    title: 'Performance Testing',
    description: 'Quantifying chemical effectiveness under simulated field conditions.',
  },
];

const markers = [
  {
    title: 'ph level',
    value: '7.24',
    className: 'absolute text-left bg-background top-8 left-8 py-1 px-3 border-2 border-secondary rounded-sm',
  },
  {
    title: 'temperature',
    value: '23.5°C',
    className: 'absolute text-left bg-background top-8 right-8 py-1 px-3 border-2 border-secondary rounded-sm',
  },
  {
    title: 'tds',
    value: '450 mg/L',
    className: 'absolute text-left bg-background bottom-8 left-8 py-1 px-3 border-2 border-secondary rounded-sm',
  },
  {
    title: 'corr rate',
    value: '0.12 mm/yr',
    className: 'absolute text-left bg-background bottom-8 right-8 py-1 px-3 border-2 border-secondary rounded-sm',
  },
];

const summary = [
  {
    value: '15+',
    label: 'years technical experience',
  },
  {
    value: '200+',
    label: 'chemical products',
  },
  {
    value: 'Advanced',
    label: 'laboratory infrastructure',
  },
  {
    value: 'International',
    label: 'quality standards',
  },
];

const TechnicalExcellence: React.FC = () => {
  return (
    <SectionWithTitle
      legend="Technical Excellence"
      title="Technical Excellence at the Heart of Every Solution"
      description="Our advanced laboratory infrastructure and technical team deliver precision testing, analysis, and support services that underpin every chemical solution we provide."
    >
      <div className="mt-16 grid grid-cols-2 gap-x-18">
        <div className="grid grid-cols-2 gap-8">
          {technicalities.map((technicality) => (
            <div key={technicality.title} className="flex items-start gap-x-4">
              <div className="w-10 h-10 border border-border flex items-center justify-center rounded-full text-secondary">
                <technicality.Icon size={14} />
              </div>
              <div className="text-left flex-1">
                <div className="text-accent font-bold text-[15px]">{technicality.title}</div>
                <div className="text-[13px] text-muted-foreground mt-[3.9px]">{technicality.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          {markers.map((marker) => (
            <div key={marker.title} className={marker.className}>
              <div className="text-[9px] mt-0 text-secondary font-semibold uppercase">{marker.title}</div>
              <div className="text-accent font-bold text-sm">{marker.value}</div>
            </div>
          ))}

          <img src="/technical.svg" alt="Technical" />
        </div>
      </div>

      <div className="border-t border-border my-16" />

      <div className="grid grid-cols-4 divide-x divide-border">
        {summary.map((summary) => (
          <div key={summary.label} className="flex items-center justify-center">
            <div>
              <div className="font-extrabold text-[52px] text-secondary">{summary.value}</div>
              <div className="tracking-[1px] uppercase text-xs mt-4 text-muted">{summary.label}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWithTitle>
  );
};

export default TechnicalExcellence;
