import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../lib/data';

const navColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', path: paths.aboutUs },
      { label: 'Leadership', path: paths.aboutUs },
      { label: 'QHSE', path: paths.aboutUs },
      { label: 'CSR', path: paths.aboutUs },
      { label: 'Careers', path: paths.aboutUs },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Industrial Chemicals', path: paths.industrial },
      { label: 'Oilfield Chemicals', path: paths.oilfield },
      { label: 'Chemical Blending', path: paths.solutions },
      { label: 'Supply & Distribution', path: paths.solutions },
      { label: 'Technical Services', path: paths.technical },
      { label: 'Laboratory Services', path: paths.technical },
    ],
  },
  {
    heading: 'Knowledge Centre',
    links: [
      { label: 'Technical Articles', path: paths.knowledge },
      { label: 'Industry Insights', path: paths.knowledge },
      { label: 'Product Brochures', path: paths.brochures },
      { label: 'Technical Bulletins', path: paths.knowledge },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Request Consultation', path: paths.contact },
      { label: 'Technical Support', path: paths.contact },
      { label: 'Product Enquiries', path: paths.contact },
      { label: 'Lab Services', path: paths.contact },
      { label: 'Office Locations', path: paths.contact },
      { label: 'Emergency Support', path: paths.contact },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001525] w-full shrink-0">
      <div className="px-30 border-b border-white/10 flex items-center justify-center pb-3 pt-2.75">
        <p className="text-[13px] font-normal text-white/40 tracking-[0.325px] leading-[19.5px]">
          EUNISELL CHEMICALS — Engineering chemical solutions for industry and energy.
        </p>
      </div>

      <div className="px-30 py-18 text-left grid grid-cols-5 gap-x-8 gap-y-8">
        <div className="space-y-[14.9px] items-start">
          <img src="/logo.svg" alt="Eunisell Chemicals" className="h-13.5 w-33.25 object-contain brightness-0 invert" />

          <p className="text-[13px] font-normal leading-[23.4px] text-[rgba(255,255,255,0.5)] max-w-55">
            Leading provider of specialty chemicals, technical services, and production support across Africa.
          </p>

          <div className="flex items-center gap-3 mt-sm">
            <a
              href="#"
              className="size-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[rgba(255,255,255,0.5)] transition-colors"
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.686 1.556a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM2.72 3.89H.052v9.333H2.72V3.89Zm4.24 0H4.3v9.333h2.648V8.404c0-2.48 3.2-2.685 3.2 0v4.819H12.8V7.744c0-4.213-4.773-4.061-5.84-1.987V3.89Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              href="#"
              className="size-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[rgba(255,255,255,0.5)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.303 5.928 13.49.125h-1.23L7.752 5.14 4.261.125H0l5.447 7.925L0 13.875h1.23l4.763-5.54 3.804 5.54H14L8.302 5.928ZM6.62 7.627l-.552-.79L1.68 1.06h1.89l3.545 5.072.552.79 4.606 6.59H9.883L6.62 7.628Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              href="#"
              className="size-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[rgba(255,255,255,0.5)] transition-colors"
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.667 1.875A2 2 0 0 0 14.259.454C13.017.125 8 .125 8 .125s-5.017 0-6.259.33A2 2 0 0 0 .333 1.874C0 3.124 0 5.75 0 5.75s0 2.626.333 3.875a2 2 0 0 0 1.408 1.421C2.983 11.375 8 11.375 8 11.375s5.017 0 6.259-.329a2 2 0 0 0 1.408-1.42C16 8.374 16 5.75 16 5.75s0-2.626-.333-3.875ZM6.4 8.25V3.25L10.533 5.75 6.4 8.25Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        {navColumns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-6 items-start">
            <span className="text-sidebar-accent text-[12px] font-bold tracking-[1.5px] uppercase leading-4.5">{col.heading}</span>

            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label} className="pt-[3px] pb-px">
                  <Link
                    to={link.path}
                    className="text-[13px] font-normal text-[rgba(255,255,255,0.55)] leading-[19.5px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="px-30 border-t border-[rgba(175,177,179,0.2)]">
        <div className="flex items-center justify-between py-6">
          <span className="text-xs font-normal text-white/35 leading-4.5">© {new Date().getFullYear()} Eunisell. All rights reserved.</span>

          <span className="text-xs font-normal text-white/25 tracking-[0.5px] leading-4.5">
            ISO 9001 Certified • QHSE Compliant • International Standards
          </span>

          <div className="flex items-center gap-4 text-xs font-normal text-white/35 leading-4.5">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="tracking-[6px]">|</span>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="tracking-[6px]">|</span>
            <Link to="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
