import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Understand',
    description: 'Detailed audit of operational requirements.',
  },
  {
    number: '2',
    title: 'Assess',
    description: 'Laboratory analysis of existing fluids and conditions.',
  },
  {
    number: '3',
    title: 'Recommend',
    description: 'Customized chemical program proposal.',
  },
  {
    number: '4',
    title: 'Support',
    description: 'Seamless implementation and technical training.',
  },
  {
    number: '5',
    title: 'Monitor',
    description: 'Ongoing optimization and data-backed reviews.',
  },
];

const ChemicalsProcessSteps: React.FC = () => {
  return (
    <section className="bg-background p-30">
      <div className="max-w-360 mx-auto flex flex-col gap-20">
        <h2 className="font-bold text-accent text-[32px] leading-12 text-center w-full">Our Chemical Management Process</h2>

        <div className="relative grid grid-cols-5 justify-center">
          <div className="absolute h-px bg-input left-[5%] right-[5%] top-6" />

          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex flex-col gap-6 items-center min-w-0 relative">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 z-10">
                <span className="font-bold text-white text-[16px] leading-6">{number}</span>
              </div>

              <div className="flex flex-col gap-1.75 items-center">
                <h5 className="font-bold text-accent text-[16px] leading-6 text-center">{title}</h5>
                <p className="text-[#777] text-[13px] leading-[19.5px] text-center">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChemicalsProcessSteps;
