import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { paths } from '../../../../lib/data';

const oilfieldImg = '/solution-detail/related-oilfield.png';
const blendingImg = '/solution-detail/related-blending.png';
const supplyImg = '/solution-detail/related-supply.png';
const labImg = '/solution-detail/related-lab.png';

const solutions = [
  { title: 'Oilfield Chemicals', description: 'Drilling, completion and production chemistry.', image: oilfieldImg, href: paths.oilfield },
  { title: 'Chemical Blending', description: 'Customized formulation and toll blending.', image: blendingImg, href: paths.chemicals },
  { title: 'Supply & Distribution', description: 'Secure supply chain and bulk chemical delivery.', image: supplyImg, href: paths.solutions },
  { title: 'Laboratory Services', description: 'Precision testing and analytical expertise.', image: labImg, href: paths.technical },
];

const RelatedSolutions: React.FC = () => (
  <section className="hidden md:block bg-card py-24 px-30 text-left">
    <div className="flex flex-col gap-12">
      <h3 className="font-bold text-accent text-[24px] leading-8">Related Solutions</h3>

      <div className="grid grid-cols-4 gap-6">
        {solutions.map(({ title, description, image, href }) => (
          <div key={title} className="bg-white flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h6 className="font-bold text-accent text-[16px] leading-6">{title}</h6>
              <p className="text-[#777] text-sm leading-5">{description}</p>
              <Link to={href} className="flex items-center gap-2 text-secondary font-bold text-[12px] uppercase tracking-[0.082px] mt-2 hover:text-secondary/80 transition-colors">
                View Solution
                <ArrowRightIcon size={10} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedSolutions;
