import type React from 'react';

import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';
import { scrollToView } from '../../../lib/utils';

const CTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-accent">
      <div className="md:hidden px-6 py-16 flex flex-col gap-6 text-center">
        <h2 className="font-bold text-[28px] leading-8.75 text-white">
          Partner with a Team Committed to
          <span className="text-secondary"> Safe and Responsible Operations</span>
        </h2>

        <p className="text-[16px] leading-6.5 text-muted">Ready to elevate your operational standards? Contact our technical safety experts today.</p>

        <div className="flex flex-col gap-3 pt-2">
          <Button onClick={() => navigate(paths.contact)} className="w-full h-13.5 bg-secondary text-white text-[14px] font-bold rounded-[2px]">
            Request Consultation
          </Button>
          <Button onClick={() => scrollToView('safety-record')} className="w-full h-13.5 bg-transparent text-white border-2 border-white/20 text-[14px] font-bold rounded-[2px]">
            View Safety Record
          </Button>
        </div>
      </div>

      <div className="hidden md:block px-30 py-24">
        <div className="font-bold text-5xl leading-12 text-white max-w-198.75 mx-auto">
          Partner with a Team Committed to
          <span className="text-secondary"> Safe and Responsible Operations</span>
        </div>

        <p className="text-xl leading-7 text-muted max-w-174.75 mt-8 mx-auto">
          Ready to elevate your operational standards? Contact our technical safety experts today to learn more about our integrated QHSE protocols.
        </p>

        <div className="flex items-center justify-center gap-x-6 mt-12">
          <Button onClick={() => navigate(paths.contact)} className="px-10 flex items-center h-15 bg-secondary text-base text-white font-bold rounded-[2px]">
            Request Consultation
          </Button>
          <Button
            onClick={() => scrollToView('safety-record')}
            className="px-10 flex items-center h-15 bg-transparent text-white border-2 border-white/20 text-base font-bold rounded-[2px]"
          >
            View Safety Record
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
