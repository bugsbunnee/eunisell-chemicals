import React from 'react';
import { FileTextIcon } from 'lucide-react';

const ArticleCtaBanner: React.FC = () => {
  return (
    <div className="w-full text-left mx-auto px-30 py-8">
      <div className="bg-accent px-12 py-12 flex items-center justify-between gap-8">
        <div>
          <h3 className="font-bold text-white text-[24px] leading-[1.3] mb-2.5">Ready to optimize your performance?</h3>

          <p className="text-white/55 text-[15px]">Download the full technical whitepaper or speak with an expert today.</p>
        </div>

        <div className="flex items-center gap-5.5 shrink-0">
          <button className="flex items-center gap-3 h-14 px-7 bg-white text-foreground font-bold text-[14px] hover:bg-white/90 transition-colors">
            <FileTextIcon size={16} className="text-foreground/70" />
            Download PDF
          </button>
          <button className="flex items-center h-14 px-7 bg-secondary text-white font-bold text-[14px] hover:bg-secondary/90 transition-colors">
            Request Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCtaBanner;
