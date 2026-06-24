import React from 'react';
import { services } from '../../../lib/data';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="px-6 py-20 md:px-30 md:py-35 bg-accent-bg w-full relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between text-left">
        <div className="md:flex-1">
          <div className="font-black text-[10px] md:text-[15px] leading-[15px] md:leading-4 text-secondary uppercase mb-3 md:mb-4 tracking-[3px]">
            comprehensive solutions
          </div>
          <div className="font-bold text-[30px] md:text-5xl text-accent leading-[36px] md:leading-18 md:max-w-150">End-to-End Service Offerings</div>
        </div>

        <div className="text-sm md:text-base text-muted-foreground leading-[20px] md:leading-6 md:max-w-100 mt-3 md:mt-0">
          Supporting every phase of your operational and production requirements with precision and excellence.
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 md:border-t md:border-l gap-4 md:gap-0 mt-8 md:mt-16">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-background p-8 md:p-10 text-left border border-border md:border-0 md:border-b md:border-r rounded-[2px] md:rounded-none"
          >
            <service.Icon size={40} className="text-secondary" />

            <div className="mt-4 md:mt-8 text-[18px] md:text-xl font-bold text-accent leading-7">{service.title}</div>

            <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 leading-[20px] md:leading-6">{service.description}</p>

            <div className="mt-4 md:mt-5">
              <Link
                to={service.path}
                className="text-[12px] md:text-xs font-bold uppercase text-secondary flex items-center gap-x-1 tracking-[0.6px]"
              >
                Explore <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
