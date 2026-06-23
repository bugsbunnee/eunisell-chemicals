import React from 'react';
import { DownloadIcon, FileTextIcon } from 'lucide-react';

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
    <section className="bg-[#f8fafc] py-24 px-20 text-left">
      <div className="max-w-[1560px] mx-auto px-8 flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-accent text-[30px] leading-9">Product Catalogues &amp; Brochures</h2>
          <a href="#" className="font-bold text-[#0083ce] text-sm tracking-[0.7px] uppercase">
            Download Centre
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {brochures.map((brochure) => (
            <div key={brochure.title} className="bg-background border border-border shadow-[0px_2px_2px_rgba(0,0,0,0.05)] p-8 flex flex-col">
              <div className="mb-6">
                <div className="bg-[#f1f5f9] border border-border w-16 h-20 flex items-center justify-center">
                  <FileTextIcon size={30} className="text-destructive" />
                </div>
              </div>

              <h4 className="font-bold text-accent text-base leading-6 mb-2">{brochure.title}</h4>

              <p className="text-popover-foreground text-xs leading-4 mb-8">{brochure.meta}</p>

              <button className="bg-accent text-white text-sm font-bold py-3 flex items-center justify-center gap-2 mt-auto">
                <DownloadIcon size={12} />
                Download Brochure
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
