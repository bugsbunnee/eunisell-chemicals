import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const links = [
  { label: 'Application FAQs', href: '#' },
  { label: 'Refer a Colleague', href: '#' },
  { label: 'Relocation Policy', href: '#' },
  { label: 'Contact Recruitment', href: '#' },
];

const ApplyCta: React.FC = () => (
  <section className="bg-white py-24 px-30 text-left">
    <div className="max-w-[1776px] grid grid-cols-2 gap-12 items-stretch">
      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-accent text-[32px] leading-[48px] mb-6">Ready to make your mark?</h2>
        <p className="text-[#606060] text-[16px] leading-[24px] mb-8">
          Even if you don't see a perfect match today, we are always looking for exceptional technical talent.
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-secondary font-bold text-[16px] leading-[24px] hover:text-secondary/80 transition-colors"
            >
              {link.label}
              <ArrowRightIcon size={11} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-accent rounded-[12px] p-12 flex flex-col gap-4">
        <h3 className="font-bold text-white text-[24px] leading-[36px]">Send a General Application</h3>
        <p className="text-[#afb1b3] text-[16px] leading-[24px]">
          Join our talent database and be the first to know about upcoming roles in your specialization.
        </p>
        <div className="flex flex-col gap-4 mt-4">
          <button className="w-full bg-secondary text-white font-bold text-[16px] py-4 rounded-[4px] hover:bg-secondary/90 transition-colors">
            Submit CV / Resume
          </button>
          <button className="w-full border border-white/20 text-white font-bold text-[16px] py-4 rounded-[4px] hover:bg-white/5 transition-colors">
            Join Talent Network
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default ApplyCta;
