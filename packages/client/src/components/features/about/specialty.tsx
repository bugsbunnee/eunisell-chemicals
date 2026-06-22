import React from 'react';

import { ChartSplineIcon, CircleGaugeIcon, DropletIcon, FlaskConicalIcon, ShieldHalfIcon, TestTubesIcon } from 'lucide-react';

const specialties = [
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

const Specialty: React.FC = () => {
  return (
    <section className="px-30 py-35 bg-background w-full relative">
      <div className="font-black text-[15px] leading-4 text-secondary uppercase mb-4">Specialized Knowledge</div>
      <div className="font-bold text-5xl text-accent leading-18">Deep Industry Knowledge. Practical Field Experience.</div>

      <div className="mt-16 grid grid-cols-3 gap-8">
        {specialties.map((specialty) => (
          <div key={specialty.title} className="p-10 border border-ring rounded-lg text-left">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/10">
              <specialty.Icon size={20} className="text-secondary" />
            </div>
            <div className="font-bold text-xl text-accent leading-7 mt-8">{specialty.title}</div>
            <div className="text-base leading-6 text-muted-foreground mt-4">{specialty.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialty;
