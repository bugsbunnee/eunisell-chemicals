import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';

const Hero: React.FC = () => {
  return (
    <section className="relative w-screen h-[700px] bg-[url(/industrial/hero.svg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-accent/80 z-10" />

      <div className="relative z-20 h-full flex flex-col justify-center px-20 pb-8">
        <div className="flex items-center gap-x-2 mb-11">
          <Link to={paths.home} className="text-primary-foreground/50 text-sm">
            Home
          </Link>
          <ChevronRightIcon size={10} className="text-primary-foreground/40" />
          <Link to={paths.solutions} className="text-primary-foreground/50 text-sm">
            Solutions
          </Link>
          <ChevronRightIcon size={10} className="text-primary-foreground/40" />
          <span className="text-primary-foreground/50 text-sm">Industrial &amp; Manufacturing Chemicals</span>
        </div>

        <h1 className="font-extrabold text-[72px] leading-[1.1] text-primary-foreground max-w-[700px]">
          Industrial &amp; Manufacturing
          <br />
          Chemicals
        </h1>

        <p className="mt-14 max-w-[672px] text-primary-foreground/70 text-lg leading-relaxed">
          Enhancing production efficiency, protecting critical assets, and ensuring uncompromising product quality through advanced chemical
          engineering and specialty formulations.
        </p>

        <div className="flex items-center mt-22 gap-x-4">
          <Button className="rounded-xs bg-secondary font-semibold text-base h-[54px] px-8">Talk to an Expert</Button>
          <Button className="rounded-xs bg-transparent border border-primary-foreground/40 font-semibold text-base h-[54px] px-8">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
