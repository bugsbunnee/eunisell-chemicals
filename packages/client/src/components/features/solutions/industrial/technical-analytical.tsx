import React from 'react';
import { FlaskConicalIcon, TestTube2Icon } from 'lucide-react';

const microscopeImg = 'https://www.figma.com/api/mcp/asset/eccadf13-5ce0-4d94-9013-5f4ee51fd428';
const beakerImg = 'https://www.figma.com/api/mcp/asset/c3d240b9-85df-46a2-979b-11c962979e61';

const services = [
  {
    icon: FlaskConicalIcon,
    iconBg: 'bg-secondary',
    title: 'Chemical Analysis',
    description: 'Inductive coupled plasma and chromatography services.',
  },
  {
    icon: TestTube2Icon,
    iconBg: 'bg-accent',
    title: 'Compatibility Testing',
    description: 'Ensuring additive compatibility with existing manufacturing fluids.',
  },
];

const TechnicalAnalytical: React.FC = () => (
  <section className="bg-white py-32 px-30 text-left">
    <div className="flex gap-20 items-center">
      <div className="flex-1 flex gap-4 items-start">
        <div className="flex-1 h-80 rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <img src={microscopeImg} alt="Laboratory microscope" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 h-80 rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] mt-12">
          <img src={beakerImg} alt="Chemical reaction in beaker" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-8">
        <h2 className="font-bold text-accent text-[36px] leading-10">Technical &amp; Analytical Excellence</h2>
        <p className="text-[#777] text-[18px] leading-7">
          Our technical services go beyond supply. We provide a full suite of analytical capabilities to ensure the chemicals in your facility are
          performing at peak potential.
        </p>

        <div className="flex flex-col gap-6 pt-4">
          {services.map(({ icon: Icon, iconBg, title, description }) => (
            <div key={title} className="border border-[#e8e8e8] flex gap-6 items-center p-6">
              <div className={`${iconBg} w-14 h-14 flex items-center justify-center shrink-0`}>
                <Icon size={24} className="text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="font-bold text-accent text-[16px] leading-6">{title}</h6>
                <p className="text-[#777] text-sm leading-5">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechnicalAnalytical;
