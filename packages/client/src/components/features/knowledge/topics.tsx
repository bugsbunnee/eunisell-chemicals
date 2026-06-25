import React from 'react';
import { Link } from 'react-router-dom';
import { DownloadIcon, FileTextIcon } from 'lucide-react';
import { paths } from '../../../lib/data';

const brochures = [
  {
    title: 'Upstream Chemicals Portfolio',
    meta: 'PDF • 4.2 MB • Updated Jan 2024',
  },
  {
    title: 'Industrial Water Solutions',
    meta: 'PDF • 3.8 MB • Updated Mar 2024',
  },
  {
    title: 'Corrosion Management Programme',
    meta: 'PDF • 2.9 MB • Updated Feb 2024',
  },
  {
    title: 'Technical Services Overview',
    meta: 'PDF • 5.1 MB • Updated Apr 2024',
  },
];

const Topics: React.FC = () => {
  return (
    <section className="bg-[#f8fafc] py-12 px-6 md:py-24 md:px-20 text-left">
      <div className="max-w-[1560px] mx-auto md:px-8 flex flex-col gap-8 md:gap-12">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-accent text-[20px] md:text-[30px] leading-7 md:leading-9">Catalogues &amp; Brochures</h2>
          <Link to={paths.brochures} className="font-bold text-[#0083ce] text-[12px] md:text-sm tracking-[0.6px] md:tracking-[0.7px] uppercase">
            Download Centre
          </Link>
        </div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-6">
          {brochures.map((brochure) => (
            <div key={brochure.title} className="bg-background border border-border shadow-[0px_2px_2px_rgba(0,0,0,0.05)] p-6 md:p-8 flex flex-col">
              <div className="mb-4 md:mb-6">
                <div className="bg-[#f8fafc] border border-[#f1f5f9] w-12 h-14 md:w-16 md:h-20 flex items-center justify-center">
                  <FileTextIcon size={24} className="text-destructive" />
                </div>
              </div>

              <h4 className="font-bold text-accent text-sm md:text-base leading-5 md:leading-6 mb-1 md:mb-2">{brochure.title}</h4>

              <p className="text-popover-foreground text-[10px] md:text-xs leading-4 mb-6 md:mb-8">{brochure.meta}</p>

              <button className="bg-accent text-white text-[12px] md:text-sm font-bold h-11 flex items-center justify-center gap-2 mt-auto">
                <DownloadIcon size={10} />
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
