import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const links = [
  {
    url: paths.aboutUs,
    label: 'Our History',
  },
  {
    url: paths.aboutUs,
    label: 'Technical Centers',
  },
  {
    url: paths.aboutUs,
    label: 'Investor Relations',
  },
  {
    url: paths.aboutUs,
    label: 'Careers',
  },
];

const Cta: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden p-30 flex items-center justify-center text-center">
      <div className="absolute right-0 top-0 bottom-0 w-full">
        <img src="/management/cta.svg" alt="" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-linear-to-r from-accent via-accent/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center">
        <h2 className="font-bold text-[56px] text-white leading-17.5 max-w-216">Partner with a Leadership Team Built for Industrial Performance</h2>

        <p className="font-normal text-xl text-white/80 leading-7.5 max-w-165 mt-8 mx-auto">
          Get in touch with our executive team to discuss strategic partnerships and industrial solutions.
        </p>

        <div className="flex items-center justify-center mt-12 gap-6">
          <Link
            to={paths.contact}
            className="bg-secondary text-white uppercase font-bold text-[15px] tracking-[0.75px] px-10 py-5 rounded-[2px] whitespace-nowrap"
          >
            Contact Management
          </Link>

          <Link
            to={paths.contact}
            className="bg-transparent border border-white text-white uppercase font-bold text-[15px] tracking-[0.75px] px-10 py-5 rounded-[2px] whitespace-nowrap"
          >
            Request Corporate Profile
          </Link>
        </div>

        <div className="mt-20 flex items-center justify-center gap-x-12">
          {links.map((link) => (
            <Link to={link.url} className="text-white/50 text-sm leading-5.25 font-medium tracking-[1.4px] uppercase">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta;
