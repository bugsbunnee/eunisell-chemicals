import React, { type PropsWithChildren } from 'react';
import { cn } from '../../lib/utils';

interface Props extends PropsWithChildren {
  className?: string;
  description?: string;
  legend: string;
  title: string;
}

const SectionWithTitle: React.FC<Props> = ({ children, className, legend, title, description }) => {
  return (
    <React.Fragment>
      <section className={cn('bg-background py-16 px-6 md:py-28 md:px-30', className)}>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[13px] md:text-[15px] font-black text-secondary uppercase tracking-[3px]">{legend}</div>
          <h2 className="max-w-full md:max-w-213 text-accent font-bold capitalize text-[28px] md:text-5xl leading-8 md:leading-normal text-center my-3 md:my-4">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-sm md:text-base max-w-full md:max-w-145 text-center px-2 md:px-0">{description}</p>
          )}
        </div>

        <div className="w-full">{children}</div>
      </section>
    </React.Fragment>
  );
};

export default SectionWithTitle;
