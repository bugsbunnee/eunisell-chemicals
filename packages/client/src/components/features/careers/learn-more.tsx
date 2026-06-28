import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const links = [
  { img: '/careers/head-office.svg', label: 'About Us', to: paths.aboutUs },
  { img: '/careers/management.svg', label: 'Executive Management', to: paths.management },
  { img: '/careers/qhse.svg', label: 'QHSE', to: paths.qhse },
  { img: '/careers/csr.svg', label: 'CSR', to: paths.csr },
];

const LearnMore: React.FC = () => (
  <section className="bg-white">
    {/* Mobile */}
    <div className="md:hidden px-6 py-16 flex flex-col gap-8">
      <h2 className="font-bold text-accent text-[22px] leading-8.25">Learn More About Eunisell</h2>
      <div className="flex flex-col gap-6">
        {links.slice(0, 2).map((item) => (
          <Link key={item.label} to={item.to} className="flex flex-col gap-3 group">
            <div className="h-45 rounded-[8px] overflow-hidden bg-card">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <span className="font-bold text-accent text-[16px] leading-6">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden md:block py-24 px-30 text-left">
      <div className="max-w-[1776px]">
        <h2 className="font-bold text-accent text-[24px] leading-9 mb-12">Learn More About Eunisell</h2>
        <div className="grid grid-cols-4 gap-6">
          {links.map((item) => (
            <Link key={item.label} to={item.to} className="flex flex-col gap-4 group">
              <div className="h-45 rounded-lg overflow-hidden bg-card shrink-0">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="font-bold text-accent text-[16px] leading-6 group-hover:text-secondary transition-colors">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LearnMore;
