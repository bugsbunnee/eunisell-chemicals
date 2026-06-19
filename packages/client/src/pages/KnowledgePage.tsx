import React from 'react';
import NavBar from '../components/layout/navbar';
import Hero from '../components/features/knowledge/hero';
import Featured from '../components/features/knowledge/featured';
import Resources from '../components/features/knowledge/resources';
import Topics from '../components/features/knowledge/topics';
import Cta from '../components/features/knowledge/cta';
import Insights from '../components/features/knowledge/insights';
import Stats from '../components/features/knowledge/stats';
import Newsletter from '../components/features/knowledge/newsletter';

const KnowledgePage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Featured />
      <Resources />
      <Topics />
      <Cta />
      <Insights />
      <Stats />
      <Newsletter />
    </React.Fragment>
  );
};

export default KnowledgePage;
