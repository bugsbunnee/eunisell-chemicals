import { MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react';

const operations = [
  {
    src: '/contact/head-office.svg',
    title: 'Head Office (Lagos)',
    description: '196A Jide Oki Street, Victoria Island. Lagos State.',
    phone: '234 908 765 9938, 234 908 765 9939',
    email: 'info@eunisell.com',
  },
  {
    src: '/contact/branch-office.svg',
    title: 'Branch Office (Lagos)',
    description: 'Plot 3A, Aswani Road, Oshodi Industrial Scheme, Isolo. Lagos State.',
  },
  {
    src: '/contact/port-harcourt.svg',
    title: 'Port Harcourt',
    description: 'Plot 49/51 Danjuma Drive, Trans Amadi, Port Harcourt. Rivers State.',
  },
];

const RegionalOperations: React.FC = () => {
  return (
    <section className="px-30 py-24 bg-card">
      <div className="text-[30px] leading-9 text-accent font-bold">Regional Operations</div>

      <div className="mt-12 grid grid-cols-3 gap-x-12">
        {operations.map((operation) => (
          <div key={operation.title} className="text-left">
            <div className="h-64 w-full overflow-hidden rounded-[4px]">
              <img src={operation.src} alt={operation.title} className="h-full w-full object-cover" />
            </div>

            <div className="mt-8 mb-4 text-xl text-accent font-bold">{operation.title}</div>
            <div className="text-base leading-6.5 text-primary font-normal">{operation.description}</div>
            {operation.phone && (
              <div className="font-medium text-sm leading-5 mt-6 flex items-center gap-x-3">
                <PhoneIcon size={20} /> {operation.phone}
              </div>
            )}
            {operation.email && (
              <div className="font-medium text-sm leading-5 mt-2.75 flex items-center gap-x-3">
                <MailIcon size={20} /> {operation.email}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegionalOperations;
