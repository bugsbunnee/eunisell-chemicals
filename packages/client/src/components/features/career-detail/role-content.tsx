import React from 'react';
import { ZapIcon } from 'lucide-react';

interface Responsibility {
  title: string;
  description: string;
}

interface WhyPoint {
  text: string;
}

interface RoleContentProps {
  aboutText: string[];
  responsibilities: Responsibility[];
  whyPoints: WhyPoint[];
}

const RoleContent: React.FC<RoleContentProps> = ({ aboutText, responsibilities, whyPoints }) => (
  <section className="py-24 px-30 text-left">
    <div className="max-w-[1680px] grid grid-cols-[2fr_1fr] gap-16">
      <div className="flex flex-col gap-20">
        <div>
          <h2 className="font-bold text-accent text-[30px] leading-9 mb-6">About the Role</h2>
          <div className="flex flex-col gap-6">
            {aboutText.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground text-[18px] leading-7.25">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-accent text-[30px] leading-9 mb-8">What You Will Do</h2>
          <div className="flex flex-col gap-6">
            {responsibilities.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M1.5 5L3.5 7.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-accent text-[18px] leading-7">{item.title}</h4>
                  <p className="text-muted-foreground text-[16px] leading-6">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="bg-accent rounded-[10px] p-10 flex flex-col gap-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
            <ZapIcon size={18} className="text-white fill-white" />
          </div>

          <div className="pt-4">
            <h3 className="font-bold text-white text-[24px] leading-8">Why this role matters</h3>
          </div>

          <p className="text-white/70 text-[16px] leading-6.5">
            This position is critical to Eunisell's mission of ensuring operational efficiency for Africa's industrial giants. You will be the face of
            our technical excellence on the field.
          </p>

          <div className="flex flex-col gap-4 pt-4">
            {whyPoints.map((point) => (
              <div key={point.text} className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                <span className="font-medium text-white text-[14px] leading-[20px]">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RoleContent;
