import React from 'react';
import SectionWithTitle from '../../layout/section-with-title';

import { ArrowRightIcon, Atom, FactoryIcon, CogIcon, FlaskConicalIcon, TestTube2Icon, TruckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const services = [
  {
    Icon: FlaskConicalIcon,
    title: 'Chemical Blending',
    description: 'Custom chemical blending solutions engineered for precision and performance.',
    path: paths.home,
  },
  {
    Icon: TruckIcon,
    title: 'Chemical Supply & Distribution',
    description: 'Reliable supply and distribution of industrial and specialty chemicals across Africa.',
    path: paths.home,
  },
  {
    Icon: TestTube2Icon,
    title: 'Laboratory Testing',
    description: 'Advanced analytical testing, compatibility studies, and performance evaluation.',
    path: paths.home,
  },
  {
    Icon: FactoryIcon,
    title: 'Production Support',
    description: 'On-site technical support for production optimization and chemical programme management.',
    path: paths.home,
  },
  {
    Icon: CogIcon,
    title: 'Technical Services',
    description: 'Engineering consultation, process optimization, and custom chemical programme design.',
    path: paths.home,
  },
  {
    Icon: Atom,
    title: 'Industrial Process Solutions',
    description: 'Tailored chemical solutions for industrial processing, plant maintenance, and operations.',
    path: paths.home,
  },
];

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
