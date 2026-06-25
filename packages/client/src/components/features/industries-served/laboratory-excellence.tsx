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
  { Icon: TestTubeIcon, title: 'Crude Oil Analysis' },
  { Icon: WavesHorizontalIcon, title: 'Water Quality Testing' },
  { Icon: MicroscopeIcon, title: 'Microbiological Surveys' },
  { Icon: ShieldHalfIcon, title: 'Corrosion Monitoring' },
  { Icon: FuelIcon, title: 'Fuel Specifications' },
  { Icon: FlaskConicalIcon, title: 'Compatibility Tests' },
  { Icon: LoaderPinwheelIcon, title: 'Scale & Wax Analysis' },
  { Icon: UserRoundCogIcon, title: 'Technical Consulting' },
];

const LaboratoryExcellence: React.FC = () => {
  return (
    <section className="bg-card">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4">
          <span className="font-bold text-[10px] uppercase text-secondary tracking-[1px] text-center">Laboratory Excellence</span>
          <h2 className="font-bold text-[28px] leading-[35px] text-accent text-center">Technical Support</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          {items.slice(0, 4).map((item) => (
            <div key={item.title} className="bg-white border border-[#d2d2d2] rounded-[4px] h-[82px] p-5 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-secondary/10 rounded-[2px] shrink-0">
                <item.Icon size={16} className="text-secondary" />
              </div>
              <div className="text-[14px] leading-[20px] font-bold text-accent">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block py-24 px-30">
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
      </div>
    </section>
  );
};

export default LaboratoryExcellence;
