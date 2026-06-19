import React from 'react';
import { Button } from '../../ui/button';
import { ArrowRightIcon, MailIcon } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/technical.svg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-accent/80" />
      </div>

      <div className="relative z-10 py-28 px-20">
        <div className="grid grid-cols-2 gap-x-24 items-center">
          <div className="text-left">
            <div className="text-[10px] font-bold uppercase text-secondary tracking-[2px] mb-5">Newsletter</div>
            <h2 className="text-[48px] font-bold text-primary-foreground leading-tight max-w-lg">Stay Ahead with Expert Chemical Insights</h2>
            <p className="mt-6 text-primary-foreground/60 text-lg leading-relaxed max-w-md">
              Join over 2,400 industry professionals receiving our monthly technical bulletin — packed with field data, product updates, and
              operational best practices.
            </p>

            <div className="mt-12 flex items-center gap-x-10">
              {[
                { value: '2,400+', label: 'Subscribers' },
                { value: 'Monthly', label: 'Publication' },
                { value: '100%', label: 'Technical Focus' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-black text-secondary">{item.value}</div>
                  <div className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background/5 border border-background/10 rounded-sm p-10 text-left">
            <div className="flex items-center gap-x-3 mb-8">
              <div className="w-10 h-10 rounded-sm bg-secondary/20 flex items-center justify-center">
                <MailIcon size={18} className="text-secondary" />
              </div>
              <div>
                <div className="text-primary-foreground font-bold text-base">Monthly Technical Bulletin</div>
                <div className="text-primary-foreground/40 text-xs">Unsubscribe anytime</div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wider block mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Dr. Jane Okafor"
                  className="w-full h-12 px-4 bg-background/10 border border-background/20 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xs text-sm focus:outline-none focus:border-secondary"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wider block mb-2">Work Email</label>
                <input
                  type="email"
                  placeholder="jane.okafor@company.com"
                  className="w-full h-12 px-4 bg-background/10 border border-background/20 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xs text-sm focus:outline-none focus:border-secondary"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wider block mb-2">Industry Sector</label>
                <select className="w-full h-12 px-4 bg-background/10 border border-background/20 text-primary-foreground/70 rounded-xs text-sm focus:outline-none focus:border-secondary">
                  <option value="">Select your sector</option>
                  <option value="oilfield">Oil & Gas</option>
                  <option value="industrial">Industrial Manufacturing</option>
                  <option value="water">Water Treatment</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <Button className="w-full rounded-xs bg-secondary font-bold text-base h-13 flex items-center justify-center gap-x-2">
              Subscribe Now <ArrowRightIcon size={16} />
            </Button>

            <p className="text-[10px] text-primary-foreground/30 mt-4 text-center">
              By subscribing you agree to receive our monthly technical bulletin. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
