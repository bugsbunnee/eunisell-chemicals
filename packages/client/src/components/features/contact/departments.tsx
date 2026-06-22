import React from 'react';

import { ArrowRightIcon, BuildingIcon, HandshakeIcon, SettingsIcon, TestTubeDiagonalIcon, TestTubeIcon, TruckElectricIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { cn } from '../../../lib/utils';

const departments = [
  {
    Icon: HandshakeIcon,
    title: 'Consultation',
    description: 'Book a strategic session with our chemical engineers for complex project requirements.',
    path: paths.contact,
    label: 'Schedule Now',
  },
  {
    Icon: TestTubeDiagonalIcon,
    title: 'Product Enquiries',
    description: 'Request technical data sheets (TDS), pricing, and availability for our chemical range.',
    path: paths.contact,
    label: 'Browse Products',
  },
  {
    Icon: SettingsIcon,
    title: 'Technical Support',
    description: 'Assistance with chemical applications, mixing ratios, and on-site implementation.',
    path: paths.contact,
    label: 'Get Support',
  },
  {
    Icon: TestTubeIcon,
    title: 'Lab Services',
    description: 'Chemical analysis, quality testing, and R&D partnership requests.',
    path: paths.contact,
    label: 'Lab Portal',
  },
  {
    Icon: BuildingIcon,
    title: 'Partnership',
    description: 'Join our global supply chain or explore distributor opportunities across Africa.',
    path: paths.contact,
    label: 'Inquire',
  },
  {
    Icon: TruckElectricIcon,
    title: 'Emergency Support',
    description: 'Urgent oilfield chemical supply or spill response logistics requests.',
    path: paths.contact,
    label: 'Contact Hotline',
    alternate: true,
  },
];

const SpecializedDepartments: React.FC = () => {
  return (
    <section className="relative bg-sidebar text-left py-17.5 px-30">
      <div className="font-bold text-3xl mb-4 text-accent">Specialized Departments</div>

      <p className="text-base leading-6 text-primary font-normal max-w-150">
        Choose the appropriate pathway for your specific requirement to ensure you reach the right expert team.
      </p>

      <div className="mt-16 grid grid-cols-3 gap-8">
        {departments.map((department) => (
          <div
            key={department.title}
            className={cn({
              'border border-border rounded-xs p-10': true,
              'bg-accent': department.alternate,
              'bg-background': !department.alternate,
            })}
          >
            <div
              className={cn({
                'rounded-sm w-14 h-14 flex items-center justify-center': true,
                'bg-destructive/20 text-destructive': department.alternate,
                'bg-sidebar-primary/5 text-sidebar-primary': !department.alternate,
              })}
            >
              <department.Icon size={30} />
            </div>

            <div
              className={cn({
                'text-xl font-bold mb-3.5 mt-8': true,
                'text-white': department.alternate,
                'text-accent': !department.alternate,
              })}
            >
              {department.title}
            </div>

            <p
              className={cn({
                'text-sm text-primary font-normal': true,
                'text-popover-foreground': department.alternate,
              })}
            >
              Book a strategic session with our chemical engineers for complex project requirements.
            </p>

            <div className="mt-11.5">
              <Link to={department.path} className="uppercase text-xs gap-x-2 text-secondary leading-4 tracking-[1.2px] font-bold flex items-center">
                {department.label} <ArrowRightIcon size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecializedDepartments;
