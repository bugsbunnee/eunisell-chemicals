import { CheckIcon } from 'lucide-react';
import type React from 'react';

const labels = [
  {
    title: 'Chemical Performance',
    tag: 'REF: CP-902',
    labels: ['Rheology Profiling', 'Thermal Stability', 'Emulsion Stability'],
    src: '/technical-services/bar.svg',
  },
  {
    title: 'Asset Integrity',
    tag: 'REF: AI-441',
    labels: ['Inhibitor Residuals', 'Bacteria Monitoring', 'Scale Prediction'],
    src: '/technical-services/asset.svg',
  },
];

const AnalyticalExcellence: React.FC = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 items-center">
      <div className="relative h-[320px] md:h-full w-full">
        <div className="absolute w-full top-0 right-0 left-0 bottom-0 bg-accent/40"></div>
        <img src="/technical-services/analytics.svg" alt="Analytical Excellence" className="h-full w-full object-cover" />

        <div className="rounded-[8px] p-6 md:p-8 bg-background/10 backdrop-blur-[12px] border border-white/20 absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-auto z-50 space-y-3 md:space-y-[15.3px] text-left">
          <div className="text-[11px] md:text-sm leading-4 font-bold tracking-[2.4px] text-white uppercase">analytical excellence</div>
          <div className="font-bold text-[22px] md:text-3xl md:max-w-91 leading-[28px] md:leading-[37.5px] text-white">
            Quantifiable results that inform your next move.
          </div>
          <div className="text-[13px] md:text-base leading-5 md:leading-6 md:max-w-91 text-white/80">
            Every laboratory report we issue is a blueprint for operational efficiency.
          </div>
        </div>
      </div>

      <div className="space-y-6 md:space-y-8 p-6 md:p-20 text-left">
        {labels.map((label) => (
          <div key={label.tag} className="rounded-[8px] border border-border bg-background p-6 md:p-8 shadow-md">
            <div className="flex items-center justify-between">
              <div className="font-bold text-[18px] md:text-xl leading-7 text-accent capitalize">{label.title}</div>
              <div className="text-[11px] md:text-xs leading-4 text-secondary font-bold px-2 md:px-3 py-1 rounded-[4px] bg-secondary/10">
                {label.tag}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 md:gap-x-8 mt-5 md:mt-6">
              <div className="space-y-2 md:space-y-3">
                {label.labels.map((lab) => (
                  <div
                    key={lab}
                    className="flex items-center gap-x-2 font-normal text-card-foreground text-[13px] md:text-base leading-5 md:leading-6 capitalize"
                  >
                    <CheckIcon size={14} className="text-secondary shrink-0" /> {lab}
                  </div>
                ))}
              </div>

              <img src={label.src} alt={label.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnalyticalExcellence;
