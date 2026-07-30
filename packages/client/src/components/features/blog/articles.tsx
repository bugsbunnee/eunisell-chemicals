import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, RefreshCwIcon } from 'lucide-react';
import { paths } from '../../../lib/data';

const img1 = '/water-solutions/cooling.svg';
const img2 = '/oilfield-chemicals/reservoir.svg';
const img3 = '/industrial-manufacturing/overview.svg';
const img4 = '/technical-services/field-excellence.svg';
const img5 = '/solutions/supply.svg';
const img6 = '/about/hero.svg';

const articles = [
  {
    image: img1,
    category: 'Technical Article',
    categoryColor: 'text-secondary',
    subcategory: 'Industrial',
    title: 'Optimizing Water Treatment in Centralized Cooling Systems',
    description: 'Discover how modern chemical filtration and treatment protocols are extending the life of industrial cooling infrastructure across the sub-region.',
    date: 'May 5, 2024',
    meta: '6 min read • May 5, 2024',
  },
  {
    image: img2,
    category: 'Industry Insights',
    categoryColor: 'text-[#00558e]',
    subcategory: 'Oilfield',
    title: 'The Future of EOR: Chemical Innovations in Mature Fields',
    description: 'Enhanced Oil Recovery (EOR) techniques are evolving. We look at the polymers and surfactants driving production efficiency in West African fields.',
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
          {articles.map(({ image, category, categoryColor, subcategory, title, description, date }) => (
            <div key={title} className="flex flex-col">
              <div className="h-55 md:h-65 overflow-hidden mb-5 md:mb-7 rounded-sm">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center gap-2 md:gap-3 mb-3">
                <span className={`font-bold text-[11px] uppercase tracking-[1.1px] md:tracking-[0.55px] ${categoryColor}`}>{category}</span>
                <span className="text-[#afb1b3] text-[11px]">•</span>
                <span className="font-bold text-[#afb1b3] text-[11px] uppercase tracking-[1.1px] md:tracking-[0.55px]">{subcategory}</span>
              </div>

              <h3 className="font-bold text-accent text-[20px] leading-6.25 md:leading-[27.5px] mb-3 md:mb-5">{title}</h3>

              <p className="text-[#777] text-sm leading-[22.75px] mb-4 md:mb-5 flex-1 line-clamp-3">{description}</p>

              <div className="border-t border-[#f0f0f0] pt-4 md:pt-5 flex items-center justify-between">
                <span className="text-[#afb1b3] text-[12px] uppercase">{date}</span>
                <Link to={paths.blog} className="font-bold text-secondary text-[12px] uppercase tracking-[1.2px] flex items-center gap-1.5">
                  Read More
                  <ArrowRightIcon size={8} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex md:hidden">
          <button className="w-full border border-[#e8e8e8] bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-16 flex items-center justify-center gap-3 font-bold text-accent text-[15px] uppercase tracking-[1.5px] hover:bg-card transition-all hover:scale-105">
            Load More Articles
            <RefreshCwIcon size={14} className="text-secondary" />
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-12 h-12 border border-[#e8e8e8] flex items-center justify-center hover:bg-card transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
          >
            <ArrowLeftIcon size={10} className="text-accent" />
          </button>

          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-12 h-12 flex items-center justify-center font-bold text-[16px] leading-6 transition-all hover:scale-105 ${
                page === num ? 'bg-secondary text-white' : 'border border-[#e8e8e8] text-accent hover:bg-card'
              }`}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
            disabled={page === TOTAL_PAGES}
            className="w-12 h-12 border border-[#e8e8e8] flex items-center justify-center hover:bg-card transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
          >
            <ArrowRightIcon size={10} className="text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
