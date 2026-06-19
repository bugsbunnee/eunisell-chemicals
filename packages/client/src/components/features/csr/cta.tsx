import React from 'react';
import { Button } from '../../ui/button';
import { FaAtlassian, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { paths } from '../../../lib/data';
import { Link } from 'react-router-dom';

const quickLinks = [
  {
    title: 'CSR Strategy',
    path: paths.aboutUs,
  },
  {
    title: 'Abia Warriors FC Partnership',
    path: paths.aboutUs,
  },
  {
    title: 'Youth Academy',
    path: paths.aboutUs,
  },
  {
    title: 'Community Projects',
    path: paths.aboutUs,
  },
];

const socialLinks = [
  {
    Icon: FaFacebook,
    path: paths.aboutUs,
  },
  {
    Icon: FaLinkedin,
    path: paths.aboutUs,
  },
  {
    Icon: FaAtlassian,
    path: paths.aboutUs,
  },
];

const CTA: React.FC = () => {
  return (
    <section className="px-30 py-25 bg-accent grid grid-cols-2 items-center gap-x-30 text-left">
      <div>
        <div className="text-5xl text-white text-left leading-18 font-bold">Partnering for Business, People and Community Impact</div>

        <div className="mt-6 text-xl text-muted font-normal leading-7.5">
          We are always looking for ways to deepen our roots and expand our reach. Connect with us to learn more about our CSR initiatives or explore
          partnership opportunities.
        </div>

        <div className="flex items-center gap-x-4 mt-12">
          <Button className="px-10 flex items-center h-15.5 bg-secondary text-base font-bold rounded-[4px]">Contact our CSR Team</Button>
          <Button className="px-10 flex items-center h-15.5 bg-transparent text-white border border-white/30 text-base font-bold rounded-[4px]">
            Download CSR Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-12">
        <div className="space-y-6">
          <div className="text-base font-bold text-secondary capitalize leading-6">Quick Links</div>

          <ul className="space-y-6">
            {quickLinks.map((link) => (
              <li key={link.title} className="text-muted text-base leading-6">
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="text-base font-bold text-secondary capitalize leading-6">Social Channels</div>

          <div className="flex items-center gap-x-5">
            {socialLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <link.Icon size={20} className="text-slate-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
