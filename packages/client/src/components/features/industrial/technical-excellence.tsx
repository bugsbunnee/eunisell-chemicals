import React from 'react';
import { FlaskConicalIcon, TestTubesIcon } from 'lucide-react';

const capabilities = [
  {
    Icon: FlaskConicalIcon,
    title: 'Chemical Analysis',
    description: 'Inductive coupled plasma and chromatography services.',
  },
  {
    Icon: TestTubesIcon,
    title: 'Compatibility Testing',
    description: 'Ensuring additive compatibility with existing manufacturing fluids.',
  },
];

const TechnicalExcellence: React.FC = () => {
  return (
    <section className="px-20 py-28 bg-accent-bg">
      <div className="grid grid-cols-2 gap-x-20 items-center">
        <div className="relative h-80">
          <div className="absolute left-0 top-8 w-85 h-80 overflow-hidden shadow-lg">
            <img src="/industrial/lab-flask.svg" alt="Laboratory researcher" className="w-full h-full object-cover" />
          </div>
          <div className="absolute right-0 top-0 w-85 h-80 overflow-hidden shadow-lg">
            <img src="/industrial/storage.svg" alt="Chemical reaction" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-left">
          <h2 className="font-bold text-[40px] text-accent">Technical &amp; Analytical Excellence</h2>
          <p className="mt-6 text-muted-foreground text-base leading-relaxed">
            Our technical services go beyond supply. We provide a full suite of analytical capabilities to ensure the chemicals in your facility are
            performing at peak potential.
          </p>

          <div className="mt-8 space-y-0">
            {capabilities.map((cap) => (
              <div key={cap.title} className="border border-border p-6 flex items-start gap-x-6">
                <div className="w-14 h-14 bg-accent flex items-center justify-center rounded-sm shrink-0">
                  <cap.Icon size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-[15px] text-accent mb-1">{cap.title}</div>
                  <p className="text-muted-foreground text-sm">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExcellence;
