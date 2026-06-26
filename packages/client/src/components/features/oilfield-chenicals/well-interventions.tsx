import React from 'react';
import { SoapDispenserDropletIcon, ThermometerIcon, TriangleAlertIcon } from 'lucide-react';

const applications = [
  {
    Icon: SoapDispenserDropletIcon,
    title: 'Acid Systems',
    description: 'Tailored surfactants and polymer solutions for tertiary recovery stages.',
  },
  {
    Icon: TriangleAlertIcon,
    title: 'Stimulation Chemicals',
    description: 'High-pressure/high-temperature (HPHT) stable chemical systems.',
  },
  {
    Icon: ThermometerIcon,
    title: 'Specialty Treatments',
    description: 'Specialized separation and treatment chemicals for offshore vessels.',
  },
];

const WellInterventionChemicals: React.FC = () => {
  return (
    <section className="bg-background">
      {/* Mobile */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8 text-left">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-[28px] leading-9 text-accent">Well Intervention Chemicals</h2>
          <p className="text-[14px] leading-5 text-card-foreground">End-to-end chemical management for the complete field lifecycle</p>
        </div>
        <div className="flex flex-col gap-4">
          {applications.map((application) => (
            <div key={application.title} className="p-6 border border-border flex flex-col gap-3">
              <application.Icon size={24} className="text-secondary" />
              <div className="text-[16px] text-accent">{application.title}</div>
              <div className="text-[13px] text-card-foreground leading-5">{application.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-16 px-45">
        <h3 className="text-3xl font-bold text-accent">Well Intervention Chemicals</h3>
        <p className="mt-2 text-base text-muted-foreground">End-to-end chemical management for the complete field lifecycle</p>

        <div className="mt-16 gap-6 grid grid-cols-3">
          {applications.map((application) => (
            <div key={application.title} className="text-left p-6 border border-border">
              <application.Icon size={24} className="text-secondary" />
              <div className="text-base font-bold leading-6 my-4">{application.title}</div>
              <div className="text-xs text-muted-foreground">{application.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellInterventionChemicals;
