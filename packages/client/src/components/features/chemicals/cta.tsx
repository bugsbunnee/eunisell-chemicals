import React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

const molecularBg = 'https://www.figma.com/api/mcp/asset/0f95421d-b101-46d8-9f50-959175a1a215';

const ChemicalsCta: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-accent py-30 overflow-hidden">
      <div className="absolute top-0 bottom-0 left-[66.67%] right-0 opacity-10 overflow-hidden">
        <img alt="" src={molecularBg} className="absolute top-0 h-full max-w-none" style={{ left: '-8.23%', width: '116.46%' }} />
      </div>

      <div className="relative max-w-360 mx-auto px-8 flex flex-col items-center text-center">
        <h2 className="font-bold text-white text-[48px] leading-15 max-w-225">
          Need Help Selecting the Right
          <br />
          Chemical Solution?
        </h2>

        <p className="text-white/60 text-[20px] leading-7.5 max-w-175 mt-6 mb-12">
          Our technical experts are ready to analyze your operational needs and provide data-driven chemical recommendations.
        </p>

        <button
          onClick={() => navigate(paths.contact)}
          className="bg-secondary text-white font-bold text-[18px] leading-[27px] px-12 py-5 rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-secondary/90 transition-colors"
        >
          Request Product Consultation
        </button>
      </div>
    </section>
  );
};

export default ChemicalsCta;
