import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/qhse/hero';
import Summary from '../components/features/qhse/summary';
import Commitment from '../components/features/qhse/commitment';
import Framework from '../components/features/qhse/framework';
import Assessments from '../components/features/qhse/assessments';
import Responsibility from '../components/features/qhse/responsibility';
import EmergencyResponse from '../components/features/qhse/emergency-response';
import Monitoring from '../components/features/qhse/monitoring';
import Safety from '../components/features/qhse/safety';
import Pillars from '../components/features/qhse/pillars';
import Value from '../components/features/qhse/value';
import KnowledgeCenter from '../components/features/about/knowledge-center';
import CTA from '../components/features/qhse/cta';
import Footer from '../components/common/footer';

const QHSEPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Summary />
      <Commitment />
      <Framework />
      <Assessments />
      <Responsibility />
      <EmergencyResponse />
      <Monitoring />
      <Safety />
      <Pillars />
      <Value />
      <KnowledgeCenter />
      <CTA />
      <Footer />
    </React.Fragment>
  );
};

export default QHSEPage;
