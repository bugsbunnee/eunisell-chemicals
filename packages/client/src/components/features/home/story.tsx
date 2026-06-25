import { ArrowRightIcon } from 'lucide-react';
import type React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

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
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:gap-x-20 py-20 px-6 md:py-30 md:px-30 bg-accent-bg">
      {/* Image grid — desktop only */}
      <div className="hidden md:grid grid-cols-2 gap-0.5 relative">
        {stories.map((story) => (
          <div key={story.caption} className="relative">
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
        <div className="text-[15px] leading-[18px] uppercase font-black tracking-[3px] text-secondary">our story</div>

        <div className="font-bold text-accent text-[34px] md:text-[42px] leading-[40.8px] md:leading-12 my-3 md:my-2.75">
          Driving Performance Through Chemical Innovation
        </div>

        <p className="text-[15px] md:text-base text-accent-foreground leading-[24.38px] md:leading-normal">
          Eunisell Chemicals is a leading provider of specialty chemical solutions, technical services, and production support across Africa's energy
          and infrastructure sectors.
        </p>

        <p className="hidden md:block text-base text-accent-foreground mt-3.75">
          For decades, we have partnered with operators and industrial organizations to solve complex production, process, and operational challenges
          through innovative chemical technologies, technical expertise, and a commitment to delivering measurable results.
        </p>

        <div className="grid grid-cols-2 gap-x-4 mt-6 md:mt-10">
          {values.map((value) => (
            <div key={value.title} className="border-l-[3px] bg-background border-l-secondary p-5 md:p-5.5 text-left">
              <div className="text-[10px] text-secondary uppercase tracking-[1.5px]">{value.title}</div>
              <p className="text-[13px] md:text-[13px] leading-[22.75px] md:leading-5.5 mt-0 text-accent">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-9">
          <div className="text-muted uppercase text-[10px] font-medium tracking-[2px]">CORE VALUES</div>

          <div className="mt-3 gap-2 flex flex-wrap">
            {core.map((c) => (
              <div key={c} className="font-medium rounded-xs py-1.5 px-3.5 bg-background border border-border text-primary text-[12px] md:text-xs">
                {c}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate(paths.aboutUs)}
          className="hidden md:flex h-13 rounded-[2px] mt-6.25 px-7 text-white items-center gap-x-1 bg-secondary font-semibold text-base leading-6"
        >
          Learn more <ArrowRightIcon size={16} />
        </button>
      </div>
    </section>
  );
};

export default Story;
