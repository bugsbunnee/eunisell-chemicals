import React from 'react';
import SectionWithTitle from '../../layout/section-with-title';

import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { services } from '../../../lib/data';

const Services: React.FC = () => {
  return (
    <SectionWithTitle
      legend="Our services"
      title="End-to-End Chemical and Technical Support"
      description="Comprehensive service offerings designed to support every phase of your operational and production requirements."
    >
      <div className="grid grid-cols-3 border-t border-l mt-15">
        {services.map((service) => (
          <div key={service.title} className="group hover:bg-primary transition-all p-10 text-left border-b border-r">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-secondary">
              <service.Icon size={20} className="text-secondary" />
            </div>

            <div className="mt-4.75 group-hover:text-primary-foreground text-[17px] font-bold text-accent">{service.title}</div>

            <p className="text-sm text-muted-foreground group-hover:text-primary-foreground mt-[9.4px]">{service.description}</p>

            <div className="mt-5">
              <Link to={service.path} className="text-xs font-semibold text-secondary flex items-center gap-x-1">
                Explore <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionWithTitle>
  );
};

export default Services;
