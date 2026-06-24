import React from 'react';
import { FlaskConicalIcon, TestTube2Icon, SettingsIcon, BarChart2Icon } from 'lucide-react';

const services = [
  {
    Icon: FlaskConicalIcon,
    title: 'Chemical Selection',
    description: 'Site-specific analysis to determine the most effective chemical profile.',
  },
  {
    Icon: TestTube2Icon,
    title: 'Laboratory Testing',
    description: 'Comprehensive ASTM testing and performance validation of all fluids.',
  },
  {
    Icon: SettingsIcon,
    title: 'On-site Optimization',
    description: 'Technical specialists deployed to your site for dosing and performance tuning.',
  },
  {
    Icon: BarChart2Icon,
    title: 'Continuous Monitoring',
    description: 'Regular reporting and analysis to maintain operational excellence.',
  },
];

const ChemicalsLabSupport: React.FC = () => {
  return (
    <section className="bg-card p-30 text-center">
      <div className="max-w-360 mx-auto px-8 flex flex-col gap-18">
        <div className="flex flex-col items-center gap-6 max-w-200 mx-auto">
          <h2 className="font-bold text-accent text-[48px] leading-tight">Expert Laboratory &amp; Technical Support</h2>
          <p className="text-[#777] text-[18px] leading-relaxed">
            Our chemicals are backed by state-of-the-art laboratory testing and a team of technical specialists who ensure every formulation is
            optimized for your specific site conditions.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-background border border-input rounded-[6px] pt-8 px-8 pb-13.25 flex flex-col items-start gap-0 text-left shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
            >
              <Icon size={32} className="text-secondary mb-4" />
              <h4 className="font-bold text-accent text-[20px] leading-7.5">{title}</h4>
              <p className="text-[#777] text-sm leading-5.25 mt-3">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChemicalsLabSupport;
