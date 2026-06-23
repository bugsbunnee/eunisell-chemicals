import React from 'react';
import Hero from '../components/features/solutions/hero';
import NavBar from '../components/layout/navbar';
import How from '../components/features/solutions/how';
import Portfolios from '../components/features/solutions/portfolios';
import Upstream from '../components/features/solutions/upstream';
import TechnicalExcellence from '../components/features/solutions/technical-excellence';
import DeliveryFramework from '../components/features/solutions/delivery-framework';
import SolutionsCta from '../components/features/solutions/solutions-cta';
import Footer from '../components/common/footer';

const SolutionsPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <How />
      <Portfolios />
      <Upstream />
      <TechnicalExcellence />
      <DeliveryFramework />
      <SolutionsCta />
      <Footer />
    </React.Fragment>
  );
};

export default SolutionsPage;
