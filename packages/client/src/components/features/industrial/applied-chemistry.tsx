import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const areas = [
  {
    title: 'Water Treatment',
    image: '/industrial/areas/water-treatment.svg',
    path: paths.contact,
  },
  {
    title: 'Plant Maintenance',
    image: '/industrial/areas/plant-maintenance.svg',
    path: paths.contact,
  },
  {
    title: 'Manufacturing Processes',
    image: '/industrial/areas/manufacturing.svg',
    path: paths.contact,
  },
  {
    title: 'Infrastructure',
    image: '/industrial/areas/infrastructure.svg',
    path: paths.contact,
  },
];

const AppliedChemistry: React.FC = () => {
  return (
    <section className="px-20 py-28 bg-background">
      <div className="flex items-end justify-between mb-14">
        <div>
          <h2 className="font-bold text-[40px] text-accent">Application Areas</h2>
          <p className="text-muted-foreground text-base mt-3">Broad-spectrum chemical applications across the manufacturing value chain.</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {areas.map((area) => (
          <div key={area.title} className="border border-border rounded-sm overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img src={area.image} alt={area.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="font-bold text-[17px] text-accent mb-5">{area.title}</div>
              <Link to={area.path} className="text-xs font-bold uppercase text-secondary flex items-center gap-x-1.5 tracking-wider">
                Learn More <ArrowRightIcon size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppliedChemistry;
