import React from 'react';
import ChemicalsHero from '../components/features/chemicals/hero';
import ChemicalsPortfolio from '../components/features/chemicals/portfolio';
import ChemicalsCategories from '../components/features/chemicals/categories';
import ChemicalsIndustrialFluids from '../components/features/chemicals/industrial-fluids';
import ChemicalsOilfieldFeature from '../components/features/chemicals/oilfield-feature';
import ChemicalsLabSupport from '../components/features/chemicals/lab-support';
import ChemicalsProcessSteps from '../components/features/chemicals/process-steps';
import ChemicalsCta from '../components/features/chemicals/cta';
import NavBar from '../components/layout/navbar';
import Footer from '../components/common/footer';

const ChemicalsPage: React.FC = () => (
  <React.Fragment>
    <NavBar />
    <ChemicalsHero />
    <ChemicalsPortfolio />
    <ChemicalsCategories />
    <ChemicalsIndustrialFluids />
    <ChemicalsOilfieldFeature />
    <ChemicalsLabSupport />
    <ChemicalsProcessSteps />
    <ChemicalsCta />
    <Footer />
  </React.Fragment>
);

export default ChemicalsPage;
