import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';

const CTA: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-accent text-left">
      {/* Mobile */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <h2 className="text-[28px] leading-9 text-white">
          Partner with Africa's Leading <span className="text-secondary">Oilfield Chemical Experts</span>
        </h2>
        <p className="text-[16px] leading-6.5 text-white/70">
          Elevate your production performance with Eunisell's field-proven chemical solutions. Request a technical consultation today and discover the difference specialized
          expertise makes.
        </p>
        <div className="flex flex-col gap-4">
          <Button onClick={() => navigate(paths.contact)} className="w-full rounded-xs bg-secondary text-base h-13">
            Schedule a Technical Audit
          </Button>
          <div>
            <div className="text-[12px] text-white/50">Direct Support</div>
            <a href="tel:+23412345678" className="text-[16px] text-white">
              +234 1 234 5678
            </a>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative py-16 px-30 overflow-hidden">
        <div className="absolute -rotate-12 -top-10 right-5 opacity-20 z-20">
          <img src="/oilfield-chemicals/cta.svg" alt="Test Tube" className="w-100 h-100 object-contain" />
        </div>

        <div className="text-left max-w-2xl z-40 relative">
          <div className="text-5xl leading-15 text-primary-foreground font-bold">
            Partner with Africa's Leading
            <span className="text-secondary"> Oilfield Chemical Experts</span>
          </div>

          <p className="mt-6 text-xl text-primary-foreground/70">
            Elevate your production performance with Eunisell's field-proven chemical solutions. Request a technical consultation today and discover the difference specialized
            expertise makes.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Button onClick={() => navigate(paths.contact)} className="rounded-xs bg-secondary font-bold text-lg h-16 px-10">
              Schedule a Technical Audit
            </Button>

            <div>
              <div className="text-sm font-normal text-primary-foreground/50">Direct Support</div>
              <a href="tel:+23412345678" className="text-lg font-bold text-primary-foreground leading-7">
                +234 1 234 5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
