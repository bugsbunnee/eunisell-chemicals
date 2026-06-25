import React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../../lib/data';

const ArticleOptimizeCta: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-accent py-16 md:py-[100px] text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #0083ce 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <h2 className="font-bold text-white text-[32px] leading-12 md:text-[52px] md:leading-[1.15] mb-4 md:mb-6">
          Optimize Your
          <br className="md:hidden" /> Operations
        </h2>
        <p className="text-white/55 text-[16px] md:text-[17px] leading-6 md:leading-[1.65] max-w-[742px] mx-auto mb-8 md:mb-12">
          Partner with Eunisell for advanced chemical engineering.
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-6">
          <button
            onClick={() => navigate(paths.contact)}
            className="h-14 md:h-16 px-10 md:px-12 bg-secondary text-white font-bold text-[16px] uppercase tracking-[0.4px] md:tracking-[1.3px] hover:bg-secondary/90 transition-colors"
          >
            Request Site Audit
          </button>
          <button
            onClick={() => navigate(paths.contact)}
            className="h-14 md:h-16 px-10 md:px-12 border-2 border-white text-white font-bold text-[16px] uppercase tracking-[0.4px] md:tracking-[1.3px] hover:bg-white/10 transition-colors"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleOptimizeCta;
