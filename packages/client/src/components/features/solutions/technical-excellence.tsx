import React from 'react';
import { FlaskConicalIcon, TestTube2Icon, ShieldAlertIcon, DropletsIcon, type LucideIcon } from 'lucide-react';

const labImage = 'https://www.figma.com/api/mcp/asset/a0558705-1495-44b6-9008-2a3a592db39a';

const capabilities: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: FlaskConicalIcon,
    title: 'Chemical Analysis',
    description: 'Comprehensive analytical testing of industrial and oilfield formulations.',
  },
  {
    icon: TestTube2Icon,
    title: 'Compatibility Testing',
    description: 'Evaluating chemical synergy for safe and effective field application.',
  },
  {
    icon: ShieldAlertIcon,
    title: 'Corrosion Testing',
    description: 'Assessing inhibitor performance in simulated operational environments.',
  },
  {
    icon: DropletsIcon,
    title: 'Water Analysis',
    description: 'Full-suite water quality analysis for treatment programme optimization.',
  },
];

const AnalysisChart: React.FC = () => (
  <svg viewBox="0 0 250 130" className="w-full h-full" aria-hidden>
    <line x1="20" y1="55" x2="230" y2="55" stroke="#e5e7eb" strokeWidth="1" />
    <line x1="20" y1="75" x2="230" y2="75" stroke="#e5e7eb" strokeWidth="1" />
    <polygon points="20,90 70,75 120,55 170,40 220,50 220,115 20,115" fill="rgba(0,131,206,0.08)" />
    <polyline points="20,90 70,75 120,55 170,40 220,50" fill="none" stroke="#0083ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="12" y="59" fontSize="10" fill="#444" textAnchor="end">
      20
    </text>
    <text x="12" y="79" fontSize="10" fill="#444" textAnchor="end">
      15
    </text>
    <text x="20" y="125" fontSize="10" fill="#444" textAnchor="middle">
      Mon
    </text>
    <text x="70" y="125" fontSize="10" fill="#444" textAnchor="middle">
      Tue
    </text>
    <text x="120" y="125" fontSize="10" fill="#444" textAnchor="middle">
      Wed
    </text>
    <text x="170" y="125" fontSize="10" fill="#444" textAnchor="middle">
      Thu
    </text>
    <text x="220" y="125" fontSize="10" fill="#444" textAnchor="middle">
      Fri
    </text>
  </svg>
);

const TechnicalExcellence: React.FC = () => (
  <section className="bg-white py-24 px-30">
    <div className="max-w-300 mx-auto flex flex-col gap-20">
      <div className="flex flex-col items-center gap-4">
        <span className="font-black text-secondary text-[15px] uppercase tracking-[3px] leading-4">Scientific Accuracy</span>
        <h2 className="font-bold text-accent text-[48px] leading-15 tracking-[-0.09px] text-center max-w-3xl">
          Technical Excellence at the Heart of Every Solution
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="relative h-125 rounded-[8px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <img src={labImage} alt="Chemical analysis laboratory equipment" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-8 right-8 w-75 bg-white/95 border border-border rounded-[4px] p-6 flex flex-col gap-4 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            <p className="font-bold text-accent text-sm leading-5">Real-time Analysis Data</p>
            <div className="h-37.5 w-full">
              <AnalysisChart />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-left">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0">
                <Icon size={16} className="text-secondary" />
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="font-bold text-accent text-[16px] leading-6">{title}</h6>
                <p className="text-muted-foreground text-sm leading-5">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechnicalExcellence;
