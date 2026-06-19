import React from 'react';

import NavBar from '../components/layout/navbar';
import Footer from '../components/common/footer';
import Hero from '../components/features/csr/hero';
import CreatingValue from '../components/features/csr/creating-value';
import AbiaWarriors from '../components/features/csr/abia-warriors';
import ValuesCultivate from '../components/features/csr/values-cultivate';
import ValuesAlignment from '../components/features/csr/values-alignment';
import Nurturing from '../components/features/csr/nurturing';
import BroadSocial from '../components/features/csr/broad-social';
import CsrVision from '../components/features/csr/csr-vision';
import ImpactGallery from '../components/features/csr/impact-gallery';
import Explore from '../components/features/csr/explore';
import CTA from '../components/features/csr/cta';

const CsrPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <CreatingValue />
      <AbiaWarriors />
      <ValuesCultivate />
      <ValuesAlignment />
      <Nurturing />
      <BroadSocial />
      <CsrVision />
      <ImpactGallery />
      <Explore />
      <CTA />
      <Footer />
    </React.Fragment>
  );
};

export default CsrPage;
