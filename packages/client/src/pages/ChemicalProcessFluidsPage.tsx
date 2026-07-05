import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/water-solutions/hero';
import TreatmentDetail from '../components/features/water-solutions/treatment-detail';
import ChemicalShowcase from '../components/features/water-solutions/chemical-showcase';
import ChemicalSplit from '../components/features/water-solutions/chemical-split';
import KnowledgeCenter from '../components/features/about/knowledge-center';
import Cta from '../components/features/water-solutions/cta';
import Footer from '../components/common/footer';

import { paths } from '../lib/data';

const crumbs = [
  { path: paths.home, label: 'Home' },
  { path: paths.chemicals, label: 'Our Chemicals' },
  { path: paths.processFluids, label: 'Industrial Process Fluids' },
];

const ChemicalProcessFluidsPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Hero
        title="Industrial Process Fluids"
        crumbs={crumbs}
        image="/process-fluids/hero.svg"
        imageAlt="Industrial chemical manufacturing facility at twilight"
        description="Our Industrial Process Fluids are carefully formulated to lubricate, cool, clean, and protect equipment. It optimizes operational efficiency and extend machinery lifespan."
      />

      <TreatmentDetail
        title="Heat Transfer Fluids"
        description="Our heat transfer fluids are engineered to deliver efficient and reliable thermal energy transfer across a wide range of industrial applications."
        image="/process-fluids/heat-transfer.svg"
        imageAlt="Technical blue liquid in glass laboratory flask"
        cardTitle="Designed for excellent thermal stability and long service life, they help optimize process efficiency, reduce maintenance requirements, and ensure consistent system performance under demanding operating conditions."
        items={['Thermal fluids', 'Glycol-based fluids', 'Water-based heat transfer fluids', 'Molten salts']}
        mutedCardTitle
      />

      <ChemicalShowcase
        legend="Metalworking Fluids"
        title="Metalworking Fluids"
        description="Our metalworking fluids are formulated to enhance machining performance by providing superior cooling, lubrication, and corrosion protection. Suitable for a variety of cutting, grinding, and forming operations, they improve tool life, surface finish, and production efficiency while supporting safe and sustainable manufacturing practices."
        items={['Cutting fluids', 'Grinding fluids', 'Rolling fluids', 'Quenching fluids']}
        image="/process-fluids/metalworking.svg"
        imageAlt="Chemist in a high-tech laboratory using advanced analytical equipment"
      />

      <ChemicalSplit
        legend="Water Treatment Chemicals and Fluids"
        title="Water Treatment Chemicals and Fluids"
        description="Eunisell offers a comprehensive range of water treatment chemicals and specialty fluids that protect industrial water systems from corrosion, scaling, fouling, and microbial contamination. Our solutions improve water quality, maximize equipment reliability, extend asset life, and enhance operational efficiency across cooling, boiler, and process water systems."
        items={[
          'Boiler water treatment chemicals',
          'Cooling water treatment chemicals',
          'Reverse osmosis treatment chemicals',
          'Corrosion and scale inhibitors',
          'Anti-foaming agents',
        ]}
        images={[{ src: '/process-fluids/water-treatment.svg', alt: 'Industrial water treatment system' }]}
        imagePosition="left"
      />

      <ChemicalShowcase
        legend="Process Chemicals"
        title="Process Chemicals"
        description="Eunisell's process chemicals are developed to optimize industrial processes, improve product quality, and enhance operational performance. Tailored to meet specific production requirements, our solutions help increase process efficiency, protect equipment integrity, ensure regulatory compliance, and support reliable operations across diverse industries."
        items={['Solvents', 'Acids and alkalis', 'Chemical intermediates', 'Catalysts and catalyst carriers']}
        image="/process-fluids/process-chemicals.svg"
        imageAlt="Process chemicals in an industrial laboratory"
      />

      <TreatmentDetail
        title="Refrigeration and Cooling Fluids"
        description="We specially formulate refrigeration and cooling fluids to deliver efficient heat transfer, reliable temperature control, and long-lasting system protection across industrial and commercial cooling applications."
        image="/process-fluids/refrigeration.svg"
        imageAlt="Refrigeration and cooling fluid sample"
        cardTitle="Designed to minimize corrosion, scaling, and system wear, our high-performance fluids enhance equipment reliability, improve energy efficiency, and extend the operational life of refrigeration and cooling systems, ensuring consistent performance in demanding environments."
        items={['Refrigerants', 'Chilled water systems', 'Secondary refrigerants (brines and glycols)']}
        mutedCardTitle
      />

      <ChemicalSplit
        legend="Specialty Process Fluids"
        title="Specialty Process Fluids"
        description="Our specialty process fluids are engineered to meet the unique performance requirements of demanding industrial processes. Formulated for optimum efficiency, reliability, and equipment protection, these high-performance fluids support a wide range of applications by improving process stability, reducing wear, enhancing product quality, and minimizing operational downtime. Backed by Eunisell's technical expertise, our tailored solutions help customers achieve greater productivity and long-term operational excellence."
        items={['Dielectric fluids for electrical equipment', 'Transformer fluids', 'Food-grade process fluids', 'Pharmaceutical-grade process fluids']}
        images={[{ src: '/process-fluids/specialty.svg', alt: 'Specialty process fluids equipment' }]}
        imagePosition="right"
      />

      <KnowledgeCenter />

      <Cta />

      <Footer />
    </React.Fragment>
  );
};

export default ChemicalProcessFluidsPage;
