import React from 'react';

import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:py-30 md:px-20 bg-accent flex flex-col text-center items-center justify-center w-full">
      <div className="w-67.5 h-67.5 md:w-135 md:h-135 z-40 rounded-full bg-primary/10 absolute"></div>

      <div className="w-full text-center z-40">
        <div className="text-[15px] md:text-[9px] uppercase text-secondary font-bold tracking-[2px] md:tracking-normal">get in touch</div>

        <div className="mx-auto mt-6 md:mt-0 text-[34px] md:text-[60px] leading-[37.4px] md:leading-15.75 text-primary-foreground max-w-full md:max-w-184.75 font-black">
          Ready to Solve Your Next Industrial or Production Challenge?
        </div>

        <p className="mx-auto mt-4 md:mt-4.75 text-primary-foreground/60 md:text-primary-foreground/58 max-w-[320px] md:max-w-145 text-[16px] md:text-base text-center leading-6.5 md:leading-normal">
          Speak with our experts for specialized industrial chemicals and technical support.
        </p>

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center mt-6 md:mt-14 gap-4 md:gap-x-4">
          <Button className="w-full md:w-auto rounded-xs bg-secondary font-bold md:font-semibold text-[16px] md:text-base h-13.5 md:h-13 md:px-7">
            Request a Consultation
          </Button>

          <Button className="w-full md:w-auto rounded-xs bg-transparent border border-primary-foreground/30 md:border-primary-foreground/40 font-normal md:font-semibold text-[16px] md:text-base h-13.5 md:h-13 md:px-7">
            Contact Technical Support
          </Button>
        </div>

        <div className="mt-8 md:mt-11 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-x-5.5">
          <Link className="text-[12px] md:text-[13px] text-primary-foreground/40" to="/">
            · Product Enquiries
          </Link>

          <span className="text-primary-foreground/42 hidden md:block">·</span>

          <Link className="text-[12px] md:text-[13px] text-primary-foreground/40" to="/">
            · Laboratory Services Enquiries
          </Link>

          <span className="text-primary-foreground/42 hidden md:block">·</span>

          <Link className="text-[12px] md:text-[13px] text-primary-foreground/40" to="/">
            · Emergency Technical Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
