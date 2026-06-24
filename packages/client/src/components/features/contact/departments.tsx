import React from 'react';

import { ArrowRightIcon, BuildingIcon, HandshakeIcon, SettingsIcon, TestTubeDiagonalIcon, TestTubeIcon, TruckElectricIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { cn } from '../../../lib/utils';

const departments = [
  {
    Icon: HandshakeIcon,
    title: 'Consultation',
    description: 'Book a session with our industry-leading technical advisors.',
    path: paths.contact,
    label: 'Schedule Now',
    borderColor: 'border-secondary',
    iconBg: 'bg-secondary/5',
    iconColor: 'text-primary',
    labelColor: 'text-secondary',
  },
  {
    Icon: TestTubeDiagonalIcon,
    title: 'Product Enquiries',
    description: 'Enquire about our state-of-the-art analytical testing capabilities.',
    path: paths.contact,
    label: 'Enquire',
    borderColor: 'border-sidebar-primary',
    iconBg: 'bg-sidebar-primary/5',
    iconColor: 'text-primary',
    labelColor: 'text-secondary',
  },
  {
    Icon: SettingsIcon,
    title: 'Technical Support',
    description: 'Assistance with chemical applications, mixing ratios, and on-site implementation.',
    path: paths.contact,
    label: 'Get Support',
    borderColor: 'border-secondary',
    iconBg: 'bg-secondary/5',
    iconColor: 'text-primary',
    labelColor: 'text-secondary',
  },
  {
    Icon: TestTubeIcon,
    title: 'Lab Services',
    description: 'Chemical analysis, quality testing, and R&D partnership requests.',
    path: paths.contact,
    label: 'Lab Portal',
    borderColor: 'border-secondary',
    iconBg: 'bg-secondary/5',
    iconColor: 'text-primary',
    labelColor: 'text-secondary',
  },
  {
    Icon: BuildingIcon,
    title: 'Partnership',
    description: 'Join our global supply chain or explore distributor opportunities across Africa.',
    path: paths.contact,
    label: 'Inquire',
    borderColor: 'border-secondary',
    iconBg: 'bg-secondary/5',
    iconColor: 'text-primary',
    labelColor: 'text-secondary',
  },
  {
    Icon: TruckElectricIcon,
    title: 'Emergency Support',
    description: '24/7 critical assistance for urgent chemical or operational issues.',
    path: paths.contact,
    label: 'Priority Access',
    borderColor: 'border-destructive',
    iconBg: 'bg-white/10',
    iconColor: 'text-destructive',
    labelColor: 'text-destructive',
    alternate: true,
  },
];

const SpecializedDepartments: React.FC = () => {
  return (
    <section className="relative bg-card text-left py-20 px-6 md:py-17.5 md:px-30">
      <div className="flex flex-col gap-2 mb-8 md:mb-0">
        <div className="text-[24px] md:text-3xl font-bold text-accent">Specialized Departments</div>
        <div className="w-12 h-1 bg-secondary md:hidden" />
      </div>

      <p className="hidden md:block text-base leading-6 text-primary font-normal max-w-150 mt-4 mb-16">
        Choose the appropriate pathway for your specific requirement to ensure you reach the right expert team.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {departments.map((department) => (
          <div
            key={department.title}
            className={cn(
              'border-l-4 border-border rounded-xs drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05)] p-8 md:p-10 md:border-l-0 flex flex-col gap-4',
              department.borderColor,
              department.alternate ? 'bg-accent' : 'bg-background'
            )}
          >
            <div className={cn('rounded-sm w-12 h-12 flex items-center justify-center shrink-0', department.iconBg)}>
              <department.Icon size={22} className={department.iconColor} />
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              <div className={cn('text-[18px] font-bold leading-7', department.alternate ? 'text-white' : 'text-accent')}>{department.title}</div>
              <p className={cn('text-sm leading-[22px] font-normal', department.alternate ? 'text-[#afb1b3]' : 'text-card-foreground')}>
                {department.description}
              </p>
            </div>

            <Link
              to={department.path}
              className={cn('uppercase text-[12px] gap-x-2 leading-4 tracking-[0.6px] font-bold flex items-center', department.labelColor)}
            >
              {department.label} <ArrowRightIcon size={12} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecializedDepartments;
