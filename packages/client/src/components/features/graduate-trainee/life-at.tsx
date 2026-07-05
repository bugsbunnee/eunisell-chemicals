import React from 'react';

const LifeAt: React.FC = () => {
  const copy = (
    <>
      At Eunisell, you'll work alongside experienced professionals who are passionate about innovation, collaboration, and delivering value to our customers. We foster a culture
      where ideas are encouraged, learning never stops, and every employee is empowered to develop their full potential. Joining Eunisell means becoming part of a team that values
      excellence, integrity, continuous improvement, and sustainable growth.
    </>
  );

  return (
    <section className="bg-card-soft text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="bg-secondary h-0.5 w-10" />
          <h2 className="font-light text-[28px] leading-9 text-accent">Life at Eunisell</h2>
          <p className="font-light text-[16px] leading-6.5 text-muted-foreground">{copy}</p>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-4 flex-1 pb-6">
            <img src="/graduate-trainee/facility.jpg" alt="Eunisell team collaboration" className="w-full h-40 object-cover rounded-xs" />
            <img src="/graduate-trainee/lab.jpg" alt="Laboratory equipment" className="w-full h-30 object-cover rounded-xs" />
          </div>
          <div className="flex-1 pt-6">
            <img src="/graduate-trainee/smiling.jpg" alt="Eunisell professionals in the lab" className="w-full h-74 object-cover rounded-xs" />
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-2 gap-20 items-center max-w-350 mx-auto px-10 py-24 w-full">
        <div className="flex flex-col gap-8">
          <div className="bg-secondary h-0.5 w-10" />
          <h2 className="font-light text-[36px] leading-10 text-accent">Life at Eunisell</h2>
          <p className="font-light text-[18px] leading-7.3125 text-muted-foreground">{copy}</p>
        </div>

        <div className="flex gap-4 justify-center">
          <div className="flex flex-col gap-4 flex-1 pb-11">
            <img src="/graduate-trainee/facility.jpg" alt="Eunisell team collaboration" className="w-full h-64 object-cover rounded-xs" />
            <img src="/graduate-trainee/lab.jpg" alt="Laboratory equipment" className="w-full h-48 object-cover rounded-xs" />
          </div>
          <div className="flex-1 pt-12">
            <img src="/graduate-trainee/smiling.jpg" alt="Eunisell professionals in the lab" className="w-full h-115 object-cover rounded-xs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAt;
