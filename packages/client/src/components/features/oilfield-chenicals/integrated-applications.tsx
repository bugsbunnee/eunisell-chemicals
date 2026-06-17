import {
  CogIcon,
  DropletIcon,
  FireExtinguisherIcon,
  FlaskRoundIcon,
  SoapDispenserDropletIcon,
  TestTubeDiagonalIcon,
  TriangleAlertIcon,
  TruckIcon,
} from 'lucide-react';
import React from 'react';

const applications = [
  {
    Icon: SoapDispenserDropletIcon,
    title: 'Enhanced Oil Recovery (EOR)',
    description: 'Tailored surfactants and polymer solutions for tertiary recovery stages.',
  },
  {
    Icon: TriangleAlertIcon,
    title: 'Subsea Production',
    description: 'High-pressure/high-temperature (HPHT) stable chemical systems.',
  },
  {
    Icon: FlaskRoundIcon,
    title: 'FPSO Operations',
    description: 'Specialized separation and treatment chemicals for offshore vessels.',
  },
  {
    Icon: TestTubeDiagonalIcon,
    title: 'Well Stimulation',
    description: 'Acidizing and fracturing additives for reservoir permeability enhancement.',
  },
  {
    Icon: CogIcon,
    title: 'Refining Integration',
    description: 'Ensuring crude compatibility for downstream processing.',
  },
  {
    Icon: TruckIcon,
    title: 'Midstream Logistics',
    description: 'Drag reducers and viscosity modifiers for pipeline efficiency.',
  },
  {
    Icon: FireExtinguisherIcon,
    title: 'H2S Scavenging',
    description: 'Reliable removal of toxic sour gases from production streams.',
  },
  {
    Icon: DropletIcon,
    title: 'Produced Water',
    description: 'Treatment for discharge or reinjection according to environmental standards.',
  },
];

const IntegratedApplication: React.FC = () => {
  return (
    <section className="py-16 px-45 bg-background">
      <h3 className="text-3xl font-bold text-accent">Integrated Applications</h3>
      <p className="mt-2 text-base text-muted-foreground">End-to-end chemical management for the complete field lifecycle</p>

      <div className="mt-16 gap-6 grid grid-cols-4">
        {applications.map((application) => (
          <div key={application.title} className="text-left p-6 border border-border">
            <application.Icon size={24} className="text-secondary" />
            <div className="text-base font-bold leading-6 my-4">{application.title}</div>
            <div className="text-xs text-muted-foreground">{application.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegratedApplication;
