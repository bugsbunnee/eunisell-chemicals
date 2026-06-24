import React from 'react';
import type { ArticleDetail } from '../../../../lib/entities';

type ArticleFeaturedImageProps = Pick<ArticleDetail, 'featuredImage' | 'featuredCaption'>;

const ArticleFeaturedImage: React.FC<ArticleFeaturedImageProps> = ({ featuredImage, featuredCaption }) => {
  return (
    <div className="mx-auto w-full text-left md:px-30 md:mt-6">
      <div className="relative h-[300px] md:h-150 overflow-hidden md:rounded-[4px]">
        <img src={featuredImage} alt="Article featured image" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        {featuredCaption && (
          <div className="absolute bottom-6 left-5 right-5 md:bottom-10 md:left-10 border-l-4 border-secondary pl-4 md:pl-6">
            <p className="text-white/70 text-[10px] md:text-[12px] font-bold uppercase tracking-[2px] mb-1">{featuredCaption.label}</p>
            <p className="text-white text-[15px] md:text-[17px] italic leading-snug md:max-w-[680px]">{featuredCaption.quote}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleFeaturedImage;
