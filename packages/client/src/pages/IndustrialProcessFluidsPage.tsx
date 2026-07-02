import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/industrial-process-fluids/hero';
import Overview from '../components/features/industrial-process-fluids/overview';
import Benefits from '../components/features/industrial-process-fluids/benefits';
import Portfolio from '../components/features/industrial-process-fluids/portfolio';
import ApplicationAreas from '../components/features/industrial-process-fluids/application-areas';
import FluidSelection from '../components/features/industrial-process-fluids/fluid-selection';
import Industries from '../components/features/industrial-process-fluids/industries';
import Lifecycle from '../components/features/industrial-process-fluids/lifecycle';
import KnowledgeCenter from '../components/features/about/knowledge-center';
import Cta from '../components/features/industrial-process-fluids/cta';
import Footer from '../components/common/footer';

const IndustrialProcessFluidsPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Overview />
      <Benefits />
      <Portfolio />
      <ApplicationAreas />
      <FluidSelection />
      <Industries />
      <Lifecycle />
      <KnowledgeCenter />
      <Cta />
      <Footer />
    </React.Fragment>
  );
};

export default IndustrialProcessFluidsPage;
