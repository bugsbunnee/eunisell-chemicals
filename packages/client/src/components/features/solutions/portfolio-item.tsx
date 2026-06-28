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

const PortfolioItem: React.FC<Props> = ({ title, description, legend, image, path }) => {
  return (
    <div className="border border-border rounded-sm overflow-hidden">
      <div className="relative h-48 md:h-62.5 overflow-hidden w-full">
        <img src={image} className="h-full w-full object-cover" />
        <div className="text-4xl bottom-4 left-5 absolute font-black uppercase text-primary-foreground/50 z-50 text-left">{legend}</div>
      </div>

      <div className="p-6 md:p-8">
        <div className="text-accent font-bold capitalize text-xl mb-0 text-left">{title}</div>

        <p className="flex-1 mt-3 text-muted-foreground text-sm text-left">{description}</p>

        <div className="mt-6 md:mt-14.25">
          <Link to={path} className="text-[13px] text-secondary font-semibold flex items-center gap-x-1">
            Learn More <ArrowRightIcon size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
