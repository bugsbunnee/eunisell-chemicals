import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';
import { paths } from '../../../lib/data';

const mobileLinks = [
  { label: 'Application FAQs', href: paths.contact },
  { label: 'Refer a Colleague', href: paths.contact },
];

const desktopLinks = [
  { label: 'Application FAQs', href: paths.contact },
  { label: 'Refer a Colleague', href: paths.contact },
  { label: 'Relocation Policy', href: paths.contact },
  { label: 'Contact Recruitment', href: paths.contact },
];

const ApplyCta: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section>
      {/* Mobile */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-bold text-accent text-[26px] leading-9.75">Ready to make your mark?</h2>
          </div>
          <p className="text-card-foreground text-[15px] leading-[22.5px] tracking-[0.029px]">
            Even if you don't see a perfect match today, we are always looking for exceptional talent.
          </p>

          <div className="flex flex-col gap-4">
            {mobileLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="border-b border-[#f6f9fc] py-2 flex items-center justify-between text-secondary text-[14px] leading-[21px] tracking-[0.014px]"
              >
                {link.label}
                <ChevronRightIcon size={14} className="text-secondary" />
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-accent rounded-[8px] p-8 flex flex-col gap-6">
          <h3 className="font-bold text-white text-[20px] leading-7.5">General Application</h3>
          <p className="text-muted text-[14px] leading-5.25">Join our talent database and be the first to know about upcoming roles.</p>
          <div className="flex flex-col gap-3">
            <button onClick={() => navigate(paths.contact)} className="w-full h-13 bg-secondary text-white font-bold text-[16px] rounded-[4px] tracking-[-0.016px]">
              Submit CV / Resume
            </button>
            <button onClick={() => navigate(paths.contact)} className="w-full h-13 border border-white/20 text-white font-bold text-[16px] rounded-[4px] tracking-[0.047px]">
              Join Talent Network
            </button>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block bg-white py-24 px-30 text-left">
        <div className="max-w-[1776px] grid grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-accent text-[32px] leading-12 mb-6">Ready to make your mark?</h2>
            <p className="text-card-foreground text-[16px] leading-6 mb-8">Even if you don't see a perfect match today, we are always looking for exceptional technical talent.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {desktopLinks.map((link) => (
                <Link key={link.label} to={link.href} className="flex items-center gap-2 text-secondary font-bold text-[16px] leading-6 hover:text-secondary/80 transition-colors">
                  {link.label}
                  <ArrowRightIcon size={11} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-accent rounded-[12px] p-12 flex flex-col gap-4">
            <h3 className="font-bold text-white text-[24px] leading-9">Send a General Application</h3>
            <p className="text-muted text-[16px] leading-6">Join our talent database and be the first to know about upcoming roles in your specialization.</p>
            <div className="flex flex-col gap-4 mt-4">
              <button
                onClick={() => navigate(paths.contact)}
                className="w-full bg-secondary text-white font-bold text-[16px] py-4 rounded-[4px] hover:bg-secondary/90 transition-colors"
              >
                Submit CV / Resume
              </button>
              <button
                onClick={() => navigate(paths.contact)}
                className="w-full border border-white/20 text-white font-bold text-[16px] py-4 rounded-[4px] hover:bg-white/5 transition-colors"
              >
                Join Talent Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyCta;
