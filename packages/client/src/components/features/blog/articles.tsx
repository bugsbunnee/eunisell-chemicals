import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, RefreshCwIcon } from 'lucide-react';

const img1 = 'https://www.figma.com/api/mcp/asset/08c4f6bf-5249-4020-b9e1-f7a3231e68de';
const img2 = 'https://www.figma.com/api/mcp/asset/5523c26b-d50f-4413-a605-dd308a5da4fb';
const img3 = 'https://www.figma.com/api/mcp/asset/b439ab0a-8e48-442c-8700-928f391dd6e3';
const img4 = 'https://www.figma.com/api/mcp/asset/c6711c7d-4a02-4ed7-b527-0f70cf898ace';
const img5 = 'https://www.figma.com/api/mcp/asset/8e6e0794-9fd2-4d16-9779-29b1864c4aa2';
const img6 = 'https://www.figma.com/api/mcp/asset/e5de676c-31e5-479d-92b3-d114e4106b3b';

const articles = [
  {
    image: img1,
    category: 'Technical Article',
    categoryColor: 'text-secondary',
    subcategory: 'Industrial',
    title: 'Optimizing Water Treatment in Centralized Cooling Systems',
    description:
      'Discover how modern chemical filtration and treatment protocols are extending the life of industrial cooling infrastructure across the sub-region.',
    date: 'May 5, 2024',
    meta: '6 min read • May 5, 2024',
  },
  {
    image: img2,
    category: 'Industry Insights',
    categoryColor: 'text-[#00558e]',
    subcategory: 'Oilfield',
    title: 'The Future of EOR: Chemical Innovations in Mature Fields',
    description:
      'Enhanced Oil Recovery (EOR) techniques are evolving. We look at the polymers and surfactants driving production efficiency in West African fields.',
    date: 'Apr 28, 2024',
    meta: '10 min read • Apr 28, 2024',
  },
  {
    image: img3,
    category: 'Company Updates',
    categoryColor: 'text-[#afb1b3]',
    subcategory: 'Logistics',
    title: 'Eunisell Expands Distribution Hub in Port Harcourt',
    description: 'Our new state-of-the-art storage and mixing facility is now fully operational, increasing our capacity to serve the energy sector.',
    date: 'Apr 20, 2024',
    meta: '4 min read • Apr 20, 2024',
  },
  {
    image: img4,
    category: 'Technical Article',
    categoryColor: 'text-secondary',
    subcategory: 'Integrity',
    title: 'Corrosion Control in High-H2S Environments',
    description: 'Detailed analysis of inhibitor performance under extreme sour gas conditions and long-term asset protection strategies.',
    date: 'Apr 15, 2024',
    meta: '12 min read • Apr 15, 2024',
  },
  {
    image: img5,
    category: 'Industry Insights',
    categoryColor: 'text-[#00558e]',
    subcategory: 'Digitalization',
    title: 'Digital Transformation in Chemical Supply Chains',
    description: 'How real-time data and IoT are revolutionizing chemical inventory management and demand forecasting for energy leaders.',
    date: 'Apr 08, 2024',
    meta: '7 min read • Apr 08, 2024',
  },
  {
    image: img6,
    category: 'Company Updates',
    categoryColor: 'text-[#afb1b3]',
    subcategory: 'Leadership',
    title: 'Highlights from the 2024 Industrial Leadership Summit',
    description: "Key takeaways from Eunisell's participation in the annual forum on sustainable chemical engineering practices.",
    date: 'Apr 02, 2024',
    meta: '5 min read • Apr 02, 2024',
  },
];

const TOTAL_PAGES = 3;

const BlogArticles: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <section id="articles" className="bg-white py-12 px-6 md:py-16 md:px-30 text-left">
      <div className="flex flex-col gap-12 md:gap-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {articles.map(({ image, category, categoryColor, subcategory, title, description, date, meta }) => (
            <div key={title} className="flex flex-col">
              <div className="h-[220px] md:h-65 overflow-hidden mb-5 md:mb-7 rounded-sm">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center gap-2 md:gap-3 mb-3">
                <span className={`font-bold text-[11px] uppercase tracking-[1.1px] md:tracking-[0.55px] ${categoryColor}`}>{category}</span>
                <span className="text-[#afb1b3] text-[11px]">•</span>
                <span className="font-bold text-[#afb1b3] text-[11px] uppercase tracking-[1.1px] md:tracking-[0.55px]">{subcategory}</span>
              </div>

              <h3 className="font-bold text-accent text-[20px] leading-[25px] md:leading-[27.5px] mb-3 md:mb-5">{title}</h3>

              <p className="text-[#777] text-sm leading-[22.75px] mb-4 md:mb-5 flex-1 line-clamp-3">{description}</p>

              <div className="border-t border-[#f0f0f0] pt-4 md:pt-5 flex items-center justify-between">
                <span className="text-[#afb1b3] text-[12px] uppercase">{date}</span>
                <a href="#" className="font-bold text-secondary text-[12px] uppercase tracking-[1.2px] flex items-center gap-1.5">
                  Read More
                  <ArrowRightIcon size={8} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Load More button */}
        <div className="flex md:hidden">
          <button className="w-full border border-[#e8e8e8] bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[64px] flex items-center justify-center gap-3 font-bold text-accent text-[15px] uppercase tracking-[1.5px] hover:bg-card transition-colors">
            Load More Articles
            <RefreshCwIcon size={14} className="text-secondary" />
          </button>
        </div>

        {/* Desktop: pagination */}
        <div className="hidden md:flex items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-12 h-12 border border-[#e8e8e8] flex items-center justify-center hover:bg-card transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeftIcon size={10} className="text-accent" />
          </button>
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-12 h-12 flex items-center justify-center font-bold text-[16px] leading-6 transition-colors ${
                page === num ? 'bg-secondary text-white' : 'border border-[#e8e8e8] text-accent hover:bg-card'
              }`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
            disabled={page === TOTAL_PAGES}
            className="w-12 h-12 border border-[#e8e8e8] flex items-center justify-center hover:bg-card transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRightIcon size={10} className="text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
