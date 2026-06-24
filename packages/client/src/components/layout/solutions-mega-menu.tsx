import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { paths } from '../../lib/data';
import { coreSolutionLinks, technicalCapabilityLinks } from '../../lib/data';

const TRANSITION = { duration: 0.2, ease: [0.4, 0, 0.2, 1] } as const;

interface Props {
  onClose: () => void;
}

const linkClass = (semibold?: boolean) =>
  semibold
    ? 'text-[15px] font-semibold text-accent leading-[22.5px] hover:text-secondary transition-colors'
    : 'text-[15px] font-normal text-[#6b7280] leading-[22.5px] hover:text-secondary hover:underline transition-colors';

const SolutionsMegaMenu: React.FC<Props> = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={TRANSITION}
    className="absolute text-left left-0 right-0 top-full z-50 bg-white border-b border-border shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.12)]"
    role="dialog"
    aria-label="Solutions menu"
  >
    <div className="pt-12 pb-16 px-30">
      <div className="grid grid-cols-4 gap-12 max-w-[1560px]">
        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-secondary">Core Solutions</p>
          <nav className="flex flex-col gap-3.75">
            {coreSolutionLinks.map((link) => (
              <Link key={link.label} to={link.path} onClick={onClose} className={linkClass(link.semibold)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-secondary">Technical Capabilities</p>
          <nav className="flex flex-col gap-3.75">
            {technicalCapabilityLinks.map((link) => (
              <Link key={link.label} to={link.path} onClick={onClose} className={linkClass(link.semibold)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-secondary">Solution Snapshot</p>
          <p className="text-sm leading-[22.75px] text-[#6b7280]">
            We offer a comprehensive portfolio of over 200+ specialized chemical products, supported by advanced laboratory analysis and field
            technical expertise.
          </p>
        </div>

        <Link
          to={paths.contact}
          onClick={onClose}
          className="relative flex flex-col justify-end min-h-55 rounded-[4px] overflow-hidden bg-accent p-8 group"
          aria-label="Contact a specialist"
        >
          <img src="/technical-services/abstract.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="relative z-10 flex flex-col gap-2.75">
            <p className="text-[18px] font-bold text-white leading-[22.5px]">Need a Specialized Chemical Solution?</p>
            <span className="text-[13px] font-bold text-secondary uppercase tracking-[0.65px] group-hover:underline">Contact Specialist →</span>
          </div>
        </Link>
      </div>
    </div>
  </motion.div>
);

export default SolutionsMegaMenu;
