import { ArrowRightIcon } from 'lucide-react';
import type React from 'react';

const values = [
  {
    title: 'mission',
    description: "To be Africa's most trusted provider of industrial specialty chemicals and oil & gas production solutions.",
  },
  {
    title: 'vision',
    description:
      'To deliver innovative, high-quality chemical and production solutions that improve operational efficiency and create long-term value.',
  },
];

const core = ['Safety First', 'Technical Excellence', 'Integrity & Accountability', 'Customer-Centricity', 'Innovation', 'Sustainability'];

const stories = [
  {
    image: '/home/laboratory.svg',
    caption: 'laboratory',
  },
  {
    image: '/home/industrial.svg',
    caption: 'industrial',
  },
  {
    image: '/home/blending.svg',
    caption: 'blending',
  },
  {
    image: '/home/oilfield.svg',
    caption: 'oilfield',
  },
];

const Story: React.FC = () => {
  return (
    <section className="grid grid-cols-2 gap-x-20 py-30 px-20 bg-accent-bg">
      <div className="grid grid-cols-2 gap-0.5 relative">
        {stories.map((story) => (
          <div className="relative">
            <img src={story.image} className="h-full w-full object-cover" />

            <div className="absolute bottom-5.5 left-5.5 text-white text-[10px] uppercase">{story.caption}</div>
          </div>
        ))}

        <div className="absolute -right-10.5 -bottom-10.5 border-l-[3px] bg-background border-l-secondary p-5 text-left">
          <div className="text-[10px] font-semibold text-secondary uppercase">Africa's Leading</div>
          <p className="text-base font-bold mt-0 text-accent">#1 Chemical Solutions Provider</p>
        </div>
      </div>

      <div className="text-left">
        <div className="text-[15px] leading-3.75 uppercase font-black tracking-[3px] text-secondary">our story</div>

        <div className="font-bold text-accent text-[42px] leading-12 my-2.75">Driving Performance Through Chemical Innovation</div>

        <p className="text-base text-accent-foreground">
          Eunisell Chemicals is a leading provider of specialty chemical solutions, technical services, and production support to the manufacturing,
          industrial, oil and gas, and infrastructure sectors across Africa.
        </p>

        <p className="text-base text-accent-foreground mt-3.75">
          For decades, we have partnered with operators and industrial organizations to solve complex production, process, and operational challenges
          through innovative chemical technologies, technical expertise, and a commitment to delivering measurable results.
        </p>

        <div className="grid grid-cols-2 gap-x-4 mt-10">
          {values.map((value) => (
            <div key={value.title} className="border-l-[3px] bg-background border-l-secondary p-5.5 text-left">
              <div className="text-[10px] text-secondary uppercase">{value.title}</div>
              <p className="text-[13px] leading-5.5 mt-0 text-accent">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-9">
          <div className="text-muted uppercase text-[10px] font-medium">CORE VALUES</div>

          <div className="mt-3 gap-2 flex flex-wrap">
            {core.map((core) => (
              <div key={core} className="font-medium rounded-xs py-1.5 px-3.5 bg-background border border-border text-primary text-xs">
                {core}
              </div>
            ))}
          </div>
        </div>

        <button className="h-13 rounded-[2px] mt-6.25 px-7 text-white flex items-center gap-x-1 bg-secondary font-semibold text-base leading-6">
          Learn more <ArrowRightIcon size={16} />
        </button>
      </div>
    </section>
  );
};

export default Story;
