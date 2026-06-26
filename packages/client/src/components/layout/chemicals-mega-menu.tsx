import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { paths, chemicalsPrimaryLinks, chemicalsSecondaryLinks } from '../../lib/data';

const TRANSITION = { duration: 0.2, ease: [0.4, 0, 0.2, 1] } as const;
const allChemicalsLinks = [chemicalsSecondaryLinks[0], ...chemicalsPrimaryLinks, chemicalsSecondaryLinks[1]];

interface Props {
  onClose: () => void;
}

const ChemicalsMegaMenu: React.FC<Props> = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={TRANSITION}
    className="absolute text-left left-0 right-0 top-full z-40 bg-white border-b border-border shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.12)]"
    role="dialog"
    aria-label="Our Chemicals menu"
  >
    <div className="pt-12 pb-16 px-30">
      <div className="grid grid-cols-3 gap-12 max-w-[1560px]">
        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-secondary">Our Chemicals</p>
          <nav className="flex flex-col gap-3.75">
            {allChemicalsLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={onClose}
                className="text-[15px] text-[#6b7280] leading-[22.5px] hover:text-secondary hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-secondary">Overview</p>
          <p className="text-[14px] leading-5.25 text-[#6b7280]">
            Eunisell delivers high-performance industrial and oilfield specialty chemical solutions that enhance operational efficiency, improve asset integrity, and optimize
            production. Backed by technical expertise and global partnerships, we provide innovative, reliable, and sustainable chemical solutions tailored to the evolving needs of
            the energy and industrial sectors.
          </p>
        </div>

        <Link
          to={paths.chemicals}
          onClick={onClose}
          className="relative flex flex-col justify-end min-h-55 rounded-[4px] overflow-hidden bg-accent p-8 group"
          aria-label="Explore our chemicals"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(146.94deg, rgb(0,131,206) 0%, rgba(0,131,206,0) 100%)' }} />

          <div className="relative z-10 flex flex-col gap-2.75">
            <p className="text-[18px] font-bold text-white leading-[22.5px]">Solutions Built for Critical Local & International Standards</p>
            <span className="text-[13px] font-bold text-secondary uppercase tracking-[0.65px] group-hover:underline">Explore our chemicals →</span>
          </div>
        </Link>
      </div>
    </div>
  </motion.div>
);

export default ChemicalsMegaMenu;
