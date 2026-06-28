import React from 'react';
import PortfolioItem from './portfolio-item';
import { paths } from '../../../lib/data';

const portfolios = [
  {
    id: '01',
    title: 'Industrial & Manufacturing Chemicals',
    description: 'Solutions that support production efficiency and product quality across diverse manufacturing operations.',
    image: '/solutions/manufacturing.svg',
    path: paths.industrial,
  },
  {
    id: '02',
    title: 'Oilfield Chemicals',
    description: 'Specialty chemical solutions for production optimization, asset integrity, and flow assurance.',
    image: '/solutions/chemicals.svg',
    path: paths.contact,
  },
  {
    id: '03',
    title: 'Chemical Blending',
    description: 'Custom blending solutions engineered for precision, performance, and specific local requirements.',
    image: '/solutions/blending.svg',
    path: paths.contact,
  },
  {
    id: '04',
    title: 'Supply & Distribution',
    description: 'Reliable supply of industrial and specialty chemicals across our extensive African network.',
    image: '/solutions/supply.svg',
    path: paths.contact,
  },
  {
    id: '05',
    title: 'Laboratory Testing',
    description: 'Advanced analytical testing, compatibility studies, and performance evaluations.',
    image: '/solutions/lab.svg',
    path: paths.contact,
  },
  {
    id: '06',
    title: 'Technical Services',
    description: 'Engineering consultation, process optimization, and custom programme design.',
    image: '/solutions/technical-services.svg',
    path: paths.contact,
  },
];

const Portfolios: React.FC = () => {
  return (
    <section id="portfolios" className="bg-accent-bg">
      {/* Mobile */}
      <div className="md:hidden px-6 py-20 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-secondary text-[12px] uppercase font-black tracking-[3px]">Core Portfolios</span>
          <h2 className="text-[32px] leading-10 text-accent font-bold">Complete End-to-End Capabilities</h2>
        </div>
        <div className="flex flex-col gap-6">
          {portfolios.map((portfolio) => (
            <PortfolioItem key={portfolio.id} legend={portfolio.id} image={portfolio.image} path={portfolio.path} title={portfolio.title} description={portfolio.description} />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-23.5 px-20">
        <div className="text-[10px] text-secondary uppercase font-black">core portfolios</div>
        <h2 className="mx-auto max-w-127 text-accent font-bold capitalize text-5xl my-4">Complete End-to-End Capabilities</h2>
        <div className="mt-20 grid grid-cols-3 gap-11.25">
          {portfolios.map((portfolio) => (
            <PortfolioItem key={portfolio.id} legend={portfolio.id} image={portfolio.image} path={portfolio.path} title={portfolio.title} description={portfolio.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
