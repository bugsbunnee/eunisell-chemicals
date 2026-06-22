import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const solutions = [
  {
    id: '01',
    title: 'Production Chemicals',
    description:
      'Corrosion inhibitors, scale inhibitors, demulsifiers, paraffin inhibitors, H₂S scavengers, and oxygen scavengers for production optimisation.',
  },
  {
    id: '02',
    title: 'Flow Assurance',
    description: 'Wax management, hydrate control, and pipeline integrity solutions to maintain uninterrupted hydrocarbon flow.',
  },
  {
    id: '03',
    title: 'Well Intervention Chemicals',
    description: 'Acid systems, stimulation chemicals, and specialty treatments for well performance restoration and production enhancement.',
  },
  {
    id: '04',
    title: 'Water Treatment',
    description: 'Produced water treatment, deoiling chemicals, clarifiers, and water quality management for regulatory compliance.',
  },
];

const OilGas: React.FC = () => {
  return (
    <section className="flex w-full min-h-[960px]">
      <div className="flex-1 bg-background flex items-center px-30 py-32">
        <div className="w-full text-left max-w-2xl">
          <div className="text-[10px] text-secondary uppercase font-semibold tracking-widest mb-6">primary sector</div>

          <h2 className="font-bold text-[40px] text-accent leading-tight mb-6">
            Oil &amp; Gas — Our
            <br />
            Deepest Expertise
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed mb-12">
            Eunisell has built decades of experience supporting Nigeria's upstream, midstream, and offshore operators. Our oilfield chemical portfolio
            is engineered to solve the most complex production challenges — from deep subsea wells to onshore refineries.
          </p>

          <div className="space-y-0 mb-12">
            {solutions.map((sol) => (
              <div key={sol.id} className="border-t border-border pt-6 pb-5">
                <div className="flex items-start justify-between gap-x-6">
                  <div className="flex items-start gap-x-6 flex-1">
                    <span className="font-black text-[32px] leading-none text-secondary/30 shrink-0 w-10">{sol.id}</span>
                    <div>
                      <div className="font-bold text-[18px] text-accent mb-2">{sol.title}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{sol.description}</p>
                    </div>
                  </div>
                  <ArrowRightIcon size={16} className="text-secondary shrink-0 mt-1" />
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>

          <Link to={paths.oilfield}>
            <Button className="px-8 h-13 bg-secondary font-bold text-sm text-white rounded-[2px]">Explore Oilfield Chemical Portfolio</Button>
          </Link>
        </div>
      </div>

      <div className="w-[600px] shrink-0 relative overflow-hidden">
        <img src="/about/oil.svg" alt="Oil and gas operations" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-accent/20" />

        <div className="absolute bottom-12 left-10 right-10 bg-accent/80 backdrop-blur-sm p-8 rounded-sm border border-white/10">
          <div className="font-extrabold text-3xl text-white mb-1">30+ Years</div>
          <div className="text-sm font-medium text-white/70 leading-snug">
            Serving Nigeria's oil and gas sector with proven chemical solutions that protect assets and maximise production uptime.
          </div>
        </div>
      </div>
    </section>
  );
};

export default OilGas;
