import React from 'react';
import NavBar from '../components/layout/navbar';
import Hero from '../components/features/partners/hero';
import Ecosystem from '../components/features/partners/ecosystem';
import PartnersGrid from '../components/features/partners/partners-grid';
import Value from '../components/features/partners/value';
import GlobalReach from '../components/features/partners/global-reach';
import Cta from '../components/features/partners/cta';
import KnowledgeCenter from '../components/features/about/knowledge-center';
import Footer from '../components/common/footer';

const PartnersPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Ecosystem />
      <PartnersGrid />
      <Value />
      <GlobalReach />
      <KnowledgeCenter />
      <Cta />
      <Footer />
    </React.Fragment>
  );
};

export default PartnersPage;
