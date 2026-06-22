import type React from 'react';

const tags = ['Founder', 'Industrial Chemist', 'Visionary Leader', 'Philanthropist'];

const GroupManagingDirector: React.FC = () => {
  return (
    <section className="py-24 px-30 bg-background text-left grid grid-cols-2 gap-x-30">
      <div className="min-h-150 rounded-[2px] overflow-hidden">
        <img src="/management/director.svg" alt="Chika Ikenga" className="w-full h-full object-cover" />
      </div>

      <div>
        <div className="mb-2 uppercase font-black text-[15px] tracking-[3px] text-secondary">Group Managing Director</div>
        <div className="text-[56px] text-accent leading-21 font-bold">Chika Ikenga</div>

        <div className="flex items-center my-8 gap-x-3">
          {tags.map((tag) => (
            <div
              key={tag}
              className="font-bold capitalize text-[13px] leading-4.75 font-normal bg-card rounded-full border-sidebar-accent border px-4 py-2"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <p className="text-lg font-normal text-card-foreground leading-[29.3px] max-w-150">
            Chika Ikenga is the visionary founder and Group Managing Director of Eunisell. With over three decades of experience in the chemical and
            oil & gas sectors, he has steered Eunisell from a startup into Africa's leading chemical specialty company.
          </p>

          <p className="text-lg font-normal text-card-foreground leading-[29.3px] max-w-150">
            His leadership is defined by an uncompromising commitment to quality and a passion for industrial development. Under his guidance,
            Eunisell has pioneered several innovative solutions that have redefined performance standards in the Nigerian energy sector.
          </p>

          <p className="text-lg font-normal text-card-foreground leading-[29.3px] max-w-150">
            A graduate of Industrial Chemistry, Chika's technical background ensures that Eunisell remains at the forefront of chemical innovation,
            delivering tangible value to global energy partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroupManagingDirector;
