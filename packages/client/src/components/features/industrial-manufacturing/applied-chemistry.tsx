import React from 'react';
import ImageCard from '../../common/image-card';

const areas = [
  {
    title: 'Aluminium Can Processing',
    description:
      'Eunisell provides specialised chemical solutions for aluminium can manufacturing, helping producers improve efficiency, product quality, and operational reliability.',
    hoverDescription:
      'Our portfolio includes cupper lubricants, bodymaker coolants, cleaners, conversion coatings, and mobility enhancers, all designed to support high-speed production while reducing maintenance, extending tool life, and promoting more sustainable operations. Backed by process control equipment and dedicated technical support, we deliver integrated solutions that help manufacturers optimise performance, minimise chemical consumption, and maintain consistent production quality.',
    image: '/industrial-manufacturing/applied/aluminium-can.jpg',
  },
  {
    title: 'Food & Beverage Chemicals',
    description:
      'Eunisell provides specialised process and chemical solutions that help food and beverage manufacturers maintain product quality, operational efficiency, and the highest hygiene standards.',
    hoverDescription:
      'Our solutions include Clean-in-Place (CIP) and Clean-out-of-Place (COP) systems, membrane regeneration solutions, conveyor lubrication solutions, bottle treatment solutions and process cleaning chemicals. Backed by technical expertise and reliable support, we help manufacturers optimise production, improve equipment performance, minimise downtime and ensure compliance with industry quality and food safety standards.',
    image: '/industrial-manufacturing/applied/food-beverage.jpg',
  },
  {
    title: 'Cleaning and Hygiene Chemicals',
    description:
      'Eunisell offers a comprehensive range of cleaning and hygiene chemicals designed to maintain safe, clean, and hygienic environments across industrial, commercial, and institutional facilities.',
    hoverDescription:
      'Our solutions deliver effective cleaning, sanitation, and disinfection while supporting regulatory compliance, operational efficiency, and the protection of people, equipment, and assets.',
    image: '/industrial-manufacturing/applied/cleaning-hygiene.jpg',
  },
  {
    title: 'Refinery Chemicals',
    description:
      'Eunisell provides a comprehensive range of high-performance refinery chemicals designed to optimize refining processes, improve operational efficiency, and protect critical assets.',
    hoverDescription:
      'Our solutions help refineries maximize throughput, enhance product quality, mitigate corrosion and fouling, and ensure reliable, cost-effective operations while supporting compliance with industry standards and environmental regulations.',
    image: '/industrial-manufacturing/applied/refinery.jpg',
  },
  {
    title: 'Specialized Lubricants',
    description:
      'Eunisell delivers a broad range of specialized lubricant chemicals designed to provide superior protection, reduce friction, and enhance equipment performance under demanding operating conditions.',
    hoverDescription:
      'Our solutions improve reliability, minimize wear, extend maintenance intervals, and maximize the operational life of industrial machinery across diverse sectors.',
    image: '/industrial-manufacturing/applied/lubricants.jpg',
  },
  {
    title: 'Construction Chemicals',
    description:
      'Eunisell offers a comprehensive range of high-performance construction chemicals designed to enhance the strength, durability, and longevity of concrete and building structures.',
    hoverDescription:
      'Our solutions support every stage of construction—from mixing and placement to protection and repair—helping improve performance, accelerate project delivery, and ensure long-term structural integrity across residential, commercial, and industrial applications.',
    image: '/industrial-manufacturing/applied/construction.jpg',
  },
  {
    title: 'Marine Chemicals',
    description: 'Eunisell supplies high-performance marine chemicals engineered to support safe, efficient, and compliant vessel operations.',
    hoverDescription:
      'Our portfolio includes solutions for water treatment, cleaning, maintenance, fuel treatment, and equipment protection, helping ship operators improve operational reliability, reduce maintenance costs, and extend the service life of critical marine systems.',
    image: '/industrial-manufacturing/applied/marine.jpg',
  },
  {
    title: 'Water Treatment Chemicals',
    description:
      'Eunisell provides a comprehensive range of high-performance water treatment chemicals designed to improve water quality, protect critical assets, and optimize system performance.',
    hoverDescription:
      'Our solutions help prevent corrosion, scaling, fouling, and microbial growth, ensuring efficient, reliable, and sustainable operations across industrial, commercial, and utility applications.',
    image: '/industrial-manufacturing/applied/water-treatment.jpg',
  },
  {
    title: 'Metal Cleaning Chemicals',
    description: 'Eunisell offers advanced metal cleaning chemicals formulated to effectively remove oils, grease, scale, rust, and other contaminants from metal surfaces.',
    hoverDescription:
      'Our solutions improve surface cleanliness, enhance production efficiency, and prepare components for subsequent manufacturing, coating, or finishing processes while protecting equipment and extending asset life.',
    image: '/industrial-manufacturing/applied/metal-cleaning.jpg',
  },
];

const banner = {
  title: 'Industrial Chemicals',
  description:
    'Eunisell supplies a broad portfolio of high-performance industrial chemicals that support efficient manufacturing, processing, and maintenance operations across multiple industries.',
  hoverDescription:
    'Our solutions are engineered to enhance productivity, improve process efficiency, protect critical equipment, and help customers achieve reliable, cost-effective, and sustainable operational performance.',
  image: '/industrial-manufacturing/applied/industrial.jpg',
};

const AppliedChemistry: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-24 md:py-24 bg-background">
      <h2 className="text-[24px] md:text-4xl leading-7.5 md:leading-10 text-accent text-center md:mx-auto">Applied Chemistry</h2>

      {/* Mobile: 2×2 grid (first 4 only) */}
      <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
        {areas.slice(0, 4).map((area) => (
          <ImageCard key={area.title} {...area} className="h-50" />
        ))}
      </div>

      {/* Desktop: 3-col grid (all 9) plus wide banner */}
      <div className="hidden md:grid grid-cols-3 gap-8 mt-16">
        {areas.map((area) => (
          <ImageCard key={area.title} {...area} className="h-100" />
        ))}

        <ImageCard {...banner} className="col-span-3 h-100" />
      </div>
    </section>
  );
};

export default AppliedChemistry;
