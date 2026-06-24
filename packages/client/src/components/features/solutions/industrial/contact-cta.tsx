import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { paths } from '../../../../lib/data';

const ContactCta: React.FC = () => (
  <section className="bg-accent py-24 px-30">
    <div className="flex flex-col items-center gap-8 text-center">
      <h2 className="font-bold text-white text-[48px] leading-14 tracking-[-1.2px] max-w-3xl">Need Industrial Chemical Support?</h2>
      <p className="text-[#afb1b3] text-[20px] leading-[32.5px] max-w-2xl">
        Connect with our technical team to design a custom treatment program for your facility's specific needs.
      </p>

      <div className="flex items-center gap-4 pt-4">
        <Link
          to={paths.contact}
          className="flex items-center gap-3 bg-secondary text-white font-bold text-sm uppercase tracking-[1.4px] px-8 py-4 hover:bg-secondary/90 transition-colors"
        >
          Request Technical Consultation
          <ArrowRightIcon size={12} />
        </Link>
        <Link
          to={paths.contact}
          className="border border-white text-white font-bold text-sm uppercase tracking-[1.4px] px-8 py-4 hover:bg-white/10 transition-colors"
        >
          Contact Our Sales Team
        </Link>
      </div>
    </div>
  </section>
);

export default ContactCta;
