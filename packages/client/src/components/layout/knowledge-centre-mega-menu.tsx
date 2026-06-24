import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { paths } from '../../lib/data';
import { resourceLinks, downloadLinks, knowledgeTopics } from '../../lib/data';

const TRANSITION = { duration: 0.2, ease: [0.4, 0, 0.2, 1] } as const;

interface Props {
  onClose: () => void;
}

const linkClass = (semibold?: boolean) =>
  semibold
    ? 'text-[15px] font-semibold text-accent leading-[22.5px] hover:text-secondary transition-colors'
    : 'text-[15px] font-normal text-[#6b7280] leading-[22.5px] hover:text-secondary hover:underline transition-colors';

const KnowledgeCentreMegaMenu: React.FC<Props> = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={TRANSITION}
    className="absolute text-left left-0 right-0 top-full z-40 bg-white border-b border-border shadow-[0px_16px_40px_-12px_rgba(0,0,0,0.12)]"
    role="dialog"
    aria-label="Knowledge Centre menu"
  >
    <div className="pt-12 pb-16 px-30">
      <div className="grid grid-cols-4 gap-12 max-w-[1560px]">
        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-secondary">Resource Library</p>
          <nav className="flex flex-col gap-3.75">
            {resourceLinks.map((link) => (
              <Link key={link.label} to={link.path} onClick={onClose} className={linkClass(link.semibold)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-secondary">Downloads</p>
          <nav className="flex flex-col gap-3.75">
            {downloadLinks.map((link) => (
              <Link key={link.label} to={link.path} onClick={onClose} className={linkClass(link.semibold)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-secondary">Browse by Topic</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {knowledgeTopics.map((topic) => (
              <Link
                key={topic}
                to={paths.knowledge}
                onClick={onClose}
                className="text-sm font-normal text-[#6b7280] leading-5.25 hover:text-secondary hover:underline transition-colors"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>

        <Link
          to={paths.knowledge}
          onClick={onClose}
          className="relative flex flex-col justify-end min-h-55 rounded-[4px] overflow-hidden bg-[#fafafa] border border-border p-8 group"
          aria-label="Access the knowledge library"
        >
          <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
            <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col gap-2.75">
            <p className="text-[18px] font-bold text-accent leading-[22.5px]">Technical Knowledge for Peak Performance</p>
            <span className="text-[13px] font-bold text-secondary uppercase tracking-[0.65px] group-hover:underline">Access Library →</span>
          </div>
        </Link>
      </div>
    </div>
  </motion.div>
);

export default KnowledgeCentreMegaMenu;
