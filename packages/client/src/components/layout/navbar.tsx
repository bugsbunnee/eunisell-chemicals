import React, { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { paths, NavDropdown, dropdownNav, plainLinks } from '../../lib/data';
import { cn } from '../../lib/utils';

import ChemicalsMegaMenu from './chemicals-mega-menu';
import CompanyMegaMenu from './company-mega-menu';
import KnowledgeCentreMegaMenu from './knowledge-centre-mega-menu';
import SolutionsMegaMenu from './solutions-mega-menu';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav ref={navRef} className="sticky top-0 z-50 backdrop-blur-[54px] bg-[rgba(255,255,255,0.71)] border-b border-border">
      <div className="hidden md:flex h-18 items-center px-8 gap-6">
        <button
          onClick={() => navigate(paths.contact)}
          className="shrink-0 bg-secondary text-white text-[13px] font-semibold px-5.5 py-3 rounded-[2px] whitespace-nowrap"
        >
          Request Technical Consultation
        </button>

        <div className="flex flex-1 items-center justify-center gap-6 overflow-hidden">
          {dropdownNav.map(({ label, items }) => (
            <div key={label} className="relative">
              <button
                onClick={() => toggleDropdown(label)}
                aria-expanded={openDropdown === label}
                aria-haspopup="true"
                className="flex items-center gap-[5px] text-[14px] leading-5.25 font-medium text-accent whitespace-nowrap"
              >
                {label}

                <ChevronDownIcon size={13} className={cn('transition-transform duration-200 text-accent', openDropdown === label && 'rotate-180')} />
              </button>

              {![NavDropdown.Company, NavDropdown.Solutions, NavDropdown.KnowledgeCentre, NavDropdown.OurChemicals].includes(label as NavDropdown) &&
                openDropdown === label && (
                  <div className="absolute top-[calc(100%+12px)] left-0 bg-white border border-border shadow-[0px_4px_16px_rgba(0,0,0,0.08)] rounded-[2px] py-2 min-w-50 z-50">
                    {items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-5 py-2.5 text-[14px] font-medium text-primary hover:bg-card hover:text-secondary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}

          {plainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-[14px] leading-5.25 font-medium text-accent whitespace-nowrap hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to={paths.home} className="shrink-0">
          <img src="/logo.svg" alt="Eunisell" className="h-14 w-auto object-contain" />
        </Link>
      </div>

      <AnimatePresence>
        {openDropdown === NavDropdown.Company && <CompanyMegaMenu onClose={() => setOpenDropdown(null)} />}

        {openDropdown === NavDropdown.Solutions && <SolutionsMegaMenu onClose={() => setOpenDropdown(null)} />}

        {openDropdown === NavDropdown.KnowledgeCentre && <KnowledgeCentreMegaMenu onClose={() => setOpenDropdown(null)} />}

        {openDropdown === NavDropdown.OurChemicals && <ChemicalsMegaMenu onClose={() => setOpenDropdown(null)} />}
      </AnimatePresence>

      <div className="flex md:hidden h-18 items-center justify-between px-6">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-10 h-10 bg-[rgba(175,177,179,0.2)] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XIcon size={20} className="text-accent" /> : <MenuIcon size={20} className="text-accent" />}
        </button>

        <Link to={paths.home} onClick={closeMobile}>
          <img src="/logo.svg" alt="Eunisell" className="w-25.75 h-10 object-contain" />
        </Link>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border overflow-y-auto max-h-[calc(100vh-72px)]">
          {dropdownNav.map(({ label, items }) => (
            <div key={label} className="border-b border-border">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === label ? null : label)}
                className="flex items-center justify-between w-full px-6 py-4 text-[15px] font-medium text-primary"
              >
                {label}
                <ChevronDownIcon
                  size={16}
                  className={cn('transition-transform duration-200 text-muted-foreground', mobileExpanded === label && 'rotate-180')}
                />
              </button>

              {mobileExpanded === label && (
                <div className="bg-card px-6 pb-3">
                  {items.map((item) => (
                    <Link
                      key={item.path + item.label}
                      to={item.path}
                      onClick={closeMobile}
                      className="block py-2.5 text-[14px] text-card-foreground border-b border-border/50 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {plainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMobile}
              className="block px-6 py-4 text-[15px] font-medium text-primary border-b border-border"
            >
              {link.label}
            </Link>
          ))}

          <div className="px-6 py-5">
            <button
              onClick={() => navigate(paths.contact)}
              className="w-full h-13 bg-secondary text-white font-semibold text-[14px] rounded-[2px] tracking-[0.7px] uppercase"
            >
              Request Technical Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
