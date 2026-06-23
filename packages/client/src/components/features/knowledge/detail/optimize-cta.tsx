import React from 'react';

const ArticleOptimizeCta: React.FC = () => {
  return (
    <section className="bg-accent py-[100px] text-center relative overflow-hidden">
      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <h2 className="font-bold text-white text-[52px] leading-[1.15] mb-6">Optimize Your Operations Today</h2>
        <p className="text-white/55 text-[17px] leading-[1.65] max-w-[742px] mx-auto mb-12">
          Partner with Eunisell Chemicals for advanced technical support and precision-engineered chemical programmes.
        </p>
        <div className="flex items-center justify-center gap-6">
          <button className="h-16 px-12 bg-secondary text-white font-bold text-[13px] uppercase tracking-[1.3px] hover:bg-secondary/90 transition-colors">
            Request a Site Audit
          </button>
          <button className="h-16 px-12 border-2 border-white/50 text-white font-bold text-[13px] uppercase tracking-[1.3px] hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleOptimizeCta;
