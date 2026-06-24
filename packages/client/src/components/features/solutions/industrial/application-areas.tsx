import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

const waterTreatmentImg = 'https://www.figma.com/api/mcp/asset/3e7601d3-33d3-48e7-824e-abdadc8408ee';
const plantMaintenanceImg = 'https://www.figma.com/api/mcp/asset/23dbeef2-4774-4f7f-bd44-8836d4c650ef';
const manufacturingImg = 'https://www.figma.com/api/mcp/asset/eff420a0-cc4c-4aac-bfc1-8347d71431f6';
const infrastructureImg = 'https://www.figma.com/api/mcp/asset/888343eb-7753-4b4d-981d-f4d217850f56';

const areas = [
  { title: 'Water Treatment', image: waterTreatmentImg },
  { title: 'Plant Maintenance', image: plantMaintenanceImg },
  { title: 'Manufacturing Processes', image: manufacturingImg },
  { title: 'Infrastructure', image: infrastructureImg },
];

const VISIBLE = 3;

const ApplicationAreas: React.FC = () => {
  const [index, setIndex] = useState(0);
  const max = areas.length - VISIBLE;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  return (
    <section className="bg-card py-24 px-30">
      <div className="flex flex-col gap-16">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-4 text-left">
            <h3 className="font-bold text-accent text-[30px] leading-9">Application Areas</h3>
            <p className="text-[#777] text-[16px] leading-6">Broad-spectrum chemical applications across the manufacturing value chain.</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-12 h-12 rounded-full border border-[#e8e8e8] flex items-center justify-center hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeftIcon size={14} className="text-accent" />
            </button>
            <button
              onClick={next}
              disabled={index === max}
              className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRightIcon size={14} className="text-white" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(calc(-${index} * (100% + 1.5rem) / ${VISIBLE}))` }}
          >
            {areas.map(({ title, image }) => (
              <div
                key={title}
                className="bg-white rounded-[8px] overflow-hidden shadow-sm flex flex-col flex-shrink-0 text-left"
                style={{ width: `calc((100% - ${VISIBLE - 1} * 1.5rem) / ${VISIBLE})` }}
              >
                <div className="h-64 overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h6 className="font-bold text-accent text-[20px] leading-7">{title}</h6>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-[0.082px] hover:text-secondary/80 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationAreas;
