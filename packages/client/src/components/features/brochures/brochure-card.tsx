import React from 'react';

import { FileTextIcon, CalendarIcon, DownloadIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

export interface Brochure {
  id: number;
  category: string;
  badgeLabel: string;
  badgeColor: string;
  image: string;
  title: string;
  description: string;
  fileSize: string;
  updatedAt: string;
}

interface Props {
  brochure: Brochure;
}

const BrochureCard: React.FC<Props> = ({ brochure }) => {
  return (
    <div className="bg-white border border-border rounded-md shadow-[0px_16px_16px_rgba(0,0,0,0.08)] flex flex-col isolate overflow-hidden p-2">
      <div className="relative bg-[#f1f5f9] rounded-[4px] h-70 overflow-hidden shrink-0">
        <img src={brochure.image} alt={brochure.title} className="absolute inset-0 w-full h-full object-cover" />

        <span
          className={`absolute top-4 left-4 ${brochure.badgeColor} text-white text-[10px] font-bold uppercase tracking-[0.5px] px-3 py-1 rounded-full`}
        >
          {brochure.badgeLabel}
        </span>
      </div>

      <div className="flex-1 p-6 flex flex-col text-left">
        <h3 className="font-bold text-xl text-accent leading-7">{brochure.title}</h3>
        <p className="text-sm text-muted leading-[22.75px] mt-[14.75px]">{brochure.description}</p>

        <div className="flex gap-4 items-center border-t border-b border-border/50 py-2 mt-4">
          <div className="flex items-center gap-1.5 text-xs font-medium text-destructive">
            <FileTextIcon size={12} />
            <span className="text-accent/60">{brochure.fileSize}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-medium text-accent/60">
            <CalendarIcon size={12} />
            {brochure.updatedAt}
          </div>
        </div>

        <Link
          to={paths.contact}
          className="bg-accent text-white font-bold text-sm text-center py-4 rounded-[4px] flex items-center justify-center gap-2 mt-4.5"
        >
          <DownloadIcon size={14} />
          Download Brochure
        </Link>
      </div>
    </div>
  );
};

export default BrochureCard;
