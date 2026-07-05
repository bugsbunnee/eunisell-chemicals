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
  { path: paths.cleaningHygiene, label: 'Cleaning & Hygiene' },
];

const CleaningHygienePage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Hero
        title="Cleaning & Hygiene"
        crumbs={crumbs}
        image="/cleaning-hygiene/hero.svg"
        imageAlt="Industrial chemical manufacturing facility at twilight"
        description="We provide high-quality Cleaning & Hygiene chemical solutions designed to promote safe, clean, and healthy environments across industrial, commercial, and institutional sectors. Our range of effective cleaning, sanitizing, and maintenance products is formulated to deliver superior performance while supporting operational efficiency, regulatory compliance, and sustainable hygiene practices. Backed by technical expertise and a commitment to quality, Eunisell helps organizations maintain the highest standards of cleanliness and workplace safety."
      />

      <TreatmentDetail
        title="General Cleaning Chemicals"
        description="Used to remove dirt, dust, grease, stains, and other contaminants from surfaces."
        image="/cleaning-hygiene/general-cleaning.svg"
        imageAlt="Cleaning chemical solutions in laboratory containers"
        cardTitle="Used to remove dirt, dust, grease, stains, and other contaminants from surfaces."
        items={['All-purpose cleaners', 'Floor cleaners', 'Glass cleaners', 'Degreasers', 'Carpet and upholstery cleaners', 'Surface cleaners']}
        mutedCardTitle
      />

      <ChemicalShowcase
        legend="Disinfection and Sanitization"
        title="Disinfection and Sanitization"
        description="These chemicals help eliminate or reduce harmful microorganisms such as bacteria, viruses, and fungi."
        items={['Disinfectants', 'Sanitizers', 'Antimicrobial cleaners', 'Hand sanitizers', 'Surface sanitizing solutions']}
        image="/cleaning-hygiene/disinfection.svg"
        imageAlt="Disinfection and sanitization products in a professional setting"
      />

      <ChemicalSplit
        legend="Industrial and Institutional Cleaning"
        title="Industrial and Institutional Cleaning"
        description="Specialized chemicals for heavy-duty cleaning in industries, factories, healthcare facilities, and commercial establishments."
        items={['Industrial degreasers', 'Equipment cleaners', 'CIP (Clean-in-Place) chemicals', 'Boiler and heat exchanger cleaning chemicals', 'Tank cleaning chemicals']}
        images={[{ src: '/cleaning-hygiene/industrial-cleaning.svg', alt: 'Industrial cleaning in progress', caption: 'Industrial and Institutional Cleaning' }]}
        imagePosition="left"
      />

      <ChemicalShowcase
        legend="Food and Beverage Hygiene"
        title="Food and Beverage Hygiene"
        description="Products used to maintain hygiene in food processing and catering environments."
        items={['Food-safe sanitizers', 'CIP detergents', 'Bottle and container cleaners', 'Dairy plant cleaning chemicals', 'Brewery cleaning solutions']}
        image="/cleaning-hygiene/food-beverage.svg"
        imageAlt="Hygienic food and beverage processing environment"
      />

      <TreatmentDetail
        title="Healthcare and Pharmaceutical Hygiene"
        description="Specialized products for environments requiring strict infection control."
        image="/cleaning-hygiene/healthcare.svg"
        imageAlt="Sterile healthcare environment"
        cardTitle="Specialized products for environments requiring strict infection control."
        items={['Hospital-grade disinfectants', 'Surgical instrument cleaners', 'Sterilization chemicals', 'Medical surface sanitizers']}
        mutedCardTitle
      />

      <ChemicalSplit
        legend="Water Hygiene and Treatment"
        title="Water Hygiene and Treatment"
        description="Chemicals that help maintain hygienic water systems."
        items={['Chlorination chemicals', 'Biocides', 'Water disinfectants', 'Cooling tower treatment chemicals', 'Legionella control chemicals']}
        images={[{ src: '/cleaning-hygiene/water-hygiene.svg', alt: 'Hygienic water system treatment', caption: 'Water Hygiene and Treatment' }]}
        imagePosition="right"
      />

      <KnowledgeCenter />

      <Cta />

      <Footer />
    </React.Fragment>
  );
};

export default CleaningHygienePage;
