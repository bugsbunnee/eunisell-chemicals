import React from 'react';
import { MailIcon } from 'lucide-react';

const ArticleStayInformed: React.FC = () => {
  return (
    <section className="py-15 md:py-20 text-center">
      <div className="max-w-[900px] mx-auto px-5 md:px-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-sm flex items-center justify-center mx-auto mb-4">
          <MailIcon size={20} className="text-white md:hidden" />
          <MailIcon size={22} className="text-white hidden md:block" />
        </div>

        <h2 className="font-bold text-foreground text-[28px] md:text-[40px] leading-[1.2] mb-3 md:mb-4">Stay Informed</h2>

        <p className="text-muted-foreground text-[15px] md:text-[17px] leading-[1.6] mb-8 md:mb-10">
          Subscribe for technical bulletins and industry updates.
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 mb-4 md:mb-[18px]">
          <input
            type="email"
            placeholder="Professional Email"
            className="h-13 md:h-14 w-full md:w-[433px] border border-border px-4 md:px-5 text-[16px] md:text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-secondary"
          />
          <button className="h-13 md:h-14 px-8 bg-accent text-white font-bold text-sm uppercase tracking-[1.2px] hover:bg-primary transition-colors">
            Subscribe
          </button>
        </div>

        <p className="text-muted-foreground/70 text-[12px]">
          By subscribing, you agree to our Privacy Policy and to receive marketing communications.
        </p>
      </div>
    </section>
  );
};

export default ArticleStayInformed;
