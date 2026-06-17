import React from 'react';
import Hero from '../components/features/solutions/hero';
import NavBar from '../components/layout/navbar';
import How from '../components/features/solutions/how';
import Portfolios from '../components/features/solutions/portfolios';
import Upstream from '../components/features/solutions/upstream';

const SolutionsPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <How />
      <Portfolios />
      <Upstream />
    </React.Fragment>
  );
};

export default SolutionsPage;
