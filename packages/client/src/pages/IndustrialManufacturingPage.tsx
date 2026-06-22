import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/industrial-manufacturing/hero';
import Overview from '../components/features/industrial-manufacturing/overview';
import Goals from '../components/features/industrial-manufacturing/goals';
import Categories from '../components/features/industrial-manufacturing/categories';
import AppliedChemistry from '../components/features/industrial-manufacturing/applied-chemistry';
import TechnicalExcellence from '../components/features/industrial-manufacturing/technical-excellence';
import Industries from '../components/features/industrial-manufacturing/industries';
import SupplyChain from '../components/features/industrial-manufacturing/supply-chain';
import RelatedSolutions from '../components/features/industrial-manufacturing/related-solutions';
import Cta from '../components/features/industrial-manufacturing/cta';
import Footer from '../components/common/footer';

const IndustrialManufacturingPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Overview />
      <Goals />
      <Categories />
      <SupplyChain />
      <AppliedChemistry />
      <TechnicalExcellence />
      <Industries />
      <RelatedSolutions />
      <Cta />
      <Footer />
    </React.Fragment>
  );
};

export default IndustrialManufacturingPage;
