import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/water-solutions/hero';
import TreatmentDetail from '../components/features/water-solutions/treatment-detail';
import ChemicalShowcase from '../components/features/water-solutions/chemical-showcase';
import ChemicalSplit from '../components/features/water-solutions/chemical-split';
import KnowledgeCenter from '../components/features/about/knowledge-center';
import Cta from '../components/features/water-solutions/cta';
import Footer from '../components/common/footer';

import waterTreatmentBrochurePdf from '../assets/documents/water-treatment-brochure.pdf';

const WaterSolutionsPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Hero
        title="Water Solutions"
        description="We deliver advanced Water Solution Chemicals that help industries optimize water quality, protect critical infrastructure, and improve operational efficiency. Our comprehensive range of water treatment chemicals is designed to control corrosion, scaling, fouling, and microbial growth across industrial water systems. Backed by technical expertise and tailored application support, Eunisell provides reliable, sustainable solutions that enhance system performance, extend equipment life, and ensure compliance with industry standards."
      />

      <TreatmentDetail
        title="Water Treatment Chemicals"
        description="Used to improve water quality by removing contaminants and ensuring water is safe for its intended use."
        image="/water-solutions/water-treatment.svg"
        imageAlt="Technical blue liquid in glass laboratory flask"
        cardTitle="Used to improve water quality by removing contaminants and ensuring water is safe for its intended use."
        items={['Coagulants', 'Flocculants', 'pH adjustment chemicals', 'Disinfectants', 'Activated carbon and filtration aids']}
      />

      <ChemicalShowcase
        legend="Boiler Water Chemicals"
        title="Boiler Water Chemicals"
        description="Used to protect boilers and steam systems from corrosion, scaling, and fouling."
        items={['Oxygen scavengers', 'Corrosion inhibitors', 'Scale inhibitors', 'Alkalinity builders', 'Antimicrobial cleaners', 'Condensate treatment chemicals']}
        image="/water-solutions/boiler.svg"
        imageAlt="Chemist in a high-tech laboratory using advanced analytical equipment"
      />

      <ChemicalSplit
        legend="Cooling Water Treatment Chemicals"
        title="Cooling Water Treatment Chemicals"
        description="Designed to maintain cooling towers and heat exchange systems."
        items={['Corrosion inhibitors', 'Scale inhibitors', 'Biocides', 'Dispersants', 'Anti-foaming agents']}
        images={[{ src: '/water-solutions/cooling.svg', alt: 'Cooling water treatment gauge', caption: 'Industrial and Institutional Cleaning' }]}
        imagePosition="left"
      />

      <ChemicalShowcase
        legend="Membrane Treatment Chemicals"
        title="Reverse Osmosis (RO) and Membrane Treatment Chemicals"
        description="Used in desalination and water purification systems."
        items={['Antiscalants', 'pH conditioners', 'Membrane cleaners', 'Biofouling control chemicals', 'Dechlorination chemicals']}
        image="/water-solutions/membrane.svg"
        imageAlt="Reverse osmosis membrane modules in a water purification plant"
      />

      <TreatmentDetail
        title="Wastewater Treatment Chemicals"
        description="Applied in industrial and municipal wastewater treatment."
        image="/water-solutions/wastewater.svg"
        imageAlt="Wastewater samples in laboratory beakers"
        cardTitle="Applied in industrial and municipal wastewater treatment."
        items={['Coagulants and flocculants', 'Dewatering aids', 'Odor control chemicals', 'Nutrient removal chemicals', 'Heavy metal precipitation agents']}
        mutedCardTitle
      />

      <ChemicalSplit
        legend="Potable Water Chemicals"
        title="Potable Water Chemicals"
        description="Chemicals that help maintain hygienic water systems."
        items={['Disinfectants', 'Fluoridation chemicals', 'Corrosion control chemicals', 'Taste and odor control agents']}
        images={[{ src: '/water-solutions/potable.svg', alt: 'Clean drinking water pouring into a glass' }]}
        imagePosition="right"
      />

      <ChemicalSplit
        legend="Industrial Process Water Chemicals"
        title="Industrial Process Water Chemicals"
        description="Used in manufacturing plants where water is part of the production process."
        items={['Process additives', 'Corrosion inhibitors', 'Scale control agents', 'Water softening chemicals']}
        images={[
          { src: '/water-solutions/process-water-1.svg', alt: 'Corroded industrial pipe cross-section before treatment' },
          { src: '/water-solutions/process-water-2.svg', alt: 'Scaled industrial pipe cross-section' },
        ]}
        imagePosition="left"
      />

      <KnowledgeCenter />

      <Cta secondaryCta={{ label: 'Download Brochure', file: waterTreatmentBrochurePdf, fileName: 'Eunisell-Water-Treatment-Brochure.pdf' }} />

      <Footer />
    </React.Fragment>
  );
};

export default WaterSolutionsPage;
