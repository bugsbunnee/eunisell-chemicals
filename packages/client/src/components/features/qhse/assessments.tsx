import { CheckCircleIcon } from 'lucide-react';

const assessments = [
  'Job Hazard Analysis (JHA) for all field deployments',
  'Quantitative Risk Assessment (QRA) for facility management',
  'Process Safety Management (PSM) for chemical blending',
];

const Assessments = () => {
  return (
    <section className="py-24 px-30 bg-card grid grid-cols-2 gap-x-24 items-center text-left">
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
    </section>
  );
};

export default Assessments;
