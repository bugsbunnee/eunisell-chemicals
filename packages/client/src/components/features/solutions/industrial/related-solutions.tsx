import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const oilfieldImg = 'https://www.figma.com/api/mcp/asset/af84e169-e472-48ce-b3f8-2efd9ba03636';
const blendingImg = 'https://www.figma.com/api/mcp/asset/99928bc9-9111-40cc-8879-ac573bf61d83';
const supplyImg = 'https://www.figma.com/api/mcp/asset/4427df5a-f927-42c4-b9e1-538c77c34493';
const labImg = 'https://www.figma.com/api/mcp/asset/e670baba-25eb-4f89-bb15-87b961f2ebb4';

const solutions = [
  { title: 'Oilfield Chemicals', description: 'Drilling, completion and production chemistry.', image: oilfieldImg, href: '#' },
  { title: 'Chemical Blending', description: 'Customized formulation and toll blending.', image: blendingImg, href: '#' },
  { title: 'Supply & Distribution', description: 'Secure supply chain and bulk chemical delivery.', image: supplyImg, href: '#' },
  { title: 'Laboratory Services', description: 'Precision testing and analytical expertise.', image: labImg, href: '#' },
];

const RelatedSolutions: React.FC = () => (
  <section className="bg-card py-24 px-30 text-left">
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
              <p className="text-[#777] text-[14px] leading-5">{description}</p>
              <a
                href={href}
                className="flex items-center gap-2 text-secondary font-bold text-[12px] uppercase tracking-[0.082px] mt-2 hover:text-secondary/80 transition-colors"
              >
                View Solution
                <ArrowRightIcon size={10} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedSolutions;
