import type React from 'react';

import { CogIcon, EarthIcon, FlaskConicalIcon, TestTubeIcon } from 'lucide-react';
import { Button } from '../../ui/button';
import { Separator } from '../../ui/separator';
import ScrollDownButton from '../../common/scroll-down-button';

const features = [
  {
    Icon: FlaskConicalIcon,
    title: 'Industrial',
    description: 'Chemical Solutions',
  },
  {
    Icon: TestTubeIcon,
    title: 'Laboratory & Technical',
    description: 'Services',
  },
  {
    Icon: CogIcon,
    title: 'Chemical Blending',
    description: '& Supply',
  },
  {
    Icon: EarthIcon,
    title: 'Africa Focused',
    description: 'Industrial Expertise',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="relative px-30 py-30.75 bg-[url(/home/hero-home.svg)] w-screen bg-cover bg-no-repeat">
      <div className="w-full text-left">
        <div className="flex items-center justify-start mb-6 gap-x-6">
          <div className="h-0.5 w-10 bg-secondary"></div>
          <div className="uppercase text-secondary tracking-[3px] text-[11px]">AFRICA'S LEADING INDUSTRIAL CHEMICAL SOLUTIONS PROVIDER</div>
        </div>

        <h1 className="leading-[75.6px] max-w-200 text-primary-foreground font-extrabold text-[72px]">
          Engineering Chemical Solutions for Industry and Energy
        </h1>

        <div className="text-muted italic text-xl mt-4">"Behind Every Problem is a Solution You Can Trust"</div>

        <p className="mt-6 max-w-155 text-primary-foreground/70">
          Delivering specialized industrial chemicals, oilfield chemicals, laboratory services, warehousing and technical expertise that help
          businesses optimize operations, improve efficiency, and maximize performance.
        </p>

        <div className="flex items-center mt-11 gap-x-4">
          <Button className="rounded-xs bg-secondary font-semibold text-base h-13 px-7">Explore Solutions</Button>

          <Button className="rounded-xs bg-transparent border border-primary-foreground/40 font-semibold text-base h-13 px-7">
            Request Technical Consultation
          </Button>
        </div>

        <Separator className="bg-primary-foreground/10 mt-16" />

        <div className="grid grid-cols-4 gap-x-4 mt-6 items-center">
          {features.map((feature) => (
            <div key={feature.title} className="p-4 bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="flex items-center gap-x-1 text-[10px] tracking-[0.5px] font-bold text-secondary uppercase">
                <span>
                  {feature.title} <span className="font-normal">{feature.description}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-[43px] left-1/2 -translate-x-1/2 z-50">
        <ScrollDownButton />
      </div>
    </section>
  );
};

export default Hero;
