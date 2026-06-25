import { CheckCircleIcon } from 'lucide-react';

const assessments = [
  'Job Hazard Analysis (JHA) for all field deployments',
  'Quantitative Risk Assessment (QRA) for facility management',
  'Process Safety Management (PSM) for chemical blending',
];

const mobileAssessments = ['Job Hazard Analysis (JHA)', 'Quantitative Risk Assessment (QRA)', 'Process Safety Management (PSM)'];

const Assessments = () => {
  return (
    <section className="bg-card text-left">
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <h2 className="font-bold text-[24px] leading-9 text-accent">Risk Assessments</h2>

        <p className="text-[16px] leading-6.5 text-card-foreground">
          Our Risk Assessment Matrix (RAM) evaluates the severity and probability of every technical operation.
        </p>

        <div className="rounded-[4px] overflow-hidden">
          <img src="/qhse/matrix.svg" alt="Risk Assessment Matrix" className="w-full h-auto object-contain" />
        </div>

        <div className="flex flex-col gap-3 pt-2">
          {mobileAssessments.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircleIcon size={16} className="text-secondary shrink-0" />
              <div className="text-[14px] leading-5 text-accent">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:grid py-24 px-30 grid-cols-2 gap-x-24 items-center">
        <div className="space-y-6">
          <div className="text-4xl text-accent font-bold leading-10">Risk-Based Safety Assessments</div>
          <p className="text-card-foreground text-lg leading-[29.3px]">
            We don't just react to incidents; we predict them. Our Risk Assessment Matrix (RAM) evaluates the severity and probability of every
            technical operation, ensuring that high-risk activities are managed with redundant safety barriers.
          </p>

          <div className="space-y-4">
            {assessments.map((assessment) => (
              <div key={assessment} className="flex items-center gap-3">
                <CheckCircleIcon className="text-secondary" />
                <div className="text-base leading-6 text-sidebar-primary-foreground">{assessment}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img src="/qhse/matrix.svg" alt="Matrix" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Assessments;
