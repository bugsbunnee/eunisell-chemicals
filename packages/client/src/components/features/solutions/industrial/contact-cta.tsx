import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, AtomIcon } from 'lucide-react';
import { paths } from '../../../../lib/data';
import { Reveal } from '../../../common/animate';

const ContactCta: React.FC = () => (
  <section className="relative overflow-hidden bg-accent py-20 px-6 md:py-24 md:px-30">
    {/* Mobile decorative icon */}
    <div className="md:hidden absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
      <AtomIcon size={256} className="text-white" strokeWidth={1} />
    </div>

    {/* Mobile */}
    <Reveal className="md:hidden relative flex flex-col gap-6 text-center">
      <h2 className="font-bold text-white text-[30px] leading-9">Need Chemical Support?</h2>
      <p className="text-[#afb1b3] text-[16px] leading-6">Partner with technical experts who understand the complexities of manufacturing.</p>

      <div className="flex flex-col items-stretch gap-4 pt-4">
        <Link
          to={paths.contact}
          className="flex items-center justify-center h-14 bg-secondary text-white font-bold text-xs uppercase tracking-[1.2px] hover:bg-secondary/90 transition-colors"
        >
          Request Consultation
        </Link>
        <Link
          to={paths.contact}
          className="flex items-center justify-center h-14 border border-white text-white font-bold text-xs uppercase tracking-[1.2px] hover:bg-white/10 transition-colors"
        >
          Contact Sales
        </Link>
      </div>
    </Reveal>

    {/* Desktop */}
    <Reveal duration={0.8} className="hidden md:flex flex-col items-center gap-8 text-center">
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
        <Link to={paths.contact} className="border border-white text-white font-bold text-sm uppercase tracking-[1.4px] px-8 py-4 hover:bg-white/10 transition-colors">
          Contact Our Sales Team
        </Link>
      </div>
    </Reveal>
  </section>
);

export default ContactCta;
