import React from 'react';
import NavBar from '../components/layout/navbar';
import Hero from '../components/features/industrial/hero';
import Overview from '../components/features/industrial/overview';
import Goals from '../components/features/industrial/goals';
import Categories from '../components/features/industrial/categories';
import AppliedChemistry from '../components/features/industrial/applied-chemistry';
import TechnicalExcellence from '../components/features/industrial/technical-excellence';
import Industries from '../components/features/industrial/industries';
import SupplyChain from '../components/features/industrial/supply-chain';
import RelatedSolutions from '../components/features/industrial/related-solutions';
import Cta from '../components/features/industrial/cta';

const IndustrialPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Overview />
      <Goals />
      <Categories />
      <AppliedChemistry />
      <TechnicalExcellence />
      <Industries />
      <SupplyChain />
      <RelatedSolutions />
      <Cta />
    </React.Fragment>
  );
};

export default IndustrialPage;
