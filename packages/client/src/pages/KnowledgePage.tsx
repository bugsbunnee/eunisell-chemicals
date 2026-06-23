import React from 'react';
import NavBar from '../components/layout/navbar';
import Hero from '../components/features/knowledge/hero';
import Featured from '../components/features/knowledge/featured';
import Resources from '../components/features/knowledge/resources';
import Insights from '../components/features/knowledge/insights';
import Topics from '../components/features/knowledge/topics';
import Cta from '../components/features/knowledge/cta';
import Footer from '../components/common/footer';
import NewsletterForm from '../components/features/contact/newsletter-form';

const KnowledgePage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Featured />
      <Resources />
      <Insights />
      <Topics />
      <NewsletterForm />
      <Cta />
      <Footer />
    </React.Fragment>
  );
};

export default KnowledgePage;
