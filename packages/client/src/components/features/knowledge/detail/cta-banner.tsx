import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileTextIcon } from 'lucide-react';
import { paths } from '../../../../lib/data';

const ArticleCtaBanner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full text-left mx-auto px-5 py-8 md:px-30">
      <div className="bg-accent px-8 py-8 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
        <div>
          <h3 className="font-bold text-white text-[22px] md:text-[24px] leading-[1.3] mb-2.5 text-center md:text-left">Download Whitepaper</h3>
          <p className="text-white/55 text-sm md:text-[15px] text-center md:text-left">
            Get the full technical analysis and data benchmarks in PDF format.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-5.5 md:shrink-0">
          <button
            onClick={() => navigate(paths.brochures)}
            className="flex items-center justify-center gap-3 h-12 md:h-14 px-7 bg-white text-foreground font-bold text-sm md:text-[16px] hover:bg-white/90 transition-colors"
          >
            <FileTextIcon size={16} className="text-foreground/70" />
            Download PDF
          </button>
          <button
            onClick={() => navigate(paths.contact)}
            className="flex items-center justify-center h-12 md:h-14 px-7 bg-secondary text-white font-bold text-sm md:text-[16px] hover:bg-secondary/90 transition-colors"
          >
            Consult an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCtaBanner;
