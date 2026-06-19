import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/about/hero';
import Biography from '../components/features/about/biography';
import Statements from '../components/features/about/statements';
import Specialty from '../components/features/about/specialty';
import Services from '../components/features/about/services';
import KnowledgeCenter from '../components/features/about/knowledge-center';
import CTA from '../components/features/about/cta';
import Process from '../components/features/about/process';
import Why from '../components/features/about/why';
import Imagery from '../components/features/about/imagery';
import Footer from '../components/common/footer';

const AboutPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Biography />
      <Statements />
      <Specialty />
      <Services />
      <KnowledgeCenter />
      <Imagery />
      <Process />
      <Why />
      <CTA />
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
