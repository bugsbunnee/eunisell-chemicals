import React from 'react';

import { Button } from '../../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

const CTA: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 px-6 md:py-30 md:px-30 bg-accent flex text-center items-center justify-center w-full overflow-hidden">
      <div className="w-full text-center z-40">
        <div className="mx-auto text-[30px] md:text-[60px] leading-9 md:leading-15.75 text-primary-foreground max-w-full md:max-w-184.75 font-black">
          Partner with Eunisell Chemicals for Your Next Operational Challenge
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center mt-8 md:mt-10 gap-4 md:gap-x-4">
          <Button
            onClick={() => navigate(paths.contact)}
            className="w-full md:w-auto h-15 md:h-13 rounded-xs bg-secondary font-bold md:font-semibold text-[16px] md:text-base md:px-7"
          >
            Request a Consultation
          </Button>
          <Button
            onClick={() => navigate(paths.contact)}
            className="w-full md:w-auto h-15 md:h-13 rounded-xs bg-transparent border border-primary-foreground/40 font-bold md:font-semibold text-[16px] md:text-base md:px-7"
          >
            Contact Support
          </Button>
        </div>

        <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-x-5.5 items-center justify-center uppercase">
          <Link className="text-[10px] md:text-sm md:leading-5 tracking-[2px] text-muted/60" to={paths.contact}>
            Product Enquiries
          </Link>
          <span className="text-primary-foreground/42 hidden md:block">·</span>
          <Link className="text-[10px] md:text-sm md:leading-5 tracking-[2px] text-muted/60" to={paths.contact}>
            Laboratory Services Enquiries
          </Link>
          <span className="text-primary-foreground/42 hidden md:block">·</span>
          <Link className="text-[10px] md:text-sm md:leading-5 tracking-[2px] text-muted/60" to={paths.contact}>
            Emergency Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
