import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const solutions = [
  {
    title: 'Industrial & Manufacturing',
    mobileTitle: 'Industrial & Mfg',
    description: 'Specialty chemicals for complex industrial processes.',
    mobileDesc: 'Specialty chemical processes.',
    path: paths.industrial,
  },
  {
    title: 'Oilfield Chemicals',
    mobileTitle: 'Oilfield Chemicals',
    description: 'Comprehensive chemical solutions for oil and gas assets.',
    mobileDesc: 'Complete asset solutions.',
    path: paths.oilfield,
  },
  {
    title: 'Technical Services',
    mobileTitle: 'Technical Services',
    description: 'Engineering and consulting support for chemical optimization.',
    mobileDesc: 'Engineering and consulting support.',
    path: paths.oilfield,
  },
  {
    title: 'Laboratory Services',
    mobileTitle: 'Laboratory Services',
    description: 'Rigorous analysis and testing in our local facilities.',
    mobileDesc: 'Rigorous analysis and testing.',
    path: paths.oilfield,
  },
];

const Solutions: React.FC = () => {
  return (
    <section className="bg-accent text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <h2 className="font-bold text-[24px] leading-[36px] text-white">Related Solutions</h2>

        <div className="flex flex-col gap-4">
          {solutions.slice(0, 2).map((s) => (
            <Link key={s.title} to={s.path} className="bg-white/5 border border-white/10 rounded-[4px] p-6 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="font-bold text-[18px] leading-[28px] text-white">{s.mobileTitle}</div>
                <div className="text-[12px] leading-[16px] text-white/40">{s.mobileDesc}</div>
              </div>
              <ArrowRightIcon size={16} className="text-white shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <h2 className="text-[32px] font-bold text-primary-foreground leading-12 mb-10">Related Solution Areas</h2>

        <div className="w-full grid grid-cols-4 gap-6 items-center">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              to={solution.path}
              className="bg-white/5 p-8 h-full flex flex-col rounded-[4px] border border-white/10 space-y-4"
            >
              <div className="text-xl leading-7 text-white font-bold">{solution.title}</div>
              <p className="text-sm leading-5 flex-1 text-white/60">{solution.description}</p>
              <ArrowRightIcon size={24} className="text-white" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
