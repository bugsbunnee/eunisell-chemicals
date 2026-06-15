import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/home/hero';
import Solutions from '../components/features/home/solutions';
import Story from '../components/features/home/story';
import Services from '../components/features/home/services';
import Specialty from '../components/features/home/specialty';
import TechnicalExcellence from '../components/features/home/excellence';
import CriticalIndustries from '../components/features/home/industries';
import Why from '../components/features/home/why';
import Contact from '../components/features/home/contact';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Hero />

      <Solutions />

      <Story />

      <Services />

      <Specialty />

      <TechnicalExcellence />

      <CriticalIndustries />

      <Why />

      <Contact />
    </React.Fragment>
  );
};

export default HomePage;
