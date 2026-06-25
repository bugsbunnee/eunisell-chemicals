import React, { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { paths, NavDropdown, dropdownNav, plainLinks } from '../../lib/data';
import { cn } from '../../lib/utils';

import ChemicalsMegaMenu from './chemicals-mega-menu';
import CompanyMegaMenu from './company-mega-menu';
import KnowledgeCentreMegaMenu from './knowledge-centre-mega-menu';
import SolutionsMegaMenu from './solutions-mega-menu';

type MobileNavItem = {
  label: string;
  items?: { label: string; path: string }[];
  path?: string;
};

const mobileNavItems: MobileNavItem[] = [
  {
    label: 'About Us',
    items: [
      { label: 'About Us', path: paths.aboutUs },
      { label: 'Executive Management', path: paths.management },
      { label: 'QHSE', path: paths.qhse },
      { label: 'CSR', path: paths.csr },
      { label: 'Careers', path: paths.careers },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { label: 'Our Solutions', path: paths.solutions },
      { label: 'Industrial & Manufacturing Chemicals', path: paths.industrial },
      { label: 'Oilfield Chemicals', path: paths.oilfield },
      { label: 'Technical Services', path: paths.technical },
      { label: 'Laboratory Services', path: paths.technical },
    ],
  },
  {
    label: 'Industries',
    items: [
      { label: 'Industries Served', path: paths.industries },
      { label: 'Oil & Gas', path: paths.industries },
      { label: 'Manufacturing', path: paths.industries },
      { label: 'Utilities', path: paths.industries },
      { label: 'Infrastructure', path: paths.industries },
      { label: 'Marine & Offshore', path: paths.industries },
    ],
  },
  { label: 'Technical Services', path: paths.technical },
  {
    label: 'Knowledge Centre',
    items: [
      { label: 'Knowledge Centre', path: paths.knowledge },
      { label: 'Blog Archive', path: paths.blog },
      { label: 'Technical Articles', path: paths.knowledge },
      { label: 'Industry Insights', path: paths.knowledge },
      { label: 'Product Brochures', path: paths.brochures },
      { label: 'Technical Bulletins', path: paths.brochures },
    ],
  },
  { label: 'Contact', path: paths.contact },
];

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

      <div className="flex md:hidden h-18 items-center justify-between px-6 bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border-b border-[rgba(175,177,179,0.3)]">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-10 h-10 bg-[rgba(175,177,179,0.2)] flex items-center justify-center shrink-0"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <XIcon size={20} className="text-accent" /> : <MenuIcon size={20} className="text-accent" />}
        </button>

        <Link to={paths.home} onClick={closeMobile} className="shrink-0">
          <img src="/logo.svg" alt="Eunisell" className="w-25.5 h-10 object-contain" />
        </Link>
      </div>

      {mobileOpen && (
        <div className="md:hidden text-left bg-background border-t border-border overflow-y-auto max-h-[calc(100vh-72px)] flex flex-col">
          <div className="flex flex-col flex-1 py-4">
            {mobileNavItems.map((item, index) => (
              <div key={item.label} className={cn(index > 0 && 'border-t border-border')}>
                {'items' in item ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full px-8 py-5"
                      aria-expanded={mobileExpanded === item.label}
                    >
                      <span className={cn('text-[18px] leading-6.75 font-normal', mobileExpanded === item.label ? 'text-secondary' : 'text-accent')}>
                        {item.label}
                      </span>
                      <ChevronDownIcon
                        size={16}
                        className={cn(
                          'transition-transform duration-200 shrink-0',
                          mobileExpanded === item.label ? 'rotate-0 text-secondary' : '-rotate-90 text-accent'
                        )}
                      />
                    </button>

                    {mobileExpanded === item.label && (
                      <div className="bg-accent-bg">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label + subItem.path}
                            to={subItem.path}
                            onClick={closeMobile}
                            className="block px-12 py-4 text-[15px] leading-[22.5px] text-muted-foreground border-b border-white last:border-0"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.path!} onClick={closeMobile} className="block px-8 py-5 text-[18px] leading-6.75 font-normal text-accent">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-border px-8 py-8 flex items-center gap-4 shrink-0">
            <a
              href="https://linkedin.com/company/eunisell"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-accent hover:text-secondary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://facebook.com/eunisell"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-accent hover:text-secondary transition-colors"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
