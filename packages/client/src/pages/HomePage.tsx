import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/home/hero';
import Story from '../components/features/home/story';
import Services from '../components/features/home/services';
import TechnicalExcellence from '../components/features/home/excellence';
import CriticalIndustries from '../components/features/home/industries';
import Why from '../components/features/home/why';
import Contact from '../components/features/home/contact';
import OurChemicals from '../components/features/home/our-chemicals';
import Footer from '../components/common/footer';
import KnowledgeCenter from '../components/features/about/knowledge-center';
import Network from '../components/features/home/network';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Hero />

      <OurChemicals />

      <Story />

      <Services />

      <TechnicalExcellence />

      <CriticalIndustries />

      <KnowledgeCenter />

      <Why />

      <Network />

      <Contact />

      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
