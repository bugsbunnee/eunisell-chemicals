import React from 'react';
import NavBar from '../components/layout/navbar';
import BlogHero from '../components/features/blog/hero';
import BlogCategories from '../components/features/blog/categories';
import BlogFeatured from '../components/features/blog/featured';
import BlogFilterBar from '../components/features/blog/filter-bar';
import BlogArticles from '../components/features/blog/articles';
import BlogTopics from '../components/features/blog/topics';
import BlogNewsletter from '../components/features/blog/newsletter';
import BlogMoreResources from '../components/features/blog/more-resources';
import BlogCta from '../components/features/blog/cta';
import Footer from '../components/common/footer';

const BlogPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BlogHero />
      <BlogCategories />
      <BlogFeatured />
      <BlogFilterBar />
      <BlogArticles />
      <BlogTopics />
      <BlogNewsletter />
      <BlogMoreResources />
      <BlogCta />
      <Footer />
    </React.Fragment>
  );
};

export default BlogPage;
