import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const insights = [
  {
    category: 'Technical Article',
    title: 'Hydrate Control Strategies for Deepwater Pipeline Systems',
    excerpt:
      'An evaluation of thermodynamic and kinetic hydrate inhibitors under varying subsea temperature and pressure conditions encountered in West African deepwater operations.',
    date: 'Apr 2025',
    image: '/solutions/supply.svg',
  },
  {
    category: 'White Paper',
    title: 'Biocide Treatment Programs for Produced Water Management',
    excerpt:
      'This paper outlines best practices for microbiological control in produced water systems, addressing SRB activity, MIC, and regulatory compliance requirements.',
    date: 'Mar 2025',
    image: '/solutions/manufacturing.svg',
  },
  {
    category: 'Industry Insight',
    title: "Africa's Industrial Chemical Market: Trends and Opportunities 2025",
    excerpt:
      'A comprehensive review of supply chain dynamics, import substitution initiatives, and growth sectors driving demand for industrial chemicals across Sub-Saharan Africa.',
    date: 'Feb 2025',
    image: '/solutions/blending.svg',
  },
];

const Insights: React.FC = () => {
  return (
    <section className="bg-background py-28 px-20">
      <div className="flex items-end justify-between mb-16">
        <div className="text-left">
          <div className="text-[10px] font-black uppercase text-secondary tracking-[2px] mb-4">Recent Insights</div>
          <h2 className="font-bold text-[40px] text-accent leading-tight max-w-xl">From Our Technical Team</h2>
        </div>
        <Link to="#" className="text-secondary font-bold text-sm flex items-center gap-x-2 hover:gap-x-3 transition-all shrink-0">
          View All Publications <ArrowRightIcon size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {insights.map((insight) => (
          <div key={insight.title} className="text-left border border-border bg-background hover:shadow-md transition-shadow">
            <div className="h-52 overflow-hidden bg-card">
              <img src={insight.image} alt={insight.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[9px] font-bold uppercase text-secondary tracking-[1.5px]">{insight.category}</div>
                <div className="text-[10px] text-muted-foreground">{insight.date}</div>
              </div>
              <h3 className="text-lg font-bold text-accent leading-snug mb-4">{insight.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{insight.excerpt}</p>
              <Link to="#" className="text-secondary font-bold text-xs flex items-center gap-x-1 hover:gap-x-2 transition-all">
                Read More <ArrowRightIcon size={11} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
