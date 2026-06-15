import React from 'react';

import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section className="relative py-30 px-20 bg-accent flex text-center items-center justify-center w-full">
      <div className="w-135 h-135 z-40 rounded-full bg-primary/10 absolute"></div>
      <div className="w-full text-center z-50">
        <div className="text-[9px] uppercase text-secondary font-bold">get in touch</div>
        <div className="mx-auto leading-15.75 text-[60px] text-primary-foreground max-w-184.75 font-black">
          Ready to Solve Your Next Industrial or Production Challenge?
        </div>
        <p className="mx-auto mt-4.75 text-primary-foreground/58 max-w-145 text-center">
          Speak with Eunisell Chemicals for specialized industrial chemicals, oilfield chemicals, laboratory services, technical support, and product
          enquiries.
        </p>

        <div className="flex items-center justify-center mt-14 gap-x-4">
          <Button className="rounded-xs bg-secondary font-semibold text-base h-13 px-7">Request a Consultation</Button>

          <Button className="rounded-xs bg-transparent border border-primary-foreground/40 font-semibold text-base h-13 px-7">
            Contact Technical Support
          </Button>
        </div>

        <div className="mt-11 flex gap-x-5.5 items-center justify-center">
          <Link className="text-[13px] text-primary-foreground/42" to="/">
            Product Enquiries
          </Link>
          <span className="text-primary-foreground/42">·</span>
          <Link className="text-[13px] text-primary-foreground/42" to="/">
            Laboratory Services Enquiries
          </Link>
          <span className="text-primary-foreground/42">·</span>
          <Link className="text-[13px] text-primary-foreground/42" to="/">
            Emergency Technical Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
