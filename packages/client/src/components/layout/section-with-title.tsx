import React, { type PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  legend: string;
  title: string;
  description: string;
}

const SectionWithTitle: React.FC<Props> = ({ children, legend, title, description }) => {
  return (
    <React.Fragment>
      <section className="bg-background py-28 px-20">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[10px] text-secondary uppercase font-semibold">{legend}</div>
          <h2 className="max-w-213 text-accent font-bold capitalize text-5xl my-4">{title}</h2>
          <p className="text-muted-foreground text-base max-w-145">{description}</p>
        </div>

        <div className="w-full">{children}</div>
      </section>
    </React.Fragment>
  );
};

export default SectionWithTitle;
