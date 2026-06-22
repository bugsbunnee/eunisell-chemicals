import React from 'react';

import Hero from '../components/features/technical-services/hero';
import NavBar from '../components/layout/navbar';
import LaboratoryInsight from '../components/features/technical-services/laboratory-insight';
import LaboratoryServices from '../components/features/technical-services/laboratory-services';
import AnalyticalExcellence from '../components/features/technical-services/analytical-excellence';
import FieldExcellence from '../components/features/technical-services/field-excellence';
import TechnicalWorkflow from '../components/features/technical-services/technical-workflow';
import IndustriesSupported from '../components/features/technical-services/industries-supported';
import Commitment from '../components/features/technical-services/commitment';
import Why from '../components/features/technical-services/why';
import RelatedSolutions from '../components/features/technical-services/related-solution';
import CTA from '../components/features/technical-services/cta';
import Footer from '../components/common/footer';

const TechnicalServicesPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <LaboratoryInsight />
      <LaboratoryServices />
      <AnalyticalExcellence />
      <FieldExcellence />
      <TechnicalWorkflow />
      <IndustriesSupported />
      <Commitment />
      <Why />
      <RelatedSolutions />
      <CTA />
      <Footer />
    </React.Fragment>
  );
};

export default TechnicalServicesPage;
