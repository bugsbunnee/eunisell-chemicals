import React, { useCallback, useMemo } from 'react';
import { z } from 'zod';
import { useAppForm } from '../../forms/form-context';

const industries = ['Oil & Gas', 'Manufacturing', 'Construction', 'Marine', 'Agriculture', 'Pharmaceuticals', 'Other'];

const NewsletterForm: React.FC = () => {
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

  const inputClass = useMemo(() => {
    return 'w-full h-14 bg-white/5 border border-white/20 px-6 text-white placeholder:text-white/40 text-[15px] outline-none focus:border-secondary transition-colors';
  }, []);

  return (
    <div className="px-30 py-16 bg-white text-left">
      <section className="bg-accent relative overflow-hidden p-16">
        <div className="absolute right-0 top-0 h-full w-[35%] pointer-events-none select-none">
          <img src="/knowledge/abstract.svg" alt="Abstract" className="w-full h-full object-cover opacity-30" />
        </div>

        <div className="relative max-w-374 mx-auto">
          <div className="grid items-center grid-cols-[1fr_2fr] gap-x-12">
            <div>
              <h2 className="font-bold text-white text-[36px] leading-[1.2] mb-4">Stay informed on technical advances</h2>

              <p className="text-white/55 text-[16px] leading-[1.65]">
                Receive quarterly technical bulletins and industry analysis curated by Eunisell's R&amp;D team.
              </p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4.5">
              <div className="grid grid-cols-2 gap-4">
                <form.AppField
                  name="email"
                  validators={{ onChange: z.email() }}
                  children={(field) => (
                    <input
                      type="email"
                      placeholder="Professional Email"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className={inputClass}
                    />
                  )}
                />
                <form.AppField
                  name="industry"
                  validators={{ onChange: z.string().min(1) }}
                  children={(field) => (
                    <select
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled className="bg-accent text-white/40">
                        Select Industry
                      </option>

                      {industries.map((option) => (
                        <option key={option} value={option} className="bg-accent text-white">
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>

              <form.AppField
                name="interest"
                validators={{ onChange: z.string() }}
                children={(field) => (
                  <input
                    type="text"
                    placeholder="Interest (e.g. Corrosion)"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className={inputClass}
                  />
                )}
              />

              <form.AppForm>
                <form.Subscribe
                  selector={(s) => [s.canSubmit, s.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className="w-full h-14 bg-secondary text-white font-bold text-[15px] uppercase tracking-[1px] hover:bg-secondary/90 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? '...' : 'Subscribe to Technical Updates'}
                    </button>
                  )}
                />
              </form.AppForm>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterForm;
