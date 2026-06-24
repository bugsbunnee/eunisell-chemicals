import type React from 'react';

const fields = [
  {
    id: '01',
    title: 'Diagnostic Planning',
    description: 'Site survey and requirement analysis to establish baseline metrics.',
  },
  {
    id: '02',
    title: 'Controlled Implementation',
    description: 'Precision injection and managed deployment.',
  },
  {
    id: '03',
    title: 'Continuous Optimization',
    description: 'Iterative adjustments based on field data to maximize ROI.',
  },
];

const FieldExcellence: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-30 md:py-24 text-left">
      {/* Mobile: heading → image → description + steps */}
      <div className="md:hidden space-y-6">
        <div className="text-[28px] leading-[34px] font-bold text-accent">Deploying Excellence in the Field</div>

        <div className="h-[240px] w-full">
          <img src="/technical-services/field-excellence.svg" alt="Field Excellence" className="w-full h-full object-cover rounded-[8px]" />
        </div>

        <div className="text-[15px] leading-[24px] font-normal text-card-foreground">
          Our technical service engineers combine on-site monitoring with real-time optimization to ensure your chemical program performs as intended.
        </div>

        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.id} className="flex items-start gap-x-4 border border-border rounded-[8px] p-5">
              <div className="text-border text-xl leading-8 font-bold shrink-0">{field.id}</div>
              <div className="flex-1">
                <div className="font-bold text-accent text-[15px] leading-6">{field.title}</div>
                <div className="font-normal text-card-foreground text-[13px] leading-5">{field.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: image left, content right */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-16 md:items-center">
        <div>
          <img src="/technical-services/field-excellence.svg" alt="Field Excellence" className="w-full h-full object-contain" />
        </div>
        <div className="space-y-8">
          <div className="text-4xl leading-10 font-bold text-accent">Deploying Excellence in the Field</div>
          <div className="text-lg leading-[29.25px] font-normal text-card-foreground">
            Our technical service engineers operate at the center of your production. By combining on-site monitoring with real-time optimization, we
            ensure that your chemical program is performing as intended under actual operational conditions.
          </div>

          <div className="space-y-6">
            {fields.map((field) => (
              <div key={field.id} className="flex items-center gap-x-6 border border-border rounded-[8px] p-6">
                <div className="text-border text-2xl leading-8 font-bold shrink-0">{field.id}</div>
                <div className="flex-1">
                  <div className="font-bold text-accent text-base leading-6">{field.title}</div>
                  <div className="font-normal text-card-foreground text-sm leading-5">{field.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldExcellence;
