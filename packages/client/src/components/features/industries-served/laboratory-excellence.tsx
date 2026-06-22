import React from 'react';
import {
  FlaskConicalIcon,
  FuelIcon,
  LoaderPinwheelIcon,
  MicroscopeIcon,
  ShieldHalfIcon,
  TestTubeIcon,
  UserRoundCogIcon,
  WavesHorizontalIcon,
} from 'lucide-react';

const items = [
  {
    Icon: TestTubeIcon,
    title: 'Crude Oil Analysis',
  },
  {
    Icon: WavesHorizontalIcon,
    title: 'Water Quality Testing',
  },
  {
    Icon: MicroscopeIcon,
    title: 'Microbiological Surveys',
  },
  {
    Icon: ShieldHalfIcon,
    title: 'Corrosion Monitoring',
  },
  {
    Icon: FuelIcon,
    title: 'Fuel Specifications',
  },
  {
    Icon: FlaskConicalIcon,
    title: 'Compatibility Tests',
  },
  {
    Icon: LoaderPinwheelIcon,
    title: 'Scale & Wax Analysis',
  },
  {
    Icon: UserRoundCogIcon,
    title: 'Technical Consulting',
  },
];

const LaboratoryExcellence: React.FC = () => {
  return (
    <section className="py-24 px-30 bg-card">
      <div className="flex items-end justify-between">
        <div className="text-left">
          <div className="font-black text-[15px] leading-4 text-secondary uppercase tracking-[3px]">laboratory excellence</div>
          <div className="text-[40px] font-bold leading-12.5 mt-4">Technical Support Across Industries</div>
        </div>

        <div className="text-base text-card-foreground text-right leading-6 max-w-91">
          Our state-of-the-art laboratories provide critical analytical data to ensure chemical programs are performing at their peak.
        </div>
      </div>

      <div className="mt-16 grid grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.title} className="text-left bg-white rounded-[4px] px-8 py-11 border border-popover">
            <div className="w-10 h-10 flex items-center justify-center bg-secondary/10 rounded-[2px]">
              <item.Icon className="text-secondary" />
            </div>

            <div className="mt-6 text-base leading-6 font-bold text-accent">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaboratoryExcellence;
