import React from 'react';
import { MailIcon } from 'lucide-react';

const ArticleStayInformed: React.FC = () => {
  return (
    <section className="py-20 text-center">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Mail badge */}
        <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center mx-auto mb-4">
          <MailIcon size={22} className="text-white" />
        </div>

        <h2 className="font-bold text-foreground text-[40px] leading-[1.2] mb-4">Stay Informed</h2>

        <p className="text-muted-foreground text-[17px] leading-[1.6] mb-10">
          Subscribe to receive our latest technical bulletins, whitepapers, and industry updates.
        </p>

        <div className="flex items-center justify-center gap-3 mb-[18px]">
          <input
            type="email"
            placeholder="Professional Email Address"
            className="h-14 w-[433px] border border-border px-5 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-secondary"
          />
          <button className="h-14 px-8 bg-accent text-white font-bold text-[13px] uppercase tracking-[1.2px] hover:bg-primary transition-colors">
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
