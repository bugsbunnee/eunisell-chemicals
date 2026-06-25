import React from 'react';

const steps = [
  {
    number: '01.',
    title: 'Talent Identification',
    description: 'Scouting programs across Abia State for exceptional potential.',
    desktopDescription: 'Scouting programs across Abia State to find players with exceptional potential from underserved backgrounds.',
  },
  {
    number: '02.',
    title: 'Professional Mentorship',
    description: 'Access to veteran coaches for discipline and career guidance.',
    desktopDescription: 'Access to veteran coaches and former professionals who provide guidance on discipline and career management.',
  },
  {
    number: '03.',
    title: 'Life Skills Training',
    description: 'Workshops on literacy, health, and life beyond the pitch.',
    desktopDescription: 'Workshops on financial literacy, public speaking, and health, preparing players for life beyond the pitch.',
  },
];

const Nurturing: React.FC = () => {
  return (
    <section className="bg-white text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <h2 className="font-bold text-[30px] leading-[37.5px] text-accent">Nurturing the Next Generation</h2>

        <p className="text-[16px] leading-[26px] text-card-foreground">
          Creating structured environments where young Nigerians can develop innate talents into professional skills.
        </p>

        <div className="flex flex-col gap-8 pt-2">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex gap-4 items-start">
              <span className="font-bold text-[24px] leading-7 text-secondary shrink-0">{number}</span>
              <div className="space-y-1">
                <h5 className="font-bold text-[18px] leading-6 text-accent">{title}</h5>
                <p className="text-[14px] leading-[22.75px] text-card-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-[400px] rounded-[12px] overflow-hidden shadow-2xl mt-4">
          <img src="/csr/warriors.svg" alt="Coach instructing a young player" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 right-4 bg-secondary p-6 rounded-[2px]">
            <div className="font-bold text-[36px] leading-10 text-white">30+</div>
            <div className="font-medium text-[14px] leading-5 text-white/90 mt-1">Young athletes impacted annually through our programs.</div>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <div className="max-w-[1560px] w-full grid grid-cols-2 gap-x-24 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-accent leading-[57.6px]">Nurturing the Next Generation</h2>

            <p className="text-lg font-normal text-card-foreground leading-[29.25px]">
              Eunisell focuses on creating structured environments where young Nigerians can develop their innate footballing talents into
              professional-grade skills.
            </p>

            <div className="space-y-8">
              {steps.map(({ number, title, desktopDescription }) => (
                <div key={number} className="flex gap-6 items-start">
                  <span className="text-2xl font-bold text-secondary leading-9 shrink-0 w-12 text-center">{number}</span>
                  <div className="space-y-1">
                    <h5 className="text-xl font-bold text-accent leading-7.5">{title}</h5>
                    <p className="text-base font-normal text-card-foreground leading-6">{desktopDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[6px] w-full h-full relative">
            <img src="/csr/warriors.svg" alt="Coach instructing a young player" className="w-full h-full object-cover rounded-[6px]" />
            <div className="absolute bg-secondary p-10 rounded-[2px] -bottom-10 -left-10">
              <div className="font-bold text-5xl text-white">30+</div>
              <div className="font-medium text-base leading-6 text-white mt-2 max-w-55">
                Young athletes impacted through our development programs annually.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nurturing;
