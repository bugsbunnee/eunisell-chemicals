import { ChartLineIcon, FlaskConicalIcon, SailboatIcon } from 'lucide-react';
import type React from 'react';

const insights = [
  {
    Icon: FlaskConicalIcon,
    title: 'Laboratory Intelligence',
    description: 'Advanced diagnostic testing to understand chemical interactions at a molecular level before deployment.',
  },
  {
    Icon: SailboatIcon,
    title: 'Field Support',
    description: 'On-site technical specialists to monitor performance, troubleshoot issues, and optimize dosing in real-time.',
  },
  {
    Icon: ChartLineIcon,
    title: 'Process Optimization',
    description: 'Data-driven strategies designed to increase yield, reduce chemical waste, and extend asset life cycles.',
  },
];
const LaboratoryInsight: React.FC = () => {
  return (
    <section className="bg-white grid grid-cols-2 gap-16 px-30 pb-24 text-left">
      <div className="space-y-8 items-start">
        <div className="">
          <h2 className="font-bold text-[#002037] text-4xl leading-11.45 m-0">From Laboratory Insight to Field Performance</h2>
        </div>

        <div className="bg-secondary h-1.5 w-20" />

        <p className="font-normal text-card-foreground text-lg leading-[29.25px] m-0">
          Our technical capabilities are built on decades of chemical expertise. We don't just provide products; we provide the scientific validation
          and field support necessary to optimize performance in even the most challenging environments.
        </p>
      </div>

      <div className="space-y-6">
        {insights.map((insight) => (
          <div key={insight.title} className="bg-card rounded-lg relative border-secondary border-l-4">
            <div className="flex gap-6 items-start p-8">
              <div className="bg-white flex flex-col items-start p-4 rounded-full shadow-sm shrink-0">
                <insight.Icon className="text-secondary" />
              </div>

              <div className="space-y-2 flex-1">
                <h4 className="font-bold text-accent text-xl leading-7 m-0">{insight.title}</h4>

                <p className="font-normal text-card-foreground text-base leading-6 m-0">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaboratoryInsight;
