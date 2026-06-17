import React from 'react';

import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="relative py-30 px-20 bg-accent flex text-center items-center justify-center w-full">
      <div className="w-full text-center z-50">
        <div className="mx-auto leading-15.75 text-[60px] text-primary-foreground max-w-184.75 font-black">
          Partner with Eunisell Chemicals for Your Next Operational Challenge
        </div>

        <div className="flex items-center justify-center mt-10 gap-x-4">
          <Button className="rounded-xs bg-secondary font-semibold text-base h-13 px-7">Request a Consultation</Button>

          <Button className="rounded-xs bg-transparent border border-primary-foreground/40 font-semibold text-base h-13 px-7">Contact Support</Button>
        </div>

        <div className="mt-10 flex gap-x-5.5 items-center justify-center">
          <Link className="text-[13px] text-primary-foreground/42" to="/">
            Product Enquiries
          </Link>
          <span className="text-primary-foreground/42">·</span>
          <Link className="text-[13px] text-primary-foreground/42" to="/">
            Laboratory Services Enquiries
          </Link>
          <span className="text-primary-foreground/42">·</span>
          <Link className="text-[13px] text-primary-foreground/42" to="/">
            Emergency Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
