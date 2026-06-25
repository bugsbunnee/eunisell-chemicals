import React from 'react';
import { Button } from '../../ui/button';
import { FaAtlassian, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { paths } from '../../../lib/data';
import { Link } from 'react-router-dom';

const quickLinks = [
  { title: 'CSR Strategy', path: paths.aboutUs },
  { title: 'Abia Warriors FC Partnership', path: paths.aboutUs },
  { title: 'Youth Academy', path: paths.aboutUs },
  { title: 'Community Projects', path: paths.aboutUs },
];

const socialLinks = [
  { Icon: FaFacebook, path: paths.aboutUs },
  { Icon: FaLinkedin, path: paths.aboutUs },
  { Icon: FaAtlassian, path: paths.aboutUs },
];

const CTA: React.FC = () => {
  return (
    <section className="bg-accent text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <h2 className="font-bold text-[28px] leading-[35px] text-white">Partnering for Business, People and Community Impact</h2>

        <p className="text-[16px] leading-[26px] text-muted">
          We are always looking for ways to deepen our roots and expand our reach. Connect with us to learn more.
        </p>

        <div className="flex flex-col gap-3 pt-2">
          <Button className="w-full h-[54px] bg-secondary text-white text-[14px] font-bold rounded-[4px]">Contact our CSR Team</Button>
          <Button className="w-full h-[54px] bg-transparent text-white border border-white/30 text-[14px] font-bold rounded-[4px]">
            Download CSR Report
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
          <div className="space-y-4">
            <div className="text-[12px] font-bold text-secondary uppercase tracking-[2px]">Quick Links</div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title} className="text-muted text-[14px] leading-5">
                  {link.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-[12px] font-bold text-secondary uppercase tracking-[2px]">Social</div>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <link.Icon size={20} className="text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid px-30 py-25 grid-cols-2 items-center gap-x-30">
        <div>
          <div className="text-5xl text-white text-left leading-18 font-bold">Partnering for Business, People and Community Impact</div>

          <div className="mt-6 text-xl text-muted font-normal leading-7.5">
            We are always looking for ways to deepen our roots and expand our reach. Connect with us to learn more about our CSR initiatives or
            explore partnership opportunities.
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
      </div>
    </section>
  );
};

export default CTA;
