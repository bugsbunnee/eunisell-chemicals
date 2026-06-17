import React from 'react';

import Hero from '../components/features/oilfield-chenicals/hero';
import NavBar from '../components/layout/navbar';
import Optimization from '../components/features/oilfield-chenicals/optimization';
import Performance from '../components/features/oilfield-chenicals/performance';
import Portfolio from '../components/features/oilfield-chenicals/portfolio';
import ProductionChemicals from '../components/features/oilfield-chenicals/production-chemicals';
import FlowAssurance from '../components/features/oilfield-chenicals/flow-assurance';
import IntegratedApplication from '../components/features/oilfield-chenicals/integrated-applications';
import TechnicalSupport from '../components/features/oilfield-chenicals/technical-support';
import CTA from '../components/features/oilfield-chenicals/cta';

const OilfieldChemicalsPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Optimization />
      <Performance />
      <Portfolio />
      <ProductionChemicals />
      <FlowAssurance />
      <IntegratedApplication />
      <TechnicalSupport />
      <CTA />
    </React.Fragment>
  );
};

export default OilfieldChemicalsPage;
