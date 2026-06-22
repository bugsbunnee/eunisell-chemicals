import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/industries-served/hero';
import Operations from '../components/features/industries-served/operations';
import Footer from '../components/common/footer';
import PrimarySector from '../components/features/industries-served/primary-sector';
import ManufacturingSector from '../components/features/industries-served/manufacturing-sector';
import PowerGeneration from '../components/features/industries-served/power-generation';
import Infrastructure from '../components/features/industries-served/infrastructure';
import Offshore from '../components/features/industries-served/offshore';
import Matrix from '../components/features/industries-served/matrix';
import LaboratoryExcellence from '../components/features/industries-served/laboratory-excellence';
import Advantage from '../components/features/industries-served/advantage';
import Solutions from '../components/features/industries-served/solutions';
import CTA from '../components/features/industries-served/cta';

const IndustriesServedPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Operations />
      <PrimarySector />
      <ManufacturingSector />
      <PowerGeneration />
      <Infrastructure />
      <Offshore />
      <Matrix />
      <LaboratoryExcellence />
      <Advantage />
      <Solutions />
      <CTA />
      <Footer />
    </React.Fragment>
  );
};

export default IndustriesServedPage;
