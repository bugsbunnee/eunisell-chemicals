import React from 'react';
import NavBar from '../components/layout/navbar';
import Hero from '../components/features/brochures/hero';
import BrochureLibrary from '../components/features/brochures/library';
import Cta from '../components/features/brochures/cta';
import KnowledgeCenter from '../components/features/about/knowledge-center';
import Footer from '../components/common/footer';

const BrochuresPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <BrochureLibrary />
      <KnowledgeCenter />
      <Cta />
      <Footer />
    </React.Fragment>
  );
};

export default BrochuresPage;
