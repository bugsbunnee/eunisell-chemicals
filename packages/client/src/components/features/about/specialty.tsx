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
    <section className="px-6 py-20 md:px-30 md:py-35 bg-background w-full relative">
      <div className="font-black text-[10px] md:text-[15px] leading-[15px] md:leading-4 text-secondary uppercase mb-3 md:mb-4 text-center md:text-left tracking-[3px]">
        Specialized Knowledge
      </div>
      <div className="font-bold text-[30px] md:text-5xl text-accent leading-[36px] md:leading-18 text-center md:text-left">Deep Industry Knowledge</div>

      <div className="md:hidden min-h-50 h-full rounded-[8px] overflow-hidden mt-8">
        <img src="/about/deep-industry-knowledge.svg" alt="Laboratory" className="w-full h-full object-cover" />
      </div>

      <div className="mt-8 md:mt-16 flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8">
        {specialties.map((specialty) => (
          <div
            key={specialty.title}
            className="p-6 md:p-10 border border-[#f3f4f6] md:border-ring rounded-[4px] md:rounded-lg text-left shadow-[0px_1px_1px_rgba(0,0,0,0.05)] md:shadow-none bg-white"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/10">
              <specialty.Icon size={16} className="text-secondary" />
            </div>
            <div className="font-bold text-[18px] md:text-xl text-accent leading-7 mt-6 md:mt-8">{specialty.title}</div>
            <div className="text-sm md:text-base leading-[22.75px] md:leading-6 text-muted-foreground mt-2 md:mt-4">{specialty.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialty;
