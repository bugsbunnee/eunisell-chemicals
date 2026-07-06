import React, { useCallback, useMemo } from 'react';
import SubmitButton from '../../forms/SubmitButton';
import http from '../../../services/http';

import { z } from 'zod';
import { useAppForm } from '../../forms/app-form';

import { toast } from 'sonner';
import { getErrorMessage } from '../../../lib/utils';

const industries = ['Oil & Gas', 'Manufacturing', 'Construction', 'Marine', 'Agriculture', 'Pharmaceuticals', 'Other'];

const NewsletterForm: React.FC = () => {
  const form = useAppForm({
    defaultValues: { email: '', industry: '', interest: '' },
    onSubmit: async ({ value }) => {
      try {
        await http.post('/api/v1/subscriptions', value);

        toast.success('You are subscribed! Watch your inbox for technical updates.');
        form.reset();
      } catch (error) {
        toast.error('Failed to subscribe', { description: getErrorMessage(error) });
      }
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
    <div className="md:px-30 md:py-16 bg-white text-left">
      <section className="bg-accent relative overflow-hidden p-8 md:p-16">
        <div className="absolute right-0 top-0 h-full w-[35%] pointer-events-none select-none hidden md:block">
          <img src="/knowledge/abstract.svg" alt="Abstract" className="w-full h-full object-cover opacity-30" />
        </div>

        <div className="relative max-w-374 mx-auto">
          <div className="flex flex-col gap-6 md:grid md:items-center md:grid-cols-[1fr_2fr] md:gap-x-12">
            <div>
              <h2 className="font-bold text-white text-[24px] md:text-[36px] leading-8 md:leading-[1.2] mb-3 md:mb-4">Stay informed on technical advances</h2>

              <p className="text-popover-foreground text-sm md:text-[16px] leading-5 md:leading-[1.65]">
                Quarterly technical bulletins and industry analysis curated by our R&amp;D team.
              </p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4 md:gap-4.5">
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

              <div className="md:grid md:grid-cols-2 md:gap-4 hidden">
                <form.AppField
                  name="industry"
                  validators={{ onChange: z.string().min(1) }}
                  children={(field) => (
                    <select value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} className={`${inputClass} appearance-none`}>
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
              </div>

              {/* Mobile: single industry select */}
              <div className="md:hidden">
                <form.AppField
                  name="industry"
                  validators={{ onChange: z.string().min(1) }}
                  children={(field) => (
                    <select value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} className={`${inputClass} appearance-none`}>
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

              <form.AppForm>
                <SubmitButton
                  label="Subscribe"
                  loadingLabel="Subscribing…"
                  className="bg-secondary hover:bg-secondary/90 h-12 md:h-14 text-sm md:text-[15px] tracking-[1px] rounded-none"
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
