import { PhoneIcon } from 'lucide-react';
import React from 'react';

const presence = ['Lagos HQ', 'Port Harcourt', 'Niger Delta Operations'];

const GeographicPresence: React.FC = () => {
  return (
    <>
      {/* World map section */}
      <section className="relative bg-accent overflow-hidden">
        {/* Mobile: decorative map strip */}
        <div className="md:hidden relative h-[300px]">
          <img src="/contact/geography.svg" alt="Geographical Presence" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/80" />
        </div>

        {/* Desktop: full section with text */}
        <div className="hidden md:block px-30 py-24 relative">
          <img src="/contact/geography.svg" alt="Geographical Presence" className="w-full absolute object-cover h-full top-0 right-0 left-0 bottom-0 z-10" />

          <div className="max-w-2xl mx-auto text-center z-50 relative">
            <div className="text-sm font-bold mx-auto text-secondary tracking-[1.4px] py-2 px-6 border-4 border-secondary rounded-full w-fit uppercase">geographic presence</div>

            <div className="text-5xl font-bold text-white mt-6 capitalize">Serving Across the Region</div>

            <p className="mt-8 text-lg leading-7 text-popover-foreground">
              Strategically positioned to deliver chemical solutions to the most demanding oilfields and industrial hubs in West Africa.
            </p>

            <div className="flex items-center justify-center gap-x-16 mt-16">
              {presence.map((p) => (
                <div key={p} className="space-y-4">
                  <div className="w-4 h-4 rounded-full bg-secondary mx-auto"></div>
                  <div className="text-base leading-6 text-white font-bold capitalize">{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency support — mobile only */}
      <section className="md:hidden bg-accent px-6 py-16 text-center">
        <div className="inline-flex items-center gap-x-2 bg-destructive/20 border border-destructive/40 text-destructive text-[11px] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-destructive inline-block" />
          Emergency Line Active
        </div>

        <h2 className="text-[30px] font-bold text-white leading-9">Need Urgent Support?</h2>

        <p className="mt-4 text-[16px] leading-6 text-[#afb1b3]">Our emergency response team is available 24/7 for critical chemical and operational issues.</p>

        <a
          href="tel:+2349087659938"
          className="mt-8 w-full h-[64px] bg-white text-accent font-bold text-[16px] uppercase tracking-[1px] rounded-[2px] flex items-center justify-center gap-x-3"
        >
          <PhoneIcon size={18} /> Call Now
        </a>
      </section>
    </>
  );
};

export default GeographicPresence;
