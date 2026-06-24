import React, { useCallback } from 'react';
import { CheckIcon } from 'lucide-react';
import { z } from 'zod';
import { useAppForm } from '../../forms/form-context';

const industries = ['Oil & Gas', 'Manufacturing', 'Construction', 'Marine', 'Agriculture', 'Pharmaceuticals', 'Other'];
const interests = ['Technical Articles', 'Industry Insights', 'Company Updates', 'Product Bulletins'];
const bullets = ['Monthly Technical Digest', 'New Product Bulletins'];

const BlogNewsletter: React.FC = () => {
  const form = useAppForm({
    defaultValues: { email: '', industry: '', interest: '' },
    onSubmit: ({ value }) => {
      console.log('Newsletter submitted:', value);
    },
  });

  const onSubmit = useCallback(
    (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      form.handleSubmit();
    },
    [form]
  );

  return (
    <section className="bg-white py-20 px-30 text-left">
      <div className="bg-accent flex gap-20 items-center p-20">
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="font-bold text-white text-[40px] leading-12.5">Stay Ahead with Industrial Intelligence</h2>
          <p className="text-white/70 text-[18px] leading-6.75">
            Get the latest technical reports, industry updates, and expert insights delivered to your inbox.
          </p>
          <div className="flex flex-col gap-4 pt-3">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-3">
                <CheckIcon size={14} className="text-secondary shrink-0" />
                <span className="text-white/80 text-[16px] leading-6">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white/5 border border-white/10 px-10 py-10">
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-white text-[12px] uppercase tracking-[0.6px]">Email Address</label>
              <form.AppField
                name="email"
                validators={{ onChange: z.email() }}
                children={(field) => (
                  <input
                    type="email"
                    placeholder="email@company.com"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full border-b border-white/30 bg-transparent py-3.5 text-white placeholder:text-[#9ca3af] text-[16px] outline-none"
                  />
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-white text-[12px] uppercase tracking-[0.6px]">Industry</label>
                <form.AppField
                  name="industry"
                  validators={{ onChange: z.string().min(1) }}
                  children={(field) => (
                    <select
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="border-b border-white/30 bg-transparent py-3 text-white/50 text-[16px] outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-accent">
                        Oil &amp; Gas
                      </option>
                      {industries.map((opt) => (
                        <option key={opt} value={opt} className="bg-accent text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-white text-[12px] uppercase tracking-[0.6px]">Interest</label>
                <form.AppField
                  name="interest"
                  validators={{ onChange: z.string() }}
                  children={(field) => (
                    <select
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="border-b border-white/30 bg-transparent py-3 text-white/50 text-[16px] outline-none appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-accent">
                        Technical Articles
                      </option>
                      {interests.map((opt) => (
                        <option key={opt} value={opt} className="bg-accent text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>

            <div className="pt-3">
              <form.AppForm>
                <form.Subscribe
                  selector={(s) => [s.canSubmit, s.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className="w-full bg-secondary text-white font-bold text-[16px] py-4 hover:bg-secondary/90 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? '...' : 'Subscribe to Updates'}
                    </button>
                  )}
                />
              </form.AppForm>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
