import React from 'react';

import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  description: string;
  legend: string;
  image: string;
  path: string;
}

const SolutionItem: React.FC<Props> = ({ title, description, legend, image, path }) => {
  return (
    <div className="border border-border rounded-sm overflow-hidden border-t-[3px] border-t-secondary mt-16">
      <div className="header">
        <img src={image} className="h-70 w-full object-cover" />
      </div>

      <div className="px-8 py-7">
        <div className="text-[11px] font-bold uppercase text-secondary text-left">{legend}</div>

        <div className="text-accent font-bold capitalize text-xl mt-2 mb-0 text-left">{title}</div>

        <p className="mt-2.25 text-muted-foreground text-sm text-left">{description}</p>

        <div className="mt-4.75">
          <Link to={path} className="text-[13px] text-secondary font-semibold flex items-center gap-x-1">
            Learn More <ArrowRightIcon size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionItem;
