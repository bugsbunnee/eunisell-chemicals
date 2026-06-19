import React from 'react';

import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden h-135 text-left">
      <img src="/partners/hero-bg.jpg" alt="Partners" className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute inset-0 bg-accent/50" />

      <div className="relative z-10 h-full flex items-start pt-19.25 pl-30">
        <div className="max-w-225">
          <div className="flex items-center gap-3 mb-11 uppercase">
            <Link to={paths.home} className="font-medium text-sm text-muted">
              Home
            </Link>
            <ChevronRightIcon size={10} className="text-muted" />
            <span className="font-medium text-sm text-primary-foreground">Partners</span>
          </div>

          <h1 className="font-bold text-[60px] leading-16.5 text-white">
            Strategic Partnerships That
            <br />
            Strengthen Chemical
            <br />
            Performance
          </h1>

          <p className="mt-6 text-xl text-white/70 leading-[32.5px] max-w-2xl">
            Collaborating with global industry leaders and regional specialists to deliver world-class chemical solutions across Africa's most
            demanding sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
