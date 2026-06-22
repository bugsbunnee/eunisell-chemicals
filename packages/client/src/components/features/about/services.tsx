import React from 'react';
import { services } from '../../../lib/data';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="px-30 py-35 bg-accent-bg w-full relative">
      <div className="flex items-end justify-between text-left">
        <div className="flex-1">
          <div className="font-black text-[15px] leading-4 text-secondary uppercase mb-4">comprehensive solutions</div>

          <div className="max-w-150 font-bold text-5xl text-accent leading-18">End to End Service Offerings</div>
        </div>

        <div className="text-base text-muted-foreground leading-6 max-w-100">
          Supporting every phase of your operational and production requirements with precision and excellence.
        </div>
      </div>

      <div className="grid grid-cols-3 border-t border-l mt-16">
        {services.map((service) => (
          <div key={service.title} className="bg-background transition-all p-10 text-left border-b border-r">
            <service.Icon size={40} className="text-secondary" />

            <div className="mt-8 text-xl font-bold text-accent leading-7">{service.title}</div>

            <p className="text-base text-muted-foreground mt-4 leading-6">{service.description}</p>

            <div className="mt-5">
              <Link to={service.path} className="text-xs font-bold uppercase text-secondary flex items-center gap-x-1">
                Explore <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
