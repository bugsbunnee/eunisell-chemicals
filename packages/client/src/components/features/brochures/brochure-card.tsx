import React from 'react';

import { FileTextIcon, CalendarIcon, DownloadIcon } from 'lucide-react';
import { downloadFile } from '../../../lib/utils';

export interface Brochure {
  id: number;
  category: string;
  badgeLabel: string;
  badgeColor: string;
  image: string;
  title: string;
  description: string;
  file: string;
  fileSize: string;
  updatedAt: string;
}

interface Props {
  brochure: Brochure;
}

const BrochureCard: React.FC<Props> = ({ brochure }) => {
  return (
    <div className="group bg-white border border-input rounded-md drop-shadow-[0px_16px_16px_rgba(0,0,0,0.08)] flex flex-col isolate overflow-hidden p-2 h-full">
      <div className="relative bg-[#f1f5f9] rounded-[4px] h-[220px] md:h-147 overflow-hidden shrink-0">
        <img src={brochure.image} alt={brochure.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-transparent to-[87%] to-accent/90" />

        <span className={`absolute top-4 left-4 ${brochure.badgeColor} text-white text-[10px] font-bold uppercase tracking-[0.5px] px-3 py-1 rounded-full`}>
          {brochure.badgeLabel}
        </span>

        <h3 className="hidden md:block absolute left-6 right-6 bottom-4 text-[20px] text-white leading-7 text-left">{brochure.title}</h3>
      </div>

      <div className="flex-1 p-6 md:px-4 md:pt-2 md:pb-4 flex flex-col text-left">
        <h3 className="md:hidden font-bold text-xl text-accent leading-7">{brochure.title}</h3>
        <p className="md:hidden text-sm text-muted leading-[22.75px] mt-[14.75px]">{brochure.description}</p>

        <div className="flex gap-4 items-center border-t border-b border-input/50 py-2 mt-4 md:mt-2">
          <div className="flex items-center gap-1.5 text-xs font-medium text-destructive">
            <FileTextIcon size={12} />
            <span className="text-accent/60">{brochure.fileSize}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-medium text-accent/60">
            <CalendarIcon size={12} />
            {brochure.updatedAt}
          </div>
        </div>

        <button
          onClick={() => downloadFile(brochure.file, `${brochure.title}.pdf`)}
          className="bg-accent text-white font-bold md:font-normal text-sm text-center py-4 rounded-[4px] flex items-center justify-center gap-2 mt-4.5 md:mt-4"
        >
          <DownloadIcon size={14} />
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default BrochureCard;
