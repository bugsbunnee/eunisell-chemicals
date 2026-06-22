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
      <section className={cn('bg-background py-28 px-20', className)}>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[15px] font-black text-secondary uppercase tracking-[3px]">{legend}</div>
          <h2 className="max-w-213 text-accent font-bold capitalize text-5xl my-4">{title}</h2>
          {description && <p className="text-muted-foreground text-base max-w-145">{description}</p>}
        </div>

        <div className="w-full">{children}</div>
      </section>
    </React.Fragment>
  );
};

export default SectionWithTitle;
