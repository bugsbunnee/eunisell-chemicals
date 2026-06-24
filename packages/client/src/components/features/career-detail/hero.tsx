import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, BriefcaseIcon, MapPinIcon, ClockIcon, BarChart2Icon, CalendarXIcon } from 'lucide-react';
import { paths } from '../../../lib/data';

interface CareerDetailHeroProps {
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  deadline: string;
  isDeadlineSoon?: boolean;
  onApply?: () => void;
}

const CareerDetailHero: React.FC<CareerDetailHeroProps> = ({
  title,
  department,
  location,
  type,
  level,
  deadline,
  isDeadlineSoon = true,
  onApply,
}) => (
  <section className="bg-card border-b border-border text-left relative overflow-hidden py-16 px-30">
    <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none select-none opacity-5">
      <img src="/technical-services/abstract.svg" alt="" className="w-full h-full object-cover" />
    </div>

    <div className="relative max-w-[1680px]">
      <div className="flex items-center gap-2 mb-6">
        <Link to={paths.home} className="font-bold text-[#777] text-[12px] uppercase tracking-[1.2px] hover:text-accent transition-colors">
          Home
        </Link>
        <ChevronRightIcon size={8} className="text-[#777]" />
        <Link to={paths.careers} className="font-bold text-[#777] text-[12px] uppercase tracking-[1.2px] hover:text-accent transition-colors">
          Careers
        </Link>
        <ChevronRightIcon size={8} className="text-[#777]" />
        <span className="font-bold text-secondary text-[12px] uppercase tracking-[1.2px]">{title}</span>
      </div>

      <div className="inline-flex items-center gap-2 border border-secondary bg-white px-3 py-1 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
        <span className="font-black text-secondary text-[10px] uppercase tracking-[-0.5px]">Careers</span>
      </div>

      <h1 className="font-extrabold text-accent text-[56px] leading-[1.1] mb-6">{title}</h1>

      <p className="text-muted-foreground text-[20px] leading-[1.625] max-w-200 mb-8">
        Join our technical team to drive growth and deliver high-performance chemical solutions to major industrial and oil &amp; gas clients across
        West Africa.
      </p>

      <div className="flex flex-wrap gap-4 mb-10">
        <span className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-accent">
          <BriefcaseIcon size={14} className="text-secondary shrink-0" />
          {department}
        </span>
        <span className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-accent">
          <MapPinIcon size={14} className="text-secondary shrink-0" />
          {location}
        </span>
        <span className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-accent">
          <ClockIcon size={14} className="text-secondary shrink-0" />
          {type}
        </span>
        <span className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-accent">
          <BarChart2Icon size={14} className="text-secondary shrink-0" />
          {level}
        </span>
        <span
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${isDeadlineSoon ? 'bg-red-50 border border-red-200 text-[#d00416]' : 'bg-white border border-border text-accent'}`}
        >
          <CalendarXIcon size={14} className="shrink-0" />
          Closing: {deadline}
        </span>
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-4">
        <button
          onClick={onApply}
          className="bg-secondary text-white font-bold text-[16px] px-10 h-14 rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,131,206,0.2),0px_4px_6px_-4px_rgba(0,131,206,0.2)] hover:bg-secondary/90 transition-colors"
        >
          Apply for this Role
        </button>
        <Link
          to={paths.careers}
          className="flex items-center justify-center border-2 border-accent text-accent font-bold text-[16px] px-8 h-14 rounded-[4px] hover:bg-accent/5 transition-colors"
        >
          View All Openings
        </Link>
      </div>
    </div>
  </section>
);

export default CareerDetailHero;
