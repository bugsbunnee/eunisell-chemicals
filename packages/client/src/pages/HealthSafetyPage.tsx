import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/health-safety/hero';
import PolicyStatement from '../components/features/health-safety/policy-statement';
import Implementation from '../components/features/health-safety/implementation';
import Assurance from '../components/features/health-safety/assurance';
import CTA from '../components/features/health-safety/cta';
import Footer from '../components/common/footer';

const HealthSafetyPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <PolicyStatement />
      <Implementation />
      <Assurance />
      <CTA />
      <Footer />
    </React.Fragment>
  );
};

export default HealthSafetyPage;
