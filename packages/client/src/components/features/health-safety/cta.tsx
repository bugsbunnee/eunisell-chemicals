import type React from 'react';

import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';

const CTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 size-96 rounded-full bg-secondary blur-[50px]" />
        <div className="absolute bottom-0 left-0 size-96 rounded-full bg-accent blur-[50px]" />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden relative px-6 py-16 flex flex-col items-center gap-6">
        <h2 className="font-bold text-[28px] leading-9 text-white text-center">Committed to Safe and Responsible Operations</h2>

        <p className="text-[16px] leading-6.5 text-secondary-pale text-center">
          Explore our full Quality, Health, Safety, and Environment framework or reach out to our compliance team for technical consultation.
        </p>

        <div className="flex flex-col gap-3 pt-2 w-full">
          <Button onClick={() => navigate(paths.qhse)} className="w-full h-13.5 bg-secondary text-white text-[14px] font-bold tracking-[1.4px] uppercase rounded-[4px]">
            View QHSE
          </Button>
          <Button
            onClick={() => navigate(paths.contact)}
            className="w-full h-13.5 bg-transparent text-white border-2 border-white text-[14px] font-bold tracking-[1.4px] uppercase rounded-[4px]"
          >
            Contact Eunisell
          </Button>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid relative justify-items-center px-30 py-24">
        <div className="grid justify-items-center gap-6 w-full max-w-300 px-10">
          <h2 className="font-bold text-4xl leading-10 text-white text-center">Committed to Safe and Responsible Operations</h2>

          <p className="text-lg leading-7 text-secondary-pale text-center max-w-168">
            Explore our full Quality, Health, Safety, and Environment framework or reach out to our compliance team for technical consultation.
          </p>

          <div className="flex items-start justify-center gap-6 pt-6">
            <Button onClick={() => navigate(paths.qhse)} className="px-10 h-14 bg-secondary text-white text-[14px] leading-5 font-bold tracking-[1.4px] uppercase rounded-[4px]">
              View QHSE
            </Button>
            <Button
              onClick={() => navigate(paths.contact)}
              className="px-10 h-14 bg-transparent text-white border-2 border-white text-[14px] leading-5 font-bold tracking-[1.4px] uppercase rounded-[4px]"
            >
              Contact Eunisell
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
