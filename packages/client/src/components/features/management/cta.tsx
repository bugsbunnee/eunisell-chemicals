import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const links = [
  { url: paths.aboutUs, label: 'Our History' },
  { url: paths.aboutUs, label: 'Technical Centers' },
  { url: paths.aboutUs, label: 'Investor Relations' },
  { url: paths.aboutUs, label: 'Careers' },
];

const Cta: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden px-6 py-16 md:p-30 flex items-center justify-center text-center">
      {/* Background image — desktop only */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-full">
        <img src="/management/cta.svg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-accent via-accent/20 to-transparent" />
      </div>

      {/* Mobile background pattern */}
      <div className="md:hidden absolute inset-0 opacity-10 pointer-events-none">
        <img src="/management/cta.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 text-center w-full">
        <h2 className="font-bold text-[32px] md:text-[56px] text-white leading-[40px] md:leading-17.5 max-w-full md:max-w-216 mx-auto">
          Partner with Industry Leaders
        </h2>

        <p className="font-normal text-[16px] md:text-xl text-white/80 leading-[24px] md:leading-7.5 max-w-full md:max-w-165 mt-4 md:mt-8 mx-auto">
          Get in touch with our team to discuss strategic partnerships.
        </p>

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center mt-8 md:mt-12 gap-3 md:gap-6">
          <Link
            to={paths.contact}
            className="bg-secondary text-white uppercase font-bold text-sm md:text-[15px] tracking-[0.7px] md:tracking-[0.75px] h-[56px] md:h-auto md:px-10 md:py-5 rounded-[2px] whitespace-nowrap flex items-center justify-center"
          >
            Contact Management
          </Link>

          <Link
            to={paths.contact}
            className="bg-transparent border border-white text-white uppercase font-bold text-sm md:text-[15px] tracking-[0.7px] md:tracking-[0.75px] h-[56px] md:h-auto md:px-10 md:py-5 rounded-[2px] whitespace-nowrap flex items-center justify-center"
          >
            Corporate Profile
          </Link>
        </div>

        <div className="hidden md:flex mt-20 items-center justify-center gap-x-12">
          {links.map((link) => (
            <Link key={link.label} to={link.url} className="text-white/50 text-sm leading-5.25 font-medium tracking-[1.4px] uppercase">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta;
