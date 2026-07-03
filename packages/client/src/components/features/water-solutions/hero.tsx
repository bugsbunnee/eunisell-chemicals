import React from 'react';
import { Button } from '../../ui/button';
import { paths } from '../../../lib/data';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { ChevronRightIcon } from 'lucide-react';

export interface Crumb {
  path: string;
  label: string;
}

export interface HeroCta {
  label: string;
  path: string;
}

export interface HeroProps {
  legend?: string;
  crumbs?: Crumb[];
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

const defaultCrumbs: Crumb[] = [
  {
    path: paths.home,
    label: 'Home',
  },
  {
    path: paths.chemicals,
    label: 'Our Chemicals',
  },
  {
    path: paths.waterSolutions,
    label: 'Water Solutions',
  },
];

const Hero: React.FC<HeroProps> = ({
  legend = 'Our Chemicals',
  crumbs = defaultCrumbs,
  title = 'Water Solutions',
  description = 'Eunisell provides a comprehensive range of high-performance process fluids designed to optimize efficiency, protect critical infrastructure, and ensure the highest standards of production quality in demanding industrial environments.',
  image = '/water-solutions/hero.svg',
  imageAlt = 'Industrial chemical manufacturing facility',
  primaryCta = { label: 'Request Product Consultation', path: paths.contact },
  secondaryCta = { label: 'Explore Product Groups', path: paths.chemicals },
}) => {
  const navigate = useNavigate();
  return (
    <section className="bg-accent relative text-left overflow-hidden md:h-200 md:flex md:items-center">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-accent via-accent/80 via-50% to-transparent" />

      {/* Content */}
      <div className="z-40 relative px-6 py-16 md:py-0 md:px-30 w-full">
        <div className="font-medium text-sm leading-5 uppercase tracking-[2.8px] text-secondary">{legend}</div>

        <div className="flex items-center gap-x-2 mt-3">
          {crumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <Link
                className={cn({
                  'text-sm leading-5': true,
                  'text-primary-foreground/60': index !== crumbs.length - 1,
                  'text-primary-foreground': index === crumbs.length - 1,
                })}
                to={crumb.path}
              >
                {crumb.label}
              </Link>
              {index !== crumbs.length - 1 && <ChevronRightIcon size={12} className="text-primary-foreground/60 shrink-0" />}
            </React.Fragment>
          ))}
        </div>

        <h1 className="text-[40px] leading-12 md:text-[72px] md:leading-22.5 font-bold text-primary-foreground max-w-full md:max-w-200 mt-6">{title}</h1>

        <p className="font-normal text-lg leading-[29.25px] text-primary-foreground/80 mt-6 max-w-175">{description}</p>

        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-x-6 mt-10">
          <Button
            onClick={() => navigate(primaryCta.path)}
            className="h-15.5 px-8 flex items-center justify-center bg-secondary text-lg leading-7 text-white font-bold rounded-[4px] capitalize"
          >
            {primaryCta.label}
          </Button>
          <Button
            onClick={() => navigate(secondaryCta.path)}
            className="h-15 px-8 flex items-center justify-center bg-transparent backdrop-blur-[2px] border border-white/30 text-lg leading-7 text-white font-bold rounded-[4px] capitalize"
          >
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
