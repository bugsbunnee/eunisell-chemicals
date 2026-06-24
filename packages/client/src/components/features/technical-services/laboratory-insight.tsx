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
    <section className="bg-white flex flex-col md:grid md:grid-cols-2 md:gap-16 px-6 py-16 md:px-30 md:pb-24 md:pt-0 text-left gap-10">
      <div className="space-y-6 md:space-y-8 items-start">
        <h2 className="font-bold text-[#002037] text-[28px] md:text-4xl leading-[35px] md:leading-11.45 m-0">
          From Laboratory Insight to Field Performance
        </h2>

        <div className="bg-secondary h-1.5 w-16 md:w-20" />

        <p className="font-normal text-card-foreground text-[16px] md:text-lg leading-[26px] md:leading-[29.25px] m-0">
          Our technical capabilities are built on decades of chemical expertise. We don't just provide products; we provide the scientific validation
          and field support necessary to optimize performance in even the most challenging environments.
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        {insights.map((insight) => (
          <div key={insight.title} className="bg-card rounded-lg relative border-secondary border-l-4">
            <div className="flex gap-4 md:gap-6 items-start p-6 md:p-8">
              <div className="bg-white flex flex-col items-start p-3 md:p-4 rounded-full shadow-sm shrink-0">
                <insight.Icon className="text-secondary" size={20} />
              </div>

              <div className="space-y-1.5 md:space-y-2 flex-1">
                <h4 className="font-bold text-accent text-[18px] md:text-xl leading-7 m-0">{insight.title}</h4>
                <p className="font-normal text-card-foreground text-sm md:text-base leading-[22px] md:leading-6 m-0">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaboratoryInsight;
