import React from 'react';
import { ArrowRightIcon, BookOpenIcon, FileTextIcon, BarChart3Icon } from 'lucide-react';
import { Button } from '../../ui/button';

const stats = [
  {
    Icon: BookOpenIcon,
    value: '150+',
    label: 'Technical Publications',
    description: 'Peer-reviewed articles and technical guides authored by our chemical engineering specialists.',
  },
  {
    Icon: FileTextIcon,
    value: '80+',
    label: 'Case Studies',
    description: "Documented field results from deployments across Africa's oil, gas, and industrial sectors.",
  },
  {
    Icon: BarChart3Icon,
    value: '12',
    label: 'Expert Contributors',
    description: 'Qualified chemical engineers and operational specialists contributing applied research.',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="px-20 pt-28 pb-0 bg-card">
      <div className="text-left">
        <div className="flex items-center gap-x-6 mb-6">
          <div className="h-0.5 w-10 bg-secondary" />
          <div className="uppercase text-secondary tracking-[3px] text-xs font-bold">Knowledge Center</div>
        </div>

        <h1 className="leading-[1.1] max-w-4xl text-accent font-extrabold text-[72px]">
          Guiding Industry with <span className="text-secondary">Expert</span> Chemical Insights
        </h1>

        <p className="mt-7 max-w-2xl text-xl text-muted-foreground leading-relaxed">
          Access our comprehensive library of technical publications, case studies, industry insights, and field-proven research from Africa's leading
          chemical engineering team.
        </p>

        <div className="flex items-center mt-11 gap-x-4">
          <Button className="rounded-xs bg-secondary font-semibold text-base h-13 px-7 flex items-center gap-x-2">
            Explore Resources <ArrowRightIcon size={16} />
          </Button>
          <Button className="rounded-xs bg-transparent border border-accent/30 font-semibold text-base h-13 px-7 text-accent">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-3 border border-border">
        {stats.map((stat, idx) => (
          <div key={stat.label} className={`p-10 text-left bg-background ${idx < stats.length - 1 ? 'border-r border-border' : ''}`}>
            <div className="w-12 h-12 rounded-sm bg-secondary/10 flex items-center justify-center mb-6">
              <stat.Icon size={20} className="text-secondary" />
            </div>
            <div className="text-4xl font-black text-secondary mb-2">{stat.value}</div>
            <div className="font-bold text-lg text-accent mb-2">{stat.label}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
