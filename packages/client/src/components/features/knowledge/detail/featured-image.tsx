import React from 'react';

const ArticleFeaturedImage: React.FC = () => {
  return (
    <div className="mx-auto px-30 w-full text-left mt-6">
      <div className="relative h-150 overflow-hidden rounded-[4px]">
        <img src="/knowledge/article.svg" alt="Modern chemical manufacturing facility" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-10 left-10 border-l-4 border-secondary pl-6">
          <p className="text-white/70 text-[12px] font-bold uppercase tracking-[2px] mb-1">Case Study 042</p>
          <p className="text-white text-[17px] italic leading-snug max-w-[680px]">
            "Precision at the molecular level leads to macro-scale efficiency."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleFeaturedImage;
