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
import type { ArticleDetail } from '../lib/entities';

interface ArticleDetailPageProps {
  article: ArticleDetail;
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ article }) => {
  return (
    <React.Fragment>
      <NavBar />
      <ArticleHero
        breadcrumb={article.breadcrumb}
        type={article.type}
        tags={article.tags}
        title={article.title}
        excerpt={article.excerpt}
        author={article.author}
        date={article.date}
        readTime={article.readTime}
      />
      <ArticleFeaturedImage featuredImage={article.featuredImage} featuredCaption={article.featuredCaption} />
      <ArticleBody content={article.content} resourceDetails={article.resourceDetails} relatedSolution={article.relatedSolution} />
      <ArticleTakeaways takeaways={article.takeaways} takeawaysTitle={article.takeawaysTitle} />
      <ArticleCtaBanner />
      <ArticleSolutions />
      <ArticleResources relatedResources={article.relatedResources} />
      <ArticleStayInformed />
      <ArticleOptimizeCta />
      <Footer />
    </React.Fragment>
  );
};

export default ArticleDetailPage;
