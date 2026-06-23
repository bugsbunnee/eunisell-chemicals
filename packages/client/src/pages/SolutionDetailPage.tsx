import React from 'react';

import NavBar from '../components/layout/navbar';
import IndustrialHero from '../components/features/solutions/industrial/hero';
import ValueProps from '../components/features/solutions/industrial/value-props';
import OperationalBenefits from '../components/features/solutions/industrial/operational-benefits';
import SpecializedCategories from '../components/features/solutions/industrial/specialized-categories';
import ApplicationAreas from '../components/features/solutions/industrial/application-areas';
import TechnicalAnalytical from '../components/features/solutions/industrial/technical-analytical';
import IndustriesServed from '../components/features/solutions/industrial/industries-served';
import DeliveryProcess from '../components/features/solutions/industrial/delivery-process';
import RelatedSolutions from '../components/features/solutions/industrial/related-solutions';
import ContactCta from '../components/features/solutions/industrial/contact-cta';
import Footer from '../components/common/footer';

const SolutionDetailPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <IndustrialHero />
      <ValueProps />
      <OperationalBenefits />
      <SpecializedCategories />
      <ApplicationAreas />
      <TechnicalAnalytical />
      <IndustriesServed />
      <DeliveryProcess />
      <RelatedSolutions />
      <ContactCta />
      <Footer />
    </React.Fragment>
  );
};

export default SolutionDetailPage;
