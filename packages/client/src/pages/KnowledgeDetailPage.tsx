import React from 'react';
import NavBar from '../components/layout/navbar';
import Footer from '../components/common/footer';
import ArticleHero from '../components/features/knowledge/detail/hero';
import ArticleFeaturedImage from '../components/features/knowledge/detail/featured-image';
import ArticleBody from '../components/features/knowledge/detail/body';
import ArticleTakeaways from '../components/features/knowledge/detail/takeaways';
import ArticleCtaBanner from '../components/features/knowledge/detail/cta-banner';
import ArticleSolutions from '../components/features/knowledge/detail/solutions';
import ArticleResources from '../components/features/knowledge/detail/resources';
import ArticleStayInformed from '../components/features/knowledge/detail/stay-informed';
import ArticleOptimizeCta from '../components/features/knowledge/detail/optimize-cta';

const KnowledgeDetailPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ArticleHero />
      <ArticleFeaturedImage />
      <ArticleBody />
      <ArticleTakeaways />
      <ArticleCtaBanner />
      <ArticleSolutions />
      <ArticleResources />
      <ArticleStayInformed />
      <ArticleOptimizeCta />
      <Footer />
    </React.Fragment>
  );
};

export default KnowledgeDetailPage;
