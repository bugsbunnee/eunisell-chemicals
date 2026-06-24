import React from 'react';
import ArticleDetailPage from './ArticleDetailPage';

import { CheckIcon } from 'lucide-react';
import { MicroscopeIcon, ZapIcon, ShieldIcon, LeafIcon } from 'lucide-react';

import type { ArticleDetail } from '../lib/entities';

const blogArticle: ArticleDetail = {
  breadcrumb: { label: 'Blog', href: '/blog' },
  type: 'Technical Article',
  tags: ['Industrial Chemicals', 'Manufacturing'],
  title: 'Improving Industrial Performance Through Tailored Chemical Programmes',
  excerpt:
    'Exploring how precision-engineered chemical solutions drive efficiency, reduce downtime, and enhance product quality in complex manufacturing environments.',
  author: { name: 'Eunisell Technical Team', avatarSrc: '/knowledge/article.svg' },
  date: 'October 24, 2023',
  readTime: '5 min read',
  featuredImage: '/knowledge/article.svg',
  featuredCaption: {
    label: 'Case Study 042',
    quote: '"Precision at the molecular level leads to macro-scale efficiency."',
  },
  content: (
    <>
      <h2 className="font-bold text-foreground text-[32px] leading-[1.2] mb-6">The Evolution of Industrial Chemical Management</h2>

      <p className="text-muted-foreground text-[16px] leading-[1.75]">
        In the modern industrial landscape, chemical management has moved far beyond simple procurement. It has become a strategic lever for
        operational excellence. At Eunisell Chemicals, we recognize that every facility has a unique fingerprint—varying temperatures, pressures, and
        mechanical stresses that demand more than off-the-shelf solutions.
      </p>

      <h3 className="font-bold text-accent text-[22px] leading-[1.3] mt-11 mb-4">Optimizing Through Precision Chemistry</h3>

      <p className="text-muted-foreground text-[16px] leading-[1.75]">
        Our approach begins with deep technical diagnostics. By analyzing the specific friction points within a production line, we can engineer
        additives and process chemicals that not only solve immediate issues like scaling or corrosion but actively improve the thermodynamic
        efficiency of the entire system.
      </p>

      <blockquote className="mt-10 mb-10 border-l-4 border-secondary bg-[#f8fafc] pl-8 pr-8 py-[30px]">
        <p className="text-foreground text-[18px] leading-[1.7] italic">
          "The integration of IoT sensors with chemical dosing systems is no longer the future—it is the baseline for competitive manufacturing."
        </p>
        <cite className="block mt-4 text-secondary text-sm font-medium not-italic">— Dr. Marcus Chen, Chief Technical Officer</cite>
      </blockquote>

      <h3 className="font-bold text-secondary text-[22px] leading-[1.3] mt-11 mb-5">Key Operational Benefits</h3>

      <ul className="flex flex-col gap-4">
        {[
          { label: 'Extended Asset Life:', text: 'Reducing oxidative stress on machinery through superior lubrication and coating chemistry.' },
          { label: 'Energy Conservation:', text: 'Lowering surface tension in heat exchangers to maximize thermal transfer.' },
          { label: 'Compliance Assurance:', text: 'Formulations designed to exceed environmental regulations without sacrificing potency.' },
        ].map(({ label, text }) => (
          <li key={label} className="flex items-start gap-3">
            <CheckIcon size={14} className="text-secondary mt-[5px] shrink-0" />
            <span className="text-muted-foreground text-[16px] leading-[1.75]">
              <strong className="text-foreground font-bold">{label}</strong> {text}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 mb-10 h-104.5 overflow-hidden">
        <img src="/solutions/lab.svg" alt="Chemical laboratory analysis" className="w-full h-full object-cover" />
      </div>

      <h3 className="font-bold text-secondary text-[22px] leading-[1.3] mb-4">Future-Proofing Your Operations</h3>

      <p className="text-muted-foreground text-[16px] leading-[1.75]">
        Sustainability is the new cornerstone of industrial chemical performance. Tailored programmes now include biodegradable options and
        closed-loop systems that minimize waste stream impact while maintaining the high performance required for heavy industry.
      </p>
    </>
  ),
  resourceDetails: {
    type: 'Technical Paper',
    sector: 'Industrial & Manufacturing',
    subject: 'Chemical Engineering',
  },
  relatedSolution: {
    title: 'Industrial & Manufacturing Chemicals',
    description: 'Comprehensive chemical solutions designed for high-intensity industrial applications.',
    href: '#',
  },
  takeawaysTitle: 'Technical Summary & Key Takeaways',
  takeaways: [
    {
      Icon: MicroscopeIcon,
      title: 'Precision Dosing',
      body: 'Reduces chemical waste by up to 22% through automated injection algorithms.',
    },
    {
      Icon: ZapIcon,
      title: 'Heat Efficiency',
      body: 'Specialized surfactants improve thermal transfer rates in cooling towers.',
    },
    {
      Icon: ShieldIcon,
      title: 'Asset Protection',
      body: 'Inhibitors neutralize acidic precursors before they reach critical metal surfaces.',
    },
    {
      Icon: LeafIcon,
      title: 'Sustainability',
      body: 'Transitioning to low-VOC alternatives without impacting performance benchmarks.',
    },
  ],
  relatedResources: [
    {
      category: 'Bulletin',
      title: 'The Impact of High-Temp Scale Inhibitors on Boiler Longevity',
      body: 'A detailed look at thermal stability in chemical inhibitors during extreme operations.',
    },
    {
      category: 'Whitepaper',
      title: 'Reducing Carbon Footprint in Industrial Manufacturing',
      body: 'Strategies for chemical procurement that align with global ESG standards.',
    },
    {
      category: 'Case Study',
      title: 'Case Study: 15% Energy Savings in Cooling Towers',
      body: 'How a major manufacturing plant overhauled their water treatment programme.',
    },
  ],
};

const BlogDetailPage: React.FC = () => {
  return <ArticleDetailPage article={blogArticle} />;
};

export default BlogDetailPage;
