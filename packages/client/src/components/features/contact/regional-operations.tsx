import { MapPinIcon, MailIcon, PhoneIcon, ArrowRightIcon } from 'lucide-react';
import React from 'react';

const operations = [
  {
    src: '/contact/head-office.svg',
    badge: 'Lagos HQ',
    title: 'Head Office (Lagos)',
    description: '209, Muri Okunola Street, Victoia Island. Lagos',
    phone: '234 908 765 9938, 234 908 765 9939',
    email: 'info@eunisell.com',
    mapsUrl: 'https://maps.google.com/?q=196A+Jide+Oki+Street,+Victoria+Island,+Lagos',
  },
  {
    src: '/contact/branch-office.svg',
    badge: 'Lagos Branch',
    title: 'Branch Office (Lagos)',
    description: 'Plot 3A, Aswani Road, Oshodi Industrial Scheme, Isolo. Lagos State.',
    mapsUrl: 'https://maps.google.com/?q=Aswani+Road,+Oshodi+Industrial+Scheme,+Isolo,+Lagos',
  },
  {
    src: '/contact/port-harcourt.svg',
    badge: 'Port Harcourt',
    title: 'Port Harcourt Operations Hub',
    description: 'Plot 49/51 Danjuma Drive, Trans Amadi, Port Harcourt. Rivers State.',
    mapsUrl: 'https://maps.google.com/?q=Danjuma+Drive,+Trans+Amadi,+Port+Harcourt,+Rivers+State',
  },
];

const RegionalOperations: React.FC = () => {
  return (
    <section id="locations" className="px-6 py-16 md:px-30 md:py-24 bg-card border-t border-border">
      {/* Eyebrow */}
      <div className="text-[12px] font-bold uppercase tracking-[2px] text-secondary mb-4">Regional Presence</div>

      <div className="text-[30px] leading-9 text-accent font-bold">Our Locations</div>

      <div className="mt-10 md:mt-12 flex flex-col md:grid md:grid-cols-3 md:gap-x-12 gap-8">
        {operations.map((operation) => (
          <div key={operation.title} className="text-left">
            <div className="h-50 md:h-64 w-full overflow-hidden rounded-[4px] relative">
              <img src={operation.src} alt={operation.title} className="h-full w-full object-cover" />
              <div className="absolute top-3 left-3 bg-accent/80 text-white text-[10px] font-bold uppercase tracking-[1.5px] px-3 py-1 rounded-[2px]">{operation.badge}</div>
            </div>

            <div className="mt-6 mb-3 text-xl text-accent font-bold">{operation.title}</div>
            <div className="flex items-start gap-x-2 text-base leading-6.5 text-primary font-normal">
              <MapPinIcon size={16} className="block md:hidden text-secondary shrink-0 mt-0.5" />
              {operation.description}
            </div>

            {operation.phone && (
              <div className="font-medium text-sm leading-5 mt-5 flex items-center gap-x-3">
                <PhoneIcon size={16} className="text-secondary shrink-0" /> {operation.phone}
              </div>
            )}
            {operation.email && (
              <div className="font-medium text-sm leading-5 mt-2.75 flex items-center gap-x-3">
                <MailIcon size={16} className="text-secondary shrink-0" /> {operation.email}
              </div>
            )}

            <a
              href={operation.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-x-2 text-[12px] font-bold text-secondary uppercase tracking-[0.6px]"
            >
              Get Directions <ArrowRightIcon size={12} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegionalOperations;
