import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const molecularImg = 'https://www.figma.com/api/mcp/asset/7f4c2cd9-d22a-494f-831d-3df8aa3d4eb9';

const BlogCta: React.FC = () => {
  return (
    <section className="bg-accent relative overflow-hidden py-20 px-30 text-left">
      <div className="absolute inset-0 opacity-10">
        <img src={molecularImg} alt="" className="absolute w-full h-[480%] top-[-190%] object-cover" />
      </div>

      <div className="relative flex flex-col gap-6 items-center">
        <h2 className="font-bold text-white text-[48px] leading-[60px] text-center max-w-[1068px]">Need Technical Guidance for Your Operation?</h2>

        <p className="text-white/70 text-[18px] leading-[27px] text-center max-w-[700px]">
          Our specialists are ready to help you optimize performance with tailored chemical solutions. Reach out for a consultation today.
        </p>

        <div className="flex items-center gap-4 pt-2">
          <Link to={paths.contact} className="bg-secondary text-white font-bold text-[16px] px-10 py-[19px] hover:bg-secondary/90 transition-colors">
            Speak to a Specialist
          </Link>
          <Link
            to={paths.contact}
            className="bg-white/10 border border-white/20 text-white font-bold text-[16px] px-10 py-[18px] hover:bg-white/15 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCta;
