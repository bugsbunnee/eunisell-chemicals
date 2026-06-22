import React from 'react';
import NavBar from '../components/layout/navbar';
import Hero from '../components/features/contact/hero';
import SpecializedDepartments from '../components/features/contact/departments';
import SolutionRequest from '../components/features/contact/solution-request';
import RegionalOperations from '../components/features/contact/regional-operations';
import GeographicPresence from '../components/features/contact/geographic-presence';
import FAQ from '../components/features/contact/faq';
import CTA from '../components/features/contact/cta';
import Footer from '../components/common/footer';

const ContactPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <SpecializedDepartments />
      <SolutionRequest />
      <RegionalOperations />
      <GeographicPresence />
      <FAQ />
      <CTA />
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
